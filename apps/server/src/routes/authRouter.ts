import { Router } from "express";
import {
  signUpHandler,
  loginHandler,
  verifyUserHandler,
  googleoauthHandler,
} from "../controllers";

const router: Router = Router();

router.route("/signup").post(signUpHandler);

router.route("/login").post(loginHandler);

router.route("/verify").post(verifyUserHandler);

router.route("/auth/oauth/google").get(googleoauthHandler);

export { router as authRouter };
