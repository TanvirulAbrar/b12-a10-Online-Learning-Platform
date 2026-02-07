import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  Search,
  Menu,
  X,
  LogOut,
  Settings,
  Home,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";
import useAuth from "../hooks/useAuth";
import ThemeSwitch from "../themes/ThemeSwitch";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  const navigate = useNavigate();
  const { user, signoutUser } = useAuth();
  const { theme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = theme === "dark";

  const handleSignout = (e) => {
    e.preventDefault();
    signoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  if (isDashboard) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          isDark
            ? "bg-[#101922]/80 border-[#334155]"
            : "bg-white/80 border-[#f0f2f4]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-[#137fec] rounded-lg flex items-center justify-center text-white">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2
                className={`text-xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                O-Learn
              </h2>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center gap-2">
              <label className="relative flex items-center">
                <Search
                  className={`absolute left-3 size-4 ${
                    isDark ? "text-[#94a3b8]" : "text-[#617589]"
                  }`}
                />
                <input
                  className={`w-64 h-10 pl-10 pr-4 rounded-lg border-none text-sm focus:ring-2 focus:ring-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 text-white placeholder-[#64748b]"
                      : "bg-[#f0f2f4] text-[#111418] placeholder-[#617589]"
                  }`}
                  placeholder="Search courses..."
                />
              </label>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {["/", "/courses", "/dashboard"].map((path, idx) => {
                const labels = ["Home", "Courses", "Dashboard"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#137fec]"
                          : isDark
                            ? "text-white hover:text-[#137fec]"
                            : "text-[#111418] hover:text-[#137fec]"
                      }`
                    }
                  >
                    {labels[idx]}
                  </NavLink>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Switch */}
              <ThemeSwitch />

              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#137fec] to-blue-400 p-0.5 shadow-md hover:scale-105 transition-transform"
                  >
                    <img
                      alt="Profile"
                      className="rounded-full w-full h-full object-cover border-2 border-white dark:border-gray-900"
                      src={user.photoURL || "/profile.png"}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className={`dropdown-content z-[1] menu p-4 shadow-2xl rounded-[1.5rem] w-64 mt-4 border transition-colors ${
                      isDark
                        ? "bg-[#1a2632] border-[#334155]"
                        : "bg-white border-[#f0f2f4]"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 pb-4 mb-4 border-b transition-colors ${
                        isDark ? "border-[#334155]" : "border-[#f0f2f4]"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#137fec]/20">
                        <img
                          src={user.photoURL || "/profile.png"}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span
                          className={`font-bold truncate ${
                            isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                          }`}
                        >
                          {user.displayName || "User"}
                        </span>
                        <span
                          className={`text-xs truncate ${
                            isDark ? "text-[#94a3b8]" : "text-[#617589]"
                          }`}
                        >
                          {user.email}
                        </span>
                      </div>
                    </div>

                    <li>
                      <NavLink
                        to="/dashboard"
                        className={`flex items-center gap-3 py-3 rounded-xl hover:bg-[#137fec]/10 transition-colors ${
                          isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                        }`}
                      >
                        <LayoutDashboard size={18} className="text-[#137fec]" />
                        <span className="font-medium">My Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className={`flex items-center gap-3 py-3 rounded-xl hover:bg-gray-50 transition-colors w-full ${
                          isDark
                            ? "text-[#f1f5f9] hover:bg-gray-700"
                            : "text-[#111418] hover:bg-gray-100"
                        }`}
                      >
                        <Settings size={18} className="text-gray-400" />
                        <span className="font-medium">Settings</span>
                      </button>
                    </li>

                    <div
                      className={`mt-4 pt-2 border-t transition-colors ${
                        isDark ? "border-[#334155]" : "border-[#f0f2f4]"
                      }`}
                    >
                      <button
                        onClick={handleSignout}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors ${
                          isDark
                            ? "bg-red-900/20 text-red-400 hover:bg-red-900/30"
                            : "bg-red-50 text-red-600 hover:bg-red-100"
                        }`}
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
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={() => navigate("/login")}
                    className={`min-w-[84px] h-10 px-4 rounded-lg text-sm font-bold transition-colors ${
                      isDark
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-[#f0f2f4] text-[#111418] hover:bg-gray-200"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className={`min-w-[84px] h-10 px-4 rounded-lg text-sm font-bold transition-colors ${
                      isDark
                        ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                        : "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t shadow-xl transition-colors ${
              isDark
                ? "bg-[#101922] border-[#334155]"
                : "bg-white border-[#f0f2f4]"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-[#94a3b8]" : "text-[#617589]"
                  }`}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${
                    isDark
                      ? "text-[#94a3b8] hover:text-white"
                      : "text-[#617589] hover:text-[#111418]"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mb-4">
                <label className="relative flex items-center">
                  <Search
                    className={`absolute left-3 size-4 ${
                      isDark ? "text-[#94a3b8]" : "text-[#617589]"
                    }`}
                  />
                  <input
                    className={`w-full h-10 pl-10 pr-4 rounded-lg border-none text-sm focus:ring-2 focus:ring-[#137fec] outline-none transition-all ${
                      isDark
                        ? "bg-gray-800 text-white placeholder-[#64748b]"
                        : "bg-[#f0f2f4] text-[#111418] placeholder-[#617589]"
                    }`}
                    placeholder="Search courses..."
                  />
                </label>
              </div>

              {["/", "/courses", "/dashboard"].map((path, idx) => {
                const icons = [Home, BookOpen, LayoutDashboard];
                const labels = ["Home", "Courses", "Dashboard"];
                const Icon = icons[idx];

                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={`flex items-center space-x-3 font-medium p-3 rounded-lg transition-colors ${
                      isDark
                        ? "text-white hover:bg-gray-800"
                        : "text-[#111418] hover:bg-[#f0f2f4]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{labels[idx]}</span>
                  </NavLink>
                );
              })}

              <div
                className={`pt-4 border-t space-y-3 transition-colors ${
                  isDark ? "border-[#334155]" : "border-[#f0f2f4]"
                }`}
              >
                {!user ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full py-3 text-center font-bold rounded-xl transition-colors ${
                        isDark
                          ? "text-[#137fec] border-[#137fec] hover:bg-[#137fec]/20"
                          : "text-[#137fec] border-[#137fec] hover:bg-[#137fec]/10"
                      }`}
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => {
                        navigate("/register");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full py-3 text-center font-bold rounded-xl transition-colors ${
                        isDark
                          ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                          : "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                      }`}
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={(e) => {
                      handleSignout(e);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full py-3 text-center font-bold rounded-xl transition-colors ${
                      isDark
                        ? "text-red-400 border-red-900/30 hover:bg-red-900/20"
                        : "text-red-600 border-red-200 hover:bg-red-50"
                    }`}
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
