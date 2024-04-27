import { useState } from "react";
import BirthRequest from "../components/form/BirthRequest.jsx";
import FormMenu from "../components/form/FormMenu.jsx";
import IdForm from "../components/form/IdForm.jsx";
import DiethCertificateRequest from "../components/form/DiethCertificateRequest.jsx";

function Forms() {
  const [activeButton, setActiveButton] = useState("id");

  // Initialize state using useReducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex">
      <FormMenu setActiveButton={setActiveButton} />
      {activeButton === "id" ? <IdForm /> : <></>}
      {activeButton === "bd" ? <BirthRequest /> : <></>}
      {activeButton === "dc" ? <DiethCertificateRequest /> : <></>}
    </div>
  );
}

export default Forms;
