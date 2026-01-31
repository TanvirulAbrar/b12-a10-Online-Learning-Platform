import React, { use, useEffect, useState } from "react";

import { motion } from "motion/react";
import AuthContext from "../context/AuthContext";
import MyEnrolledCard from "./MyEnrolledCard";
import { NavLink, useLoaderData } from "react-router";
import useAxios from "./useAxios";
import Loading from "./Loading";
import useTheme from "../hooks/useTheme";

const MyEnrolledCourse = () => {
  const { user, enroll, enrollid, setenroll } = use(AuthContext);
  //  const data = enroll.filter((a) => a == course._id);
  // const loadeddata = useLoaderData();
  const axios = useAxios();
  const [courses, setCourses] = useState([]);
  const [coursesa, setCoursesa] = useState([]);

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
  useEffect(() => {
    if (courses && enroll) {
      setCoursesa(courses.filter((a) => enroll?.includes(a._id)));
    }
  }, [enroll, courses]);
  const { theme, textColor } = useTheme();
  return (
    <div className="min-h-screen  dark:bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center lg:text-left">
          <h1
            className={`${textColor} text-3xl font-black  dark:text-white mb-2`}
          >
            My Enrolled Courses
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Continue your learning journey and track your progress.
          </p>
        </div>

        <div className="bg-base dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead
                className={`${
                  theme === "dark" ? " bg-base" : "bg-slate-50"
                }  dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700`}
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
                {coursesa.map((course, i) => (
                  <MyEnrolledCard
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

          {coursesa.length === 0 && courses.length > 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-500 dark:text-slate-400">
                You haven't enrolled in any courses yet.
              </p>
              <NavLink
                to="/courses"
                className="mt-4 inline-block text-purple-600 font-bold hover:underline"
              >
                Browse Courses
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

export default MyEnrolledCourse;
