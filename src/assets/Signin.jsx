import React, { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GraduationCap } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Signin = () => {
  const { creatUser, updateUser, signinWthGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const [eye, seteye] = useState(false);
  const [isOk, setisOk] = useState("");

  const handelValid = (e) => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value);
    isValid
      ? setisOk("")
      : setisOk(
          "Must contain at least 1 uppercase, 1 lowercase letter and be 6 characters long"
        );
  };

  const handelloginwithgoogle = (e) => {
    e.preventDefault();
    signinWthGoogle()
      .then(() => {
        toast.success("successful");
        navigate("/");
      })
      .catch(console.log);
  };

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValid) return;

    creatUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("successful");
            setisOk("");
            navigate("/");
          })
          .catch(() => setisOk("Profile update failed"));
      })
      .catch((error) => setisOk(error.message));
  };
  const { theme, textColor } = useTheme();
  return (
    <div
      className={`flex w-full min-h-screen overflow-hidden bg-base dark:bg-slate-900 transition-colors duration-300`}
    >
      {/* Left Side: Hero Section (Visible on Desktop) */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-16 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #5b13ec 0%, #1e40af 100%)",
        }}
      >
        <div className="flex items-center gap-3 relative z-10">
          <div className="size-10 bg-base/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <GraduationCap className="text-white size-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Olearn</h2>
        </div>
        <div className="max-w-md relative z-10">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
            Start your learning journey today and transform your future.
          </h1>
          <p className="text-lg font-medium text-white/80">
            Join thousands of students mastering new skills.
          </p>
        </div>
        <div className="flex gap-4 items-center relative z-10">
          <div className="flex -space-x-2">
            {[4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`https://i.pravatar.cc/150?u=${i + 20}`}
                  alt="student"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium">Join 20k+ learners today</p>
        </div>
        {/* Abstract decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full border-[60px] border-white -top-24 -right-24"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border-[40px] border-white -bottom-12 -left-12"></div>
        </div>
      </div>

      {/* Right Side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base dark:bg-slate-900 transition-colors duration-300 overflow-y-auto">
        <div className="w-full max-w-md space-y-8 my-8">
          <div className="space-y-2">
            <h2
              className={`${
                theme === "dark" ? "text-base" : "text-slate-900"
              } dark:text-white text-3xl font-bold tracking-tight`}
            >
              Create Account
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Join the world's leading learning platform.
            </p>
          </div>

          <form onSubmit={handelRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  Photo URL
                </label>
                <input
                  name="photo"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                  placeholder="Photo URL"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                Email Address
              </label>
              <input
                name="email"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="e.g. name@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                Password
              </label>
              <div className="relative group">
                <input
                  name="password"
                  onChange={handelValid}
                  className="w-full h-12 px-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                  type={eye ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => seteye(!eye)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-600 transition-colors"
                >
                  {eye ? (
                    <IoEyeOffOutline className="w-5 h-5" />
                  ) : (
                    <FaRegEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isOk && <p className="text-red-600 text-xs italic">{isOk}</p>}

            <button
              className="w-full h-14 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 dark:shadow-none"
              type="submit"
            >
              Register
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-sm uppercase tracking-widest font-medium">
                Or continue with
              </span>
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
            </div>

            <button
              onClick={handelloginwithgoogle}
              type="button"
              className={`${
                theme === "dark" ? "text-gray-500" : "text-slate-900"
              } w-full flex items-center justify-center gap-2 h-12 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium  dark:text-white`}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Google
            </button>
          </form>

          <p className="text-center text-slate-500 dark:text-slate-400 font-medium pb-4">
            Already have an account?
            <NavLink
              to="/login"
              className="text-purple-600 font-bold hover:underline ml-1"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
