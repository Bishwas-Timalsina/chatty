import { Server as SocketServer } from "socket.io";
import jwt from "jsonwebtoken";
import Message from "../models/messageModel";

export const onlineUsers: Record<string, string> = {};

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
    if (!socket?.user) return;
    const userId = socket?.user?.id;
    onlineUsers[userId] = socket?.id;
    // this stores userID:SocketID

    socket.on(
      "send_private_message",
      async ({ recieverId, text }: { recieverId: string; text: string }) => {
        try {
          const newMessage = await Message?.create({
            sender: userId,
            receiver: recieverId,
            text,
          });

          const recieverSocketId = onlineUsers[recieverId];
          if (recieverId) {
            io.to(recieverSocketId).emit("receive_message", {
              senderId: userId,
              text,
              createdAt: newMessage?.createdAt,
            });
          }
        } catch (error: any) {
          console.log("Error Saving message", error);
        }
      }
    );

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
export const getOnlineUsers = () => Object.keys(onlineUsers);
