import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import MyCourseCard from "./MyCourseCard";
import useAxios from "./useAxios";
import Loading from "./Loading";
import { Plus } from "lucide-react";
import useTheme from "../hooks/useTheme";

const MyAddedCourse = () => {
  const { user } = use(AuthContext);
  const axios = useAxios();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (courses.length > 0) {
      return;
    }
    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const instructorCourses = courses.filter(
    (a) => a.instructor.email == user.email
  );
  const { theme, textColor } = useTheme();

  return (
    <div
      className={` min-h-screen  dark:bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <h1
              className={`${
                theme === "dark" ? "text-white" : "text-slate-900"
              } text-3xl font-black  dark:text-white mb-2`}
            >
              My Managed Courses
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Manage, edit, and track the performance of your courses.
            </p>
          </div>
          <NavLink
            to="/dashboard/addCourse"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-200 dark:shadow-none"
          >
            <Plus className="w-5 h-5" />
            Add New Course
          </NavLink>
        </div>

        <div className="bg-base dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead
                className={`${
                  theme === "dark" ? "bg-base" : "bg-slate-50"
                } dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700`}
              >
                <tr>
                  <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {instructorCourses.map((course, i) => (
                  <MyCourseCard
                    courses={courses}
                    setCourses={setCourses}
                    key={course._id}
                    course={course}
                    i={i}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {instructorCourses.length === 0 && courses.length > 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-500 dark:text-slate-400">
                You haven't added any courses yet.
              </p>
              <NavLink
                to="/addCourse"
                className="mt-4 inline-block text-purple-600 font-bold hover:underline"
              >
                Create your first course
              </NavLink>
            </div>
          )}

          {!courses.length > 0 && (
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
