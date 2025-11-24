import { useEffect, useState } from "react";
import Text from "../Atomic/Text";
import { LogOut } from "lucide-react";
import { useLogout } from "../../hooks/useLogout";
import useFetchData from "../../hooks/useFetchData";
import type { IUserItem } from "../../Interface/Interface";

const UserList = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [userList, setUserList] = useState<IUserItem[]>([]);
  const { handleLogout } = useLogout();
  const { isLoading, fetchData } = useFetchData();

  const handleFetchData = async () => {
    const endPoint = "user/list";
    const response = await fetchData(endPoint);
    setUserList(response?.data?.data);
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  const filteredUserList = userList?.filter((user) =>
    user?.fullName?.toLowerCase().includes(userSearch?.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-primary flex flex-col">
      <div className="p-3 border-b">
        <input
          type="text"
          placeholder="Search"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-xl border focus:outline-none"
        />
      </div>

      <div className="px-3 py-2 text-sm font-semibold text-accent border-b">
        Available Users
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredUserList.map((user: IUserItem) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-3 hover:bg-secondary/10 rounded-sm cursor-pointer border-secondary border-b-2 border-r-0 border-l-0 border-t-0 my-1"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-300"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>

              <div>
                <div className="text-sm font-semibold">{user.fullName}</div>
                {/* <div className="text-xs text-gray-500 truncate w-40">
                  {user.typing ? "typing..." : user.message}
                </div> */}
              </div>
            </div>

            {/* <div className="text-xs text-gray-500">{user.time}</div> */}
          </div>
        ))}
      </div>
      <div
        className="bg-accent text-white flex flex-row justify-center items-center gap-2 py-1.5 hover:bg-accent/70 cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut color="white" />
        <Text content="Logout" size="16px" weight="400" />
      </div>
    </div>
  );
};

export default UserList;
