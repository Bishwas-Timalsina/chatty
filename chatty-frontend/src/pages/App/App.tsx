import Text from "../../components/Atomic/Text";
import Lottie from "lottie-react";
import Chatting from "../../assets/animation/Chatting.json";
const App = () => {
  const userName = localStorage?.getItem("USER_NAME");
  return (
    <div className="h-full flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-primary to-accent text-white text-center px-4">
      <Lottie animationData={Chatting} loop className="max-w-md w-full" />
      <Text
        content={`Welcome, ${userName}!`}
        size="54px"
        weight="800"
        className="capitalize"
      />
      <Text
        content="Click on any users to start chatting"
        className="underline"
        size="12px"
      />
    </div>
  );
};

export default App;
