import express from "express"
import { login, registerUser,testUser, getMe,verifyUser } from "../controller/user.controller.js";


const router = express.Router();

router.post("/register", registerUser);

router.get("/verify/:token", verifyUser)
//jo idher /:token slash colon kai agai jo hoga wahi milega so token ---> controller main

router.post("/login",login);

router.post("/profile",getMe);

router.get("/test",testUser);


export default router;

//logout
//user profile
//forgot password
//reset password
