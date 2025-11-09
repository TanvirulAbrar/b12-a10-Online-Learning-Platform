import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="">hero</div>
      <div className="">poular course</div>
      <div className="flex flex-wrap">
        {courses
          .filter((a) => a.isFeatured == true)
          .map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
      </div>
      <div className="">why choose us</div>
      <div className="">top instructors</div>
    </div>
  );
};

export default Home;
