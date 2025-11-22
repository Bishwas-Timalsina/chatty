import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import { initSocket } from "./websocket/socket";

import mongoose from "mongoose";
import appAuth from "./middleware/appAuth";
import authRouter from "./modules/auth/auth.routes";
import userRouter from "./modules/user/user.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT_NO || 8000;
const server = http.createServer(app);

// initSocket(server);
app.use(cors());
app.use(express.json({ limit: "2000000000b" }));

mongoose
  .connect(process.env.DB_URL!, {})
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((e: any) => {
    console.log("Error connecting the database");
  });

import "./models/userRegisterModel";
import errorHandler from "./handlers/errorHandlers";
// import messageRouter from "./modules/message/message.routes";

app.use("/api/v1/auth", authRouter);
app.use(appAuth);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/message", messageRouter);

// app.use("/api/v1/message", userMessageRouter);

app.use(errorHandler);
server.listen(PORT, () => {
  console.log("Server started");
});
