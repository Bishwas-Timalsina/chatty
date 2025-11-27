import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import mongoose from "mongoose";
import appAuth from "./middleware/appAuth";
import userRouter from "./modules/user/user.routes";
import authRouter from "./modules/auth/auth.routes";

import cron from "node-cron";
import { initSocket } from "./websocket/Socket";

import { deleteOldMessages } from "./modules/messages/controller/deleteOldMessages";

dotenv.config();
const app = express();
const PORT = process.env.PORT_NO || 8000;
const server = http.createServer(app);

initSocket(server);
app.use(cors());
app.use(express.json({ limit: "2000000000b" }));

mongoose
  .connect(process.env.DB_URL!, {})
  .then(() => {
    console.log("Database Connected Successfully");
    cron.schedule("0 * * * *", () => {
      console.log("Running message Cleanup");
      deleteOldMessages();
    });
  })

  .catch((e: any) => {
    console.log("Error connecting the database");
  });

import "./models/userRegisterModel";
import errorHandler from "./handlers/errorHandlers";
import messageRouter from "./modules/messages/messages.routes";

app.use("/api/v1/auth", authRouter);
app.use(appAuth);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/messages", messageRouter);

app.use(errorHandler);
server.listen(PORT, () => {
  console.log("Server started");
});
