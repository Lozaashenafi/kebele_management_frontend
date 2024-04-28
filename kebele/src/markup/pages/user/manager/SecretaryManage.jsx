import React, { useState } from "react";
import SecretaryTable from "../../../components/onPage/manager/SecretaryTable";
import AddSecretary from "../../../components/onPage/manager/AddSecretary";
import profileService from "../../../../services/profileService";

function SecretaryManage() {
  const [secretarys, setSecretarys] = useState([]);
  const fetchData = async () => {
    const res = await profileService.getAllSecretary();
    // console.log(res.data);
    setSecretarys(res.data);
    // console.log(secretarys);
  };

  return (
    <>
      <AddSecretary fetchData={fetchData} />
      <SecretaryTable fetchData={fetchData} secretarys={secretarys} />
    </>
  );
}

export default SecretaryManage;
