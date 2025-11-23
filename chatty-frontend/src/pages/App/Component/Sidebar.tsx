import React from "react";
import UserList from "../../../components/Sidebar/UserList";

const Sidebar = () => {
  return (
    <>
      <div className="h-full w-full bg-primary text-accent border-r-2 border-r-black flex flex-col overflow-hidden">
        <UserList />
      </div>
    </>
  );
};

export default Sidebar;
