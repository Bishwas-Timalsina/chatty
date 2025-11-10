import express from "express";
import getUserDetail from "./controller/getUserDetail";

const userRouter = express();
userRouter.get("/", getUserDetail);

export default userRouter;
