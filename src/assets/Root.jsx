import React from "react";
import { FcAbout } from "react-icons/fc";
import { NavLink, Outlet } from "react-router";
import Navbar from "../component/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
