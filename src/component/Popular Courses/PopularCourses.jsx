import React from "react";
import Loading from "../Loading";
import CourseCard from "../CourseCard";
import useTheme from "../../hooks/useTheme";

const PopularCourses = ({ courses }) => {
  const { theme } = useTheme();
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl font-extrabold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          } mb-4`}
        >
          Popular Courses
        </h2>
        {/* <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses
          .filter((a) => a.isFeatured == true)
          .map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        {!courses.length > 0 && <Loading></Loading>}
      </div>
    </section>
  );
};

export default PopularCourses;
