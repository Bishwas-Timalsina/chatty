import mongoose from "mongoose";
import { IUserType } from "../../../interface/Interface";
import authManager from "../../../managers/authManager";

const register = async (req: any, res: any, next: any) => {
  try {
    const { fullName, contactNumber, email, password } = req?.body;

    const userModel = mongoose.model<IUserType>("User");
    if (!fullName || !contactNumber || !email || !password) {
      throw "Sorry please include all fields";
    }
    const userData = await userModel.create<IUserType>({
      fullName,
      contactNumber,
      email,
      password,
    });
    const accessToken = authManager({
      id: userData?._id,
      fullName,
      email,
    });
    res.status(200).json({
      status: "Success",
      message: "Successfully registered to Chatty",
      accessToken,
    });
  } catch (error: any) {
    next(error); //
  }
};
export default register;
