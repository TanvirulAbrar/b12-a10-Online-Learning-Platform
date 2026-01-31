import React from "react";
import { Star } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Testimonials = () => {
  const { theme } = useTheme();
  const testimonials = [
    {
      name: "David Smith",
      course: "Full Stack Web Development",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      text: "O-Learn transformed my career! The Full Stack Web Development course was incredibly practical, with real-world projects and clear explanations. Highly recommend!",
    },
    {
      name: "James Wilson",
      course: "AI & Machine Learning",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      text: "As a working professional, the flexible pacing on O-Learn was a game-changer. The instructors are top-notch—expert practitioners who really know their stuff.",
    },
    {
      name: "Robert Taylor",
      course: "Graphic Design",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      text: "I was a complete beginner in design, but O-Learn made it so easy and fun. The instructors are supportive, and the video quality is excellent. My portfolio looks professional now!",
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
          What Our Students Say
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Thousands of learners have advanced their careers with O-Learn
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 bg-base dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-sm"
              />
              <div>
                <h4
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {testimonial.name}
                </h4>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {testimonial.course}
                </p>
              </div>
            </div>
            <p
              className={`${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              } leading-relaxed italic mb-6`}
            >
              "{testimonial.text}"
            </p>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
