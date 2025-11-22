import mongoose from "mongoose";
import { IUserType } from "../interface/Interface";

const userRegisterSchema = new mongoose.Schema<IUserType>(
  {
    fullName: {
      type: String,
      required: [true, "Full Name cannot be empty"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email cannot be empty"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: [true, "Phone number cannot be empty"],
      match: [/^[0-9]{10,15}$/, "Invalid phone number"],
    },
    password: {
      type: String,
      required: [true, "Password cannot be empty"],
    },
  },
  { timestamps: true }
);
export default userRegisterSchema;