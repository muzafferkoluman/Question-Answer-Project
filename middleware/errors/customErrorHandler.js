const CustomError = require("../../helpers/error/CustomError")
const customErrorHandler = ((err, req, res, next) => {
    let customErr = err

    console.log(err)
    if (err.name === "SyntaxError") {
        customErr = new CustomError("Unexpect Error", 400)
    }
    if (err.name === "ValidationError") {
        customErr = new CustomError(err.message, 400)
    }
    if (err.code === 11000) {
        customErr = new CustomError("Samma mejlen", 400)
    }



    res.status(customErr.status || 500).json({
        success: false,
        message: customErr.message

    })

})

module.exports = customErrorHandler