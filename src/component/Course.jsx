import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";
import { toast } from "react-toastify";
import useAxios from "./useAxios";
import Loading from "./Loading";
import AllCourceSkeleton from "./skeleton/AllCourceSkeleton";
import { Search, ChevronDown, Filter, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../hooks/useTheme";

const Course = () => {
  const { theme, textColor } = useTheme();
  // const courses = useLoaderData();
  const axios = useAxios();
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setsort] = useState("");
  const [filterdata, setfilterdata] = useState([]);
  useEffect(() => {
    if (courses.length > 0) {
      return;
    }
    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data);
        setfilterdata(res.data);
        console.log("123");
      })
      .catch((err) => console.error(err));
  }, [courses]);
  // const { _id, title, image, price, category } = course;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (courses) {
      const uniqueCategories = [];

      for (const course of courses) {
        const cat = course.category;
        if (cat && !uniqueCategories.includes(cat)) {
          uniqueCategories.push(cat);
        }
      }

      setCategory(uniqueCategories);
    }
  }, [courses]);

  const findWithWord = (a) => {
    const mdata = courses.filter((item) =>
      item.title.toLowerCase().includes(a.toLowerCase())
    );
    setfilterdata(mdata);
  };
  const handelsort = (type) => {
    if (type == "price High-Low") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setfilterdata(sortbyd);
    }
    if (type == "price Low-High") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      setfilterdata(sortbyd);
    }
    if (type == "size high-low") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(b.size) - Number(a.size)
      );
      setfilterdata(sortbyd);
    }
    if (type == "size low-high") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(a.size) - Number(b.size)
      );
      setfilterdata(sortbyd);
    }
    setsort(type);
  };
  const handelsortb = (e) => {
    e.preventDefault();

    const filterdataa = courses.filter((a) => a.category == e.target.innerText);
    setSelectedCategory(e.target.innerText);
    setfilterdata([...filterdataa]);
  };
  return (
    <div className="min-h-screen bg-base-50 dark:bg-slate-900/50 pb-24">
      <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-900 dark:text-white mb-4">
            Explore All Courses
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Unlock your potential with our comprehensive library of expert-led
            courses
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
            </div>
            <input
              type="search"
              onChange={(e) => findWithWord(e.target.value.trim())}
              className="w-full pl-12 pr-4 py-4 bg-base dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md"
              placeholder="Search for courses, skills, or instructors..."
            />
          </div>

          <div className="flex gap-4">
            {/* Sort Dropdown */}
            <div className="relative group">
              <details className="dropdown dropdown-end">
                <summary className="flex items-center gap-2 px-6 py-4 bg-base dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Sort: {sort || "Latest"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <ul className="dropdown-content mt-2 p-2 bg-base dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 w-52 z-[50]">
                  <li>
                    <button
                      onClick={() => handelsort("price High-Low")}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handelsort("price Low-High")}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handelsort("size high-low")}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      Duration: Long to Short
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handelsort("size low-high")}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      Duration: Short to Long
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold text-xl">
            <Filter className="w-5 h-5 text-purple-600" />
            <h3 className={`${textColor} dark:text-white`}>
              Filter by Category
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
            <button
              onClick={() => {
                setfilterdata(courses);
                setSelectedCategory("All Categories");
              }}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === "All Categories"
                  ? "border-purple-600 text-purple-600"
                  : "border-slate-200 text-slate-600"
              }  hover:bg-purple-600 hover:text-white transition-all font-medium whitespace-nowrap`}
            >
              All Categories
            </button>
            {category.map((a, i) => (
              <button
                onClick={(e) => handelsortb(e)}
                key={"ac" + i}
                className={`${
                  selectedCategory === a
                    ? "border-purple-600"
                    : "border-slate-200"
                } px-6 py-2 rounded-full border  dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-purple-600 hover:text-purple-600 transition-all font-medium whitespace-nowrap`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {!courses.length > 0 && <AllCourceSkeleton />}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filterdata.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={course._id}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filterdata.length === 0 && courses.length > 0 && (
          <div className="text-center py-24">
            <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
