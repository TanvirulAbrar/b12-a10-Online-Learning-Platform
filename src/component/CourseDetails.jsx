import React, { useEffect, useState } from "react";
import { use } from "react";
import { NavLink, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import {
  Briefcase,
  Brain,
  Star,
  Users,
  Globe,
  Calendar,
  Clock,
  ShieldCheck,
  Play,
  Smartphone,
  Infinity,
  BadgeCheck,
  Award,
  Tag,
  Ticket,
  User,
  CheckCircleIcon,
} from "lucide-react";
import axios from "axios";
const CourseDetails = () => {
  const course = useLoaderData();
  const { user, enroll, enrollid, setenroll } = use(AuthContext);

  const [isEnrolled, setisEnrolled] = useState(false);

  useEffect(() => {
    const data = enroll.filter((a) => a == course._id);
    if (data.length) {
      setisEnrolled(true);
      // toast("true");
      console.log(data);
    }
  }, [enroll]);
  const handelSubmit = (event) => {
    event.preventDefault();
    if (course.instructor.email == user.email) {
      return toast("You cannot enroll in your own course.");
    }
    let newCourse = {};
    if (isEnrolled) {
      const filterid = enroll.filter((a) => a != course._id);

      setenroll([...filterid]);
      newCourse = {
        email: user.email,
        enrolled: [...filterid],
      };
    } else {
      setenroll([...enroll, course._id]);
      newCourse = {
        email: user.email,
        enrolled: [...enroll, course._id],
      };
    }
    // console.log("hitted");
    console.log(enroll);

    axios
      .patch(`${addressOfServer}/enroll/${enrollid}`, newCourse)

      .then((res) => {
        const data = res.data;
        console.log("add c", data);
        console.log("Submitted Data:", newCourse);

        if (isEnrolled) {
          toast("canceled successfully");
        } else {
          toast.success(" enrolled successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
    setisEnrolled(!isEnrolled);
  };

  const {
    _id,
    title,
    image,
    price,
    duration,
    category,
    isFeatured,
    description,
    instructor,
  } = course;
  const points = [
    "Understand AI agents and the underlying technology",
    "How to skyrocket productivity using AI agents",
    "How to build ",
    "Understand key Artificial Intelligence concepts and build a solid foundation",
    `Acquire an understanding of ${title}`,
    `Understand why ${title} is essential for building effective systems`,
  ];
  return (
    <div>
      <div className="flex flex-col sm:flex-row p-3 sm:p-5 gap-3 sm:gap-5 justify-between bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex flex-col">
          <div className="">
            <div className="">
              <p className="card-title"></p>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-2">
                <Briefcase className="w-4 h-4 text-violet-500" />
                <span>{category}</span>
              </div>

              <h2 className="text-lg font-bold text-gray-800 mb-1">{title}</h2>
              <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#16a34a] text-[13px] text-white font-semibold">
                <User className="h-4 w-4" />
                <span>Created by {instructor.name || "Rahim"}</span>
              </div>

              <p className="text-sm text-gray-600 mb-3">Intro to {title}</p>

              <p className="text-[13px] text-gray-500 mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 items-center justify-between text-sm mb-4">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-md font-medium">
                    <Star className="w-4 h-4" />
                    Bestseller
                  </div>
                  <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#4f46e5] text-[13px] text-white font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#fef9c3] text-[13px] text-[#d5af16]  font-semibold">
                    <Star className="h-4 w-4 text-[#facc15] fill-[#facc15]" />
                    <span>4.8 (1,245 ratings)</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  4,568 students
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[13px] text-gray-500 border-t border-gray-100 pt-3">
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-violet-500" />
                  English, French [Auto]
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-violet-500" />
                  Updated 11/2025
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              What you'll learn
            </h2>
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li
                  key={index + "li"}
                  className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0"
                >
                  <span className="text-gray-700">{point}</span>
                  <div className="">
                    {" "}
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          <figure className="overflow-hidden rounded-2xl h-50">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="banner"
            />
          </figure>
          <div className=" bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-all duration-300">
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  Original Price ${Number(price) * 2}
                </span>
              </div>
              <p className="text-sm text-green-600 font-medium mt-1">
                71% off · 14 hours left at this price!
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <ShieldCheck className="w-4 h-4 text-violet-500" />
              <span>30-Day Money-Back Guarantee</span>
            </div>

            {isFeatured && (
              <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#ff448f] text-[13px] text-[#ffffff] font-semibold">
                <BadgeCheck className="h-4 w-4 " />
                <span>featured</span>
              </div>
            )}

            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="font-semibold text-gray-700 mb-2 text-sm">
                This course includes:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-violet-500" /> 2 hours on-demand
                  video
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-violet-500" /> Access on
                  mobile and TV
                </li>
                <li className="flex items-center gap-2">
                  <Infinity className="w-4 h-4 text-violet-500" /> Full lifetime
                  access
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-violet-500" /> Certificate of
                  completion
                </li>
              </ul>
            </div>

            <div className="mb-3 text-sm text-gray-600 flex items-center gap-2">
              <Tag className="w-4 h-4 text-violet-500" />
              <span>MT251110G1 is applied</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Ticket className="w-4 h-4 text-violet-500" />
              <span>O-learning coupon</span>
            </div>

            <div className="flex flex-col items-center gap-2 mt-3">
              <input
                type="text"
                placeholder="Enter coupon"
                className="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />

              <div
                onClick={handelSubmit}
                className="btn bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-lg transition-all duration-300"
              >
                {!isEnrolled ? "enroll now" : "cancel enroll"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
