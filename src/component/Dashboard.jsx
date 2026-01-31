import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import MyAddedCourse from "./MyAddedCourse";
import MyEnrolledCourse from "./MyEnrolledCourse";
import saveandload from "./saveandload";
import {
  BarChart3,
  Users,
  Plus,
  BookOpen,
  Settings,
  Bell,
  Search,
  User,
  TrendingUp,
  AlertTriangle,
  Activity,
  BarChartHorizontal,
  BarChart2,
  Smartphone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DashboardOverview from "./DashboardOverview";
import useTheme from "../hooks/useTheme";

const Dashboard = () => {
  const [url, seturl] = useState(saveandload.loadins());
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenu2Open, setIsMobileMenu2Open] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMobileMenu2 = () => {
    setIsMobileMenu2Open(!isMobileMenu2Open);
  };

  useEffect(() => {
    if (url == 1) {
      navigate("/dashboard");
    }
    if (url == 2) {
      navigate("/dashboard/myEnrolledCourse");
    }
    if (url == 3) {
      navigate("/dashboard/addCourse");
    }
    if (url == 4) {
      navigate("/dashboard/myAddedCourse");
    }
  }, []);

  const seturlb = (a) => {
    saveandload.saveins(a);
    seturl(a);
  };

  const { theme, setTheme, bg, textColor, CurrentTheme, themeList } =
    useTheme();

  // Generate realistic dashboard data

  return (
    <div className="flex h-screen bg-base-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } w-64 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between transition-all duration-300 fixed top-20 left-0 bottom-0 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:top-0 lg:translate-x-0 lg:static lg:h-auto lg:z-auto`}
      >
        <div>
          <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-700">
            <div className="bg-blue-500 p-1.5 rounded text-white mr-3">
              <BarChart2 className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold text-blue-500 tracking-tight">
              O-Learn
            </h1>
          </div>
          <nav className="mt-6 flex flex-col space-y-1">
            <NavLink
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 ${
                  isActive
                    ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors border-l-4 border-transparent"
                }`
              }
              onClick={() => seturlb(1)}
              to="/dashboard/overview"
            >
              <BarChart3 className="mr-3 w-5 h-5" />
              Dashboard
            </NavLink>
            <NavLink
              onClick={() => seturlb(2)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 ${
                  isActive
                    ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors border-l-4 border-transparent"
                }`
              }
              to="/dashboard/myEnrolledCourse"
            >
              <BookOpen className="mr-3 w-5 h-5" />
              My Enrolled Courses
            </NavLink>
            <NavLink
              onClick={() => seturlb(3)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 ${
                  isActive
                    ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors border-l-4 border-transparent"
                }`
              }
              to="/dashboard/addCourse"
            >
              <Plus className="mr-3 w-5 h-5" />
              Add Course
            </NavLink>
            <NavLink
              onClick={() => seturlb(4)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 ${
                  isActive
                    ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors border-l-4 border-transparent"
                }`
              }
              to="/dashboard/myAddedCourse"
            >
              <Activity className="mr-3 w-5 h-5" />
              My Added Courses
            </NavLink>
          </nav>
        </div>
        <div className="mb-6">
          <nav className="flex flex-col space-y-1">
            <NavLink
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 ${
                  isActive
                    ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-500 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors border-l-4 border-transparent"
                }`
              }
              to="/dashboard/settings"
            >
              <Settings className="mr-3 w-5 h-5" />
              Settings
            </NavLink>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden bg-black/10 bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>
        )}
        {isMobileMenu2Open && (
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
        {/* Header */}
        <header className="h-20 bg-base dark:bg-gray-800 flex items-center justify-between px-8 shrink-0 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <button className="lg:hidden mr-4 p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <h2 className={`${textColor} text-2xl font-bold dark:text-white`}>
              Dashboard
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
              <Bell className="w-5 h-5" />
            </button>
            <div className="relative max-sm:hidden">
              <input
                type="text"
                placeholder="Search..."
                className=" bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 pt-6">
          {location.pathname === "/dashboard" && <DashboardOverview />}

          <div className="h-8"></div>

          {/* Outlet for nested routes */}
          <div className="mt-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
