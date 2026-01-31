import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  Search,
  ShoppingCart,
  Heart,
  Bell,
  Menu,
  ChevronDown,
  Globe,
  Home,
  BookOpen,
  LayoutDashboard,
  X,
  LogOut,
  User as UserIcon,
  Settings,
} from "lucide-react";
import LogoButton from "./LogoButton";
import useAuth from "../hooks/useAuth";
import ThemeSwitch from "../themes/ThemeSwitch";
import ThemeButton from "../themes/ThemeButton";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  if (isDashboard) return null;
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { user, signoutUser } = useAuth();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handelsignoutUser = (e) => {
    e.preventDefault();
    console.log("ok");

    signoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <span className="text-3xl font-extrabold text-purple-600">
                  Olearn
                </span>
                <div className="ml-4">
                  <ThemeSwitch />
                </div>
              </div>
            </div>

            {/* Search Bar  */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full pl-10 pr-4 py-2.5 bg-base-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <ul className="hidden lg:flex items-center space-x-8 list-none">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-medium transition ${
                        isActive
                          ? "text-purple-600"
                          : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                      }`
                    }
                  >
                    <Home size={18} />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-medium transition ${
                        isActive
                          ? "text-purple-600"
                          : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                      }`
                    }
                  >
                    <BookOpen size={18} />
                    <span>Courses</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-medium transition ${
                        isActive
                          ? "text-purple-600"
                          : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                      }`
                    }
                  >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                {user ? (
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-400 p-0.5 shadow-md hover:scale-105 transition-transform"
                    >
                      <img
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover border-2 border-white dark:border-slate-900"
                        src={user.photoURL || "/profile.png"}
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className={`dropdown-content z-[1] menu p-4 shadow-2xl ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      } dark:bg-slate-800 rounded-[1.5rem] w-64 mt-4 border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200`}
                    >
                      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-700">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-100 dark:border-purple-900/30">
                          <img
                            src={user.photoURL || "/profile.png"}
                            alt="avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span className="font-bold text-slate-900 dark:text-white truncate">
                            {user.displayName || "User"}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {user.email}
                          </span>
                        </div>
                      </div>

                      <li>
                        <NavLink
                          to="/dashboard"
                          className="flex items-center gap-3 py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 text-slate-700 dark:text-slate-200 group"
                        >
                          <LayoutDashboard
                            size={18}
                            className="text-purple-600"
                          />
                          <span className="font-medium">My Dashboard</span>
                        </NavLink>
                      </li>
                      <li>
                        <button className="flex items-center gap-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
                          <Settings size={18} className="text-slate-400" />
                          <span className="font-medium">Settings</span>
                        </button>
                      </li>

                      <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-700">
                        <button
                          onClick={handelsignoutUser}
                          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors group"
                        >
                          <LogOut
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                          <span className="font-bold uppercase tracking-wider text-xs">
                            Logout
                          </span>
                        </button>
                      </div>
                    </ul>
                  </div>
                ) : (
                  <div className="hidden md:flex items-center space-x-3">
                    <button
                      onClick={() => navigate("/login")}
                      className="px-4 py-2 text-purple-600 font-medium hover:text-purple-700 transition"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => navigate("/register")}
                      className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition shadow-lg shadow-purple-200 dark:shadow-none"
                    >
                      Sign up
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                >
                  <Menu className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-base dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl transition-colors duration-300">
            <div className="px-4 py-6 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <ThemeSwitch />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <NavLink
                to="/"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 font-medium p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/courses"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 font-medium p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen size={20} />
                <span>Courses</span>
              </NavLink>
              <NavLink
                to="/dashboard"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 font-medium p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      className="block w-full py-3 text-center text-purple-600 font-bold border border-purple-600 rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log in
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block w-full py-3 text-center bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-none"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign up
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={(e) => {
                      handelsignoutUser(e);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full py-3 text-center text-red-500 font-bold border border-red-200 rounded-xl"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
