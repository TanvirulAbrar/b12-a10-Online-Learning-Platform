import React from "react";
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="">my enrolled course </div>
      <div className="">add course</div>
      <div className="">my added course</div>
      <div className="">update course</div>
      <div className="flex gap-5 flex-wrap">
        <NavLink className="btn btn-primary" to={"/dashboard/addCourse"}>
          add course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/dashboard/myAddedCourse"}>
          my added course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/dashboard/updateCourse"}>
          update course
        </NavLink>
        <NavLink className="btn btn-primary" to={"/dashboard/myEnrolledCourse"}>
          my enrolled course
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
