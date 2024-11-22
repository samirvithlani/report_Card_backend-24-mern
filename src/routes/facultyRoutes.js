const router = require("express").Router()
const facultyController = require("../controllers/facultyController")
router.post("/addfaculty",facultyController.addFaculty)
module.exports = router
