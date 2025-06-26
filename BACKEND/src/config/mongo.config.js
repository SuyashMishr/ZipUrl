import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`🎮💥 MongoDB Connected — Player 1 Ready!: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;
