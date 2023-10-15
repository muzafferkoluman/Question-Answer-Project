const User = require("../models/User")

const register = async (req,res,next)=>{
    // POST DATA
    const name = "Kaemil"
    const password = "123456"
    const email = "rqweeaswqeqw@ad.se"

    // async, await

    const user = await User.create(
        {
            name:name,
            password:password,
            email:email,
            role:"admin"
        }
    )



    res
    .status(404)
    .json({
        success:true,
        data : user

    })

}

const errorTest = (req,res,next) =>{
    throw new Error("Error Test");
}



module.exports = { register, errorTest}