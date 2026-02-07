import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import MyAddedCourse from "./MyAddedCourse";
import MyEnrolledCourse from "./MyEnrolledCourse";
import saveandload from "./saveandload";
import {
  Home, // <-- Added Home icon import
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
  LogOut,
  LayoutDashboard,
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
import useAuth from "../hooks/useAuth";
import ThemeSwitch from "../themes/ThemeSwitch";

const Dashboard = () => {
  const [url, seturl] = useState(saveandload.loadins());
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenu2Open, setIsMobileMenu2Open] = useState(false);
  const { user, signoutUser } = useAuth();

  const { theme, setTheme, bg, textColor, CurrentTheme, themeList } =
    useTheme();

  const isDark = theme === "dark";

  const handleSignout = (e) => {
    e.preventDefault();
    signoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMobileMenu2 = () => {
    setIsMobileMenu2Open(!isMobileMenu2Open);
  };

  useEffect(() => {
    if (url === 1) {
      navigate("/dashboard");
    }
    if (url === 2) {
      navigate("/dashboard/myEnrolledCourse");
    }
    if (url === 3) {
      navigate("/dashboard/addCourse");
    }
    if (url === 4) {
      navigate("/dashboard/myAddedCourse");
    }
  }, [url, navigate]);

  const setUrl = (newUrl) => {
    saveandload.saveins(newUrl);
    seturl(newUrl);
  };

  return (
    <div
      className={`flex h-screen overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-64 border-r flex flex-col justify-between transition-all duration-300 fixed top-20 left-0 bottom-0 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:top-0 lg:translate-x-0 lg:static lg:h-auto lg:z-auto ${
          isDark ? "bg-[#101922] border-gray-800" : "bg-white border-gray-200"
        }`}
      >
        <div>
          <NavLink to={"/"}>
            <div
              className={`h-20 flex items-center px-8 border-b transition-colors ${
                isDark ? "border-gray-700" : "border-gray-100"
              }`}
            >
              <div className="bg-[#137fec] p-1.5 rounded-lg text-white mr-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-[#137fec] tracking-tight">
                O-Learn
              </h1>
            </div>
          </NavLink>

          <nav className="mt-6 flex flex-col space-y-1">
            {/* Home button added */}
            <NavLink
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              to="/"
            >
              <Home className="mr-3 w-5 h-5" />
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              onClick={() => setUrl(1)}
              to="/dashboard/overview"
            >
              <BarChart3 className="mr-3 w-5 h-5" />
              Dashboard
            </NavLink>

            <NavLink
              onClick={() => setUrl(2)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              to="/dashboard/myEnrolledCourse"
            >
              <BookOpen className="mr-3 w-5 h-5" />
              My Enrolled Courses
            </NavLink>

            <NavLink
              onClick={() => setUrl(3)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              to="/dashboard/addCourse"
            >
              <Plus className="mr-3 w-5 h-5" />
              Add Course
            </NavLink>

            <NavLink
              onClick={() => setUrl(4)}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              to="/dashboard/myAddedCourse"
            >
              <Activity className="mr-3 w-5 h-5" />
              My Added Courses
            </NavLink>
          </nav>
        </div>

        {/* <div className="mb-6">
          <nav className="flex flex-col space-y-1">
            <NavLink
              className={({ isActive }) =>
                `group flex items-center px-6 py-3 transition-colors border-l-4 ${
                  isActive
                    ? "bg-[#137fec]/10 border-[#137fec] text-[#137fec] font-medium"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-[#137fec] border-transparent"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#137fec] border-transparent"
                }`
              }
              to="/dashboard/settings"
            >
              <Settings className="mr-3 w-5 h-5" />
              Settings
            </NavLink>
          </nav>
        </div> */}
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden bg-black/10 bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 h-20 flex items-center z-50 justify-between px-8 shrink-0 border-b transition-colors ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center">
            <button className="lg:hidden mr-4 p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <NavLink className={"max-[800px]:hidden"} to={"/"}>
              <div
                className={`h-20 flex items-center pr-5 border-b transition-colors ${
                  isDark ? "border-gray-700" : "border-gray-100"
                }`}
              >
                <div className="bg-[#137fec] p-1.5 rounded-lg text-white mr-3">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-[#137fec] tracking-tight">
                  O-Learn
                </h1>
              </div>
            </NavLink>
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-[#111418]"
              }`}
            >
              Dashboard
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            {/* <button
              className={`${
                isDark
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Bell className="w-5 h-5" />
            </button> */}

            <div className="relative max-sm:hidden">
              <input
                type="text"
                placeholder="Search..."
                className={`rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#137fec] w-64 transition-all ${
                  isDark
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-[#f6f7f8] text-gray-800 placeholder-gray-400"
                }`}
              />
              <Search
                className={`absolute right-3 top-2.5 w-4 h-4 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              />
            </div>

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
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-[#f0f2f4]"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 pb-4 mb-4 border-b transition-colors ${
                      isDark ? "border-gray-700" : "border-[#f0f2f4]"
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
                          isDark ? "text-white" : "text-[#111418]"
                        }`}
                      >
                        {user.displayName || "User"}
                      </span>
                      <span
                        className={`text-xs truncate ${
                          isDark ? "text-gray-400" : "text-[#617589]"
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
                        isDark ? "text-white" : "text-[#111418]"
                      }`}
                    >
                      <LayoutDashboard size={18} className="text-[#137fec]" />
                      <span className="font-medium">My Dashboard</span>
                    </NavLink>
                  </li>

                  {/* <li>
                    <button
                      className={`flex items-center gap-3 py-3 rounded-xl hover:bg-gray-50 transition-colors w-full ${
                        isDark
                          ? "text-white hover:bg-gray-700"
                          : "text-[#111418] hover:bg-gray-100"
                      }`}
                    >
                      <Settings size={18} className="text-gray-400" />
                      <span className="font-medium">Settings</span>
                    </button>
                  </li> */}

                  <div
                    className={`mt-4 pt-2 border-t transition-colors ${
                      isDark ? "border-gray-700" : "border-[#f0f2f4]"
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
              <div className="w-10 h-10 rounded-full bg-[#137fec] text-white flex items-center justify-center font-semibold">
                <User className="w-5 h-5" />
              </div>
            )}
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
