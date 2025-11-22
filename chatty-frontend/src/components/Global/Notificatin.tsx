import { forwardRef } from "react";
import type { NotificationProps } from "../../Interface/Interface";
import { Alert, Snackbar } from "@mui/material";

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ message, severity = "info", open, onClose }, ref) => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        ref={ref}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
);

export default Notification;
