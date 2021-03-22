// const { Model, DataTypes } = require('sequelize');
// const { sequelize } = require('../index');
// class Lesson extends Model {}
//
// Lesson.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     date: {
//         type: DataTypes.STRING
//     },
//     label: {
//         type: DataTypes.STRING
//     },
//     student_count: {
//         type: DataTypes.INTEGER
//     }
// },
// {
//     sequelize,
//     timestamp: true
// });
//
// module.exports = Lesson;
module.exports = (client, DataTypes) => {
    const Lesson = client.define(
        'Lesson',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            date: {
                type: DataTypes.STRING
            },
            label: {
                type: DataTypes.STRING
            },
            student_count: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'lesson',
            timestamps: false
        }
    );
    return Lesson;
};
