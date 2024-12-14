const facultySchema = require("../models/facultyModel");
const tokenUtil = require("../utils/tokenutil")
const jwt = require("jsonwebtoken")
const secret = "abc" //16

const addFaculty = async (req, res) => {
  try {
    const savedFaculty = await facultySchema.create(req.body);
    res.status(201).json({
      message: "faculty created Successfully!",
      data: savedFaculty,
    });
  } catch (err) {}
};


const loginFaculty = async(req,res) =>{


    const {email,password} = req.body

    const foundFaculty = await facultySchema.findOne({email:email})
    if(foundFaculty){

        //compare password...
        //const isMatch = encrypt.comparePassoowrd(password,foundFaculty.password)
        //if(isMatch{})
        const isMatch  = true;//remove...
        if(isMatch){
            const token = tokenUtil.generateToken(foundFaculty.toObject())
            //login success..
            res.status(200).json({
                message:"login successfull",
                //data:foundFaculty
                data:token
            })


        }else{
            res.status(404).json({
                message:"invalid cred.."
            })
        }
    


    }else{

        res.status(404).json({
            message:"Faculty not found.."
        })
    }



}



const getUserfromToken = (req,res)=>{

    const token = req.headers.authorization
    console.log(token)
    if(token){
        try{
            
            const user = jwt.verify(token,secret)   
            if(user){
                res.status(200).json({
                    id:user._id
                })
            }
            else{
                res.status(404).json({
                    message:"user not found.."
                })
            }
            
            
    
        }catch(err){
            console.log(err)
            res.status(420).json({
                message:"token is not valid,,"
            })
        }

    }
    else{
        res.status(420).json({
            message:"token is required.."
        })
    }
    

        
    
    
    

}

module.exports = {
  addFaculty,
  loginFaculty,
  getUserfromToken
};
