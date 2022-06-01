import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Profile from "../images/profile.png";
import Logo from "../images/home_logo.png";
import { setUser, clearUser } from "../redux/actions/userAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import request from "../async/request";

const Header = ({ headless, bgpur, textwhite }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [menuBar, setMenuBar] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const userToken = useSelector((state) => state.user.Token);
  
  const handleMenu = () => {
    setMenuBar((prevMenuBar) => !prevMenuBar);
  };
  const logout = () => {
    console.log(userToken);
    request
      .get(`https://freehouses.herokuapp.com/api/v1/logout/`, {
        headers: {
          Authorization: "Token" + " " + userToken
        }
      })
      .then(() => {
        dispatch(clearUser())
        localStorage.clear();
        Navigate("/login");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <header
      className={`shadow z-30 fixed left-0 w-full top-0 py-3 md:py-0 md:h-18 md:pt-3.5 bg-white trans px-4 md:px-8 md:px-5 overflow-hidden ${headless}
	    ${menuBar ? "h-80 md:h-18" : "h-16"}`}
    >
      <div className="lg:grid md:flex md:justify-between grid-cols-3 container items-center">
        <div className="flex col-span-1 items-center justify-between">
          <Link
            to="/"
            className={`text-3xl ${textwhite} font-roboto font-bold logo`}
          >
            <img
              src={Logo}
              alt="housefree"
              className={`w-20 animate-bounce ${textwhite}`}
            />
          </Link>
          <button className="md:hidden" onClick={handleMenu}>
            <FaBars size={20} />
          </button>
        </div>

        <nav
          className={`grid md:grid-cols-2 col-span-2 lg:gap-20 pl-3 md:pl-0 trans slide
			`}
        >
          <ul className="flex flex-col md:items-center md:flex-row gap-y-3 md:gap-5 md:justify-evenly lg:justify-between mt-5 md:mt-0">
            {username ? (
              ""
            ) : (
              <li className={splitLocation[1] === "login" ? "active-nav" : ""}>
                <Link to="/login">Login</Link>
              </li>
            )}

            <li className={splitLocation[1] === "about-us" ? "active-nav" : ""}>
              <Link to="/about-us">About Us</Link>
            </li>
            <li
              className={splitLocation[1] === "contact-us" ? "active-nav" : ""}
            >
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 gap-y-3 gap-x-4 lg:justify-end">
            {username ? (
              <>
                <li className={`xl:mr-4`}>
                  <Link to="/"> {username}</Link>
                </li>
                <li className="text-3xl hidden md:block text-gray-400">|</li>
                <li
                  className="border border-gray-300 pl-3 pr-1 py-1 flex md:gap-x-1 xl:gap-x-3 justify-between items-center rounded-lg cursor-pointer"
                  onClick={logout}
                >
                  Log Out
                </li>
              </>
            ) : (
              <>
                <li
                  className={`xl:mr-4 ${
                    splitLocation[1] === "agent-signup" ? "active-nav" : ""
                  }`}
                >
                  <Link to="/agent-signup">Become an Agent</Link>
                </li>
                <li className="text-3xl hidden md:block text-gray-400">|</li>
                <li className="border border-gray-300 pl-3 pr-1 py-1 flex md:gap-x-1 xl:gap-x-3 justify-between items-center rounded-lg">
                  <Link to="/signup">Sign Up </Link>
                  <Link to="/agent-profile">
                    <img
                      className="w-8 border border-gray-300 rounded-xl object-cover"
                      src={Profile}
                      alt="profile"
                    />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
