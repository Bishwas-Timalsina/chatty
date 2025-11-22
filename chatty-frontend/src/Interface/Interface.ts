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
