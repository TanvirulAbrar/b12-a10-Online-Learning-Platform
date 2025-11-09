import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="mx-auto text-center text-9xl font-bold text-[#28937c]">
        404
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
