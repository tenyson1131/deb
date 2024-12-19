import { Router } from "express";
import {
  forgetPass,
  register,
  resetPassword,
  verifyCode,
} from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/verify", verifyCode);
authRouter.post("/forget", forgetPass);
authRouter.post("/reset", resetPassword);

export default authRouter;
