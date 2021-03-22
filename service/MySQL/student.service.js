// const db = require('../../dataBase/MySQL');
// const { constants: { Students } } = require('../../constant');
//
// module.exports = {
//     findAll: async () => {
//         const [dbResponse] = await db.query(`SELECT * FROM ${Students}`) || [];
//
//         return dbResponse;
//     },
//     createStudent: (userObject) => {
//         const { name, age, gender } = userObject;
//
//         return db.query(`INSERT INTO ${Students} (name, age, gender) VALUE ( '${name}', '${age}', '${gender}' ) `);
//     }
// };

const db = require('../../dataBase/MySQL').getInstance();
//
module.exports = {
    findAll: () => {
        const Student = db.getModels('Student');

        return Student.findAll();
    },
    createStudent: (userObject, transaction) => {
        const Student = db.getModels('Student');

        return Student.create(userObject, { transaction });
    },
    updateStudent: (id, object, transaction) => {
        const Student = db.getModels('Student');

        return Student.update(object, {
            where: { id },
            returning: true,
            transaction
        });
    }
};

// eslint-disable-next-line import/no-unresolved
// const { Student } = require('../../dataBase/models');
//
// module.exports = {
//     createStudent: (student) => Student.create(student),
// };
