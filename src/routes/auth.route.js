import express from "express";
import * as authController from "../controllers/auth.controller.js"
import authenMiddleware from "../middlewares/authen.middleware.js";
import { loginSchema, registerSchema, validate } from "../validations/validator.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), authController.register);
authRouter.post("/login", validate(loginSchema), authController.login);
authRouter.get("/me",authenMiddleware, authController.getMe);
authRouter.get("/getUsers",authenMiddleware, authController.getALLUsers);
authRouter.get("/getMembers/:department",authenMiddleware, authController.getMembers);
authRouter.get("/getUserId/:id",authenMiddleware, authController.getUserId);
authRouter.delete("/user/:id", authController.deleteUser);
authRouter.patch("/user/:id", authController.editUser);

export default authRouter