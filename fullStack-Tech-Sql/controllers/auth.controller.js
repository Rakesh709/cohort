
//how to use prisma 

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const registerUser = async (req, res)=>{
    const {name , email , password,phone} = req.body;

    if(!name || !email || !password|| !phone){
        console.log("Missing field");
       return res.status(400).json({
            status: false,
            message : "All fields are required"
        })
    }

    try {
      const existingUser=  prisma.user.findUnique({
            where:{email}
        })

        if(existingUser){
          return res.status(400).json({
                status: false,
                message : "User already exists"
            })
        }
        
        //hash the pss
     const hashedPassword= await bcrypt.hash(password,10);

     const verificationToken = crypto.randomBytes(32).toString("hex");

     const user = await prisma.user.create({
        data:{
            name,
            email,
            phone,
            password:hashedPassword,
            verificationToken
        }
    })

    //send mail -- TODO 



    } catch (error) {
       return res.status(500).json({
        success:false,
        error,
        message:"Registration Failed"
       }) 
    }
}


export const loginUser = async (req, res)=>{
    const {email, password}= req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"All field required"
        })
    }

    try {

      const user =   await prisma.user.findUnique({
            where:{email}
        })


        if(user){
            return res.status(400).json({
                  status: false,
                  message : "Invalid email or password"
              })
          }

       const isMatch= bcrypt.compare(password, user.password)

       if(!isMatch){
        return res.status(400).json({
              status: false,
              message : "Inavalid email or password"
          })
      }

      //jwt token

     const token= jwt.sign(
        {id:user.id,role:user.role},
        process.env.JWT_SECRETE,
        {expiresIn:"24h"}
      )

      //send in cookies 

      const cookiesOptions={
        httpOnly:true
      }

      res.cookies("token",token,cookiesOptions)

      return res.status(200).json({
        success:true,
        user:{
            id:user.id,
            name:user.name,
            email:user.email
        },
        message:"Got the user"
      })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Login Failed"
        })
    }
}