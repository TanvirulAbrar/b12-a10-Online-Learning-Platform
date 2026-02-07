const categories = [
  {
    name: "Web Dev",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    name: "Data Science",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    name: "Mobile Dev",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    name: "Design",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z",
  },
  {
    name: "Marketing",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    name: "Business",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-4",
  },
];

export default function TopCategoriesSection({ isDark, navigate }) {
  return (
    <section className="py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-[#111418]"}`}
          >
            Top Categories
          </h2>
          <p className={`${isDark ? "text-gray-400" : "text-[#617589]"}`}>
            Explore our wide range of topics
          </p>
        </div>
        <button
          onClick={() => navigate("/courses")}
          className={`text-sm font-bold hover:underline ${
            isDark ? "text-[#60a5fa]" : "text-[#137fec]"
          }`}
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl flex flex-col items-center gap-3 text-center hover:shadow-lg transition-all cursor-pointer border ${
              isDark
                ? "bg-gray-800 border-gray-700 hover:shadow-gray-800/30"
                : "bg-white border-[#f0f2f4] hover:shadow-lg"
            }`}
          >
            <svg
              className="w-10 h-10 text-[#137fec]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={cat.icon}
              />
            </svg>
            <span className="font-bold text-sm">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
