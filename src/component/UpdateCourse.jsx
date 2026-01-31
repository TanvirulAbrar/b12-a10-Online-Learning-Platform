import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import { motion } from "framer-motion";
import {
  Edit3,
  Image as ImageIcon,
  Tag,
  Clock,
  DollarSign,
  AlignLeft,
  CheckCircle2,
  Save,
} from "lucide-react";
import useAxios from "./useAxios";
import Loading from "./Loading";

const UpdateCourse = () => {
  const { id } = useParams();
  const axios = useAxios();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isFeatured, setIsChecked] = useState(false);

  const { user } = use(AuthContext);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setIsChecked(res.data.isFeatured);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) return <Loading />;

  const handelUpdateCourse = (event) => {
    event.preventDefault();

    const title = event.target.title.value?.trim();
    const image = event.target.image.value?.trim();
    const price = event.target.price.value?.trim();
    const duration = event.target.duration.value?.trim();
    const category = event.target.category.value?.trim();
    const description = event.target.description.value?.trim();

    if (!title || !image || !price || !duration || !category || !description) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    const updatedCourse = {
      title,
      image,
      price,
      duration,
      category,
      description,
      isFeatured,
      instructor: {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      },
    };

    axios
      .patch(`${addressOfServer}/courses/${course._id}`, updatedCourse)
      .then((data) => {
        toast.success("Course updated successfully!");
        navigate("/dashboard/myAddedCourse");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-base dark:bg-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700">
          <div className="bg-indigo-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-2">
              <Edit3 className="w-8 h-8" />
              <h2 className="text-3xl font-black">Update Course</h2>
            </div>
            <p className="text-indigo-100">
              Make adjustments to your course content and details.
            </p>
          </div>

          <form onSubmit={handelUpdateCourse} className="p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <Tag className="w-4 h-4 text-indigo-600" />
                  Course Title
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={course.title}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  placeholder="e.g. Master React.js from Scratch"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <ImageIcon className="w-4 h-4 text-indigo-600" />
                  Thumbnail Image URL
                </label>
                <input
                  name="image"
                  type="text"
                  defaultValue={course.image}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <DollarSign className="w-4 h-4 text-indigo-600" />
                  Price ($)
                </label>
                <input
                  name="price"
                  type="number"
                  defaultValue={course.price}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  placeholder="29.99"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Duration
                </label>
                <input
                  name="duration"
                  type="text"
                  defaultValue={course.duration}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  placeholder="e.g. 12.5 Hours"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <AlignLeft className="w-4 h-4 text-indigo-600" />
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={course.category}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-3 pt-8">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-base after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                  <span className="ml-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                    Feature this course
                  </span>
                </label>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  Course Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  defaultValue={course.description}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  placeholder="Provide a detailed description of what students will learn..."
                ></textarea>
              </div>
            </div>

            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 group">
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
