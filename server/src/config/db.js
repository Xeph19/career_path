import mongoose from "mongoose";
export const connectDB = async () =>{
    try{
        //Connect sa MongoDB gamit Mongoose
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB connected to ${conn.connection.host}` );
    }
    catch(err){
        console.log('Error in Connecting to MONGODB', err);
    }
};