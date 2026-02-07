import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Image as ImageIcon,
  Tag,
  Clock,
  DollarSign,
  AlignLeft,
  CheckCircle,
} from "lucide-react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import useTheme from "../hooks/useTheme";
import { addressOfServer } from "./address";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleAddCourse = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value?.trim();
    const image = form.image.value?.trim();
    const priceStr = form.price.value?.trim();
    const duration = form.duration.value?.trim();
    const category = form.category.value?.trim();
    const description = form.description.value?.trim();
    const isFeatured = form.isFeatured.checked;

    // Basic validation
    if (!title || !image || !priceStr || !duration || !category || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const price = Number(priceStr);
    if (isNaN(price) || price < 0) {
      toast.error("Price must be a valid non-negative number.");
      return;
    }

    const newCourse = {
      title,
      image,
      price,
      duration,
      category,
      description,
      isFeatured,
      instructor: {
        name: user?.displayName || "Unknown Instructor",
        email: user?.email || "",
        photo: user?.photoURL || "",
      },
      createdAt: new Date().toISOString(),
    };

    try {
      await axios.post(`${addressOfServer}/courses`, newCourse);
      toast.success("Course published successfully!");
      form.reset();
      navigate("/dashboard/myAddedCourse");
    } catch (err) {
      console.error("Failed to add course:", err);
      toast.error(
        err.response?.data?.message || "Failed to publish course. Try again."
      );
    }
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
          className={`rounded-3xl shadow-2xl overflow-hidden border ${
            isDark
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Header */}
          <div
            className={`p-8 text-white ${
              isDark ? "bg-[#137fec]" : "bg-[#137fec]"
            }`}
          >
            <div className="flex items-center gap-4 mb-2">
              <PlusCircle className="w-8 h-8" />
              <h2 className="text-3xl font-black tracking-tight">
                Add New Course
              </h2>
            </div>
            <p className="text-blue-100/90">
              Create a high-quality learning experience for your students.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAddCourse} className="p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Title */}
              <div className="md:col-span-2 space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Tag className="w-4 h-4 text-[#137fec]" />
                  Course Title *
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                  placeholder="e.g. Master React.js from Scratch"
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2 space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-[#137fec]" />
                  Thumbnail URL *
                </label>
                <input
                  name="image"
                  type="url"
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                  placeholder="https://example.com/course-preview.jpg"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-[#137fec]" />
                  Price (USD) *
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                  placeholder="29.99"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Clock className="w-4 h-4 text-[#137fec]" />
                  Duration *
                </label>
                <input
                  name="duration"
                  type="text"
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                  placeholder="e.g. 12.5 hours • 8 weeks"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <AlignLeft className="w-4 h-4 text-[#137fec]" />
                  Category *
                </label>
                <select
                  name="category"
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                >
                  <option value="">Select category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="AI & Machine Learning">
                    AI & Machine Learning
                  </option>
                </select>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-3 pt-4 md:pt-8 md:col-span-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="isFeatured"
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
                    className={`ml-3 text-sm font-semibold ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Mark as Featured
                  </span>
                </label>
              </div>

              {/* Description */}
              <div className="md:col-span-2 space-y-2">
                <label
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-[#137fec]" />
                  Description *
                </label>
                <textarea
                  name="description"
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] outline-none transition-all resize-y ${
                    isDark
                      ? "border-gray-700 text-gray-100 bg-gray-800"
                      : "border-gray-200 text-gray-900 bg-gray-50"
                  }`}
                  placeholder="Describe what students will learn, who this course is for, and what they'll be able to do after completing it..."
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-4 mt-6 font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${
                isDark
                  ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/30"
                  : "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/25"
              }`}
            >
              <PlusCircle className="w-5 h-5" />
              Publish Course
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddCourse;