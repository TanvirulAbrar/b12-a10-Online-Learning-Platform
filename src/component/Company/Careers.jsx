import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  DollarSign,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Careers = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented professionals who share your passion for education",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Continuous learning and career advancement in a fast-growing company",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description:
        "Comprehensive health insurance, retirement plans, and wellness programs",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description:
        "Remote work options and flexible hours to maintain work-life balance",
    },
  ];

  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description:
        "Build responsive, accessible learning platforms using React and modern web technologies.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80k - $120k",
      description:
        "Create intuitive and engaging user experiences for our educational platform.",
    },
    {
      title: "Content Strategist",
      department: "Content",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description:
        "Develop educational content strategies and collaborate with subject matter experts.",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      salary: "$75k - $110k",
      description:
        "Analyze learning patterns and user behavior to improve platform effectiveness.",
    },
  ];

  return (
    <div className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Join Our Team
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Help us revolutionize education and make a meaningful impact on
            learners worldwide. We're looking for passionate professionals to
            join our mission.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mb-20 md:mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Why Work With Us?
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`rounded-2xl p-7 md:p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800/70 border-gray-700 backdrop-blur-sm"
                    : "bg-white border-gray-200 shadow-md hover:shadow-lg"
                } text-center`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl mb-6 ${
                    isDark
                      ? "bg-[#137fec]/10 text-[#60a5fa]"
                      : "bg-[#137fec]/10 text-[#137fec]"
                  }`}
                >
                  <benefit.icon
                    className="w-8 h-8 md:w-9 md:h-9"
                    strokeWidth={1.8}
                  />
                </div>

                <h4
                  className={`text-xl md:text-2xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {benefit.title}
                </h4>

                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20 md:mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Open Positions
          </motion.h3>

          <div className="space-y-6 md:space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`rounded-2xl p-7 md:p-9 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800/70 border-gray-700 backdrop-blur-sm"
                    : "bg-white border-gray-200 shadow-md hover:shadow-xl"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h4
                      className={`text-2xl md:text-3xl font-bold mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {position.title}
                    </h4>

                    <p
                      className={`text-base md:text-lg mb-5 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {position.description}
                    </p>

                    <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <Briefcase
                          className={`w-5 h-5 ${isDark ? "text-[#60a5fa]" : "text-[#137fec]"}`}
                        />
                        <span
                          className={isDark ? "text-gray-300" : "text-gray-700"}
                        >
                          {position.department}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin
                          className={`w-5 h-5 ${isDark ? "text-[#60a5fa]" : "text-[#137fec]"}`}
                        />
                        <span
                          className={isDark ? "text-gray-300" : "text-gray-700"}
                        >
                          {position.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign
                          className={`w-5 h-5 ${isDark ? "text-[#60a5fa]" : "text-[#137fec]"}`}
                        />
                        <span
                          className={isDark ? "text-gray-300" : "text-gray-700"}
                        >
                          {position.salary}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0">
                    <button
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                          : "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                      } shadow-md hover:shadow-lg`}
                    >
                      Apply Now
                    </button>
                    <button
                      className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 ${
                        isDark
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-3xl p-10 md:p-12 lg:p-16 text-center ${
            isDark
              ? "bg-gradient-to-br from-[#137fec]/20 to-[#60a5fa]/10 border border-[#137fec]/30"
              : "bg-gradient-to-br from-[#137fec]/5 to-[#60a5fa]/5 border border-[#137fec]/20"
          }`}
        >
          <h3
            className={`text-3xl md:text-4xl font-bold mb-5 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Don't See the Right Role?
          </h3>
          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're always looking for talented individuals who share our passion
            for education. Send us your resume and we'll reach out when the
            right opportunity arises.
          </p>
          <button
            className={`px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDark
                ? "bg-white text-[#137fec] hover:bg-gray-100"
                : "bg-[#137fec] text-white hover:bg-[#0e6fd9]"
            }`}
          >
            Submit General Application
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
