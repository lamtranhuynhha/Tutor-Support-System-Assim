import { Router } from "express";
import {
  login,
  changePassword,
  resetPassword,
  resetPasswordToken,
} from "../controllers/auth.controller.js";

export const router = Router();

// DEFINE ROUTES HERE
// router post /login
// router post /change-password
// router post /forgot-password
// Example:
// router.post("/register", <middleware> ,register);
