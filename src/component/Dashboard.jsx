import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import MyAddedCourse from "./MyAddedCourse";

const Dashboard = () => {
  const loadeddata = useLoaderData();
  const [courses, setCourses] = useState(loadeddata);
  return (
    <div>
      Dashboard
      <div className="">my enrolled course </div>
      <div className="">add course</div>
      <div className="">my added course</div>
      <div className="">update course</div>
      <div className="flex gap-5 flex-wrap">
        <NavLink className="btn btn-primary" to={"/addCourse"}>
          add course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/myAddedCourse"}>
          my added course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/updateCourse"}>
          update course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/myEnrolledCourse"}>
          my enrolled course
        </NavLink>
        <MyAddedCourse
          courses={courses}
          setCourses={setCourses}
        ></MyAddedCourse>
      </div>
    </div>
  );
};

export default Dashboard;
