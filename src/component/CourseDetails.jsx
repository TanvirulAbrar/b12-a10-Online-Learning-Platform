import React, { useEffect, useState, use } from "react";
import { NavLink, useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import {
  Briefcase,
  Star,
  Users,
  Globe,
  Calendar,
  Clock,
  ShieldCheck,
  Play,
  Smartphone,
  BadgeCheck,
  Award,
  Tag,
  Ticket,
  User,
  CheckCircle,
  Accessibility,
  ArrowRight,
  Share2,
  Heart,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import useAxios from "./useAxios";
import Loading from "./Loading";
import useTheme from "../hooks/useTheme";

const CourseDetails = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const axios = useAxios();
  const [course, setCourse] = useState(null);
  const [textColor, setTextColor] = useState("");
  useEffect(() => {
    setTextColor(theme === "dark" ? "text-white" : "text-black");
  }, [theme]);

  const { user, enroll, enrollid, setenroll } = use(AuthContext);

  const [isEnrolled, setisEnrolled] = useState(false);
  useEffect(() => {
    if (!id) return;

    axios
      .get(`/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    if (!course || !enroll) {
      return;
    }
    const data = enroll?.filter((a) => a == course._id);
    if (data.length > 0) {
      setisEnrolled(true);
    }
  }, [enroll, course]);

  if (!course) return <Loading></Loading>;

  const handelSubmit = (event) => {
    event.preventDefault();
    if (course.instructor.email == user.email) {
      return toast("You cannot enroll in your own course.");
    }
    let newCourse = {};
    if (isEnrolled) {
      const filterid = enroll.filter((a) => a != course._id);

      setenroll([...filterid]);
      newCourse = {
        email: user.email,
        enrolled: [...filterid],
      };
    } else {
      setenroll([...enroll, course._id]);
      newCourse = {
        email: user.email,
        enrolled: [...enroll, course._id],
      };
    }

    axios
      .patch(`${addressOfServer}/enroll/${enrollid}`, newCourse)
      .then((res) => {
        if (isEnrolled) {
          toast("canceled successfully");
        } else {
          toast.success(" enrolled successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
    setisEnrolled(!isEnrolled);
  };

  const {
    _id,
    title,
    image,
    price,
    duration,
    category,
    isFeatured,
    description,
    instructor,
  } = course;

  const points = [
    "Understand AI agents and the underlying technology",
    "How to skyrocket productivity using AI agents",
    "How to build scalable systems",
    "Understand key Artificial Intelligence concepts",
    `Acquire an understanding of ${title}`,
    `Understand why ${title} is essential for success`,
  ];

  return (
    <div className="min-h-screen bg-base-50 dark:bg-base-900/50 pb-20">
      {/* Course Header Section */}
      <section
        className="relative py-12 lg:py-20 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <NavLink
                  to="/courses"
                  className="hover:text-purple-400 transition-colors"
                >
                  Courses
                </NavLink>
                <ChevronRight className="w-4 h-4" />
                <span className="text-purple-400 font-medium">{category}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-black leading-tight"
              >
                {title}
              </motion.h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                {description ||
                  `Master ${title} with industry-leading experts. A comprehensive journey from fundamentals to advanced techniques.`}
              </p>

              <div className="flex flex-wrap gap-6 items-center pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold">4.8</span>
                  <span className="text-slate-400 text-sm">
                    (1,245 ratings)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="font-medium">4,568 students enrolled</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 items-center text-sm text-slate-300 border-t border-slate-700/50 pt-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-400" />
                  <span>
                    Created by{" "}
                    <span className="text-white font-bold">
                      {instructor?.name || "Expert Instructor"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Last updated 11/2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>English, French [Auto]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 py-12">
            {/* What you'll learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`bg-base dark:bg-base-800 ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm`}
            >
              <h2 className="text-2xl font-black text-base-400 dark:text-white mb-8">
                What you'll learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-500 dark:text-white">
                Description
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{description}</p>
                <p>
                  In this course, you will dive deep into the world of{" "}
                  {category}. We cover everything from the basic concepts to
                  advanced implementations. Whether you're a beginner looking to
                  start your career or a professional wanting to level up your
                  skills, this course is designed for you.
                </p>
                <h4 className="text-slate-900 dark:text-white font-bold mt-4">
                  Why this course?
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Real-world projects and hands-on exercises</li>
                  <li>Direct access to instructor for Q&A</li>
                  <li>Lifetime access to all future updates</li>
                  <li>Verified certificate of completion</li>
                </ul>
              </div>
            </div>

            {/* Curriculum Teaser */}
            <div className="bg-base-100 dark:bg-base-800/50 rounded-3xl p-8 border border-dashed border-slate-300 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 text-center md:text-left">
                    Course Content
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
                    12 sections • 85 lectures • 14h 25m total length
                  </p>
                </div>
                <button className="px-6 py-3 bg-base dark:bg-base-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-200 hover:bg-base-50 transition-colors">
                  Expand all sections
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-base dark:bg-base-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
              <div className="relative aspect-video group cursor-pointer">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-base rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 text-purple-600 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs font-bold text-center">
                    Preview this course
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-4xl font-black ${
                        theme === "dark" ? "text-white" : "text-gray-500"
                      } dark:text-white`}
                    >
                      ${price}
                    </span>
                    <span className="text-lg text-slate-400 line-through">
                      ${(Number(price) * 1.5).toFixed(2)}
                    </span>
                    <span className="text-green-500 font-bold text-sm">
                      33% OFF
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-600 text-sm font-bold">
                    <Clock className="w-4 h-4" />
                    <span>2 days left at this price!</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handelSubmit}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                      !isEnrolled
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200 dark:shadow-none"
                        : "bg-base-100 dark:bg-base-700 text-slate-700 dark:text-slate-200 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {!isEnrolled ? (
                      <>
                        Enroll Now <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      "Cancel Enrollment"
                    )}
                  </button>
                  <button className="w-full py-4 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-base-50 dark:hover:bg-base-700 transition-colors">
                    Add to Cart
                  </button>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <h4
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-500"
                    } dark:text-white text-sm`}
                  >
                    This course includes:
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                    <li className="flex items-center gap-3">
                      <Play className="w-4 h-4 text-purple-600" /> 14.5 hours
                      on-demand video
                    </li>
                    <li className="flex items-center gap-3">
                      <Accessibility className="w-4 h-4 text-purple-600" /> Full
                      lifetime access
                    </li>
                    <li className="flex items-center gap-3">
                      <Smartphone className="w-4 h-4 text-purple-600" /> Access
                      on mobile and TV
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-purple-600" /> Certificate
                      of completion
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-purple-600 transition-colors">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-pink-600 transition-colors">
                    <Heart className="w-4 h-4" /> Wishlist
                  </button>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      className="w-full pl-4 pr-12 py-3 bg-base-50 dark:bg-base-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 font-bold text-sm px-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
