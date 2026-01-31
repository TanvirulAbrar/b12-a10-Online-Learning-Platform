import React, { useState, useEffect, useRef } from "react";
import { Users, BookOpen, Clock, Star } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Statistics = () => {
  const { theme } = useTheme();
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    hours: 0,
    rating: 0,
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1800;
          const steps = 80;
          const interval = duration / steps;

          const target = {
            students: 15000,
            courses: 85,
            hours: 500000,
            rating: 4.9,
          };

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              students: Math.floor(target.students * easeOutCubic(progress)),
              courses: Math.floor(target.courses * easeOutCubic(progress)),
              hours: Math.floor(target.hours * easeOutCubic(progress)),
              rating: Number(
                (target.rating * easeOutCubic(progress)).toFixed(1)
              ),
            });

            if (currentStep >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const stats = [
    {
      icon: Users,
      label: "Happy Students",
      value: counts.students,
      suffix: "+",
    },
    {
      icon: BookOpen,
      label: "Expert Courses",
      value: counts.courses,
      suffix: "+",
    },
    { icon: Clock, label: "Learning Hours", value: counts.hours, suffix: "+" },
    { icon: Star, label: "Average Rating", value: counts.rating, suffix: "★" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 text-white text-center relative overflow-hidden"
      style={{
        backgroundColor: "#6366f1",
        backgroundImage:
          "radial-gradient(#ffffff 0.5px, transparent 0.5px), radial-gradient(#ffffff 0.5px, #6366f1 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-black ${
            theme === "dark" ? "text-white" : "text-slate-900"
          } mb-6`}
        >
          Join a Thriving Learning Community
        </h2>
        <p
          className={`text-xl ${
            theme === "dark" ? "text-white/90" : "text-slate-900/90"
          } mb-16 max-w-2xl mx-auto`}
        >
          Thousands of students are already transforming their careers with
          O-Learn
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-base/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-transform hover:-translate-y-2"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4" />
              <div className="text-4xl font-black mb-1">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className=" mt-16">
          <button
            className={`bg-white ${
              theme === "dark" ? "text-indigo-600" : "text-indigo-600"
            } hover:bg-indigo-50 font-bold py-4 px-10 rounded-xl transition-all shadow-xl`}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
