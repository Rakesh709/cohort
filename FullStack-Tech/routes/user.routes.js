import express from "express"
import { registerUser,testUser, verifyUser } from "../controller/user.controller.js";


const router = express.Router();

router.post("/register", registerUser);

router.get("/verify/:token", verifyUser)
//jo idher /:token slash colon kai agai jo hoga wahi milega so token ---> controller main

router.get("/test",testUser);


export default router;