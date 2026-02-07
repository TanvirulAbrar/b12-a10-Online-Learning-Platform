import React, { use } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { addressOfServer } from "./address";
import { FaEdit } from "react-icons/fa";
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
  SquarePen,
  Eye,
  Trash2,
} from "lucide-react";
import axios from "axios";
import useTheme from "../hooks/useTheme";
const MyCourseCard = ({ course, setCourses, courses, i }) => {
  const { theme } = useTheme();
  const { _id, title, image, price, category } = course;
  const { user } = use(AuthContext);
  const handeldelete = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios
          .delete(`${addressOfServer}/courses/${_id}`)
          .then(() => {
            toast.success("Course deleted successfully!");
            setCourses(courses.filter((a) => a._id != course._id));
          })
          .catch((error) => {
            console.error(error);
            toast.error("Server error — please try again later!");
          });
      }
    });
  };

  return (
    <tr
      className={`${
        theme === "dark"
          ? "hover:bg-gray-800 dark:hover:bg-slate-700/50"
          : "hover:bg-slate-50 dark:hover:bg-slate-700/50"
      } transition-colors`}
    >
      <td className="px-6 py-4 max-sm:hidden whitespace-nowrap text-sm font-bold text-slate-400">
        {i + 1}
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
            <div
              className={`text-sm font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              } line-clamp-1`}
            >
              {title}{" "}
              {/* <span className="px-3 py-1  min-md:hidden bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                {category}
              </span> */}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-indigo-600">${price}</span>
              <span>•</span>
              <span>12 students</span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-sm:hidden">
        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex justify-end gap-2">
          <NavLink
            to={`/courses/${_id}`}
            title="View Course"
            className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
          >
            <Eye className="w-5 h-5" />
          </NavLink>
          <NavLink
            to={`/updateCourse/${_id}`}
            title="Edit Course"
            className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white transition-all"
          >
            <SquarePen className="w-5 h-5" />
          </NavLink>
          <button
            onClick={handeldelete}
            title="Delete Course"
            className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white transition-all"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyCourseCard;
