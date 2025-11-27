import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interface/Interface";

const messageSchema: Schema<IMessage> = new mongoose.Schema(
  {
    sender: {
      type: Schema?.Types?.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: { type: Schema?.Types?.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMessage>("Message", messageSchema);
