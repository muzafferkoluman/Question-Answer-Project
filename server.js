const express = require("express")
const dotenv = require("dotenv")
const { accessControl, defaultMiddleware } = require("./middleware")
const routers = require("./routers/index")
const app = express()

// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})
const PORT = 502 || process.env.PORT

app.get("/", (req, res, next) => {
    res.send("<h1>HomePage</h1>")
})


app.use("/api",routers)





app.listen(PORT, () => {
    console.log(`Server Started PORT: ${PORT}  ${process.env.NODE_ENV}`)
})



// const array = [
//     { id: "1", name: "muzaffer", departmen: "IT", salary: 5000 },
//     { id: "2", name: "koluman", departmen: "IBsT", salary: 2000 }
// ]

// app.get("/users",accessControl,defaultMiddleware, (req, res, next) => {
//     res.json(array)
// })

// app.post("/users",(req,res,next)=>{
//     console.log(parseInt(req.body))
//     res.send("<h1>Middleware Post</h1>")
// })

