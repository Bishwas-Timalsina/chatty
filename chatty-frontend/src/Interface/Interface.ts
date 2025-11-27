import { Socket } from "socket.io-client";

import { type AlertColor } from "@mui/material";
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
export interface LoginFormInputs {
  email: string;
  password: string;
}
export interface RegisterFormInputs {
  fullName: string;
  email: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
}

export interface NotificationProps {
  message: string;
  severity: AlertColor;
  open: boolean;
  onClose?: () => void;
}

export interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

export interface IUserDetail {
  data: {
    fullName: string;
    email: string;
    id?: string;
  };
}
export interface IUserItem {
  _id: number;
  fullName: string;
  typing?: boolean;
}
export interface IMessage {
  senderId: string;
  text: string;
  createdAt?: string;
  sender: "me" | "other";
  avatar?: string;
}
