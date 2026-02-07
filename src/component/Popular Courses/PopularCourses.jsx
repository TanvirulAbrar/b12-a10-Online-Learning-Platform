import React from "react";
import Loading from "../Loading";
import CourseCard from "../CourseCard";
import useTheme from "../../hooks/useTheme";

const PopularCourses = ({ courses }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const featuredCourses = courses.filter(
    (course) => course.isFeatured === true,
  );

  return (
    <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-10">
      <h2
        className={`text-3xl font-bold mb-10 ${
          isDark ? "text-white" : "text-[#111418]"
        }`}
      >
        Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCourses.length > 0 ? (
          featuredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <div className="col-span-full flex justify-center py-12">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourses;
