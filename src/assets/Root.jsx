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
    <div className="relative">
      {/* <div
        className="
    fixed inset-0
    bg-[url('https://www.shutterstock.com/image-vector/abstract-colorful-background-fluid-shapes-600nw-2395398271.jpg')] bg-cover bg-center bg-no-repeat -z-10"
      ></div> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
