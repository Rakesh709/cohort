import express from "express"
import { registerUser,testUser } from "../controller/user.controller.js";


const router = express.Router();

router.post("/register", registerUser);

router.get("/test",testUser);


export default router;