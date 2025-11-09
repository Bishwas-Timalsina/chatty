import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const AuthLayout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout-div">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
