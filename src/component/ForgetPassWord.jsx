import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { Eye, EyeOff, CheckCircle, School, Mail, ArrowLeft, ChevronDown } from "lucide-react";
import AuthContext from "../context/AuthContext";
import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";

const ForgetPassWord = () => {
  const { forgetPassWord } = useContext(AuthContext);
  const { theme } = useTheme(); 

  const [email, setEmail] = useState("");

  const isDark = theme === "dark";

  const handleForgetPassword = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    toast.info("Sending reset instructions...");

    forgetPassWord(email.trim())
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Failed to send reset email. Try again.");
      });
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-display transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
     

      {/* Main Content */}
      <main
        className={`flex-1 flex items-center justify-center p-6 transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-br from-[#101922] via-[#101922] to-[#137fec]/10"
            : "bg-gradient-to-br from-[#f6f7f8] via-[#f6f7f8] to-[#137fec]/5"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-[480px] rounded-xl shadow-xl overflow-hidden border transition-colors duration-300 ${
            isDark
              ? "bg-[#1a242f] border-[#2a3541]"
              : "bg-white border-[#dbe0e6]"
          }`}
        >
          <div className="p-8">
            {/* Icon and Headline */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#137fec]/10 dark:bg-[#137fec]/20 p-4 rounded-full">
                <Mail className="text-[#137fec] size-10" />
              </div>
            </div>
            <h1
              className={`tracking-light text-[28px] font-bold leading-tight text-center pb-2 ${
                isDark ? "text-white" : "text-[#111418]"
              }`}
            >
              Forgot Password?
            </h1>

            {/* Body Text */}
            <p
              className={`text-base font-normal leading-normal pb-8 text-center ${
                isDark ? "text-[#94a3b8]" : "text-[#617589]"
              }`}
            >
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            {/* Form */}
            <form onSubmit={handleForgetPassword}>
              <div className="flex flex-col gap-4 py-3">
                <label className="flex flex-col w-full">
                  <p
                    className={`text-sm font-semibold leading-normal pb-2 ${
                      isDark ? "text-gray-200" : "text-[#111418]"
                    }`}
                  >
                    Email Address
                  </p>
                  <div className="relative">
                    <Mail
                      className={`absolute left-4 top-1/2 -translate-y-1/2 size-5 ${
                        isDark ? "text-[#94a3b8]" : "text-[#617589]"
                      }`}
                    />
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`flex w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border h-14 pl-12 pr-4 text-base font-normal leading-normal placeholder:text-[#617589] transition-all ${
                        isDark
                          ? "bg-[#101922] border-[#2a3541] text-white placeholder:text-[#4a5568]"
                          : "bg-white border-[#dbe0e6] text-[#111418]"
                      }`}
                      placeholder="e.g. name@domain.com"
                      type="email"
                      required
                    />
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex py-4">
                <button
                  type="submit"
                  className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-md ${
                    isDark
                      ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/15"
                      : "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/20"
                  }`}
                >
                  <span className="truncate">Send Reset Link</span>
                </button>
              </div>

              {/* Back to Login Link */}
              <div className="text-center pt-4">
                <NavLink
                  to="/login"
                  className={`text-sm font-semibold flex items-center justify-center gap-1 hover:underline ${
                    isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                  }`}
                >
                  <ArrowLeft className="size-4" />
                  Back to Login
                </NavLink>
              </div>
            </form>
          </div>

          <div
            className={`p-4 text-center border-t transition-colors ${
              isDark ? "bg-[#101922]/50 border-[#2a3541]" : "bg-[#f6f7f8] border-[#dbe0e6]"
            }`}
          >
            <p
              className={`text-xs ${
                isDark ? "text-[#94a3b8]" : "text-[#617589]"
              }`}
            >
              Need help?{" "}
              <a
                className={`hover:underline ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
                href="#"
              >
                Contact Support
              </a>
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        className={`py-6 text-center border-t transition-colors ${
          isDark ? "bg-[#1a242f] border-[#2a3541]" : "bg-white border-[#dbe0e6]"
        }`}
      >
        <p
          className={`text-sm ${
            isDark ? "text-[#94a3b8]" : "text-[#617589]"
          }`}
        >
          O-Learn Platform © 2024. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ForgetPassWord;