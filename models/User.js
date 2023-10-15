const mongoose = require("mongoose")

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    email: {
        type: String,
        requred: [true, "Please try provide email"],
        unique: [true, "Please try different email"],
        //        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w

    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    password: {
        type: String,
        minlenght: [6, "Please provide a password with min lenght 6"],
        required: [true, "Please provide a password"],
        select: false //hides this in the response data but can be used in commands
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String
    },
    about: {
        type: String
    },
    place: {
        type: String
    },
    website: {
        type: String
    },
    profile_image: {
        type: String,
        default: "default.jpg"
    },
    blocked: {
        type: Boolean,
        default: false

    }
})

userSchema.pre("save",function(next){
    console.log("pre hoks")
    console.log(this)
    next()
})


module.exports = mongoose.model("User", userSchema)
