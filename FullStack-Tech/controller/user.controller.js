import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { log } from "console";

const registerUser = async (req, res) => {
  //get Data
  //validate data

  //check if user alredy exist

  //create a user in database

  //create a verification token

  //save token in database

  //send token as email to user

  //send success status to user

  //req eek object hai
  //get Data
  const { name, email, password } = req.body;

  //validate data
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  //console.log(email)
  //check if user alredy exist
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registred",
      });
    }

    //create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    //save token in database
    user.verificationToken = token;

    //save into db
    await user.save();

    //send token as email to user
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email", // Subject line
      text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `,
    };

    console.log("before mail");
    await transporter.sendMail(mailOption);
    console.log("after  mail");

    res.status(201).json({
      message: "User registred successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registred",
      error,
      success: false,
    });
  }
};

//to verify user
const verifyUser = async (req, res) => {
  //algo
  //get token from url
  //validate token
  //find user based on token
  //if not
  //set isVerified field true
  //remove verification token
  //save
  //return ressponse

  try {
    //get token from url
    const { token } = req.params;
    console.log(token);

    //validate token
    if (!token) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    //find user based on token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    //set isVerified field true
    user.isVerified = true;

    //remove verification token
    user.verificationToken = undefined;

    //save
    await user.save();
    console.log("verified done");

    res.status(201).json({
      message: "verification done ✅",
      success: true,
    });
  } catch (error) {
    es.status(400).json({
      message: "Failed to verify",
      error,
      success: false,
    });
  }
};

//jab bhi user correct username and password shi de 
//to session token create kre

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    //password check 
    const isMatch = await bcrypt.compare(password, user.password);
    //true or false value only
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Inavlid email or password",
      });
    }

    //check user.isVeried tue or false
    if(!user.isVerified){
      return res.status(400).json({
        message: "verify yourself",
      });
    }


    //jwt token
    //in sign we send payload mostly id 
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRETE, {
      expiresIn: "24h",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    //to send cookies
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Login Failed",
      error,
      success: false,
    });
  }
};

//to get profile

// const getMe = async (req, res) => {
//   const {email} = req.body;

//   if(!email){
//     return res.status(400).json({
//       message: "All fields are required",
//     });
//   }

//   try {
//     const user = await User.findOne({email});

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid email",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Successfully get the user Data",
//       user: {
//         id: user._id,
//         name: user.name,
//         role: user.role,
//       },
//     });


//   } catch (error) {
//     res.status(400).json({
//       message: "Failed to get Data",
//       error,
//       success: false,
//     });
//   }
// };

//jab kuch kaam jada baar hota hai to utility bnate hai 

const getMe = async (req,res)=>{
  try {
    //first authanticate it
    // const data = req.user
    // console.log("Reached at profile level",data);
    
    const user= await User.findById(req.user.id).select("-password");

    if(!user){
      return res.status(400).json({
        success:false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success:true,
      user
    })

  } catch (error) {
    res.status(400).json({
      message: "Failed to get Data",
      error,
      success: false,
    });
  }
}

//userLogin hai ki nhi via token
const logoutUser = async (req, res) => {
  try {
  } catch (error) {}
};

//user hai to email sai password reset krna hai to
const resetPassword = async (req, res) => {
  try {
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  try {
  } catch (error) {}
};

const testUser = async (req, res) => {
  res.send("User test");
};

export { registerUser, verifyUser, login,getMe ,testUser };

//controller is the functinality

//middleware

// A middleware function is a function that takes a request object and either terminates the request/response cycle or passes control to another middleware function.

// new Date(0) = January 1, 1970, 00:00:00 UTC

//USP - unique selling proposition (someone asked 😿)

//how to create user as a admin ??
