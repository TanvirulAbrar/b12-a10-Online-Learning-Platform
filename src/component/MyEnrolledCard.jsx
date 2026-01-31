import React, { use } from "react";
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

const MyEnrolledCard = ({ course, setCourses, courses, i }) => {
  const { _id, title, image, price, category } = course;
  const { user } = use(AuthContext);

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-400">
        {String(i + 1).padStart(2, "0")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
              {title}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Lifetime Access
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <NavLink
          to={`/courses/${_id}`}
          className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
        >
          <Eye className="w-5 h-5" />
        </NavLink>
      </td>
    </tr>
  );
};

export default MyEnrolledCard;
