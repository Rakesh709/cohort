import mongoose,{Schema} from "mongoose"
import {AvaibaleTaskStatus, TaskStatusEnum} from "../utils/constants.js"

const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        // required:[true,"Project ref is required"]
        required:true,
    },
    assignedTo:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    assignedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum: AvaibaleTaskStatus,
        default:TaskStatusEnum.TODO
    },
    attachments:{
        type: [{
            url:String,
            mimetype:String,
            size:Number
        }],
        default:[]
    }

},{timestamps:true})


export const Task = mongoose.model("Task",taskSchema)

//file jayi ki file service mai s3, azure , cloudanery etc