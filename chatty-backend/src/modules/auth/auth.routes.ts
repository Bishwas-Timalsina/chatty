import { Router } from "express";
import login from "./controller/login";
import register from "./controller/register";

const authRouter = Router();
authRouter.post("/login", login);
authRouter.post("/register", register);
export default authRouter;
