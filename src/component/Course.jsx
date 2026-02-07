import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import useAxios from "./useAxios";
import Loading from "./Loading";
import {
  Search,
  ChevronDown,
  Filter,
  LayoutGrid,
  Database,
  Code,
  Smartphone,
  Terminal,
  BarChart3,
  Shield,
  Brain,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../hooks/useTheme";

const Course = () => {
  const axios = useAxios();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterdata, setfilterdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (courses.length > 0) return;

    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data);
        setfilterdata(res.data);
      })
      .catch((err) => console.error(err));
  }, [courses, axios]);

  useEffect(() => {
    if (courses.length === 0) return;

    const uniqueCategories = [
      ...new Set(courses.map((c) => c.category).filter(Boolean)),
    ];
    setCategory(uniqueCategories);
  }, [courses]);

  const findWithWord = (query) => {
    if (!query.trim()) {
      setfilterdata(courses);
      return;
    }
    const mdata = courses.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase()),
    );
    setfilterdata(mdata);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    findWithWord(query);
  };

  const handleSort = (type) => {
    let sorted = [...filterdata];

    if (type === "price High-Low") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (type === "price Low-High") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (type === "Latest") {
      sorted.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
    } else if (type === "Popularity") {
      sorted.sort((a, b) => (b.enrolledCount || 0) - (a.enrolledCount || 0));
    }

    setfilterdata(sorted);
  };

  const handleCategory = (cat) => {
    if (cat === "All") {
      setfilterdata(courses);
      setSelectedCategory("");
    } else {
      const filtered = courses.filter((item) => item.category === cat);
      setfilterdata(filtered);
      setSelectedCategory(cat);
    }
  };

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      "Web Development": Code,
      Backend: Terminal,
      Mobile: Smartphone,
      Database: Database,
      "Data Science": BarChart3,
      Security: Shield,
      "AI & ML": Brain,
    };
    return iconMap[categoryName] || Code;
  };

  if (courses.length === 0) return <Loading />;

  return (
    <div
      className={`min-h-screen antialiased transition-colors duration-300 ${
        isDark ? "bg-[#101922] text-white" : "bg-[#f6f7f8] text-[#111418]"
      }`}
    >
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-3 mb-8 px-4">
            <h1
              className={`text-4xl font-black leading-tight tracking-[-0.033em] ${
                isDark ? "text-white" : "text-[#111418]"
              }`}
            >
              Explore All Courses
            </h1>
            <p
              className={`text-lg font-normal max-w-2xl ${
                isDark ? "text-gray-400" : "text-[#617589]"
              }`}
            >
              Unlock your potential with our comprehensive library of expert-led
              courses designed for professional growth.
            </p>
          </div>

          {/* Toolbar */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 rounded-xl mb-8 border transition-colors duration-300 ${
              isDark
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-[#f0f2f4]"
            }`}
          >
            <div className="flex-1 w-full max-w-lg">
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 flex items-center pl-4 ${
                    isDark ? "text-gray-400" : "text-[#617589]"
                  }`}
                >
                  <Search className="size-5" />
                </div>
                <input
                  className={`w-full h-12 pl-12 pr-4 rounded-lg border-none text-sm focus:ring-2 focus:ring-[#137fec] outline-none transition-all placeholder:text-[#617589] ${
                    isDark
                      ? "bg-[#101922] text-white placeholder:text-gray-500"
                      : "bg-[#f6f7f8] text-[#111418]"
                  }`}
                  placeholder="Search for courses, skills, or authors..."
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div
                className={`flex items-center gap-2 text-sm font-medium whitespace-nowrap ${
                  isDark ? "text-gray-300" : "text-[#111418]"
                }`}
              >
                <div className="flex items-center space-x-3 text-sm font-semibold">
                  <span
                    className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Sort by:
                  </span>
                  <div className="relative">
                    <select
                      className={`appearance-none rounded-lg h-10 px-4 pr-10 text-sm font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#137fec] transition-all
        ${
          isDark
            ? "bg-[#101922] text-white border border-transparent"
            : "bg-[#f0f2f4] text-[#111418] border border-gray-300"
        }`}
                      onChange={(e) => handleSort(e.target.value)}
                    >
                      {/* <option value="Latest">Latest</option>
      <option value="Popularity">Popularity</option> */}
                      <option value="price Low-High">Price: Low to High</option>
                      <option value="price High-Low">Price: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <ChevronDown
                        className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? "bg-[#101922] text-white hover:bg-gray-800"
                    : "bg-[#f0f2f4] text-[#111418] hover:bg-gray-200"
                }`}
              >
                <Filter className="size-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 px-4">
            {/* Side Navigation Filter */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div
                className={`sticky top-24 p-6 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-[#f0f2f4]"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${
                    isDark ? "text-white" : "text-[#111418]"
                  }`}
                >
                  Categories
                </h3>
                <nav className="flex flex-col gap-2">
                  <button
                    onClick={() => handleCategory("All")}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                      selectedCategory === ""
                        ? "bg-[#137fec] text-white shadow-md shadow-[#137fec]/20"
                        : isDark
                          ? "hover:bg-[#137fec]/20 text-gray-300 group"
                          : "hover:bg-[#137fec]/10 text-[#111418] group"
                    }`}
                  >
                    <LayoutGrid
                      className={`size-5 ${
                        selectedCategory === ""
                          ? "text-white"
                          : isDark
                            ? "text-gray-500 group-hover:text-[#137fec]"
                            : "text-gray-500 group-hover:text-[#137fec]"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        selectedCategory === ""
                          ? "text-white"
                          : isDark
                            ? "group-hover:text-[#137fec]"
                            : "group-hover:text-[#137fec]"
                      }`}
                    >
                      All Courses
                    </span>
                  </button>

                  {category.map((cat) => {
                    const IconComponent = getCategoryIcon(cat);
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategory(cat)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                          selectedCategory === cat
                            ? "bg-[#137fec] text-white shadow-md shadow-[#137fec]/20"
                            : isDark
                              ? "hover:bg-[#137fec]/20 text-gray-300 group"
                              : "hover:bg-[#137fec]/10 text-[#111418] group"
                        }`}
                      >
                        <IconComponent
                          className={`size-5 ${
                            selectedCategory === cat
                              ? "text-white"
                              : isDark
                                ? "text-gray-500 group-hover:text-[#137fec]"
                                : "text-gray-500 group-hover:text-[#137fec]"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            selectedCategory === cat
                              ? "text-white"
                              : isDark
                                ? "group-hover:text-[#137fec]"
                                : "group-hover:text-[#137fec]"
                          }`}
                        >
                          {cat}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Course Grid */}
            <div className="flex-1">
              {filterdata.length === 0 ? (
                <div className="flex flex-col items-center gap-8 py-16">
                  {/* No Results State */}
                  <div
                    className={`relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden border flex items-center justify-center transition-colors ${
                      isDark
                        ? "bg-gradient-to-br from-[#101922] to-[#137fec]/10 border-gray-700"
                        : "bg-gradient-to-br from-[#f6f7f8] to-[#137fec]/5 border-[#137fec]/10"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center ${
                        isDark ? "text-[#137fec]/40" : "text-[#137fec]/40"
                      }`}
                    >
                      <Search className="size-20" />
                    </div>
                  </div>

                  <div className="flex max-w-[540px] flex-col items-center gap-4">
                    <h1
                      className={`text-3xl font-bold leading-tight tracking-[-0.015em] text-center ${
                        isDark ? "text-white" : "text-[#111418]"
                      }`}
                    >
                      {searchQuery
                        ? `Oops! We couldn't find any courses for "${searchQuery}"`
                        : selectedCategory
                          ? `No courses found in "${selectedCategory}"`
                          : "No courses found"}
                    </h1>
                    <p
                      className={`text-lg font-normal leading-relaxed text-center ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Try adjusting your search query, removing filters, or
                      explore one of our most popular learning paths below.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("");
                        setfilterdata(courses);
                      }}
                      className={`flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 text-base font-bold transition-all shadow-md ${
                        isDark
                          ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/15"
                          : "bg-[#137fec] hover:bg-[#0e6fd9] text-white shadow-[#137fec]/25"
                      }`}
                    >
                      Reset Search
                    </button>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("");
                        setfilterdata(courses);
                      }}
                      className={`flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 text-base font-bold border transition-all ${
                        isDark
                          ? "bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
                          : "bg-white border-gray-200 text-[#111418] hover:bg-gray-50"
                      }`}
                    >
                      View All Courses
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence>
                    {filterdata.map((course, index) => (
                      <motion.div
                        key={course._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="h-full"
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Course;
