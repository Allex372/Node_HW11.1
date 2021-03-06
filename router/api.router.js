const router = require('express').Router();

const userRouter = require('./user.router');
const carRouter = require('./car.router');
const ownerRouter = require('./owner.router');
const authRouter = require('./auth.router');
const studentRouter = require('./student.router');

router.use('/auth', authRouter);

router.use('/users', userRouter);

router.use('/cars', carRouter);

router.use('/owners', ownerRouter);

router.use('/students', studentRouter);

module.exports = router;
