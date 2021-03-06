module.exports = (client, DataTypes) => {
    const O_Auth = client.define(
        'O_Auth',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            access_token: { type: DataTypes.STRING },
            refresh_token: { type: DataTypes.STRING },
        },
        {
            tableName: 'O_Auth',
            timestamps: false
        }
    );
    return O_Auth;
};
