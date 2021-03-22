module.exports = (client, DataTypes) => {
    const Student = client.define(
        'Student',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING },
            age: { type: DataTypes.INTEGER, defaultValue: 18 },
            gender: { type: DataTypes.STRING }
        },
        {
            tableName: 'students',
            timestamps: false
        }
    );
    return Student;
};
