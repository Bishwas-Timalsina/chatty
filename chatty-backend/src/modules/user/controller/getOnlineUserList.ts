import { Request, Response } from "express";
import { getOnlineUsers } from "../../../websocket/Socket";

const getOnlineUserList = (_req: Request, res: Response) => {
  const online = getOnlineUsers();
  res?.status(200)?.json({
    success: true,
    onlineUsers: online,
  });
};
export default getOnlineUserList;
