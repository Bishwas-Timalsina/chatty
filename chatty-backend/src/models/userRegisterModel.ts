import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userRegisterSchema from "../Schema/Schema";

userRegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", userRegisterSchema);
export default User;
