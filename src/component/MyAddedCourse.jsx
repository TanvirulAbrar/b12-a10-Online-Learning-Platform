import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import MyCourseCard from "./MyCourseCard";
import useAxios from "./useAxios";
import Loading from "./Loading";
import { Plus } from "lucide-react";
import useTheme from "../hooks/useTheme";

const MyAddedCourse = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (courses.length > 0) return;

    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error("Failed to load courses:", err));
  }, [axios, courses.length]);

  // Filter courses where current user is the instructor
  const instructorCourses = courses.filter(
    (course) => course.instructor?.email === user?.email,
  );

  return (
    <div
      className={`min-h-screen py-12 px-4 max-sm:px-1 lg:px-8 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header + Add Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <h1
              className={`text-3xl font-black mb-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              My Managed Courses
            </h1>
            <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Manage, edit, and track the performance of your courses.
            </p>
          </div>

          <NavLink
            to="/dashboard/addCourse"
            className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all shadow-lg ${
              isDark
                ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/30"
                : "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/25"
            }`}
          >
            <Plus className="w-5 h-5" />
            Add New Course
          </NavLink>
        </div>

        {/* Table Container */}
        <div
          className={`rounded-[2rem] overflow-hidden shadow-xl border ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead
                className={`border-b ${
                  isDark
                    ? "bg-[#101922] border-gray-700"
                    : "bg-[#f6f7f8] border-gray-200"
                }`}
              >
                <tr>
                  <th
                    className={`px-6 py-5 text-xs max-sm:hidden font-bold uppercase tracking-wider ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    No.
                  </th>
                  <th
                    className={`px-6 py-5 text-xs font-bold uppercase tracking-wider ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Course
                  </th>
                  <th
                    className={`px-6 py-5 text-xs font-bold max-sm:hidden uppercase tracking-wider ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Category
                  </th>
                  <th
                    className={`px-6 py-5 text-xs font-bold uppercase tracking-wider text-right ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody
                className={`divide-y ${
                  isDark ? "divide-gray-700" : "divide-gray-200"
                }`}
              >
                {instructorCourses.map((course, index) => (
                  <MyCourseCard
                    key={course._id}
                    course={course}
                    i={index}
                    courses={courses}
                    setCourses={setCourses}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {instructorCourses.length === 0 && courses.length > 0 && (
            <div className="py-20 text-center">
              <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
                You haven't added any courses yet.
              </p>
              <NavLink
                to="/dashboard/addCourse"
                className={`mt-4 inline-block font-bold hover:underline ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
              >
                Create your first course
              </NavLink>
            </div>
          )}

          {/* Loading state */}
          {courses.length === 0 && (
            <div className="py-20 flex justify-center">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAddedCourse;
