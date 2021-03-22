const router = require('express').Router();

const { studentService } = require('../service');

const { studentController } = require('../controller');

router.get('/', studentController.getAll);
router.post('/', studentController.createStudent);
router.get('/test', async (req, res) => {
    const student = await studentService.createStudent(req.body);
    res.json(student);
});

module.exports = router;
