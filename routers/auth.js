const express = require("express")
const {register,errorTest} = require("../controllers/auth")

const router = express.Router()

router.get("/register", register) 
router.get("/error", errorTest) 


module.exports = router