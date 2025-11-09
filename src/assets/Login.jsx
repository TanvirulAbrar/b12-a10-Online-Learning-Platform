import React, { use, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import AuthContext from "../context/AuthContext";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { setloading, signin, signinWthGoogle } = use(AuthContext);
  const [isOk, setisOk] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const handelloginwithgoogle = (event) => {
    event.preventDefault();

    signinWthGoogle()
      .then(() => {
        //console.log(result.user);

        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handellogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password == "" || email == "") {
      toast.error("Please fill in all fields.");
      setisOk("Please fill in all fields");
      return;
    }
    console.log("ok");
    signin(email, password)
      .then(() => {
        //console.log(result.user);
        event.target.reset();
        setisOk("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setisOk(error.message);
        setloading(false);
        toast("email or password error");
      });
  };
  const [eye, seteye] = useState(false);
  return (
    <div className="">
      {/* <div className="card w-80 backdrop-blur-md bg-white/30 border border-white/40 shadow-xl text-white">
        <div className="card-body text-center">
          <h2 className="card-title text-2xl">Glass Effect</h2>
          <p>This is a frosted glass style card using Tailwind + DaisyUI.</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Click</button>
          </div>
        </div>
      </div> */}

      <div className="hero bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover min-h-fit">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login to start your journey with nature</p>
          </div>
          <div className="card backdrop-blur-md bg-white/30 border border-white/40 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form action="" onSubmit={handellogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>

                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />

                  <label className="label">Password</label>
                  <div className="input">
                    <input
                      type={!eye ? "password" : "text"}
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        seteye(!eye);
                      }}
                      className=""
                    >
                      {!eye ? <FaRegEye /> : <IoEyeOffOutline />}
                    </button>
                  </div>

                  <div>
                    <NavLink to={"/forgetpassword"} className="link link-hover">
                      Forgot password?
                    </NavLink>
                  </div>
                  {!isOk == "" && <p className="text-red-600">{isOk}</p>}
                  <button className="btn skeleton rounded mt-4 relative overflow-hidden">
                    login
                    <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-[#be4fcd] opacity-50"></span>
                  </button>
                </fieldset>
                {/* Google */}
                <button
                  onClick={handelloginwithgoogle}
                  className="btn mt-1 w-full bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <NavLink to={"/signin"} className="my-6 underline">
                  create a new account
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
