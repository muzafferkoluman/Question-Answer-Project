const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./helpers/databases/connectDatabase")
const customErrorHandler = require("./middleware/errors/customErrorHandler")
const routers = require("./routers/index")
const app = express()

// Express Middleware
app.use(express.json())

// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})

// MongoDB
connectDatabase()

const PORT = 502 || process.env.PORT

app.get("/", (req, res, next) => {
    res.send("<h1>HomePage</h1>")
})


app.use("/api",routers)

app.use(customErrorHandler)


app.listen(PORT, () => {
    console.log(`Server Started PORT: ${PORT}  ${process.env.NODE_ENV}`)
})


