import { MoreVertical, SendHorizonal } from "lucide-react";
import { Avatar } from "@mui/material";
import { SendButton, StyledMessageBox } from "../../../Styled/Styled";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { useContext, useEffect, useState } from "react";
import type { IMessage, IUserDetail } from "../../../Interface/Interface";
import Text from "../../../components/Atomic/Text";
import { SocketContext } from "../../../context/SocketContext";
import { formatTimeStamp } from "../../../utils/formateDate";

const MessageBox = () => {
  const { id: recieverId } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<IUserDetail | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [messageText, setMessageText] = useState("");

  const { socket } = useContext(SocketContext);

  //User IN Message Box detail Fetch
  const { fetchData } = useFetchData();
  const handleUserDetail = async () => {
    const endPoint = `user/${recieverId}`;
    try {
      const userDetail = await fetchData(endPoint);
      console.log(userDetail?.data?.data);
      setUserInfo(userDetail?.data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    if (!socket) return;
    const handleReceive = (msg: IMessage) => {
      if (msg?.senderId === recieverId) {
        setMessages((prev: any) => [...prev, { ...msg, sender: "other" }]);
      }
    };
    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("receive_message", handleReceive);
    };
  }, [socket, recieverId]);

  const handleSend = () => {
    if (!messageText?.trim() || !socket) return;
    const msg: IMessage = {
      senderId: localStorage.getItem("SENDER_ID")!,
      text: messageText,
      sender: "me",
    };
    socket?.emit("send_private_message", { recieverId, text: messageText });
    setMessages((prev: any) => [...prev, msg]);
    setMessageText("");
  };

  //fetch messsage history

  const fetchMessageHistory = async () => {
    const senderId = localStorage.getItem("SENDER_ID");
    const endPoint = `messages?senderId=${senderId}&recieverId=${recieverId}`;

    try {
      const messageHistory = await fetchData(endPoint);
      if (messageHistory?.data?.messages) {
        const formattedMessages: IMessage[] = messageHistory.data.messages.map(
          (msg: any) => ({
            ...msg,
            sender: msg.sender.toString() === senderId ? "me" : "other",
          })
        );
        setMessages(formattedMessages);
      }
      console.log(messageHistory);
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    handleUserDetail();
    fetchMessageHistory();
  }, [recieverId]);
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
            key={msg.senderId}
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
                {formatTimeStamp(msg?.createdAt)}
              </Text>
            </div>

            {msg.sender === "me" && (
              <Avatar src={msg.avatar} className="w-8 h-8 rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="flex  gap-2 border-t border-gray-200 p-4">
        <StyledMessageBox
          type="text"
          placeholder="Type a message…"
          value={messageText}
          onChange={(e: any) => setMessageText(e.target.value)}
          onKeyDown={(e: any) => e.key === "Enter" && handleSend()}
        />
        <SendButton>
          <SendHorizonal />
        </SendButton>
      </div>
    </div>
  );
};

export default MessageBox;
