import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6 //set the minlength of password into 6
    },
},
    {timestamps: true},
);

const User = mongoose.model('User', userSchema);

export default User;