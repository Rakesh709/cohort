import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();
//if diffrent folder path mentioned in config



const app = express()
const port = process.env.PORT ||  8080;

app.use(cors({
  origin:"http://localhost:8080",
  methods:["GET","POST","PUT","OPTIONS","DELETE"],
  allowedHeaders:["Content-Type","Authorization"],
  credentials:true
}))

app.use(express.json())
//to send json data

app.use(express.urlencoded({extended:true}))
//url encoding %20 like that


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cohort', (req, res) => {
  res.send('Hello cohort World!')
})

app.get("/rakesh",(req,res)=>{
  res.send("Hello Rakesh");
  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})