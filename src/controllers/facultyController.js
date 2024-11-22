const facultySchema = require("../models/facultyModel")


const addFaculty = async(req,res)=>{


    try{

        const savedFaculty = await facultySchema.create(req.body);
        res.status(201).json({
            message:"faculty created Successfully!",
            data:savedFaculty
        })
    }catch(err){


    }
    
}

module.exports = {
    addFaculty
}
