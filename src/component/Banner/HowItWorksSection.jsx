// src/components/sections/HowItWorksSection.jsx
const steps = [
  {
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Sign Up",
    desc: "Create your personal account to get personalized recommendations.",
  },
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Browse",
    desc: "Explore thousands of courses across hundreds of unique categories.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Learn",
    desc: "Study at your own pace with lifetime access to all course materials.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Earn Certificate",
    desc: "Get recognized for your hard work with industry-standard certification.",
  },
];

export default function HowItWorksSection({ isDark }) {
  return (
    <section className="py-16">
      <h2
        className={`text-3xl font-bold mb-12 text-center ${isDark ? "text-white" : "text-[#111418]"}`}
      >
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-4 p-8 rounded-2xl border transition-shadow group ${
              isDark
                ? "bg-gray-900/50 border-gray-800 hover:shadow-gray-900/30"
                : "bg-white border-[#dbe0e6] hover:shadow-xl"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                isDark
                  ? "bg-[#137fec]/20 text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white"
                  : "bg-[#137fec]/10 text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
            </div>
            <div>
              <h3
                className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-[#111418]"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-[#617589]"}`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
