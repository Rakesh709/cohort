import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";
import cookieParser from "cookie-parser"

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config();
//if diffrent folder path mentioned in config



const app = express()
const port = process.env.PORT ||  8080;


app.use(cors({
  origin:process.env.BASE_URL,
  methods:["GET","POST","PUT","OPTIONS","DELETE"],
  allowedHeaders:["Content-Type","Authorization"],
  credentials:true
}))

app.use(express.json())
//to send json data

app.use(express.urlencoded({extended:true}))
//url encoding %20 like that

app.use(cookieParser());
//to access cookies

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cohort', (req, res) => {
  res.send('Hello cohort World!')
})

app.get("/rakesh",(req,res)=>{
  res.send("Hello Rakesh");
  
})

//connect to db
db();

//user routes
app.use("/api/v1/users",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})