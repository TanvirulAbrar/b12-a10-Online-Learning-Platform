import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const AboutUs = () => {
  const { theme } = useTheme();
  const stats = [
    { number: "50K+", label: "Active Learners" },
    { number: "1000+", label: "Courses Available" },
    { number: "50+", label: "Expert Instructors" },
    { number: "98%", label: "Student Satisfaction" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To democratize education by making high-quality learning accessible to everyone, everywhere.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "Creating a world where knowledge knows no boundaries and learning is a lifelong journey.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, innovation, inclusivity, and excellence guide everything we do.",
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
            }text-4xl md:text-5xl font-bold mb-6`}
          >
            About O-Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about transforming education through technology,
            making learning engaging, accessible, and effective for learners
            worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className=" rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-xl bg-purple-100 mb-6">
                <value.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={` ${
            theme === "dark"
              ? "bg-gradient-to-r from-gray-900 to-gray-800"
              : "bg-gradient-to-r from-purple-50 to-indigo-50"
          } rounded-3xl p-12`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Founded in 2020, O-Learn began with a simple idea: education
                should be accessible to everyone, regardless of their location
                or circumstances. What started as a small team of educators and
                technologists has grown into a global platform serving thousands
                of learners.
              </p>
              <p className="mb-4">
                Today, we partner with industry experts, universities, and
                organizations to bring you cutting-edge courses taught by the
                best instructors in their fields. Our commitment to quality,
                innovation, and learner success drives everything we do.
              </p>
              <p>
                Join us on this journey to reshape education for the digital
                age.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
