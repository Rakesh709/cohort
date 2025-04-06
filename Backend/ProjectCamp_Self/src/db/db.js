import mongoose from "mongoose";


  const connectDB = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("MongoDB connected");
       
    } catch (error) {
        console.log("Mongoodb connection failed".error)
        process.exit(1)
    }
  }

  //0 is a success code and 1 (or another number) can be a failure code

  export default connectDB;