import { MoreVertical, SendHorizonal } from "lucide-react";
import { Avatar } from "@mui/material";
import { SendButton, StyledMessageBox } from "../../../Styled/Styled";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect, useState } from "react";
import type { IUserDetail } from "../../../Interface/Interface";
import Text from "../../../components/Atomic/Text";
import { messages } from "../../../MockData/MockData";

const MessageBox = () => {
  const { id } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<IUserDetail | null>(null);
  const { fetchData } = useFetchData();
  const handleUserDetail = async () => {
    const endPoint = `user/${id}`;
    try {
      const userDetail = await fetchData(endPoint);
      console.log(userDetail?.data?.data);
      setUserInfo(userDetail?.data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    handleUserDetail();
  }, [id]);

  return (
    <div className="w-full h-full bg-primary flex flex-col border border-black shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar alt="User" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <Text size="1.25rem" weight="600" color="var(--color-secondary)">
              {userInfo?.data?.fullName || "Loading..."}
            </Text>
            <Text size="0.875rem" color="#6B7280">
              Online · Last message 10 minutes ago
            </Text>
          </div>
        </div>

        <MoreVertical size={20} className="text-secondary/50 cursor-pointer" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "other" && (
              <Avatar src={msg.avatar} className="w-8 h-8 rounded-full" />
            )}

            <div
              className={`max-w-[65%] px-4 py-3 rounded-2xl shadow-sm ${
                msg.sender === "me"
                  ? "bg-purple-500 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <Text size="0.875rem" lineHeight="1.25rem">
                {msg.text}
              </Text>
              <Text
                size="0.75rem"
                lineHeight="1rem"
                className="mt-1 opacity-70 text-right"
              >
                {msg.time}
              </Text>
            </div>

            {msg.sender === "me" && (
              <Avatar src={msg.avatar} className="w-8 h-8 rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="flex  gap-2 border-t border-gray-200 p-4">
        <StyledMessageBox type="text" placeholder="Type a message…" />
        <SendButton>
          <SendHorizonal />
        </SendButton>
      </div>
    </div>
  );
};

export default MessageBox;
