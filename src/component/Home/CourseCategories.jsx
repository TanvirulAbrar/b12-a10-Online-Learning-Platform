import React from "react";
import { Link } from "react-router";
import {
  Code2,
  Database,
  Smartphone,
  Palette,
  Megaphone,
  Briefcase,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";

const CourseCategories = () => {
  const { theme } = useTheme();
  const categories = [
    {
      title: "Web Development",
      description: "Build modern websites & apps",
      courseCount: 12,
      Icon: Code2,
      bgColor: "bg-blue-600",
      textColor: "text-blue-100",
    },
    {
      title: "Data Science & AI",
      description: "Master analytics & machine learning",
      courseCount: 8,
      Icon: Database,
      bgColor: "bg-purple-500",
      textColor: "text-purple-100",
    },
    {
      title: "Mobile Development",
      description: "Create apps for iOS & Android",
      courseCount: 10,
      Icon: Smartphone,
      bgColor: "bg-green-500",
      textColor: "text-green-100",
    },
    {
      title: "Graphic Design",
      description: "Learn UI/UX & creative tools",
      courseCount: 15,
      Icon: Palette,
      bgColor: "bg-pink-500",
      textColor: "text-pink-100",
    },
    {
      title: "Digital Marketing",
      description: "Grow businesses online",
      courseCount: 9,
      Icon: Megaphone,
      bgColor: "bg-amber-500",
      textColor: "text-amber-100",
    },
    {
      title: "Business & Management",
      description: "Leadership & entrepreneurship",
      courseCount: 11,
      Icon: Briefcase,
      bgColor: "bg-indigo-500",
      textColor: "text-indigo-100",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-base dark:bg-slate-900">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl font-extrabold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          } mb-4`}
        >
          Explore Courses by Category
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Find the perfect course to boost your skills
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            to={`/courses?category=${category.title
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")}`}
            key={index}
            className={`${category.bgColor} rounded-2xl p-8 text-center text-white hover:scale-[1.02] transition-transform cursor-pointer shadow-lg`}
          >
            <category.Icon className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className={`${category.textColor} text-sm mb-4`}>
              {category.description}
            </p>
            <span className="text-xs font-medium bg-base/20 px-3 py-1 rounded-full">
              {category.courseCount} Courses
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseCategories;
