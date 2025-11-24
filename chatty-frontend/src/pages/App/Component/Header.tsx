import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import Text from "../../../components/Atomic/Text";
import useFetchData from "../../../hooks/useFetchData";
import { useSocket } from "../../../context/SocketContext";
import type { IUserDetail } from "../../../Interface/Interface";
import { Circle, CircleQuestionMark, UserRound } from "lucide-react";

const Header = () => {
  const { isConnected } = useSocket();
  const [userDetail, setUserDetail] = useState<IUserDetail | null>();
  const { fetchData } = useFetchData();

  const handleFetchData = async () => {
    const endPoint = "user";
    try {
      const response = await fetchData(endPoint);
      if (response?.status === 200) {
        localStorage?.setItem("USER_NAME", response?.data?.data?.fullName);
        setUserDetail(response?.data);
      } else {
        setUserDetail(null);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);

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
              <Text
                size="14px"
                weight="400"
                className="capitalize"
                content={userDetail?.data?.fullName}
              />
              <Circle
                size={12}
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
