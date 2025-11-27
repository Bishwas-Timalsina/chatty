import { Request, Response } from "express";
import Message from "../../../models/messageModel";
import mongoose from "mongoose";
const getMessageHistory = async (req: Request, res: Response) => {
  const { senderId, recieverId } = req?.query;
  if (!senderId || !recieverId) {
    throw "Sorry !! Missing User Ids";
  }

  try {
    const sender = new mongoose.Types.ObjectId(senderId as string);
    const receiver = new mongoose.Types.ObjectId(recieverId as string);
    const messages = await Message.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ createdAt: 1 });
    res?.status(200).json({
      success: true,
      messages,
    });
  } catch (error: any) {
    throw error;
  }
};
export default getMessageHistory;
