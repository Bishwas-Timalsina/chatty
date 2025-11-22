import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { SocketContext } from "./SocketContext";

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const token = localStorage?.getItem("AUTH_TOKEN");
    const socket = io("http://localhost:8000", {
      auth: { token },
      transports: ["websocket"],
    });
    socketRef.current = socket;

    socket?.on("connect", () => {
      setIsConnected(true);
    });
    socket?.on("connect_error", () => {
      setIsConnected(false);
    });

    socket?.on("disconnect", () => {
      setIsConnected(false);
    });
    return () => {
      socket?.disconnect();
    };
  }, []);
  return (
    <>
      <SocketContext.Provider
        value={{ socket: socketRef?.current, isConnected }}
      >
        {children}
      </SocketContext.Provider>
    </>
  );
};
