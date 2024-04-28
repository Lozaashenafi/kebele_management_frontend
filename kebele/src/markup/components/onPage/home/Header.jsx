import React from "react";
import { Link } from "react-router-dom";

function Header({ navigate, active }) {
  return (
    <>
      <header role="banner" className="bg-white">
        <div className="text-center text-3xl font-serif from-neutral-900 text-cyan-800 p-7">
          Mentina Kebele
        </div>
        <nav
          id="navbar-primary"
          className="navbar navbar-default mb-0"
          role="navigation"
        >
          <div className="container-fluid h-7">
            <div className="flex gap-5 mx-auto">
              <div
                className={`cursor-pointer hover:text-cyan-600 font-bold `}
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
                <div className="cursor-pointer  font-bold px-2 py-1 bg-cyan-600  text-white rounded-lg ">
                  Log In
                </div>
              </Link>
            </div>
            <div
              className="cursor-pointer hover:text-cyan-600 font-bold ml-10"
              onClick={() => navigate("logout")}
            >
              Log out
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
