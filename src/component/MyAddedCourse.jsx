import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../context/AuthContext";
import MyCourseCard from "./MyCourseCard";

const MyAddedCourse = () => {
  const { user } = use(AuthContext);
  const loadeddata = useLoaderData();
  const [courses, setCourses] = useState(loadeddata);
  return (
    <div>
      <div className="grid gap-5 grid-cols-1">
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
