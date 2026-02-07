import React from "react";
import { NavLink } from "react-router";
import useTheme from "../hooks/useTheme";

const CourseCard = ({ course }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const {
    _id,
    title = "Untitled Course",
    image,
    price = 0,
    category,
    description,
    isFeatured = false,
  } = course || {};

  const categoryLabel =
    typeof category === "string" ? category : category?.name || "Uncategorized";

  const displayPrice = price === 0 ? "Free" : `$${price}`;

  return (
    <NavLink
      to={`/courses/${_id}`}
      className="block h-full group focus:outline-none focus:ring-2 focus:ring-[#137fec]/50 rounded-xl"
    >
      <div
        className={`rounded-xl overflow-hidden border flex flex-col h-full transition-all hover:shadow-xl ${
          isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        }`}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"
            }
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded shadow-sm">
              Premium
            </span>
            {isFeatured && (
              <span className="px-2.5 py-1 bg-[#137fec] text-white text-xs font-bold rounded shadow-sm">
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          {/* Category – now safe */}
          <span
            className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
              isDark ? "text-blue-400" : "text-[#137fec]"
            }`}
          >
            {categoryLabel}
          </span>

          <h3
            className={`font-bold text-lg leading-tight mb-3 line-clamp-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm mb-5 line-clamp-3 flex-1 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {description ||
              "Learn in-demand skills with hands-on projects and expert-led instruction."}
          </p>

          <div
            className={`mt-auto flex items-center justify-between pt-4 border-t ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <span
              className={`font-bold text-xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {displayPrice}
            </span>

            <button className="px-5 py-2 bg-[#137fec] hover:bg-[#0e6fd9] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
              View Course
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CourseCard;
