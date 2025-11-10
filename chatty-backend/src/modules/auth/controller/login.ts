import mongoose from "mongoose";
import { IUserType } from "../../../interface/Interface";
import bcrypt from "bcrypt";
import authManager from "../../../managers/authManager";

const login = async (req: any, res: any, next: any) => {
  try {
    const { email, password } = req?.body;
    const userModel = mongoose.model<IUserType>("User");

    if (!email || !password) throw "Please include all the fields";
    const userData = await userModel.findOne({
      email,
    });
    if (!userData) throw "Cannot find the user associated with this email";
    const checkLoginStatus = await bcrypt.compare(password, userData?.password);
    if (!checkLoginStatus)
      throw Object.assign(new Error("Invalid email or password"), {
        status: 401,
      });

    const accessToken = authManager({
      id: userData?._id,
      fullName: userData?.fullName,
      email: userData?.email,
    });
    res?.status(200)?.json({
      status: "Success",
      message: "Login Successfull",
      accessToken,
    });
  } catch (error: any) {
    next(error);
  }
};
export default login;
