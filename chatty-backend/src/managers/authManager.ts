import jwt from "jsonwebtoken";
const authManager = ({ id, email, fullName }: any) => {
  const payload = { id, email, fullName };

  const JWT_SALT = process.env.JWT_SALT!;
  const accessToken = jwt.sign(payload, JWT_SALT);
  return accessToken;
};
export default authManager;
