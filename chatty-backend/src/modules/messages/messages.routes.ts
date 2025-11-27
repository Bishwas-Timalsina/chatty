import express from "express";
import getMessageHistory from "./controller/getMessageHistory";

const messageRouter = express();
messageRouter.get("/",getMessageHistory);

export default messageRouter;