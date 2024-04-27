import Button from "@mui/material/Button";
import { useState } from "react";

function FormMenu({ setActiveButton }) {
  // Handler for button click
  const handleClick = (type) => {
    // console.log(type);
    setActiveButton(type);
  };

  return (
    <>
      <div className="bg-gray-200 w-2/5 p-14">
        <div className="flex justify-center p-8">
          <img
            className="w-60 rounded-full"
            src="https://i.pinimg.com/564x/e4/fc/7b/e4fc7b6b7910b641e72bd7f5e579dbd2.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-2xl text-center font-medium font-serif">
          Resident Management System
        </h2>
        <p className="text-lg text-center mt-1 mb-4 ">Welcome to our system</p>
        <div className="text-center flex flex-col gap-2">
          <Button onClick={() => handleClick("id")} variant="outlined">
            ID
          </Button>
          <Button onClick={() => handleClick("bd")} variant="outlined">
            Birth Certificate
          </Button>
          <Button onClick={() => handleClick("dc")} variant="outlined">
            Death Certificate
          </Button>
        </div>
      </div>
    </>
  );
}

export default FormMenu;
