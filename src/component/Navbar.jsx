import React, { use, useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { user, signoutUser } = use(AuthContext);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);
  const navigate = useNavigate();
  const handelsignoutUser = (e) => {
    e.preventDefault();
    console.log("ok");

    signoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>courses</NavLink>
      </li>

      <li>
        <NavLink to={"/dashboard"}>dashboard</NavLink>
      </li>
      {}
    </>
  );
  return (
    <div className="">
      <nav className=" backdrop-blur-md bg-white/30 border border-white/40 w-full shrink-0 mx-auto ">
        <div className="navbar shadow-sm">
          <div className="navbar-start ">
            {
              <button
                className={`w-fit min-md:hidden `}
                popoverTarget="popover-2"
                style={{ anchorName: "--anchor-2" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </button>
            }

            {
              <ul
                className={`w-fit min-md:hidden dropdown menu  rounded-box bg-base-100 shadow-sm`}
                popover="auto"
                id="popover-2"
                style={{ positionAnchor: "--anchor-2" }}
              >
                {links}

                <li className={user ? "hidden" : "flex"}>
                  <NavLink to={"/login"}>login</NavLink>
                </li>
                <li className={user ? "hidden" : "flex"}>
                  <NavLink to={"/register"}>Register </NavLink>
                </li>
              </ul>
            }

            <a
              onClick={() => {
                navigate("/");
              }}
              className="btn btn-ghost text-xl"
            >
              <img src={logo} className="h-full" alt="" />
              O-
              <span className="text-[#4e2ea5]">Learning</span>
            </a>
          </div>
          <div className="navbar-center hidden min-sm:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="swap swap-rotate h-5 w-5"
          >
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </button>
          <div className="navbar-end ">
            {!user && (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="btn  max-[500px]:hidden btn-outline btn-primary mr-1.5"
                >
                  Login{" "}
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="btn max-[500px]:hidden btn-primary"
                >
                  Register
                </button>
              </>
            )}
            {/* <p>{userdata.length}</p>
          <p className="">{userdata[0]}</p>
          <p className="">{userdata[1]}</p> */}

            {
              <button
                className={`w-fit ${!user && "hidden"} `}
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user && (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL}
                      />
                    )}
                    {user && !user.photoURL && (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={"/profile.png"}
                      />
                    )}
                  </div>
                </div>
              </button>
            }

            {user && (
              <ul
                className={`w-fit ${
                  !user && "hidden"
                } translate-x-[-50%] dropdown menu  rounded-box bg-base-100 shadow-sm`}
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                {user && (
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                )}
                <li>
                  {user ? (
                    <a className="" onClick={handelsignoutUser}>
                      Logout{" "}
                    </a>
                  ) : (
                    <NavLink to={"/login"}>login</NavLink>
                  )}
                </li>

                {!user && (
                  <li>
                    <NavLink to={"/register"}>signin</NavLink>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
