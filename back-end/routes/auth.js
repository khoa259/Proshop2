import express from "express";
import {
  signupValidator,
  signinValidator,
  validatorResult,
} from "../middleware/validator.js";
import { signupController, signinController } from "../controller/auth.js";

const router = express.Router();
router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);

export default router;
