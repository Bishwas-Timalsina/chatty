import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const AUTH_TOKEN = localStorage?.getItem("AUTH_TOKEN");

  if (!AUTH_TOKEN) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="layout">
      <div className="layout-div">Protected Route</div>
    </div>
  );
};

export default ProtectedRoute;
