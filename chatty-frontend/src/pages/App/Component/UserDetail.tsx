import React, { useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState<any>(null);
  const { isLoading, fetchData } = useFetchData();

  const handleFetchData = async () => {
    const endPoint = "user";
    try {
      const response = await fetchData(endPoint);
      setUserDetail(response?.data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <div>
        {isLoading ? <p>Loading...</p> : <p>{userDetail?.data?.fullName} </p>}
      </div>
    </>
  );
};

export default UserDetail;
