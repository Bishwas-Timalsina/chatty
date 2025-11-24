import { Request, Response } from "express";
import User from "../../../models/userRegisterModel";

const getUserList = async (req: Request, res: Response) => {
  const cleanReq = {
    headers: req.headers,
    url: req.url,
    method: req.method,
    user: req.user,
    params: req.params,
    query: req.query,
  };
  try {
    const users = await User.find({ _id: { $ne: cleanReq?.user?.id } }).select(
      "-password"
    );
    return res.status(200).json({
      success: true,
      message: "User list Fetched Successfully",
      data: users,
    });
  } catch (error: any) {
    console.log(error);
  }
};
export default getUserList;
