import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./modules/auth/auth.routes";
import appAuth from "./middleware/appAuth";
import userRouter from "./modules/user/user.routes";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());


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

app.use(express.json({ limit: "2000000000b" }));
app.use("/api/v1/auth", authRouter);
app.use(appAuth);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/message", userMessageRouter);

app.use(errorHandler);
app.listen(process.env.PORT_NO, () => {
  console.log("Server started");
});
