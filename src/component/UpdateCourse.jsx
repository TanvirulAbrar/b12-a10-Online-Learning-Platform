import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  Edit3,
  Image as ImageIcon,
  Tag,
  Clock,
  DollarSign,
  AlignLeft,
  CheckCircle,
  Save,
} from "lucide-react";
import AuthContext from "../context/AuthContext";
import useAxios from "./useAxios";
import { addressOfServer } from "./address";
import Loading from "./Loading";
import useTheme from "../hooks/useTheme";

const UpdateCourse = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [course, setCourse] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setIsFeatured(res.data.isFeatured || false);
      })
      .catch((err) => {
        console.error("Failed to load course:", err);
        toast.error("Failed to load course data");
      });
  }, [id, axios]);

  if (!course) return <Loading />;

  const handleUpdateCourse = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value?.trim();
    const image = form.image.value?.trim();
    const price = form.price.value?.trim();
    const duration = form.duration.value?.trim();
    const category = form.category.value?.trim();
    const description = form.description.value?.trim();

    if (!title || !image || !price || !duration || !category || !description) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    const updatedCourse = {
      title,
      image,
      price: Number(price),
      duration,
      category,
      description,
      isFeatured,
      instructor: {
        name: user?.displayName || "Unknown",
        email: user?.email || "",
        photo: user?.photoURL || "",
      },
    };

    axios
      .patch(`${addressOfServer}/courses/${course._id}`, updatedCourse)
      .then(() => {
        toast.success("Course updated successfully!");
        navigate("/dashboard/myAddedCourse");
      })
      .catch((error) => {
        console.error("Update failed:", error);
        toast.error("Failed to update course. Please try again.");
      });
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div
          className={`rounded-[2.5rem] overflow-hidden shadow-2xl border ${
            isDark ? "bg-[#101922] border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          {/* Header */}
          <div className="bg-[#137fec] p-8 text-white">
            <div className="flex items-center gap-4 mb-2">
              <Edit3 className="w-8 h-8" />
              <h2 className="text-3xl font-black">Update Course</h2>
            </div>
            <p className="text-blue-100">
              Make adjustments to your course content and details.
            </p>
          </div>

          <form onSubmit={handleUpdateCourse} className="p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title */}
              <div className="space-y-2 md:col-span-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <Tag className="w-4 h-4 text-[#137fec]" />
                  Course Title
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={course.title}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                  placeholder="e.g. Master React.js from Scratch"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2 md:col-span-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-[#137fec]" />
                  Thumbnail Image URL
                </label>
                <input
                  name="image"
                  type="text"
                  defaultValue={course.image}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-[#137fec]" />
                  Price ($)
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  defaultValue={course.price}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                  placeholder="29.99"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#137fec]" />
                  Duration
                </label>
                <input
                  name="duration"
                  type="text"
                  defaultValue={course.duration}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                  placeholder="e.g. 12.5 Hours"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <AlignLeft className="w-4 h-4 text-[#137fec]" />
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={course.category}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {/* Featured Toggle */}
              <div className="flex items-center gap-3 pt-8 md:col-span-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-11 h-6 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#137fec]/30 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                      isDark
                        ? "bg-gray-700 peer-checked:bg-[#137fec] after:border-gray-600 peer-checked:after:border-white"
                        : "bg-gray-200 peer-checked:bg-[#137fec] after:border-gray-300 peer-checked:after:border-white"
                    }`}
                  ></div>
                  <span
                    className={`ml-3 text-sm font-bold ${
                      isDark ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    Feature this course
                  </span>
                </label>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <label
                  className={`flex items-center gap-2 text-sm font-bold ${
                    isDark ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-[#137fec]" />
                  Course Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  defaultValue={course.description}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all resize-y ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-[#f6f7f8] border-gray-200 text-[#111418]"
                  }`}
                  placeholder="Provide a detailed description of what students will learn..."
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-4 font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 group ${
                isDark
                  ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/30"
                  : "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/25"
              }`}
            >
              Update Changes
              <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateCourse;
