import React, { use, useState } from "react";

import { motion } from "motion/react";
import AuthContext from "../context/AuthContext";
import MyEnrolledCard from "./MyEnrolledCard";
import { useLoaderData } from "react-router";

const MyEnrolledCourse = () => {
  const { user, enroll, enrollid, setenroll } = use(AuthContext);
  //  const data = enroll.filter((a) => a == course._id);
  const loadeddata = useLoaderData();
  const [courses, setCourses] = useState(loadeddata);
  return (
    <div>
      <div className="flex flex-wrap w-full max-w-[1440px] mx-auto">
        {courses
          .filter((a) => enroll.includes(a._id))
          .map((course) => (
            <MyEnrolledCard
              courses={courses}
              setCourses={setCourses}
              key={course._id}
              course={course}
            ></MyEnrolledCard>
          ))}
      </div>
    </div>
  );
};

export default MyEnrolledCourse;
