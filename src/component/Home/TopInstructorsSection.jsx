import React from "react";

export default function TopInstructorsSection({ isDark }) {
  const instructors = [
    {
      name: "Daniel Brooks",
      role: "Game Developer",
      rating: 4.6,
      hours: "47.1",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      name: "Michael Carter",
      role: "Cybersecurity Analyst",
      rating: 4.8,
      hours: "52.4",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      name: "Ryan Mitchell",
      role: "Machine Learning Engineer",
      rating: 4.7,
      hours: "61.8",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      name: "Jonathan Reed",
      role: "Full-Stack Lead",
      rating: 4.9,
      hours: "38.9",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center ${
            isDark ? "text-white" : "text-[#111418]"
          }`}
        >
          Our Top Instructors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 rounded-2xl text-center border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-white border-[#f0f2f4] hover:border-[#dbe0e6]"
              }`}
            >
              <div className="relative mx-auto mb-6">
                <img
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto border-4 transition-colors duration-300"
                  style={{
                    borderColor: isDark ? "#137fec30" : "#137fec20",
                  }}
                  src={instructor.image}
                  alt={`${instructor.name} - ${instructor.role}`}
                />
                {/* Optional subtle glow/hover effect layer */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #137fec 0%, transparent 70%)",
                  }}
                />
              </div>

              <h4
                className={`text-lg md:text-xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                {instructor.name}
              </h4>

              <p
                className={`text-sm md:text-base mb-4 ${
                  isDark ? "text-gray-400" : "text-[#617589]"
                }`}
              >
                {instructor.role}
              </p>

              <div className="flex items-center justify-center gap-1.5 text-yellow-500 mb-3">
                <span className="material-symbols-outlined text-lg fill">
                  star
                </span>
                <span className="font-bold text-base">{instructor.rating}</span>
              </div>

              <p
                className={`text-xs md:text-sm font-medium uppercase tracking-wide ${
                  isDark ? "text-gray-400" : "text-[#617589]"
                }`}
              >
                {instructor.hours} Hours of Content
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
