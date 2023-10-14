const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: true,
        required: [true, "Please provide a name"]
    },
    email : {
        type : String,
        requred : true,
        unique : [true, "Please try different email"],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid name"
        ],
        role : {
            type : String,
            default : "user",
            enum : ["user","admin"]
        },
        password : {
            type :String ,
            minlenght : [6,"Please provide a password with min lenght 6"],
            required : [true , "Please provide a password"],
            select : false //hides this in the response data but can be used in commands
        },
        createAt:{
            type : Date,
            default : Date.now,
        },
        title : {
            type : String
        },
        about : {
            type : String
        },
        place : {
            type : String
        },
        website : {
            type : String
        },
        profile_image :{
            type : String,
            default : "default.jpg"
        },
        blocked : {
            type : Boolean,
            default : false
        }
    }
})

module.exports = mongoose.model("User",userSchema)
