const jwt = require("jsonwebtoken")
const secret = "abc" //16

const generateToken = (user)=>{

    const token = jwt.sign(user,secret,{
        expiresIn:60
    })
    return token

}

module.exports={
    generateToken
}
