import {body} from "express-validator"


const userRegistrationValidator = ()=>{
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),

        body("username")
            .trim()
            .notEmpty().withMessage("username is required")
            .isLength({min:3}).withMessage("username should be at leat 3 char")
            .isLength({max:14}).withMessage("username cannot excced 14 char"),

        body("password")
            .notEmpty().withMessage("Password is required"),
        
        body("role")
            .notEmpty().withMessage("Default role is user")
    ]
}


const userLoginVaidator =()=>{
    return [
        body("email")
            .isEmail().withMessage("Email is not valid"),

        body("password")
            .notEmpty().withMessage("Password cannot be empty")
    ]
}

export {userRegistrationValidator,userLoginVaidator}