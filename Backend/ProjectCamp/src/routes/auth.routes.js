import { Router } from "express";
import {registerUser} from "../controllers/auth.controller.js";
import {validate} from  "../middlewares/validator.middleware.js"
import { userRegistrationValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegistrationValidator(),validate,registerUser);

//above is based on factory pattern
// userRegistrationValidator() --> return array --> factory pattern --> ye execute kr de bass no next()
//validate --> middleware hai 

export default router;


// oops is a patter 
//factory is the pattern 
