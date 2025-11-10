import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";

const Course = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="">
        all course
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
