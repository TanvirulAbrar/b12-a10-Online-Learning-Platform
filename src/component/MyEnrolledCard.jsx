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

const MyEnrolledCard = ({ course, setCourses, courses }) => {
  const { _id, title, image, price, category } = course;
  const { user } = use(AuthContext);

  return (
    <div className="rounded-xl p-2 items-center w-full flex justify-between max-[375px]:flex-col h-fit border border-[#cecece] ">
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
      </div>
    </div>
  );
};

export default MyEnrolledCard;
