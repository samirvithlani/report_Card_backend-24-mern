const studentSchema = require("../models/studentModel");
const multer = require("multer");
const xlsx = require("xlsx");


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    destination:"./uploads"
})

const upload = multer({
    storage:storage,
}).single("file");

const readDataFromExcell = (file)=>{

    const wb = xlsx.readFile(file);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(ws);
    //console.log(data);
    return data;

}

const createStudentFromExcel = (req, res) => {

    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                message:"Error in uploading file",
                err:err
            })
        }
        else{
            //file uploaded successfully
            const facultyEmail = req.body.facultyEmail;
            console.log(facultyEmail);

            //find faculty by email
            //const faculty = facultySchema.findOne({email:facultyEmail});
            //facultyEmail._id : 13r6yshckjhadhyuosjds
            //if faculty found.... else no faculty found
            const studentData = readDataFromExcell(req.file.path);
            console.log(studentData);
            //bind facultyId to every record
            ///store student data in database
            res.json({
                message:"File uploaded successfully",
                data:studentData
            })
        }
    })

}
module.exports = {
    createStudentFromExcel
}





