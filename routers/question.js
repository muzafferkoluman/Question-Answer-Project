const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Questions Page")
})


module.exports = router