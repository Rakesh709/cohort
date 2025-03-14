import User from "../model/User.model.js";
import crypto from "crypto"
import nodemailer from "nodemailer"

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
    

    if(!user){
        return res.status(400).json({
            message: "User not registred",
          });
    }

    //create a verification token
   const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    
    //save token in database
    user.verificationToken=token

    //save into db
    await user.save()

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
       from:  process.env.MAILTRAP_USERNAME,
       to: user.email,
       subject: "Verify your email ✔", // Subject line
       text: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token} 
       `
       //generate the url
    }

    await transporter.sendMail(mailOption)

    res.status(201).json({
        message:"User registred successfully",
        success:true
    })

  } catch (error) {
    res.status(400).json({
        message:"User not registred",
        error,
        success:false
    })
  }
};

//to verify user
const verifyUser = async (req,res)=>{
  //algo
  //get token from url 
  //validate token
  //find user based on token
  //if not 
  //set isVerified field true
  //remove verification token
  //save 
  //return ressponse 



  //get token from url 
  const {token} = req.params;
  console.log(token);

  //validate token
  if(!token){
    return res.status(400).json({
      message:"Invalid token"
    })
  }


   //find user based on token
  const user = await User.findOne({verificationToken:token})

  if(!user){
    return res.status(400).json({
      message:"Invalid token"
    })
  }

  //set isVerified field true
  user.isVerified = true

  //remove verification token
  user.verificationToken=undefined

  //save 
  await user.save()

  


}



const testUser = async (req, res) => {
  res.send("User test");
};

export { registerUser, verifyUser ,testUser };

//controller is the functinality
