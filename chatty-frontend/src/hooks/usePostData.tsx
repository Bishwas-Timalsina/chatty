import { useState } from "react";
import type {
  LoginFormInputs,
  RegisterFormInputs,
} from "../Interface/Interface";
import axios from "axios";
import { CONSTANTS } from "../constants/Constant";

const usePostData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const postData = async (
    endPoint: string,
    data: RegisterFormInputs | LoginFormInputs
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${CONSTANTS.BASE_URL}/${endPoint}`,
        data
      );
      return response;
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
      return error;
    }
  };
  return { isLoading, error, postData };
};
export default usePostData;
