import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import MyEnrolledCard from "./MyEnrolledCard";
import useAxios from "./useAxios";
import Loading from "./Loading";
import useTheme from "../hooks/useTheme";

const MyEnrolledCourse = () => {
  const { user, enroll } = useContext(AuthContext);
  const axios = useAxios();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch all courses once
  useEffect(() => {
    if (courses.length > 0) return;

    axios
      .get("/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Failed to load courses:", err));
  }, [axios, courses.length]);

  // Filter enrolled courses
  useEffect(() => {
    if (!enroll || !courses.length) return;

    const filtered = courses.filter((course) => enroll.includes(course._id));
    setEnrolledCourses(filtered);
  }, [enroll, courses]);

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1
            className={`text-3xl font-black mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My Enrolled Courses
          </h1>
          <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Continue your learning journey and track your progress.
          </p>
        </div>

        {/* Table container */}
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
                    className={`px-6 py-5 text-xs font-bold uppercase tracking-wider ${
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
                    className={`px-6 py-5 text-xs font-bold uppercase tracking-wider ${
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
                {enrolledCourses.map((course, index) => (
                  <MyEnrolledCard
                    key={course._id}
                    course={course}
                    index={index}
                    courses={courses}
                    setCourses={setCourses}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {enrolledCourses.length === 0 && courses.length > 0 && (
            <div className="py-20 text-center">
              <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
                You haven't enrolled in any courses yet.
              </p>
              <NavLink
                to="/courses"
                className={`mt-4 inline-block font-bold hover:underline ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
              >
                Browse Courses
              </NavLink>
            </div>
          )}

          {/* Loading */}
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

export default MyEnrolledCourse;
