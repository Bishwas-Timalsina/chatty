import { Navigate, Outlet } from "react-router-dom";
import { SocketProvider } from "../context/SocketProvider";

const ProtectedRoute = () => {
  const AUTH_TOKEN = localStorage?.getItem("AUTH_TOKEN");

  if (!AUTH_TOKEN) {
    return <Navigate to="/" replace />;
  }
  return (
    <SocketProvider>
      <div className="layout">
        <div className="layout-div">Protected Route{<Outlet />}</div>
      </div>
    </SocketProvider>
  );
};

export default ProtectedRoute;
