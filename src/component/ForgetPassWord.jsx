import React, { use } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const ForgetPassWord = () => {
  const { forgetPassWord } = use(AuthContext);

  const handelForgetPassward = (event) => {
    event.preventDefault();
    toast("Check email");
    const email = event.target.email.value;
    forgetPassWord(email)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-5 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover">
      <div className=" card backdrop-blur-md bg-white/30 border border-white/40 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
        <div className="card-body">
          <form action="" onSubmit={handelForgetPassward}>
            <fieldset className="fieldset">
              <label className="label">Email</label>

              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />

              <div>
                <a className="link link-hover"></a>
              </div>
              <button className="btn skeleton rounded mt-4 relative overflow-hidden">
                Get email
                <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-[#be4fcd] opacity-50"></span>
              </button>
            </fieldset>

            <NavLink to={"/login"} className="my-6 underline">
              Login
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassWord;
