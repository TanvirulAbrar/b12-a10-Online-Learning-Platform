import React from "react";
import { TrendingUp, Activity, AlertTriangle } from "lucide-react";
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  
  const generateTransactionData = () => {
    const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00"];
    return hours.map((time, i) => {
      const base = 120 - i * 12;
      const variation = Math.floor(Math.random() * 15) - 7;
      const all = Math.max(base + variation, 35);
      const failed = Math.max(8 + Math.floor(Math.random() * 12) - 6, 5);
      return {
        time,
        allTransactions: all,
        failedTransactions: failed,
        successfulTransactions: all - failed,
      };
    });
  };

  const generateDeviceData = () => {
    const total = 5192;
    const android = Math.round(total * 0.81);
    const iphone = Math.round(total * 0.19);
    const web = total - android - iphone;
    return [
      { name: "Android", value: android, percentage: 81, color: "#137fec" },
      { name: "iPhone", value: iphone, percentage: 19, color: "#10b981" },
      { name: "Web", value: web, percentage: Math.round((web / total) * 100), color: "#8b5cf6" },
    ];
  };

  const generateCourseActivityData = () => [
    { name: "Web Development", students: 61, courses: 12, color: "#10b981", status: "active" },
    { name: "Data Science", students: 5, courses: 8, color: "#ef4444", status: "low" },
    { name: "Mobile Dev", students: 4, courses: 5, color: "#f59e0b", status: "low" },
    { name: "UI/UX Design", students: 28, courses: 7, color: "#8b5cf6", status: "medium" },
    { name: "Cloud Computing", students: 15, courses: 4, color: "#06b6d4", status: "medium" },
    { name: "Cybersecurity", students: 9, courses: 3, color: "#f97316", status: "low" },
  ];

  const transactionData = generateTransactionData();
  const deviceData = generateDeviceData();
  const courseActivityData = generateCourseActivityData();

  
  const gridStroke = isDark ? "#374151" : "#e5e7eb";
  const axisStroke = isDark ? "#6b7280" : "#6b7280";
  const axisTickFill = isDark ? "#d1d5db" : "#4b5563";
  const tooltipBg = isDark ? "#1f2937" : "white";
  const tooltipBorder = isDark ? "#374151" : "#e5e7eb";
  const tooltipText = isDark ? "#f3f4f6" : "#1f2937";

  const tooltipStyle = {
    backgroundColor: tooltipBg,
    borderColor: tooltipBorder,
    borderRadius: "0.5rem",
    color: tooltipText,
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)",
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Left column */}
      <div className="space-y-6">
        {/* All transactions */}
        <div
          className={`rounded-xl shadow-sm border p-6 ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  All transactions
                </h3>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isDark
                      ? "bg-green-900/60 text-green-300"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  +7%
                </span>
              </div>
              <div className="flex items-center mt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
                <span
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Live
                </span>
              </div>
            </div>
          </div>

          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactionData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="time" stroke={axisStroke} tick={{ fill: axisTickFill }} fontSize={12} />
                <YAxis stroke={axisStroke} tick={{ fill: axisTickFill }} fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="allTransactions"
                  stroke="#137fec"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                  name="All"
                />
                <Line
                  type="monotone"
                  dataKey="successfulTransactions"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Successful"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Failed transactions */}
        <div
          className={`rounded-xl shadow-sm border p-6 ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Failed transactions
                </h3>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isDark
                      ? "bg-red-900/60 text-red-300"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  -11%
                </span>
              </div>
              <div className="flex items-center mt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
                <span
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Live
                </span>
              </div>
            </div>
          </div>

          <div className="h-56 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactionData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="time" stroke={axisStroke} tick={{ fill: axisTickFill }} fontSize={12} />
                <YAxis stroke={axisStroke} tick={{ fill: axisTickFill }} fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="failedTransactions"
                  stroke="#f97316"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                  name="Failed"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-6">
        {/* Active devices */}
        <div
          className={`rounded-xl shadow-sm border p-6 ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-5">
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Active devices
            </h3>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-end gap-8 mt-2 mb-8">
            <div>
              <div
                className={`text-4xl sm:text-5xl font-bold ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                5,192
              </div>
              <div
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                this hour
              </div>
            </div>
            <div>
              <div
                className={`text-3xl sm:text-4xl font-bold ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                4,711
              </div>
              <div
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                yesterday same time
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4
                className={`text-sm font-medium mb-3 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Device type
              </h4>
              <div className="h-40 sm:h-48 w-full max-w-[180px] mx-auto">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius="35%"
                      outerRadius="75%"
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {deviceData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                {deviceData.map((d) => (
                  <div key={d.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></span>
                      <span
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {d.name}
                      </span>
                    </div>
                    <span
                      className={`font-medium ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {d.value.toLocaleString()}{" "}
                      <span
                        className={`font-normal ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        ({d.percentage}%)
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 justify-center">
              <div>
                <h4
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Inactive devices
                </h4>
                <div className="flex items-center gap-3 mt-1.5">
                  <span
                    className={`text-3xl font-bold ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    43
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isDark
                        ? "bg-orange-900/50 text-orange-300"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    +3%
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  90+ days unused
                </p>
              </div>

              <div>
                <h4
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  New devices
                </h4>
                <div className="flex items-center gap-3 mt-1.5">
                  <span
                    className={`text-3xl font-bold ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    221
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isDark
                        ? "bg-green-900/50 text-green-300"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    +19%
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  New registrations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course activity */}
        <div
          className={`rounded-xl shadow-sm border p-6 ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-5">
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Course activity
            </h3>
            <a
              href="#"
              className={`text-xs font-medium hover:underline ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              View all →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-green-600 text-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold">61</div>
              <div className="text-xs mt-1 opacity-90">Enrolled</div>
            </div>
            <div className="bg-red-600 text-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold">5</div>
              <div className="text-xs mt-1 opacity-90">Dropped</div>
            </div>
            <div className="bg-yellow-600 text-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-xs mt-1 opacity-90">Pending</div>
            </div>
          </div>

          <div
            className={`flex gap-5 border-b mb-5 pb-3 text-sm font-medium ${
              isDark
                ? "border-gray-700 text-gray-400"
                : "border-gray-200 text-gray-500"
            }`}
          >
            <button
              className={`pb-1 -mb-3 border-b-2 ${
                isDark
                  ? "text-white border-white"
                  : "text-gray-900 border-gray-900"
              }`}
            >
              Today
            </button>
            <button
              className={`hover:${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              30 days
            </button>
            <button
              className={`hover:${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              90 days
            </button>
            <button
              className={`hover:${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              All time
            </button>
          </div>

          <div className="h-72 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseActivityData} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis
                  dataKey="name"
                  stroke={axisStroke}
                  tick={{ fill: axisTickFill }}
                  fontSize={12}
                  angle={-25}
                  textAnchor="end"
                  height={60}
                />
                <YAxis stroke={axisStroke} tick={{ fill: axisTickFill }} fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="students" name="Students" radius={[6, 6, 0, 0]}>
                  {courseActivityData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr
                  className={`text-xs border-b ${
                    isDark
                      ? "text-gray-400 border-gray-700"
                      : "text-gray-500 border-gray-200"
                  }`}
                >
                  <th className="py-3 font-normal"></th>
                  <th className="py-3 font-normal text-right">Courses</th>
                  <th className="py-3 font-normal text-right">Students</th>
                  <th className="py-3 font-normal text-right"></th>
                </tr>
              </thead>
              <tbody>
                {courseActivityData.map((course) => (
                  <tr
                    key={course.name}
                    className={`border-b hover:transition-colors ${
                      isDark
                        ? "border-gray-800 hover:bg-gray-800/50"
                        : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-4 flex items-center gap-3">
                      {course.status === "active" && (
                        <TrendingUp className="w-4 h-4" style={{ color: course.color }} />
                      )}
                      {course.status === "medium" && (
                        <Activity className="w-4 h-4" style={{ color: course.color }} />
                      )}
                      {course.status === "low" && (
                        <AlertTriangle className="w-4 h-4" style={{ color: course.color }} />
                      )}
                      <span
                        className={`font-medium ${
                          isDark ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {course.name}
                      </span>
                    </td>
                    <td
                      className={`text-right ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {course.courses}
                    </td>
                    <td
                      className={`text-right ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {course.students}
                    </td>
                    <td className="text-right">
                      <button
                        className={`text-xs border px-3 py-1 rounded-md transition ${
                          isDark
                            ? "border-gray-600 hover:bg-gray-700"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
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
    </div>
  );
};

export default DashboardOverview;