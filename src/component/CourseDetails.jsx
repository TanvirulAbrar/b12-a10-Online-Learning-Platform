import { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import {
  Star,
  Calendar,
  Clock,
  CheckCircle,
  Play,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  User,
  Award,
  Smartphone,
} from "lucide-react";
import useAxios from "./useAxios";
import Loading from "./Loading";
import useTheme from "../hooks/useTheme"; // ← added this

const CourseDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { theme } = useTheme(); // ← get theme from context
  const isDark = theme === "dark";

  const { user, enroll, enrollid, setenroll } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedSection, setExpandedSection] = useState(2); // Default expanded

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id, axios]);

  useEffect(() => {
    if (!course || !enroll) return;
    const isAlreadyEnrolled = enroll?.some((enrolledId) => enrolledId === course._id);
    setIsEnrolled(isAlreadyEnrolled);
  }, [enroll, course]);

  if (!course) return <Loading />;

  const handleEnrollToggle = (event) => {
    event.preventDefault();

    if (course.instructor.email === user.email) {
      return toast.error("You cannot enroll in your own course.");
    }

    let updatedEnrolled = [];
    if (isEnrolled) {
      updatedEnrolled = enroll.filter((id) => id !== course._id);
    } else {
      updatedEnrolled = [...enroll, course._id];
    }

    setenroll(updatedEnrolled);

    const payload = {
      email: user.email,
      enrolled: updatedEnrolled,
    };

    axios
      .patch(`${addressOfServer}/enroll/${enrollid}`, payload)
      .then(() => {
        toast.success(isEnrolled ? "Enrollment canceled" : "Enrolled successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });

    setIsEnrolled(!isEnrolled);
  };

  const {
    title,
    image,
    price,
    category,
    description,
    instructor,
  } = course;

  const learningPoints = [
    "Build powerful, fast, user-friendly reactive web apps",
    "Master React Hooks like useState, useEffect, and useContext",
    "Manage complex state with Redux Toolkit and React Query",
    "Deploy real-world React projects to production",
    "Apply modern ES6+ JavaScript features in React",
    "Understand the Virtual DOM and React's reconciliation algorithm",
  ];

  const courseSections = [
    { title: "Introduction to React", lectures: 5, duration: "45min" },
    { title: "JSX and Components", lectures: 8, duration: "1h 12min" },
    { title: "State and Props", lectures: 10, duration: "2h 5min", expanded: true },
    { title: "Event Handling", lectures: 6, duration: "1h 30min" },
    { title: "React Hooks", lectures: 12, duration: "3h 15min" },
  ];

  return (
    <div
      className={`min-h-screen font-display transition-colors duration-300 ${
        isDark ? "bg-[#101922] text-white" : "bg-[#f6f7f8] text-[#111418]"
      }`}
    >
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area (Left) */}
          <div className="flex-1 lg:max-w-[750px]">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-4">
              <NavLink
                to="/courses"
                className={`text-sm font-medium hover:text-[#137fec] transition-colors ${
                  isDark ? "text-gray-400" : "text-[#617589]"
                }`}
              >
                Courses
              </NavLink>
              <span className={`${isDark ? "text-gray-400" : "text-[#617589]"}`}>/</span>
              <span
                className={`text-sm font-medium hover:text-[#137fec] transition-colors ${
                  isDark ? "text-gray-400" : "text-[#617589]"
                }`}
              >
                {category}
              </span>
              <span className={`${isDark ? "text-gray-400" : "text-[#617589]"}`}>/</span>
              <span className={`${isDark ? "text-white" : "text-[#111418]"}`}>
                {title}
              </span>
            </div>

            {/* Hero Section Details */}
            <h1
              className={`tracking-tight text-4xl font-bold leading-tight mb-4 ${
                isDark ? "text-white" : "text-[#111418]"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-lg font-normal leading-relaxed mb-6 ${
                isDark ? "text-gray-300" : "text-[#111418]"
              }`}
            >
              {description ||
                "Master the fundamentals from scratch and build real-world applications with modern techniques and best practices."}
            </p>

            {/* Stats and Meta */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  isDark ? "bg-yellow-900/30" : "bg-yellow-100"
                }`}
              >
                <span className="text-yellow-400 font-bold">4.8</span>
                <Star className="text-yellow-500 size-4 fill-current" />
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-400" : "text-[#617589]"
                  }`}
                >
                  (1,245 ratings)
                </span>
              </div>
              <div className={`${isDark ? "text-white" : "text-[#111418]"} text-sm font-medium`}>
                4,568 students
              </div>
              <div className={`${isDark ? "text-white" : "text-[#111418]"} text-sm`}>
                Created by{" "}
                <span className="text-[#137fec] hover:underline">
                  {instructor?.name || "Expert Instructor"}
                </span>
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  isDark ? "text-gray-400" : "text-[#617589]"
                }`}
              >
                <Calendar className="size-4" />
                Last updated 05/2024
              </div>
            </div>

            {/* Profile Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { value: "4.8", label: "Course Rating" },
                { value: "1,245", label: "Reviews" },
                { value: "4,568", label: "Students" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 rounded-xl border p-5 items-start transition-colors ${
                    isDark
                      ? "bg-gray-900 border-gray-700"
                      : "bg-white border-[#dbe0e6]"
                  }`}
                >
                  <p
                    className={`tracking-light text-2xl font-bold leading-tight ${
                      isDark ? "text-white" : "text-[#111418]"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm font-normal leading-normal ${
                      isDark ? "text-gray-400" : "text-[#617589]"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* What you'll learn */}
            <div
              className={`border rounded-xl p-6 mb-10 transition-colors ${
                isDark ? "bg-gray-900 border-gray-700" : "bg-white border-[#dbe0e6]"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="text-[#137fec] size-5 flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-[#111418]"
                      }`}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                Description
              </h2>
              <div
                className={`space-y-4 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-[#111418]"
                }`}
              >
                <p>
                  Welcome to the most comprehensive course for mastering {title}. Whether you are a beginner or looking to solidify your front-end development skills, this course is designed to take you from zero to a professional developer.
                </p>
                <p>
                  We start with the fundamentals: understanding core concepts, components, and best practices. Then, we dive deep into the modern development paradigm using the latest techniques. You'll learn how to handle events, manage state, and communicate with APIs seamlessly.
                </p>
                <p>
                  By the end of this course, you won't just know how to write code; you'll understand the "why" behind the patterns, preparing you for high-paying roles in the tech industry.
                </p>
              </div>
            </div>

            {/* Course Content */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-[#111418]"
                  }`}
                >
                  Course Content
                </h2>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    isDark ? "text-gray-400" : "text-[#617589]"
                  }`}
                >
                  <span>12 sections</span>
                  <span>•</span>
                  <span>85 lectures</span>
                  <span>•</span>
                  <span>14h 32m total length</span>
                </div>
              </div>

              <button
                className={`mb-4 text-sm font-bold hover:underline ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
              >
                Expand all sections
              </button>

              <div className="space-y-1">
                {courseSections.map((section, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-colors ${
                      isDark ? "border-gray-700" : "border-[#dbe0e6]"
                    }`}
                  >
                    <div
                      className={`px-4 py-4 flex items-center justify-between cursor-pointer transition-colors ${
                        expandedSection === index
                          ? isDark
                            ? "bg-[#137fec]/20"
                            : "bg-[#137fec]/10"
                          : isDark
                          ? "bg-gray-900"
                          : "bg-gray-50"
                      }`}
                      onClick={() =>
                        setExpandedSection(expandedSection === index ? null : index)
                      }
                    >
                      <div className="flex items-center gap-3">
                        {expandedSection === index ? (
                          <ChevronUp className="size-4" />
                        ) : (
                          <ChevronDown className="size-4" />
                        )}
                        <span
                          className={`font-bold text-sm ${
                            expandedSection === index
                              ? "text-[#137fec]"
                              : isDark
                              ? "text-white"
                              : "text-[#111418]"
                          }`}
                        >
                          {section.title}
                        </span>
                      </div>
                      <span
                        className={`text-xs ${
                          isDark ? "text-gray-400" : "text-[#617589]"
                        }`}
                      >
                        {section.lectures} lectures • {section.duration}
                      </span>
                    </div>

                    {expandedSection === index && (
                      <div
                        className={`p-4 border-t transition-colors ${
                          isDark ? "border-gray-700 bg-gray-900" : "border-[#dbe0e6] bg-white"
                        }`}
                      >
                        <ul className="space-y-3">
                          <li className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm">
                              <Play
                                className={`size-5 ${
                                  isDark ? "text-gray-400" : "text-gray-400"
                                }`}
                              />
                              <span
                                className={`${
                                  isDark ? "text-gray-300" : "text-[#111418]"
                                }`}
                              >
                                Understanding Props
                              </span>
                            </div>
                            <span
                              className={`text-xs ${
                                isDark ? "text-gray-500" : "text-[#617589]"
                              }`}
                            >
                              12:34
                            </span>
                          </li>
                          <li className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm">
                              <Play
                                className={`size-5 ${
                                  isDark ? "text-gray-400" : "text-gray-400"
                                }`}
                              />
                              <span
                                className={`${
                                  isDark ? "text-gray-300" : "text-[#111418]"
                                }`}
                              >
                                useState Hook Basics
                              </span>
                            </div>
                            <span
                              className={`text-xs ${
                                isDark ? "text-gray-500" : "text-[#617589]"
                              }`}
                            >
                              18:20
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Right Sidebar */}
          <aside className="lg:w-[380px] flex flex-col gap-6">
            <div
              className={`sticky top-24 rounded-xl border shadow-lg overflow-hidden transition-colors ${
                isDark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-[#dbe0e6]"
              }`}
            >
              {/* Video Preview */}
              <div className="relative group cursor-pointer aspect-video bg-gray-200 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-16 rounded-full bg-white/90 flex items-center justify-center text-[#137fec] shadow-xl">
                    <Play className="size-8 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 w-full text-center">
                  <span className="text-white font-bold text-sm drop-shadow-md">
                    Preview this course
                  </span>
                </div>
              </div>

              {/* Pricing and Buttons */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-[#111418]"
                    }`}
                  >
                    ${price}
                  </span>
                  <span
                    className={`text-lg line-through ${
                      isDark ? "text-gray-500" : "text-[#617589]"
                    }`}
                  >
                    ${(Number(price) * 1.5).toFixed(2)}
                  </span>
                  <span className="bg-[#137fec]/20 text-[#137fec] text-xs font-bold px-2 py-1 rounded">
                    33% OFF
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 text-sm font-bold mb-6 ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  <Clock className="size-4" />
                  <span>2 days left at this price!</span>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <button
                    onClick={handleEnrollToggle}
                    className={`w-full font-bold py-3 rounded-lg transition-colors ${
                      isEnrolled
                        ? isDark
                          ? "bg-red-700 hover:bg-red-800 text-white"
                          : "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                    }`}
                  >
                    {isEnrolled ? "Cancel Enrollment" : "Enroll Now"}
                  </button>
                  <button
                    className={`w-full border py-3 rounded-lg transition-colors ${
                      isDark
                        ? "border-gray-700 hover:bg-gray-800 text-white"
                        : "border-[#dbe0e6] hover:bg-gray-50 text-[#111418]"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="text-center mb-6">
                  <p
                    className={`text-xs ${
                      isDark ? "text-gray-500" : "text-[#617589]"
                    }`}
                  >
                    30-Day Money-Back Guarantee
                  </p>
                </div>

                {/* Course Includes */}
                <div className="mb-6">
                  <h3
                    className={`font-bold text-sm mb-4 ${
                      isDark ? "text-white" : "text-[#111418]"
                    }`}
                  >
                    This course includes:
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { icon: Play, text: "14.5 hours on-demand video" },
                      { icon: CheckCircle, text: "12 articles" },
                      { icon: CheckCircle, text: "25 downloadable resources" },
                      { icon: CheckCircle, text: "Full lifetime access" },
                      { icon: Smartphone, text: "Access on mobile and TV" },
                      { icon: Award, text: "Certificate of completion" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <item.icon
                          className={`size-5 opacity-70 ${
                            isDark ? "text-gray-400" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`${
                            isDark ? "text-gray-300" : "text-[#111418]"
                          }`}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div
                  className={`flex items-center justify-between pt-6 border-t transition-colors ${
                    isDark ? "border-gray-700" : "border-[#dbe0e6]"
                  }`}
                >
                  <button
                    className={`flex items-center gap-2 text-sm font-bold hover:text-[#137fec] transition-colors ${
                      isDark ? "text-gray-300" : "text-[#111418]"
                    }`}
                  >
                    <Share2 className="size-4" /> Share
                  </button>
                  <button
                    className={`flex items-center gap-2 text-sm font-bold hover:text-[#137fec] transition-colors ${
                      isDark ? "text-gray-300" : "text-[#111418]"
                    }`}
                  >
                    <Heart className="size-4" /> Wishlist
                  </button>
                  <button
                    className={`flex items-center gap-2 text-sm font-bold hover:text-[#137fec] transition-colors ${
                      isDark ? "text-gray-300" : "text-[#111418]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">sell</span> Coupon
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer
        className={`mt-12 border-t py-10 px-10 text-center transition-colors ${
          isDark ? "border-gray-700" : "border-[#f0f2f4]"
        }`}
      >
        <p
          className={`text-sm ${
            isDark ? "text-gray-500" : "text-[#617589]"
          }`}
        >
          © 2024 O-Learn Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CourseDetails;