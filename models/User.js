const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: {
        type: true,
        required: [true, "Please provide a name"]
    },
    email : {
        type : String,
        requred : true,
        unique : [true, "Please try different"],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid name"
        ]
    }
})

