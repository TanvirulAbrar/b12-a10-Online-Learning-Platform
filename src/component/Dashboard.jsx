import React, { useState } from "react";

import { motion } from "motion/react";
import { NavLink, Outlet, useLoaderData } from "react-router";
import MyAddedCourse from "./MyAddedCourse";
import MyEnrolledCourse from "./MyEnrolledCourse";
import { BarChart3, PieChart, Users } from "lucide-react";
import saveandload from "./saveandload";

const Dashboard = () => {
  const loadeddata = useLoaderData();
  const [courses, setCourses] = useState(loadeddata);
  const [url, seturl] = useState(saveandload.loadins());
  const seturlb = (a) => {
    saveandload.saveins(a);
    seturl(a);
  };
  return (
    <div>
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Dashboard Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 className="h-7 w-7 text-blue-500" />,
                title: "Total Sales",
                value: "$24,500",
              },
              {
                icon: <Users className="h-7 w-7 text-green-500" />,
                title: "Active Users",
                value: "12,879",
              },
              {
                icon: <PieChart className="h-7 w-7 text-purple-500" />,
                title: "Conversion Rate",
                value: "4.7%",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="bg-white px-6 py-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                    <p className="text-xl font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex dnev mb-2  border-y-1  border-gray-300 overflow-x-scroll ">
        <div className="flex">
          <NavLink
            onClick={() => {
              seturlb(1);
            }}
            className={` text-xl font-bold px-2  ${
              url == 1 && " border-b-2 border-blue-600"
            }`}
            to={"/dashboard"}
          >
            My added course
          </NavLink>
          <NavLink
            onClick={() => {
              seturlb(2);
            }}
            className={` text-xl font-bold px-2  ${
              url == 2 && " border-b-2 border-blue-600"
            }`}
            to={"/dashboard/myEnrolledCourse"}
          >
            My enrolled course
          </NavLink>
          <NavLink
            onClick={() => {
              seturlb(3);
            }}
            className={` text-xl font-bold pl-2 ${
              url == 3 && " border-b-2 border-blue-600"
            } `}
            to={"/dashboard/addCourse"}
          >
            Add course
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
