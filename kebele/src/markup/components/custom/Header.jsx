import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Person2Icon from "@mui/icons-material/Person2";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { json, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header({ openMenu, setOpenMenu }) {
  const [isOpenProfile, setIsOpenProfile] = useState(false); // Corrected state variable name
  const navigater = useNavigate();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    // console.log(openMenu);
  };
  const toggleDropdown = () => {
    setIsOpenProfile(!isOpenProfile); // Corrected state variable name
  };
  const BackToHome = () => {
    navigater("/secretary/home");
  };

  return (
    <>
      <nav className="flex justify-between w-full py-1 pb-2 h-18 text-white bg-sky-900 items-center text-xl px-16 border-b border-gray-600 relative">
        <div className="flex">
          <MenuIcon className="absolute top-3 left-2" onClick={handleMenu} />

          <div onClick={BackToHome} className="ml-6 ">
            Logo
          </div>
        </div>
        <SearchBar />
        <div className="flex gap-8  items-centers">
          <span className="pt-2 pr-16">
            <LocationOnIcon /> Location
          </span>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" variant="Info">
              <Person2Icon
                id="dropdown-basic"
                onClick={toggleDropdown}
                aria-expanded={isOpenProfile}
                aria-haspopup="true"
                aria-controls="dropdown"
              ></Person2Icon>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
              <Dropdown.Item href="#/action-3">LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="pt-1">
            <SettingsIcon />
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;
