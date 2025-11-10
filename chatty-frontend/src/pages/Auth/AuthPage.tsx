import { useState } from "react";
import Lottie from "lottie-react";

import Text from "../../components/Atomic/Text";
import loginAnimation from "../../assets/animation/Login.json";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="layout">
      <section className="w-full bg-primary min-h-screen py-16 md:py-24 px-6 md:px-12 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className={`flex justify-center ${
              isLogin ? "order-2 md:order-2" : "order-1 md:order-1"
            }`}
          >
            <Lottie
              animationData={loginAnimation}
              loop
              className="max-w-md w-full"
            />
          </div>

          <div
            className={`space-y-6 ${
              isLogin ? "order-1 md:order-1" : "order-2 md:order-2"
            }`}
          >
            <Text
              content={isLogin ? "Welcome Back" : "Create an Account"}
              className="text-3xl md:text-4xl font-semibold text-secondary text-center"
            />

            {isLogin ? <Login /> : <Register />}

            <div className="text-center">
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="text-accent hover:underline font-medium cursor-pointer"
              >
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
