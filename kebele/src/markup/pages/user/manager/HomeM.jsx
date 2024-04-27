import React, { useState } from "react";
import SideBar from "../../../components/custom/SideBar";
import Header from "../../../components/custom/Header";
import SearchBar from "../../../components/custom/SearchBar";
import Tables from "../../../components/custom/Table";
import SecretaryTable from "../../../components/onPage/manager/SecretaryTable";
import GenderStat from "../../../components/onPage/manager/GenderStat";
import AgeStat from "../../../components/onPage/manager/AgeStat";
import ResidentTable from "../../../components/onPage/manager/ResidentTable";

function HomeM() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");
  const handelNav = (a) => {
    setActive(a);
  };
  const navList = [
    "ID Request",
    ["Mendermeri Approved", "Given"],
    "Secretory",
    "Residents",
    "Statistic",
  ];
  return (
    <>
      <div className={openMenu ? "containerGrid" : ""}>
        {openMenu && <SideBar handelNav={handelNav} navList={navList} />}
        <div>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <SearchBar />
          <Tables active={active} />
          {active === "Secretory" && <SecretaryTable />}
          {active === "Residents" && (
            <>
              <ResidentTable />
            </>
          )}
          {active === "Statistic" && (
            <>
              <GenderStat />
              <AgeStat />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeM;
