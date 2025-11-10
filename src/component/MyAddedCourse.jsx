import React, { use } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../context/AuthContext";
import MyCourseCard from "./MyCourseCard";

const MyAddedCourse = ({ setCourses, courses }) => {
  const { user } = use(AuthContext);

  return (
    <div>
      MyAddedCourse MyAddedCourse
      <div className="flex flex-wrap">
        {courses
          .filter((a) => a.instructor.email == user.email)
          .map((course) => (
            <MyCourseCard
              courses={courses}
              setCourses={setCourses}
              key={course._id}
              course={course}
            ></MyCourseCard>
          ))}
      </div>
    </div>
  );
};

export default MyAddedCourse;
