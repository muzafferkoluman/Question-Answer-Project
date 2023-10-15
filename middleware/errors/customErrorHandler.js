const CustomError = require("../../helpers/error/CustomError")
const customErrorHandler = ((err, req, res, next) => {
    let customErr = err

    console.log(err.name)
    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpect Error", 400)
    }
    if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400)
    }



    res.status(customErr.status || 500).json({
        success: false,
        message: customErr.message

    })

})

module.exports = customErrorHandler