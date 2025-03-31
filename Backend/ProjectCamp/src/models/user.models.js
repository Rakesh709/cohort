import mongoose,{Schema} from "mongoose"

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


export const User = mongoose.model("User",userSchema)


//https://placehold.co/