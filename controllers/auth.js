const User = require("../models/User")
const asycAwaitWrapper = require("express-async-handler")
const CustomError = require("../helpers/error/CustomError")

const register = asycAwaitWrapper(async (req, res, next) => {
    // POST DATA
    const name = "Kaemil"
    const password = "123456"
    const email = "rqqw@ad.ses"

    // async, await


    const user = await User.create(
        {
            name: name,
            password: password,
            email: email
        }
    )
    res
        .status(404)
        .json({
            success: true,
            data: user

        })

})


const errorTest = (req, res, next) => {
    return next(new TypeError("TypeError"))
}


module.exports = { register, errorTest }