import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import useTheme from "../hooks/useTheme";

const ErrorPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-slate-50"
      }`}
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`text-[10rem] font-black leading-none select-none ${
                isDark ? "text-slate-700" : "text-slate-200"
              }`}
            >
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle
                className={`w-24 h-24 animate-pulse ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1
              className={`text-3xl font-black ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Oops! Page not found
            </h1>
            <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 dark:shadow-none"
            >
              <Home className="w-5 h-5" />
              Go Home
            </NavLink>
            <button
              onClick={() => window.history.back()}
              className={`flex items-center justify-center gap-2 px-8 py-3 font-bold rounded-xl transition-all shadow-sm border ${
                isDark
                  ? "bg-[#101922] text-slate-200 border-slate-700 hover:bg-slate-800"
                  : "bg-base text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
