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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    const targetId =
      id || (location.hash ? location.hash.replace("#", "") : null);
    if (targetId) {
      requestAnimationFrame(() => {
        scroller.scrollTo(targetId, {
          smooth: true,
          duration: 800,
          offset: -100,
        });
      });
    }
  }, [id, location]);

  const companySections = [
    {
      id: "about",
      title: "About Us",
      description:
        "Discover our mission to make quality education accessible to everyone, anytime, anywhere.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "contact",
      title: "Contact",
      description:
        "Get in touch with our team for support, partnerships, or any inquiries.",
      icon: Mail,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: "careers",
      title: "Careers",
      description:
        "Join our passionate team and help shape the future of online learning.",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "blog",
      title: "Blog",
      description:
        "Read our latest articles, tips, and insights on education and technology.",
      icon: BookOpen,
      gradient: "from-pink-500 to-rose-500",
    },
  ];
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${
        theme === "dark" ? "from-gray-900 to-gray-800" : "from-gray-50 to-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-5xl md:text-7xl font-extrabold mb-6`}
          >
            Company Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Learn more about O-Learn, meet our team, get in touch, explore
            careers, and stay inspired with our blog.
          </motion.p>
          <ChevronDown className="w-12 h-12 mx-auto mt-8 text-indigo-400 animate-bounce" />
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {companySections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="group"
              >
                <Link
                  to={section.id}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="cursor-pointer block"
                >
                  <div className="relative bg-base rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3">
                    <div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.gradient}`}
                    ></div>
                    <div className="p-10">
                      <div
                        className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${section.gradient} mb-8 shadow-lg`}
                      >
                        <section.icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition">
                        Explore Section
                        <ChevronDown className="ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  Sections */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
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
