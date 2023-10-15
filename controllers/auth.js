const User = require("../models/User")
const CustomError = require("../helpers/error/CustomError")
const asycErrorWrapper = require("express-async-handler")

const register = asycErrorWrapper(async (req, res, next) => {
    // POST DATA

    const {name,email,password,role} = req.body

    const user = await User.create(
        {
            name: name,
            email: email,
            password: password,
            role : role
        }
    )

    const token = user.generateJWTFormUser()
    console.log(token)


    res.status(200).json({
            success: true,
            data: user
        })

})


const errorTest = (req, res, next) => {
    return next(new TypeError("TypeError",400))
}


module.exports = { register, errorTest }