const User = require("../models/User")
const CustomError = require("../helpers/error/CustomError")
const asycErrorWrapper = require("express-async-handler")

const register = asycErrorWrapper(async (req, res, next) => {
    // POST DATA
    console.log(req.body)

    const {name,email,password,role} = req.body

    const user = await User.create(
        {
            name: name,
            email: email,
            password: password,
            role : role
        }
    )


    res.status(200).json({
            success: true,
            data: user
        })

})


const errorTest = (req, res, next) => {
    return next(new TypeError("TypeError"))
}


module.exports = { register, errorTest }