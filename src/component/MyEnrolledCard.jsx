import React from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { addressOfServer } from "./address";
import {
  BadgeCheck,
  ChevronRight,
  Crown,
  Star,
  Download,
  DollarSign,
  CircleX,
  FileSliders,
  View,
  Eye,
} from "lucide-react";
import useTheme from "../hooks/useTheme";

const MyEnrolledCard = ({ course, setCourses, courses, index }) => {
  const { _id, title, image, price, category } = course;
  const { user } = React.useContext(AuthContext); // fixed: useContext
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <tr
      className={`hover:transition-colors ${
        isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"
      }`}
    >
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${
          isDark ? "text-slate-400" : "text-slate-400"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-4">
          <div
            className={`h-12 w-12 rounded-xl overflow-hidden shrink-0 ${
              isDark ? "bg-slate-700" : "bg-slate-100"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div>
            <div
              className={`text-sm font-bold line-clamp-1 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </div>
            <div
              className={`text-xs ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Lifetime Access
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full ${
            isDark
              ? "bg-purple-900/30 text-purple-400"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          {category}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right">
        <NavLink
          to={`/courses/${_id}`}
          className={`inline-flex items-center justify-center p-2 rounded-xl shadow-sm transition-all ${
            isDark
              ? "bg-slate-700 text-slate-300 hover:bg-purple-600 hover:text-white"
              : "bg-slate-100 text-slate-600 hover:bg-purple-600 hover:text-white"
          }`}
        >
          <Eye className="w-5 h-5" />
        </NavLink>
      </td>
    </tr>
  );
};

export default MyEnrolledCard;
