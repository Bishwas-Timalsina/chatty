import { Request, Response } from "express";
import User from "../../../models/userRegisterModel";

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req?.params;
  try {
    const users = await User.findById(id).select("-password");
    return res.status(200).json({
      success: true,
      message: "User list Fetched Successfully",
      data: users,
    });
  } catch (error: any) {
    console.log(error);
  }
};
export default getSingleUser;
