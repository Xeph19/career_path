import bcrypt from 'bcrypt'
import User from "../models/user.model.js";
import { generateToken } from "../config/util.js";

export const signup = async (req, res) =>{
    try {
        const {userName, email, password } = req.body; //User req 
        //Check if all fields are fill in
        if (!userName || !email || !password){
            return res.status(400).json({message:"Must fill all fields"});
        }
    //Validate if the given password is at least 6 digit else it's not acceptable
    if (password.length< 6){
        return res.status(400).json({message:"Password must be at least 6 digits "});
    }
    //Check if the email is already in the database
    const  user = await User.findOne({email});
    if (user) return res.status(400).json({message:"Email Already Exist"})
    
    const salt = await bcrypt.genSalt(10); //Add a salt to a password before hashing to avoid duplicate hashed pass
    const hashed = await bcrypt.hash(password, salt); //Hashing a user's password 

    //Create a new document in the database 
    const newUser = new User({
        userName: userName,
        email: email,
        password: hashed
    })

    if (newUser){
        //Generate a jwt token
        generateToken(newUser._id, res)
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            userName: newUser.userName,
            email: newUser.email,
        })
    }
    else{
        res.status(400).json({message:"Invalid User Data"})
    }
    }catch(error){
        console.log("Error in SignUp Controller");
        res.status(500).json({message:'Server Error'});
    }
};

//Create a login controller
export const login = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})

        if (!user){
            return res.status(400).json({message:"Invalid Inputs"});
        }
        //Check if the given password is similar to the user's password
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        generateToken(user._id, res);
        res.status(200).json({
        _id:user._id,
        userName: user.userName,
        email: user.email,
       
  })
    } catch (error) {
        console.log("Error in Log-in Controller");
        res.status(500).json({message:"Server Error"})
        
    }
};

export const logout = (req, res) =>{
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Logged out Successfully"})
    } catch (error) {
        console.log("Error in Logout Controller")
        res.status(500).json({message:"Server Error"})
        
    }
};

export const checkAuth = (req, res) =>{
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in Check auth controller")
        res.status(500).json({message:"Server Error"})
    }
}