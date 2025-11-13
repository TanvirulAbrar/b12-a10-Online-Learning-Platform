import React, { use } from "react";

import { NavLink, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { user, signoutUser } = use(AuthContext);

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
