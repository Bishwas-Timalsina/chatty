import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../constants/Constant";
import { useAuth } from "../context/AuthContext";

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const { AUTH_TOKEN } = useAuth();

  const fetchData = async (endPoint: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${CONSTANTS?.BASE_URL}/${endPoint}`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      setIsLoading(false);
      return response;
    } catch (error: any) {
      setIsLoading(false);
      setError(error?.message);
      return error;
    }
  };
  return { isLoading, error, fetchData };
};
export default useFetchData;
