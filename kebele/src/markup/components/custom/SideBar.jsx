import React, { useState } from "react";
function SideBar({ handelNav, navList }) {
  return (
    <>
      <div className="pt-5 relative containerFlex backGroundMenu">
        <h1 className="mb-5 ml-3">
          <a href="/" className="text-2xl no-underline text-white font-mono">
            Mentian
          </a>
        </h1>
        <ul className="mb-5 no-underline">
          <li onClick={() => handelNav(`${navList[0]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[0]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[1]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[1]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[2]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[2]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[3]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[3]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[4]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[4]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[5]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[5]}
            </a>
          </li>
          <li onClick={() => handelNav(`${navList[6]}`)}>
            <a href="#" className="no-underline text-white p-2">
              {navList[6]}
            </a>
          </li>
        </ul>

        <div className="footer">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This template is made with
            <i className="icon-heart" aria-hidden="true"></i> by
            <a href="https://" target="_blank">
              Colorlib.com
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
