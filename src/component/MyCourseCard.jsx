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
} from "lucide-react";
import axios from "axios";
const MyCourseCard = ({ course, setCourses, courses }) => {
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
    <div className="rounded-xl p-2 items-center max-w-[1440px] flex justify-between max-[375px]:flex-col h-fit border border-[#cecece] bg-white ">
      <div className="flex  gap-2 self-start items-center">
        <div className="rounded-xl items-center overflow-hidden h-[50px] w-[50px] bg-[#f4f4f4]  mx-auto ">
          {" "}
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="banner"
          />
        </div>
        <div className=" items-center  ">
          <div className="mb-0 font-semibold">{title}</div>
        </div>
      </div>
      <div className="card-actions justify-end">
        <NavLink
          to={`/courses/${_id}`}
          className="flex items-center gap-2 w-fit px-2 rounded-[5px]  bg-[#e1fcff] text-[13px] text-indigo-500 font-semibold"
        >
          <View className="h-4 w-4" />
          <span className="max-sm:hidden">view</span>
        </NavLink>
        <NavLink
          to={`/updateCourse/${_id}`}
          className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#e5f9fb] text-[13px] text-green-500  font-semibold"
        >
          <FileSliders className="h-4 w-4" />
          <span className="max-sm:hidden">update</span>
        </NavLink>
        <div
          onClick={handeldelete}
          className="flex items-center gap-2 w-fit px-2 rounded-[5px]
            bg-[#ff4c4c] text-[13px] text-white font-semibold"
        >
          <CircleX className="h-4 w-4" />
          <span className="max-sm:hidden">delete</span>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
