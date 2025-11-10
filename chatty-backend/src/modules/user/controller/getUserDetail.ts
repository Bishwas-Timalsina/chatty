const getUserDetail = async (req: any, res: any) => {
  res.status(200).json({
    status: "Success",
    message: "User Info",
    data: req?.user,
  });
};
export default getUserDetail;
