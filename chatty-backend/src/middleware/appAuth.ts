import jwt from "jsonwebtoken";
const appAuth = (req: any, res: any, next: any) => {
  try {
    const accessToken = req?.headers?.authorization
      ?.replace("Bearer ", "")
      .trim();
    if (!accessToken) {
      throw new Error("Access Token invalid");
    }
    const JWT_SALT = process.env.JWT_SALT!;
    const jwtPayload = jwt.verify(accessToken, JWT_SALT);
    req.user = jwtPayload;
  } catch (e: any) {
    res.status(400).json({
      status: "Error",
      message: "unauthorized Error",
    });
    return;
  }
  next();
};
export default appAuth;
