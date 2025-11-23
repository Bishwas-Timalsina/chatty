import { Navigate, Outlet } from "react-router-dom";
import { SocketProvider } from "../context/SocketProvider";
import Header from "../pages/App/Component/Header";
import Footer from "../pages/App/Component/Footer";
import Sidebar from "../pages/App/Component/Sidebar";

const ProtectedRoute = () => {
  const AUTH_TOKEN = localStorage?.getItem("AUTH_TOKEN");

  if (!AUTH_TOKEN) {
    return <Navigate to="/" replace />;
  }

  return (
    <SocketProvider>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </SocketProvider>
  );
};

export default ProtectedRoute;
