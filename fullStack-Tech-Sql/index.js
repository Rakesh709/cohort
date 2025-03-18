import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import useRouter from "./routes/auth.route";


//custom routes
import useRouter from "./routes/auth.route.js";

dotenv.config();
const port = process.env.PORT || 4000
const app = express();

app.use(cookieParser);
app.use(cors({
    origin:"http://localhost:5173",
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"test checked"
    })
})

app.use("/api/v1/users",useRouter);

app.listen(port,()=>{
    console.log(`Backend is port listen at port: ${port}`);
    
})