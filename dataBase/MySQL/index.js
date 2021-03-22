const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    user: 'root',
    password: 'root',
    database: 'test',
    host: 'localhost'
});

module.exports = connection.promise();

const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const fs = require('fs');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize('test', 'root', 'root', { dialect: 'mysql' });

        const models = {};
        const modelPath = path.join(process.cwd(), 'dataBase', 'MySQL', 'models');

        const getModels = () => {
            fs.readdir(modelPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelPath, model));

                    models[model] = modelFile(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModels: (modelName) => models[modelName],
            transactionInstance: () => client.transaction()
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    };
})();
