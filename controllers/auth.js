const User = require("../models/User")
const CustomError = require("../helpers/error/CustomError")
const asycErrorWrapper = require("express-async-handler")
const sendJwtToClient = require("../helpers/authorization/sendJwtToClient")

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

    sendJwtToClient(user,res)

})


const errorTest = (req, res, next) => {
    return next(new TypeError("TypeError",400))
}


module.exports = { register, errorTest }