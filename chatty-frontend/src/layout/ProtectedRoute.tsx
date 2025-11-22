import { Navigate, Outlet } from "react-router-dom";
import { SocketProvider } from "../context/SocketProvider";
import Header from "../pages/App/Component/Header";
import Footer from "../pages/App/Component/Footer";

const ProtectedRoute = () => {
  const AUTH_TOKEN = localStorage?.getItem("AUTH_TOKEN");

  if (!AUTH_TOKEN) {
    return <Navigate to="/" replace />;
  }
  return (
    <SocketProvider>
      <div className="layout">
        <div className="layout-div max-h-screen h-screen flex flex-col justify-between">
          <Header />
          <div className="component-padding">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </SocketProvider>
  );
};

export default ProtectedRoute;
