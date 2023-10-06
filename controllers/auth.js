const register = (req,res,next)=>{
    res
    .status(404)
    .json({
        success:false,
        name:"Hatali"
    })

}

module.exports = { register}