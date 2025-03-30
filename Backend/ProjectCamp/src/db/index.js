import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB Connection failed",error);
        process.exit(1);
        //if the project run without db then fine else need to debug and exit the process(stop the DB)
    }
}

export default connectDB;