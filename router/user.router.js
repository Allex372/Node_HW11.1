const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddleware, fileMiddleware, authMiddleware: { checkAccessToken } } = require('../middleware');

router.get('/',
    // checkAccessToken,
    userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.delete('/:id', userController.deleteSingleUser);

router.post('/',
    // fileMiddleware.checkFile,
    // fileMiddleware.checkAvatarLength,
    // fileMiddleware.checkDocumentLength,
    // fileMiddleware.checkVideoLength,
    // userMiddleware.isLoginExisted,
    // userMiddleware.isEmailCreated,
    // userMiddleware.isUserValid,
    userController.createUser);

module.exports = router;
