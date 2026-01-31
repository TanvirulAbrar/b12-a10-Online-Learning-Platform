import React from "react";
import { ChevronDown, TrendingUp, Activity, AlertTriangle } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useTheme from "../hooks/useTheme";

const DashboardOverview = () => {
  const generateTransactionData = () => {
    const hours = [
      "00:00",
      "04:00",
      "08:00",
      "12:00",
      "16:00",
      "20:00",
      "00:00",
    ];
    return hours.map((time, index) => {
      const baseAll = 120 - index * 10;
      const baseFailed = 15 + Math.floor(Math.random() * 10) - 5;
      return {
        time,
        allTransactions: Math.max(
          baseAll + Math.floor(Math.random() * 20) - 10,
          30
        ),
        failedTransactions: Math.max(baseFailed, 5),
        successfulTransactions:
          Math.max(baseAll + Math.floor(Math.random() * 20) - 10, 30) -
          Math.max(baseFailed, 5),
      };
    });
  };

  const generateDeviceData = () => {
    const total = 5192;
    const android = Math.floor(total * 0.81); // 81%
    const iphone = Math.floor(total * 0.21); // 21% (some overlap is OK)
    const web = total - android - iphone; // remainder

    return [
      { name: "Android", value: android, percentage: 81 },
      { name: "iPhone", value: iphone, percentage: 21 },
      { name: "Web", value: web, percentage: Math.round((web / total) * 100) },
    ];
  };

  const generateCourseActivityData = () => {
    return [
      {
        name: "Web Development",
        students: 61,
        courses: 12,
        color: "#10b981",
        status: "active",
      },
      {
        name: "Data Science",
        students: 5,
        courses: 8,
        color: "#ef4444",
        status: "low",
      },
      {
        name: "Mobile Dev",
        students: 4,
        courses: 5,
        color: "#f59e0b",
        status: "low",
      },
      {
        name: "UI/UX Design",
        students: 28,
        courses: 7,
        color: "#8b5cf6",
        status: "medium",
      },
      {
        name: "Cloud Computing",
        students: 15,
        courses: 4,
        color: "#06b6d4",
        status: "medium",
      },
      {
        name: "Cybersecurity",
        students: 9,
        courses: 3,
        color: "#f97316",
        status: "low",
      },
    ];
  };

  const generateStatsData = () => {
    return {
      totalEnrolled: 2453,
      totalCourses: 142,
      totalInstructors: 87,
      avgRating: 4.7,
      completionRate: 87.3,
      revenue: 124560,
    };
  };

  const transactionData = generateTransactionData();
  const deviceData = generateDeviceData();
  const courseActivityData = generateCourseActivityData();
  const statsData = generateStatsData();

  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
    "#06b6d4",
    "#f97316",
    "#ef4444",
  ];
  const { theme, textColor } = useTheme();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="space-y-6">
        {/* All transactions card */}
        <div className="bg-base dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3
                  className={`${textColor} text-lg font-semibold text-gray-800 dark:text-gray-100`}
                >
                  All transactions
                </h3>
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded">
                  +7%
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Live
                </span>
              </div>
            </div>
            {/* <div className="relative">
              <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Today
                <span className="ml-1">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </div> */}
          </div>
          <div className="h-64 w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={transactionData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  className="dark:stroke-gray-700"
                />
                <XAxis
                  dataKey="time"
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <YAxis
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    color: "#1f2937",
                  }}
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="allTransactions"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                  name="All Transactions"
                />
                <Line
                  type="monotone"
                  dataKey="successfulTransactions"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  name="Successful Transactions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Failed transactions card */}
        <div className="bg-base dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3
                  className={`${
                    theme === "dark" ? "text-gray-50 " : "text-gray-800 "
                  } text-lg font-semibold  dark:text-gray-100`}
                >
                  Failed transactions
                </h3>
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded">
                  -11%
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Live
                </span>
              </div>
            </div>
            <div className="relative">
              {/* <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Today
                <span className="ml-1">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button> */}
            </div>
          </div>
          <div className="h-48 w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={transactionData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  className="dark:stroke-gray-700"
                />
                <XAxis
                  dataKey="time"
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <YAxis
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    color: "#1f2937",
                  }}
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="failedTransactions"
                  stroke="#ea580c"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  name="Failed Transactions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Active devices card */}
        <div className="bg-base dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-start">
            <h3
              className={`${textColor} text-lg font-semibold dark:text-gray-100`}
            >
              Active devices
            </h3>
            {/* <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Last hour
              <span className="ml-1">
                <ChevronDown className="w-4 h-4" />
              </span>
            </button> */}
          </div>
          <div className="flex items-end space-x-8 mt-4 mb-6">
            <div>
              <div
                className={`${
                  theme === "dark" ? "text-gray-50" : "text-gray-800"
                } text-4xl font-bold  dark:text-white`}
              >
                5,192
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                this hour
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                4,711
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                this time yesterday
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Device type
              </h4>
              <div className="h-28 w-28 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={40}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                      startAngle={0}
                      endAngle={360}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name, props) => [
                        value,
                        `${props.payload.name}: ${props.payload.percentage}%`,
                      ]}
                      contentStyle={{
                        backgroundColor: "white",
                        borderColor: "#e5e7eb",
                        borderRadius: "0.5rem",
                        color: "#1f2937",
                      }}
                      className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Android
                    </span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 font-medium">
                    3,705{" "}
                    <span className="text-gray-400 font-normal ml-1">81%</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      iPhone
                    </span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 font-medium">
                    1,025{" "}
                    <span className="text-gray-400 font-normal ml-1">21%</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-1.5"></span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Web
                    </span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 font-medium">
                    462{" "}
                    <span className="text-gray-400 font-normal ml-1">8%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 justify-center">
              <div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Inactive devices
                </h4>
                <div className="flex items-center mt-1">
                  <span className="text-3xl font-bold text-gray-700 dark:text-gray-200">
                    43
                  </span>
                  <span className="ml-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-bold px-1.5 py-0.5 rounded">
                    +3%
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  Devices reached 90 days unused
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  New devices
                </h4>
                <div className="flex items-center mt-1">
                  <span className="text-3xl font-bold text-gray-700 dark:text-gray-200">
                    221
                  </span>
                  <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold px-1.5 py-0.5 rounded">
                    +19%
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  New devices registered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course activity card */}
        <div className="bg-base dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3
              className={`${
                theme === "dark" ? "text-gray-50" : "text-gray-800"
              } text-lg font-semibold  dark:text-gray-100`}
            >
              Course activity
            </h3>
            <a className="text-xs text-blue-500 hover:underline" href="#">
              View all &gt;
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="bg-green-500 dark:bg-green-600 p-3 rounded text-white">
              <div className="text-2xl font-bold">61</div>
              <div className="text-[10px] opacity-90">Enrolled</div>
            </div>
            <div className="bg-red-500 dark:bg-red-600 p-3 rounded text-white">
              <div className="text-2xl font-bold">5</div>
              <div className="text-[10px] opacity-90">Dropped</div>
            </div>
            <div className="bg-yellow-500 dark:bg-yellow-600 p-3 rounded text-white">
              <div className="text-2xl font-bold">4</div>
              <div className="text-[10px] opacity-90">Pending</div>
            </div>
          </div>
          <div className="flex space-x-4 border-b border-gray-100 dark:border-gray-700 mb-4 pb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            <button className="text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-2 -mb-2.5">
              Today
            </button>
            <button className="hover:text-gray-700 dark:hover:text-gray-300">
              Last 30 days
            </button>
            <button className="hover:text-gray-700 dark:hover:text-gray-300">
              Last 90 days
            </button>
            <button className="hover:text-gray-700 dark:hover:text-gray-300">
              All time
            </button>
          </div>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={courseActivityData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                  className="dark:stroke-gray-700"
                />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <YAxis
                  stroke="#6b7280"
                  className="dark:text-gray-400 text-xs"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    color: "#1f2937",
                  }}
                  className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <Legend />
                <Bar dataKey="students" name="Students" radius={[4, 4, 0, 0]}>
                  {courseActivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-100 dark:border-gray-700">
                <th className="font-normal text-left py-2"></th>
                <th className="font-normal text-right py-2">COURSES</th>
                <th className="font-normal text-right py-2">STUDENTS</th>
                <th className="font-normal py-2"></th>
              </tr>
            </thead>
            <tbody>
              {courseActivityData.map((course, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 flex items-center">
                    {course.status === "active" && (
                      <div className="mr-3">
                        <TrendingUp
                          className="w-4 h-4"
                          style={{ color: course.color }}
                        />
                      </div>
                    )}
                    {course.status === "medium" && (
                      <div className="mr-3">
                        <Activity
                          className="w-4 h-4"
                          style={{ color: course.color }}
                        />
                      </div>
                    )}
                    {course.status === "low" && (
                      <div className="mr-3">
                        <AlertTriangle
                          className="w-4 h-4"
                          style={{ color: course.color }}
                        />
                      </div>
                    )}
                    <span className="text-gray-700 dark:text-gray-300 text-xs">
                      {course.name}
                    </span>
                  </td>
                  <td className="text-right text-gray-600 dark:text-gray-400 text-xs">
                    {course.courses}
                  </td>
                  <td className="text-right text-gray-600 dark:text-gray-400 text-xs">
                    {course.students}
                  </td>
                  <td className="text-right">
                    <button className="text-[10px] border border-gray-200 dark:border-gray-600 px-2 py-0.5 rounded text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
