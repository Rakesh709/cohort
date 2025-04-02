import {validationResult} from "express-validator"
import {ApiError} from "../utils/api-error.js"

export const validate = (req,res,next)=>{
    const errors = validationResult(req)
    console.log("Middleware error",errors);
    

    if(errors.isEmpty){
        return next()
    }

    //need to understand below error
    const extractedError =[]
    errors.array().map((err)=> extractedError.push({
        [err.path]: err.msg
    }))

    throw new ApiError(422,"Recived data is not valid",extractedError)
}

//sab kuch req, res mai daal do then move on