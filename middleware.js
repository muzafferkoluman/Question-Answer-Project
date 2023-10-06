const accessControl = (req, res, next) => {
    const access = true

    if(!access){
        res.status(401).json({
            success:false,
            message:"You are not authorized"
        })
    }

    next()
}
const defaultMiddleware = (req,res,next)=>{
    console.log("Default")
    next()
}
module.exports = { accessControl,defaultMiddleware };