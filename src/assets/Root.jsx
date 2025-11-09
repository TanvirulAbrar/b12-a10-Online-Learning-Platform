import React, { use } from "react";
import { FcAbout } from "react-icons/fc";
import { NavLink, Outlet } from "react-router";
import Navbar from "../component/Navbar";
import AuthContext from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import Footer from "../component/Footer";

const Root = () => {
  const authinfo = use(AuthContext);
  // console.log(authinfo);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
