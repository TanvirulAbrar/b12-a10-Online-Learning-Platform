// src/components/sections/
export default function StatsCtaSection({ isDark, user, navigate }) {
  return (
    <section className="py-20">
      <div className="bg-[#137fec] rounded-3xl p-12 text-white text-center relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">2M+</p>
              <p className="text-white/70 font-medium">Students</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">15k+</p>
              <p className="text-white/70 font-medium">Courses</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">500k+</p>
              <p className="text-white/70 font-medium">Hours of Content</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to start your learning journey?
          </h2>

          <button
            onClick={() =>
              user ? navigate("/dashboard") : navigate("/courses")
            }
            className={`px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform ${
              isDark
                ? "bg-white text-[#137fec] hover:bg-gray-100"
                : "bg-white text-[#137fec] hover:bg-[#f6f7f8]"
            }`}
          >
            {user ? "Continue Learning" : "Get Started Now"}
          </button>
        </div>
      </div>
    </section>
  );
}
