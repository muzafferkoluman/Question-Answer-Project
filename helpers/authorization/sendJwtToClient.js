const sendJwtToClient = (user,res) =>{
    // code to send jwt token to client side
    const token = user.generateJWTFormUser()

    const {JWT_COOKIE,NODE_ENV} = process.env

    return res.status(200)
    .cookie("access_token",token,{
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(JWT_COOKIE)*1000),
        secure: NODE_ENV === "development" ? true : false,
    })
    .json({
        success :true,
        access_token: token,
        data :{
            name:user.name,
            email:user.email
        }
    })



}

module.exports = sendJwtToClient