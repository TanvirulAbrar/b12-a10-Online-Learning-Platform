import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const AboutUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const stats = [
    { number: "50K+", label: "Active Learners" },
    { number: "1,200+", label: "Courses Available" },
    { number: "80+", label: "Expert Instructors" },
    { number: "98%", label: "Student Satisfaction" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To democratize education by making high-quality learning accessible to everyone, everywhere — no barriers, no limits.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "A world where continuous learning is a natural part of life and knowledge flows freely across all boundaries.",
    },
    {
      icon: Heart,
      title: "Our Core Values",
      description:
        "Integrity, innovation, inclusivity, excellence, and learner-first mindset guide every decision we make.",
    },
  ];

  return (
    <div className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About O-Learn
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're on a mission to transform how people learn — making education
            engaging, accessible, effective, and lifelong.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl md:text-5xl font-extrabold mb-2 ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-base md:text-lg font-medium ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 mb-20 md:mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`rounded-2xl p-7 md:p-9 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDark
                  ? "bg-gray-800/60 border-gray-700 backdrop-blur-sm"
                  : "bg-white border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              <div
                className={`inline-flex p-4 rounded-xl mb-6 ${
                  isDark
                    ? "bg-[#137fec]/10 text-[#60a5fa]"
                    : "bg-[#137fec]/10 text-[#137fec]"
                }`}
              >
                <value.icon
                  className="w-8 h-8 md:w-9 md:h-9"
                  strokeWidth={1.8}
                />
              </div>

              <h3
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {value.title}
              </h3>

              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-3xl p-8 md:p-12 lg:p-16 border ${
            isDark
              ? "bg-gray-800/40 border-gray-700 backdrop-blur-md"
              : "bg-gradient-to-br from-[#137fec]/5 to-[#60a5fa]/5 border-gray-200"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3
              className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Story
            </h3>

            <div
              className={`prose prose-lg max-w-none ${
                isDark
                  ? "prose-invert prose-gray-300"
                  : "prose-gray-700 prose-headings:text-gray-900"
              }`}
            >
              <p className="mb-5 text-base md:text-lg leading-relaxed">
                O-Learn was born in 2020 from a simple belief:{" "}
                <strong>education should never be out of reach</strong>. What
                started as a small experiment by a group of passionate educators
                and developers has grown into a global platform trusted by tens
                of thousands of learners.
              </p>

              <p className="mb-5 text-base md:text-lg leading-relaxed">
                Today we collaborate with top instructors, industry experts, and
                forward-thinking organizations to deliver courses that are
                current, practical, and built for real-world impact.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Our promise remains unchanged:{" "}
                <strong>
                  high-quality learning, accessible to all, forever.
                </strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
