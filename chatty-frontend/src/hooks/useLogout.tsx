import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogout = () => {
  const { setAuthToken } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthToken(null);
    navigate("/");
  };

  return { handleLogout };
};
