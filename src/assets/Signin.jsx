import React, { use, useState } from "react";
import AuthContext from "../context/AuthContext";

import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signin = () => {
  const { signinWthGoogle } = use(AuthContext);
  const handelloginwithgoogle = (event) => {
    event.preventDefault();

    signinWthGoogle()
      .then((result) => {
        //console.log(result.user);

        const newUser = {
          email: result.user.email,
          enrolled: [],
        };
        fetch(`http://localhost:3000/enroll?email=${newUser.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("add c", data);
            console.log("Submitted Data:", newUser);
            toast.success(" registered successfully!");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Server error — please try again later!");
          });
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [eye, seteye] = useState(false);
  const { creatUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [isOk, setisOk] = useState("");
  // console.log(user);

  const handelValid = (e) => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value);
    isValid
      ? setisOk("")
      : setisOk(
          "Must have an Uppercase,a Lowercase , letter in the password .must be at least 6 character"
        );
  };

  const handelRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValid) {
      return;
    }
    creatUser(email, password)
      .then((result) => {
        console.log(result.user.accessToken);

        const newUser = {
          email: result.user.email,
          enrolled: [],
        };
        fetch(`http://localhost:3000/enroll?email=${newUser.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("add c", data);
            console.log("Submitted Data:", newUser);
            toast.success(" registered successfully!");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Server error — please try again later!");
          });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setisOk("");

            navigate(location.state || "/");
          })
          .catch((error) => {
            console.log(error);
            setisOk("email or password error");
          });
      })
      .catch((error) => {
        console.log(error);
        setisOk(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] min-h-fit">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6"> start your journey with nature</p>
          </div>
          <div className="card backdrop-blur-md bg-white/30 border border-white/40 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelRegister}>
                <fieldset className="fieldset">
                  <label className="label">name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="name"
                    name="name"
                  />
                  <label className="label">photo</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="photoUrl"
                    name="photo"
                  />
                  <label className="label">email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />

                  <label className="label">Password</label>
                  <div className="input">
                    <input
                      onChange={(e) => handelValid(e)}
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
                    </NavLink>{" "}
                  </div>
                  {!isOk == "" && <p className="text-red-600">{isOk}</p>}
                  <button className="btn skeleton rounded mt-4 relative overflow-hidden">
                    Register
                    <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-[#be4fcd] opacity-50"></span>
                  </button>
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
                </fieldset>
              </form>
              <NavLink to={"/login"} className="link link-hover">
                login
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
