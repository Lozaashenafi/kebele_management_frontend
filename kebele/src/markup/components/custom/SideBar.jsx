import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function SideBar({ handelNav, navList }) {
  const [displaySubmenu, setDisplaySubmenu] = useState(false);

  // Function to toggle display of submenu
  const toggleSubmenu = (e) => {
    e.preventDefault(); // Prevent default action of the event
    setDisplaySubmenu(!displaySubmenu);
  };

  return (
    <>
      <div className="pt-5 relative containerFlex backGroundMenu">
        <h1 className="mb-5 ml-3">
          <a href="/" className="text-2xl no-underline text-white font-mono">
            Mentian
          </a>
        </h1>
        <ul className="mb-5 no-underline">
          <li className={displaySubmenu ? "active" : ""}>
            <a
              href="#homeSubmenu"
              aria-expanded={displaySubmenu}
              className="no-underline text-white p-2"
              onClick={(e) => toggleSubmenu(e)} // Pass the event object (e) to the function
            >
              {navList[0]}
              <ArrowDropDownIcon />
            </a>
            {displaySubmenu && (
              <ul className="" id="homeSubmenu">
                {navList[1].map((a, i) => {
                  return (
                    <li
                      className="p-2"
                      onClick={() => handelNav(`${a}`)}
                      key={i}
                    >
                      <a href="#" className="no-underline text-white">
                        {a}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
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
