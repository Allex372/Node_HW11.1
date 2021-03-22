const db = require('../dataBase/MySQL').getInstance();

module.exports = {
    findUser: (email) => {
        const User = db.getModels('User');

        return User.find({ email });
    }
};
