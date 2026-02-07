import React from "react";

export default function TestimonialsSection({ isDark }) {
  const testimonials = [
    {
      quote:
        "O-Learn completely changed my career path. The courses are comprehensive, practical, and the instructors are truly top-tier professionals.",
      name: "Robert Hayes",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      quote:
        "The flexibility of learning at my own pace allowed me to master Data Science while working full-time. Highly recommend!",
      name: "Samuel Wright",
      role: "Data Analyst",
      image:
        "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      quote:
        "Excellent content quality, very practical exercises, and the certificates actually helped me stand out on LinkedIn and get interviews.",
      name: "Daniel Foster",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    },
  ];

  return (
    <section
      className={`py-16 md:py-20 rounded-3xl my-12 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center ${
            isDark ? "text-white" : "text-[#111418]"
          }`}
        >
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col h-full justify-between p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-[#f6f7f8] border-[#f0f2f4] hover:border-[#dbe0e6]"
              }`}
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-[#137fec] text-5xl opacity-15 pointer-events-none">
                format_quote
              </span>

              <p
                className={`text-base md:text-lg italic leading-relaxed line-clamp-4 ${
                  isDark ? "text-gray-300" : "text-[#617589]"
                }`}
              >
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 flex-shrink-0"
                  style={{
                    borderColor: isDark ? "#137fec30" : "#137fec20",
                  }}
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                />
                <div>
                  <p
                    className={`font-bold text-base ${
                      isDark ? "text-white" : "text-[#111418]"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs md:text-sm ${
                      isDark ? "text-gray-400" : "text-[#617589]"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p
            className={`text-sm md:text-base ${
              isDark ? "text-gray-400" : "text-[#617589]"
            }`}
          >
            Join <span className="font-bold text-[#137fec]">2M+</span> happy
            learners today
          </p>
        </div>
      </div>
    </section>
  );
}
