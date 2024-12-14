const router = require("express").Router()
const facultyController = require("../controllers/facultyController")
router.post("/addfaculty",facultyController.addFaculty)
router.post("/loginfaculty",facultyController.loginFaculty)
router.get("/protected",facultyController.getUserfromToken)
module.exports = router
