import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Text from "../../components/Atomic/Text";
import type {
  LoginFormInputs,
  NotificationProps,
} from "../../Interface/Interface";
import { loginSchema } from "../../schema/Schema";
import { StyledInput } from "../../Styled/Styled";
import usePostData from "../../hooks/usePostData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP } from "../../config/path";
import Notification from "../../components/Global/Notificatin";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const [notif, setNotif] = useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const showNotification = (message: string, severity: "success" | "error") => {
    setNotif({ open: true, message, severity });
    setTimeout(() => {
      setNotif({ open: false, message: "", severity: "success" });
    }, 3000);
  };

  const { isLoading, error, postData } = usePostData();

  const { setAuthToken } = useAuth();

  const onSubmit = async (data: LoginFormInputs) => {
    const endPoint = "auth/login";
    try {
      const response = await postData(endPoint, data);
      if (response?.status === 200) {
        const authenticationToken = response?.data?.accessToken;
        showNotification("User Registered Successfully", "success");
        if (authenticationToken) {
          setAuthToken(authenticationToken);
        }
        navigate(`/${APP}`);
      } else {
        const errorMessage =
          response?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showNotification(errorMessage, "error");
      }
    } catch (error: any) {
      showNotification(error, "error");
      reset();
    }
  };

  return (
    <>
      <Notification
        open={notif?.open}
        message={notif?.message}
        severity={notif?.severity}
        onClose={() => setNotif({ ...notif, open: false })}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <div>
          <Text content="Email" className="text-sm font-medium text-gray-700" />
          <StyledInput type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Text
            content="Password"
            className="text-sm font-medium text-gray-700"
          />
          <StyledInput type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white py-2 rounded-md font-semibold hover:bg-accent/80 transition"
        >
          {isLoading ? "Loggin In..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
