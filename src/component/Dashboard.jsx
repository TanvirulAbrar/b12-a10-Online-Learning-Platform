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
      <NavLink to={"/dashboard/addCourse"}>a1</NavLink>
      <NavLink to={"/dashboard/myAddedCourse"}>a2</NavLink>
      <NavLink to={"/dashboard/updateCourse"}>a3</NavLink>
      <NavLink to={"/dashboard/myEnrolledCourse"}>a4</NavLink>
    </div>
  );
};

export default Dashboard;
