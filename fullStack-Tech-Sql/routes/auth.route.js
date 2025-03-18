
import express from "express"
import { registerUser } from "../controllers/auth.controller.js";

const useRouter = express.Router();

useRouter.post("/register", registerUser)

export default useRouter