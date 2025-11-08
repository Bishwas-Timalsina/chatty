import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global/Navbar";

const AuthLayout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout-div">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
