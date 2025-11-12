import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import MyEnrolledCard from "./MyEnrolledCard";

const MyEnrolledCourse = ({ setCourses, courses }) => {
  const { user, enroll, enrollid, setenroll } = use(AuthContext);
  //  const data = enroll.filter((a) => a == course._id);
  return (
    <div>
      my enrolled course
      <div className="flex flex-wrap">
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
