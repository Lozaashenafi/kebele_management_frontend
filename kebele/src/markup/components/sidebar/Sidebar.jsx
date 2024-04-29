import React, { useEffect, useState } from "react";
import "./sidebar.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = ({ handelNav, navList, active }) => {
  return (
    <div className="admin-sidebar pt-3 px-2 ">
      <div className="logo">
        <span>Logo</span>
        <h2 className=" font-serif text-lg text-cyan-200 ">Mentina</h2>
      </div>
      <hr />
      <div className="menu-list ">
        <li
          onClick={() => handelNav(`${navList[0]}`)}
          className={active === navList[0] ? "item active" : "item "}
        >
          {navList[0]}
        </li>
        <li
          onClick={() => handelNav(`${navList[1]}`)}
          className={active === navList[1] ? "item active" : "item"}
        >
          {navList[1]}
        </li>

        <li
          onClick={() => handelNav(`${navList[2]}`)}
          className={active === navList[2] ? "item active" : "item"}
        >
          {navList[2]}
        </li>

        <li
          onClick={() => handelNav(`${navList[3]}`)}
          className={active === navList[3] ? "item active" : "item"}
        >
          {navList[3]}
        </li>

        <li
          onClick={() => handelNav(`${navList[4]}`)}
          className={active === navList[4] ? "item active" : "item"}
        >
          {navList[4]}
        </li>

        <li
          onClick={() => handelNav(`${navList[5]}`)}
          className={active === navList[5] ? "item active" : "item"}
        >
          {navList[5]}
        </li>

        <li
          onClick={() => handelNav(`${navList[5]}`)}
          className={active === navList[6] ? "item active" : "item"}
        >
          {navList[6]}
        </li>

        <div className="setting">
          <a href="" className="item logout">
            <LogoutOutlinedIcon style={{ fontSize: "24px" }} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
