import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Text from "../../components/Atomic/Text";
import usePostData from "../../hooks/usePostData";
import { StyledInput } from "../../Styled/Styled";
import { registerSchema } from "../../schema/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Notification from "../../components/Global/Notificatin";
import type {
  NotificationProps,
  RegisterFormInputs,
} from "../../Interface/Interface";
import { APP } from "../../config/path";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const [notif, setNotif] = useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate();
  const { isLoading, error, postData } = usePostData();
  const { setAuthToken } = useAuth();

  const showNotification = (message: string, severity: "success" | "error") => {
    setNotif({ open: true, message, severity });
    setTimeout(() => {
      setNotif({ open: false, message: "", severity: "success" });
    }, 3000);
  };

  const onSubmit = async (data: RegisterFormInputs) => {
    const endPoint = "auth/register";
    try {
      const response = await postData(endPoint, data);
      if (response?.status === 200) {
        const authenticationToken = response?.data?.accessToken;
        if (authenticationToken) {
          setAuthToken(authenticationToken);
        }
        showNotification("User Registered Successfully", "success");

        console.log(response);
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
    <div>
      <Notification
        open={notif.open}
        message={notif.message}
        severity={notif.severity}
        onClose={() => setNotif({ ...notif, open: false })}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <div>
          <Text
            content="Full Name"
            className="text-sm font-medium text-gray-700"
          />
          <StyledInput type="text" {...register("fullName")} />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Text content="Email" className="text-sm font-medium text-gray-700" />
          <StyledInput type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Text
            content="Contact Number"
            className="text-sm font-medium text-gray-700"
          />
          <StyledInput type="text" {...register("contactNumber")} />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
            <Text
              content="Confirm Password"
              className="text-sm font-medium text-gray-700"
            />
            <StyledInput type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white py-2 rounded-md font-semibold hover:bg-accent/80 transition"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
