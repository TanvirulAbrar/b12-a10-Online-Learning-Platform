import React, { use } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { motion } from "framer-motion";
import { GraduationCap, Mail, ArrowLeft } from "lucide-react";
import useTheme from "../hooks/useTheme";

const ForgetPassWord = () => {
  const { forgetPassWord } = use(AuthContext);

  const handelForgetPassward = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast("Check your email for reset instructions");

    forgetPassWord(email)
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const { theme, textColor } = useTheme();

  return (
    <div
      className={` flex w-full min-h-screen overflow-hidden bg-base dark:bg-slate-900 transition-colors duration-300`}
    >
      {/* Left Side: Hero Section (Visible on Desktop) */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-16 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
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
            Don't worry, we've got you covered.
          </h1>
          <p className="text-lg font-medium text-white/80">
            Recover your account in just a few steps and get back to learning.
          </p>
        </div>
        <div className="relative z-10 opacity-60">
          <p className="text-sm font-medium">Olearn Platform © 2024</p>
        </div>
        {/* Abstract decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full border-[60px] border-white -top-24 -right-24"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border-[40px] border-white -bottom-12 -left-12"></div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base dark:bg-slate-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="space-y-2 text-center lg:text-left">
            <h2
              className={`${textColor} dark:text-white text-3xl font-bold tracking-tight`}
            >
              Forgot Password?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>
          </div>

          <form onSubmit={handelForgetPassward} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-slate-700 dark:text-slate-200 text-sm font-semibold">
                Email Address
              </label>
              <div className="relative group">
                <input
                  name="email"
                  className="w-full h-12 px-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-base dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                  placeholder="name@example.com"
                  type="email"
                  required
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-purple-600 transition-colors" />
              </div>
            </div>

            <button
              className="w-full h-14 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 dark:shadow-none"
              type="submit"
            >
              Send Reset Link
            </button>
          </form>

          <div className="flex justify-center">
            <NavLink
              to="/login"
              className="inline-flex items-center gap-2 text-purple-600 font-bold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgetPassWord;
