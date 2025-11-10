import Text from "../../components/Atomic/Text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/Schema";
import type { RegisterFormInputs } from "../../Interface/Interface";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Register data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <div>
        <Text
          content="Full Name"
          className="text-sm font-medium text-gray-700"
        />
        <input
          type="text"
          {...register("name")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-accent outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

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

      <div>
        <Text
          content="Confirm Password"
          className="text-sm font-medium text-gray-700"
        />
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-accent outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white py-2 rounded-md font-semibold hover:bg-accent/80 transition"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
