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
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-4xl md:text-5xl font-bold mb-6`}
          >
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us revolutionize education and make a meaningful impact on
            learners worldwide. We're looking for passionate professionals to
            join our mission.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-3xl font-bold text-center mb-12`}
          >
            Why Work With Us?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                } rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow`}
              >
                <div className="inline-flex p-4 rounded-xl bg-purple-100 mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } text-xl font-bold text-gray-900 mb-3`}
                >
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        {/* <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-3xl font-bold text-center mb-12`}
          >
            Open Positions
          </motion.h3>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                } rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h4
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } text-2xl font-bold mb-2`}
                    >
                      {position.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition whitespace-nowrap">
                      Apply Now
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition whitespace-nowrap">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Don't See the Right Role?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for education. Send us your resume and we'll reach out when the
            right opportunity arises.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Submit General Application
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
