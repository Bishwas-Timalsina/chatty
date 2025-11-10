const register = async (req: any, res: any) => {
  try {
    console.log("Register endpoint hit!");
    res.status(200).json({ message: "Register endpoint working fine" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export default register;
