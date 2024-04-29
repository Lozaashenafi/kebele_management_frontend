import { useEffect, useState } from "react";
// import SideBar from "../../../components/custom/SideBar.jsx";
// import { Search } from "@mui/icons-material";
import Header from "../../../components/custom/Header.jsx";
import SearchBar from "../../../components/custom/SearchBar.jsx";
import Tables from "../../../components/custom/Table.jsx";
// import { useAuth } from "../../../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import IdTable from "../../../components/onPage/secretary/IdTable.jsx";
import BirthTable from "../../../components/onPage/secretary/BirthTable.jsx";
import GivenIdTable from "../../../components/onPage/manager/GivenIdTable.jsx";
import ManagerAprovedTable from "../../../components/onPage/secretary/ManagerAprovedTable.jsx";
import ResidentTable from "../../../components/onPage/manager/ResidentTable.jsx";
import Sidebar from "../../../components/sidebar/Sidebar.jsx";

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
    "BDC",
    "Given",
    "Manager Approved",
    "Residents",
  ];

  // useEffect(() => {
  //   console.log(isLoggedIn);
  //   if (!isLoggedIn) {
  //     navigater("/");
  //   }
  // }, [isLoggedIn]);
  return (
    <>
      <div className={openMenu ? "containerGrid " : ""}>
        {/* {openMenu && <SideBar handelNav={handelNav} navList={navList} />} */}
        {openMenu && (
          <Sidebar handelNav={handelNav} navList={navList} active={active} />
        )}
        <div className="">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          {/* {active === "" && <IdTable />} */}
          {active === "ID Request" && <IdTable />}
          {active === "BDC" && <BirthTable />}
          {active === "Given" && <GivenIdTable />}
          {active === "Manager Approved" && <ManagerAprovedTable />}
          {active === "Residents" && <ResidentTable />}
        </div>
      </div>
    </>
  );
}

export default Home;
