import { createContext, useContext } from "react";
import type { SocketContextType } from "../Interface/Interface";

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});
export const useSocket = () => useContext(SocketContext);
