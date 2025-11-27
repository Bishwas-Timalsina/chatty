import Message from "../../../models/messageModel";
export const deleteOldMessages = async () => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const result = await Message.deleteMany({
      createAt: { $lt: twentyFourHoursAgo },
    });
    console.log(`Deleted${result?.deletedCount} messages older than 24 hours`);
  } catch (erorr: any) {
    throw "Error deleting old message";
  }
};
