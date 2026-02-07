// src/components/sections/HeroSection.jsx
export default function HeroSection({ isDark, user, navigate }) {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span
              className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full w-fit ${
                isDark
                  ? "bg-[#137fec]/20 text-[#60a5fa]"
                  : "bg-[#137fec]/10 text-[#137fec]"
              }`}
            >
              Expert-Led Learning
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Unlock Your Potential with{" "}
              <span className="text-[#137fec]">Premium</span> Courses
            </h1>
            <p
              className={`text-lg max-w-lg ${isDark ? "text-gray-400" : "text-[#617589]"}`}
            >
              Master new skills with our expert-led online courses designed for
              your career growth. Join over 2 million students today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                user ? navigate("/dashboard") : navigate("/courses")
              }
              className={`flex min-w-[160px] items-center justify-center rounded-xl h-14 px-6 text-base font-bold shadow-lg transition-all bg-[#137fec] text-white hover:bg-[#0e6fd9] ${
                isDark ? "shadow-[#137fec]/20" : "shadow-[#137fec]/25"
              }`}
            >
              {user ? "Go to Dashboard" : "Get Started"}
            </button>

            <button
              onClick={() => navigate("/courses")}
              className={`flex min-w-[160px] items-center justify-center rounded-xl h-14 px-6 text-base font-bold border transition-all ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  : "bg-white border-[#dbe0e6] text-[#111418] hover:bg-gray-100"
              }`}
            >
              Browse Courses
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {/* You can extract avatars to <AvatarStack /> later if needed */}
              <img
                className={`w-10 h-10 rounded-full border-2 object-cover ${isDark ? "border-[#101922]" : "border-white"}`}
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?..."
                alt=""
              />
              <img
                className={`w-10 h-10 rounded-full border-2 object-cover ${isDark ? "border-[#101922]" : "border-white"}`}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?..."
                alt=""
              />
              <img
                className={`w-10 h-10 rounded-full border-2 object-cover ${isDark ? "border-[#101922]" : "border-white"}`}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?..."
                alt=""
              />
              <div
                className={`w-10 h-10 rounded-full bg-[#137fec] flex items-center justify-center text-white text-[10px] font-bold border-2 ${isDark ? "border-[#101922]" : "border-white"}`}
              >
                2M+
              </div>
            </div>
            <p
              className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-[#617589]"}`}
            >
              Trusted by students worldwide
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="w-full aspect-square md:aspect-video lg:aspect-square bg-center bg-cover rounded-3xl shadow-2xl"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1616400619175-5beda3a17896?...")',
            }}
          />
          <div
            className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl hidden md:block ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-[#617589]"}`}
                >
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
