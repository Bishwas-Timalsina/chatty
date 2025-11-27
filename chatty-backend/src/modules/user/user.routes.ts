import express from "express";
import getUserDetail from "./controller/getUserDetail";
import getUserList from "./controller/getUserList";
import getSingleUser from "./controller/getSingleUser";
import getOnlineUserList from "./controller/getOnlineUserList";

const userRouter = express();
userRouter.get("/", getUserDetail);
userRouter.get("/list", getUserList);
userRouter.get("/online", getOnlineUserList);

userRouter.get("/:id", getSingleUser);
export default userRouter;
