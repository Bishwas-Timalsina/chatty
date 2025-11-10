import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./modules/auth/auth.routes";
import appAuth from "./middleware/appAuth";
import userRouter from "./modules/user/user.routes";

const app = express();
dotenv.config;
app.use(cors());

app.use(express.json({ limit: "2000000000b" }));
app.use("/api/v1/auth", authRouter);
app.use(appAuth);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/message", userMessageRouter);

app.listen(8000, () => {
  console.log("Server started");
});
