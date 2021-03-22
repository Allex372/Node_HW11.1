require('../dataBase/models/Car');
const db = require('../dataBase/MySQL').getInstance();

module.exports = {
    findAll: () => {
        const User = db.getModels('User');

        return User.findAll();
    },
    createUser: (userObject, transaction) => {
        const Test = db.getModels('User');

        return Test.create(userObject, { transaction });
    },
    updateStudent: (id, object, transaction) => {
        const Student = db.getModels('Student');

        return Student.update(object, {
            where: { id },
            returning: true,
            transaction
        });
    },
    findUser: (id, transaction) => {
        const User = db.getModels('User');
        return User.findOne({
            where: {
                id
            },
            transaction
        });
    },
    deleteSingleUser: (id, transaction) => {
        const User = db.getModels('User');

        return User.destroy({
            where: {
                id
            },
            transaction
        });
    }
};
