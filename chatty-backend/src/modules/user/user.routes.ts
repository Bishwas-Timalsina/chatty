import express from "express";
import getUserDetail from "./controller/getUserDetail";
import getUserList from "./controller/getUserList";

const userRouter = express();
userRouter.get("/", getUserDetail);
userRouter.get("/list", getUserList);

export default userRouter;
