import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { Users, Mail, Briefcase, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import AboutUs from "./AboutUs";
import Careers from "./Careers";
import BlogTeaser from "./BlogTeaser";
import Contacts from "./Contacts";
import useTheme from "../../hooks/useTheme";

const Company = () => {
  const { id } = useParams();
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const targetId =
      id || (location.hash ? location.hash.replace("#", "") : null);
    if (targetId) {
      setTimeout(() => {
        scroller.scrollTo(targetId, {
          smooth: true,
          duration: 800,
          offset: -90,
        });
      }, 100);
    }
  }, [id, location]);

  const blueGradient = "from-[#137fec] to-[#0a62c7]";

  const companySections = [
    {
      id: "about",
      title: "About Us",
      description:
        "Discover our mission to make quality education accessible to everyone, anytime, anywhere.",
      icon: Users,
      gradient: blueGradient,
    },
    {
      id: "contact",
      title: "Contact",
      description:
        "Get in touch with our team for support, partnerships, or any inquiries.",
      icon: Mail,
      gradient: blueGradient,
    },
    {
      id: "careers",
      title: "Careers",
      description:
        "Join our passionate team and help shape the future of online learning.",
      icon: Briefcase,
      gradient: blueGradient,
    },
    {
      id: "blog",
      title: "Blog",
      description:
        "Read our latest articles, tips, and insights on education and technology.",
      icon: BookOpen,
      gradient: blueGradient,
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#101922]" : "bg-gradient-to-b from-gray-50 to-white"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Company Center
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Learn more about O-Learn, meet our team, get in touch, explore
            careers, and stay inspired with our blog.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ChevronDown
              className={`w-10 h-10 md:w-12 md:h-12 mx-auto mt-10 animate-bounce ${
                isDark ? "text-[#60a5fa]" : "text-[#137fec]"
              }`}
            />
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
            {companySections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index * 0.1}
                className="group"
              >
                <Link
                  to={section.id}
                  smooth={true}
                  duration={700}
                  offset={-90}
                  className="cursor-pointer block h-full"
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden border h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 ${
                      isDark
                        ? "bg-[#131e2f] border-gray-800 backdrop-blur-sm"
                        : "bg-white border-gray-200 backdrop-blur-sm shadow-md"
                    }`}
                  >
                    {/* Top accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${section.gradient}`}
                    />

                    <div className="p-8 md:p-9 lg:p-10 flex flex-col h-full">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.gradient} mb-7 text-white shadow-lg`}
                      >
                        <section.icon
                          className="w-9 h-9 md:w-10 md:h-10"
                          strokeWidth={1.8}
                        />
                      </div>

                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-4 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <p
                        className={`text-base md:text-lg mb-8 leading-relaxed flex-1 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {section.description}
                      </p>

                      <div
                        className={`flex items-center font-semibold text-base group-hover:translate-x-2 transition-transform ${
                          isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                        }`}
                      >
                        Explore Section
                        <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section
        className={`py-16 md:py-24 ${
          isDark ? "bg-gray-950/40" : "bg-gray-50/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-24 md:space-y-32">
          <div id="about">
            <AboutUs />
          </div>
          <div id="contact">
            <Contacts />
          </div>
          <div id="careers">
            <Careers />
          </div>
          <div id="blog">
            <BlogTeaser />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
