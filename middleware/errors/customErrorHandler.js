const customErrorHandler = ((err,req,res,next)=>{
    console.log("Custom Error Handler")

    res
    .status(400)
    .json({
        success:false
    })

})

module.exports = customErrorHandler