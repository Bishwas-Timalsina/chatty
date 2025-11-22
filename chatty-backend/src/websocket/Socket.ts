import { Server as SocketServer } from "socket.io";
import jwt from "jsonwebtoken";

export const initSocket = (server: any) => {
  const io = new SocketServer(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    const token = socket?.handshake?.auth?.token;
    if (!token) return next(new Error("Authentication Error"));
    try {
      const user = jwt.verify(token, process?.env?.JWT_SALT!);
      (socket as any).user = user;
      next();
    } catch (error: any) {
      next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket: any) => {
    console.log("User Connected", (socket as any).user);
    socket.on("send_message", (message: string) => {
      io.emit("message", {
        user: (socket as any).user.id,
        text: message,
      });
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected:", (socket as any).user);
    });
  });
};
