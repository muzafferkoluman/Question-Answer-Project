const express = require("express")
const router = express.Router()

const question = require("./question")
const auth = require("./auth")

router.use("/question",question)
router.use("/auth",auth)

module.exports = router