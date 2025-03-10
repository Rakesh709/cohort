import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//best practice to load dotenv 
//sometime thirdparty faile dto load


const db =()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to mongodb");
        
    })
    .catch((err)=>{
        console.log("Error connecting to mongodb");
        
    })

}

export default db;

//database 
//ip_whitelisting
//username and password