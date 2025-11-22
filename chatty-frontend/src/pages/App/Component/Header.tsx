import { Tooltip } from "@mui/material";
import Text from "../../../components/Atomic/Text";
import { useSocket } from "../../../context/SocketContext";
import { Circle, CircleQuestionMark, UserRound } from "lucide-react";

const Header = () => {
  const { socket, isConnected } = useSocket();
  console.log(socket);
  return (
    <>
      <div className="bg-black text-secondary sticky top-0 z-50 py-6">
        <div className="component-padding-x flex items-center justify-between">
          <div className="flex items-center">
            <Text size="18px" weight="500" content="Chatty" />
          </div>

          <div className="flex justify-center items-center gap-4">
            <Tooltip content="Help" placement="left" title="help" arrow={true}>
              <CircleQuestionMark className="hover:text-accent cursor-pointer" />
            </Tooltip>
            <div className="bg-secondary/60 flex justify-center items-center p-0.5 rounded-md gap-1.5 cursor-pointer">
              <UserRound size={20} />
              <Text size="12px" weight="400" content="Username" />
              <Circle
                size={16}
                color={isConnected ? "green" : "red"}
                fill="green"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
