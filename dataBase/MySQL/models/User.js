module.exports = (client, DataTypes) => {
    const User = client.define(
        'User',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING },
            age: { type: DataTypes.INTEGER, defaultValue: 18 },
            password: { type: DataTypes.STRING }
        },
        {
            tableName: 'user',
            timestamps: false
        }
    );
    return User;
};
