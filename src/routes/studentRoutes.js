const router = require('express').Router();
const studentController = require('../controllers/StudentController');
router.post("/createStudent", studentController.createStudentFromExcel);
module.exports = router;
