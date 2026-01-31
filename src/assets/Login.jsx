import React, { use, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import AuthContext from "../context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GraduationCap } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Login = () => {
  const { setloading, signin, signinWthGoogle } = use(AuthContext);
  const [isOk, setisOk] = useState("");
  const [eye, seteye] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handelloginwithgoogle = (e) => {
    e.preventDefault();
    signinWthGoogle()
      .then(() => {
        toast("successful", {
          style: { backgroundColor: "#9333ea", color: "white" },
          progressStyle: { background: "#c79cff" },
        });
        navigate(location.state || "/");
      })
      .catch(console.log);
  };

  const handellogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      setisOk("Please fill in all fields");
      return;
    }

    signin(email, password)
      .then(() => {
        e.target.reset();
        toast.success("successful");
        setisOk("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        setisOk(error.message);
        setloading(false);
        toast.error("Email or password error");
      });
  };
  const { theme, textColor } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-base" : "bg-slate-50"
      } flex w-full min-h-screen overflow-hidden  dark:bg-slate-900 transition-colors duration-300`}
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
            The beautiful thing about learning is that nobody can take it away
            from you.
          </h1>
          <p className="text-lg font-medium text-white/80">— B.B. King</p>
        </div>
        <div className="flex gap-4 items-center relative z-10">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`https://i.pravatar.cc/150?u=${i + 10}`}
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

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base dark:bg-slate-900 transition-colors duration-300">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2
              className={`${
                theme === "dark" ? "text-base" : "text-slate-900"
              }  dark:text-white text-3xl font-bold tracking-tight`}
            >
              Welcome Back
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Please enter your details to sign in.
            </p>
          </div>

          <form onSubmit={handellogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                Email Address
              </label>
              <input
                name="email"
                className="w-full h-14 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="e.g. name@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  Password
                </label>
                <NavLink
                  to="/forgetpassword"
                  size="sm"
                  className="text-sm font-semibold text-purple-600 hover:underline"
                >
                  Forgot Password?
                </NavLink>
              </div>
              <div className="relative group">
                <input
                  name="password"
                  className="w-full h-14 px-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
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

            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-600"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm text-slate-500 dark:text-slate-400"
                htmlFor="remember"
              >
                Remember me for 30 days
              </label>
            </div>

            {isOk && <p className="text-red-600 text-sm">{isOk}</p>}

            <button
              className="w-full h-14 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 dark:shadow-none"
              type="submit"
            >
              Log In
            </button>

            <div className="relative flex items-center py-4">
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
              } w-full flex items-center justify-center gap-2 h-14 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium  dark:text-white`}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Google
            </button>
          </form>

          <p className="text-center text-slate-500 dark:text-slate-400 font-medium">
            Don't have an account?
            <NavLink
              to="/register"
              className="text-purple-600 font-bold hover:underline ml-1"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
