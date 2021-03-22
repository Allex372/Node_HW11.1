const { userService, emailService } = require('../service');
const { passwordsHasher, filePathBuider } = require('../helper');
const { errorMessages } = require('../error');
const { transactionInstance } = require('../dataBase/MySQL').getInstance();

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const allUsers = await userService.findAll(req.query);

            res.json(allUsers);
        } catch (e) {
            next(e);
        }
    },

    getSingleUser: async (req, res) => {
        const transaction = await transactionInstance();
        try {
            const userId = req.params.id;

            const user = await userService.findUser(userId, transaction);

            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const { body: { password, email, name } } = req;
            const hashPassword = await passwordsHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword, transaction });

            // await emailService.sendMail(email, emailActions.WELCOME, { userName: name });

            res.sendStatus(201);
        } catch (e) {
            next(e);
        }
    },

    deleteSingleUser: async (req, res) => {
        const transaction = await transactionInstance();

        try {
            const userId = req.params.id;

            const user = await userService.findUser(userId);

            const { name } = user;

            await userService.deleteSingleUser(userId, transaction);

            res.json(`${name} was deleted`);
        } catch (e) {
            res.json(e.message);
        }
    }
};
