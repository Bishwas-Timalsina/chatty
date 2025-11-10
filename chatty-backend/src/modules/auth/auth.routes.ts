import { Router } from "express";
import login from "./controller/login";
import register from "./controller/register";
import appAuth from "../../middleware/appAuth";

const authRouter = Router();
authRouter.post("/login", login);
authRouter.post("/register", register);

export default authRouter;
