import app from "./app.js"

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
})
//awlays give the path becaouse verbose code is always good

const PORT = process.env.PORT || 8000;

connectDB()
    .then(()=>{
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
        
    })
    .catch((err)=>{
        console.error("MongoDB connection error",err);
        process.exit(1);
    })

