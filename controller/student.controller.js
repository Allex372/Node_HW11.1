const { studentService } = require('../service');
const { errorMessages } = require('../error');
const { transactionInstance } = require('../dataBase/MySQL').getInstance();

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const students = await studentService.findAll();

            res.json(students);
        } catch (e) {
            next(e);
        }
    },

    createStudent: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            await studentService.createStudent(req.body, transaction);

            throw new Error('Error');

            await studentService.updateStudent(13, { name: 'Oleksandr' }, transaction);

            await transaction.commit();
            res.json(errorMessages.USER_IS_CREATED);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    }
};
