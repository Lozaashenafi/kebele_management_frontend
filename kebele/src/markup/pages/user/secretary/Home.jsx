import { useEffect, useState } from "react";
import SideBar from "../../../components/custom/SideBar.jsx";
// import { Search } from "@mui/icons-material";
import Header from "../../../components/custom/Header.jsx";
import SearchBar from "../../../components/custom/SearchBar.jsx";
import Tables from "../../../components/custom/Table.jsx";
// import { useAuth } from "../../../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");
  const handelNav = (a) => {
    setActive(a);
  };
  // const {
  //   isAdmin,
  //   isManager,
  //   ismenderMeri,
  //   userData,
  //   setUserData,
  //   isLoggedIn,
  //   setIsLoggedIn,
  //   fetchData,
  // } = useAuth();

  const navigater = useNavigate();
  const navList = [
    "ID Request",
    ["Manager Approved", "Mendermeri Approved", "Given"],
    "BDC",
    "DDC",
    "",
  ];

  // useEffect(() => {
  //   console.log(isLoggedIn);
  //   if (!isLoggedIn) {
  //     navigater("/");
  //   }
  // }, [isLoggedIn]);
  return (
    <>
      <div className={openMenu ? "containerGrid" : ""}>
        {openMenu && <SideBar handelNav={handelNav} navList={navList} />}
        <div>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <SearchBar />
          <Tables active={active} />
        </div>
      </div>
    </>
  );
}

export default Home;
