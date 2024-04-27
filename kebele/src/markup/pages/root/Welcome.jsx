import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigater = useNavigate();
  const HandleLogin = () => {
    navigater("/login");
  };
  return (
    <div className="bg-gray-200 w-screen h-screen p-14">
      <div className="flex justify-center p-3">
        <img
          className="w-96 rounded-full"
          src="https://i.pinimg.com/564x/e4/fc/7b/e4fc7b6b7910b641e72bd7f5e579dbd2.jpg"
          alt="logo"
        />
      </div>
      <h2 className="text-6xl text-center font-medium font-serif">
        Resident Management System
      </h2>
      <p className="text-2xl text-center mt-11 ">welcome to our system</p>
      <div className="mt-4 flex justify-center font-medium ">
        <Button onClick={HandleLogin} variant="outlined">
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
