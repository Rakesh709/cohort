import mongoose,{Schema} from "mongoose"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const userSchema = new Schema({
    avatar:{
        type:{
            url:String,
            localpath: String
        },
        default:{
            url:"https://placehold.co/400",
            localpath:""
            //photo upload nhi kia to default icon
        },
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        
    },
    isEmailVerified:{
        type:Boolean,
        default:false,        
    },
    forgotPasswordToken:{
        type:String,
        
    },
    forgotPasswordExpiry:{
        type:Date,
        
    },
    refreshToken:{
        type:String
    },
    emailVerificationToken:{
        type:String
    },
    emailVerificationExpiry:{
        type:Date
    }
},{timestamps:true})

//ager password modefied hua to ye karo
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)
    next()
})


// if(this.isModified("password")){
//     this.password = await bcrypt.hash(this.password,10)
// }

//polyfilys type
//common way to do it method we wrote
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)
}

//for token

userSchema.methods.generateAccessToken =  function(){
   return jwt.sign(
        {
             _id:this._id,
            email:this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
    )
}

//TODO :refrece token

userSchema.methods.generateRefreshToken =  function(){
    return jwt.sign(
         {
              _id:this._id,
             
         },
         process.env.REFRESH_TOKEN_SECRET,
         {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
     )
 }

 userSchema.methods.generateTemporaryToken = function(){
   const unHashedToken = crypto.randomBytes(20).toString("hex");

   //db mai hash token hai user kai pass normall token hai

  const hashToken=  crypto.createHash("sha256").update(unHashedToken).digest("hex");

  const tokenExpiry = Date.now() + (20*60*1000) //20 mint

  return {hashToken,unHashedToken,tokenExpiry}

 }

export const User = mongoose.model("User",userSchema)


//https://placehold.co/