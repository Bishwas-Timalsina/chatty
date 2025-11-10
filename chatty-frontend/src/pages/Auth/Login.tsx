import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Text from "../../components/Atomic/Text";
import type { LoginFormInputs } from "../../Interface/Interface";
import { loginSchema } from "../../schema/Schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <div>
        <Text content="Email" className="text-sm font-medium text-gray-700" />
        <input
          type="email"
          {...register("email")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-accent outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Text
          content="Password"
          className="text-sm font-medium text-gray-700"
        />
        <input
          type="password"
          {...register("password")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-accent outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white py-2 rounded-md font-semibold hover:bg-accent/80 transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
