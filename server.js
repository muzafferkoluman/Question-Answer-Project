const express = require("express")
const dotenv = require("dotenv")
const { accessControl, defaultMiddleware } = require("./middleware")
const app = express()

// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})
const PORT = 502 || process.env.PORT

app.get("/", (req, res, next) => {
    res.send("<h1>HomePage</h1>")
})
app.get("/api/questions", (req, res, next) => {
    res.send("Questions")
})
app.get("/api/questions/delete", (req, res, next) => {
    res.send("Questions Delete")
})
app.get("/api/auth", (req, res, next) => {
    res.send("Auth")
})
app.get("/api/auth", (req, res, next) => {
    res.send("Auth Register")
})




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

