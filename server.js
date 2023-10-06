const express = require("express")
const {accessControl,defaultMiddleware} = require("./middleware")
const app = express()
const PORT = 502

const array = [
    { id: "1", name: "muzaffer", departmen: "IT", salary: 5000 },
    { id: "2", name: "koluman", departmen: "IBsT", salary: 2000 }
]

app.get("/users",accessControl,defaultMiddleware, (req, res, next) => {
    res.json(array)
})
app.get("/pro", (req, res, next) => {
    res.send("<h1>Middleware</h1>")
})

app.post("/users",(req,res,next)=>{
    console.log(parseInt(req.body))
    res.send("<h1>Middleware Post</h1>")
})

app.listen(PORT, () => {
    console.log("Server Started PORT: " + PORT)
})