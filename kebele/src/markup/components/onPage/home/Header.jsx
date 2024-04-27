import React from "react";
import logo1 from "../../../../assets/Image/logo1.jpg";
import { Link } from "react-router-dom";

function Header({ navigate }) {
  return (
    <>
      <header role="banner" className="bg-white">
        <img
          className="my-0"
          id="logo-main"
          src={logo1}
          width="200"
          height="100"
          alt="Logo Thing main logo"
        />
        <nav
          id="navbar-primary"
          className="navbar navbar-default mb-0"
          role="navigation"
        >
          <div className="container-fluid h-7">
            <div className="flex gap-5 mx-auto">
              <div
                className="cursor-pointer hover:text-cyan-600 font-bold "
                onClick={() => navigate("news")}
              >
                News
              </div>
              <div
                className="cursor-pointer hover:text-cyan-600 font-bold "
                onClick={() => navigate("forms")}
              >
                Requests
              </div>
              <div
                className="cursor-pointer hover:text-cyan-600 font-bold "
                onClick={() => navigate("map")}
              >
                Map
              </div>
              <div
                className="cursor-pointer hover:text-cyan-600 font-bold "
                onClick={() => navigate("contact")}
              >
                Contact
              </div>
              <Link to="/login">
                <div className="cursor-pointer hover:text-cyan-600 font-bold ">
                  Log In
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
