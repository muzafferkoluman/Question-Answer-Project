const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const UserSchema = new Schema({
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

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            this.password = hash;
            next()
        })
    })
})


module.exports = mongoose.model("User", UserSchema)
