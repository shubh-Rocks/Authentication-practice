import { Router } from "express";
import * as authController from "../controller/auth.controller.js";

const authRouter = Router();

// POST /api/auth/register
authRouter.post("/register", authController.register);

// POST /api/auth/register
authRouter.post("/login", authController.login);

// GET /api/auth/get-me
authRouter.get("/get-me", authController.getMe);

// GET /api/auth/RefreshToken
authRouter.get("/Refresh-Token", authController.refreshToken);

//GET /api/auth/logout
authRouter.get("/logout", authController.logout);

// GET /api/auth/logoutAll
authRouter.get("/logout-all", authController.logoutAll);

// GET /api/auth/verify-email
authRouter.post("/verify-email", authController.verifyEmail);

export default authRouter;
