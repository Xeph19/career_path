import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js'
import cookieParser from 'cookie-parser';

//Install all dependencies such cookie parser, jsonwebtoken, nodemon, express, dotenv, and mongoose
dotenv.config();
const app = express();
const port = process.env.PORT
app.use(cookieParser());
app.use(express.json()); //allows us to accept JSON data in the req.body
app.use('/api/auth', userRoutes);
app.listen(port, () =>{
    connectDB();
    console.log('Server is listening to port http://localhost:5001');
});