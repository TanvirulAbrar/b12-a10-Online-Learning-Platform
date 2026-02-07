import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Cookie,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-scroll";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Cookies from "./Cookies";
import Refund from "./Refund";
import { useParams, useLocation } from "react-router";
import useTheme from "../../hooks/useTheme";

const Legal = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { id } = useParams();
  const location = useLocation();
  const { theme, textColor } = useTheme();

  useEffect(() => {
    const target =
      id || (location.hash ? location.hash.replace("#", "") : null);
    if (!target) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (!el) return;

      const offset = 100; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  }, [id, location]);

  // Blue gradient used consistently for all cards
  const blueGradient = "from-[#137fec] to-[#0a62c7]";

  const legalSections = [
    {
      id: "terms",
      title: "Terms of Use",
      description:
        "Our rules and guidelines for using O-Learn platform, including user responsibilities and platform usage terms.",
      icon: FileText,
      gradient: blueGradient,
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      description:
        "How we collect, use, and protect your personal information. Your privacy and data security are our priority.",
      icon: Shield,
      gradient: blueGradient,
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      description:
        "Details about cookies and similar technologies we use to improve your experience and site performance.",
      icon: Cookie,
      gradient: blueGradient,
    },
    {
      id: "refund",
      title: "Refund Policy",
      description:
        "Clear information about refunds, cancellations, and our 7-day money-back guarantee on premium purchases.",
      icon: DollarSign,
      gradient: blueGradient,
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-[#101922]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-70 ${
            theme === "dark"
              ? "bg-[#101922]"
              : "bg-gradient-to-br from-indigo-50 via-[#cce4ff] to-[#dbe9ff]"
          }`}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-extrabold ${textColor} dark:text-white mb-6`}
          >
            Legal Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-xl md:text-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Transparency and trust are at the heart of O-Learn. Review our
            policies below.
          </motion.p>
          <ChevronDown className="w-12 h-12 mx-auto mt-8 text-[#137fec] animate-bounce" />
        </div>
      </section>

      {/* Legal Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {legalSections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={section.id}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="cursor-pointer block"
                >
                  <div
                    className={`relative rounded-3xl shadow-lg hover:shadow-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-3
                      ${
                        theme === "dark"
                          ? "bg-[#131e2f] border-gray-800"
                          : "bg-[#f9fbff] border-gray-100"
                      }
                    `}
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.gradient}`}
                    />

                    <div className="p-10">
                      <div
                        className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${section.gradient} mb-8 shadow-lg`}
                      >
                        <section.icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>

                      <h3
                        className={`text-3xl font-bold mb-4 ${
                          theme === "dark" ? "text-white" : "text-[#111418]"
                        }`}
                      >
                        {section.title}
                      </h3>
                      <p
                        className={`text-lg mb-8 leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {section.description}
                      </p>

                      <div
                        className={`flex items-center font-semibold transition
                          ${
                            theme === "dark"
                              ? "text-[#137fec] group-hover:text-[#0e64c7]"
                              : "text-[#137fec] group-hover:text-[#0e64c7]"
                          }
                        `}
                      >
                        Read Full Policy
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

      {/* Policy Sections */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-32">
          <div id="terms">
            <Terms />
          </div>

          <div id="privacy">
            <Privacy />
          </div>

          <div id="cookies">
            <Cookies />
          </div>

          <div id="refund">
            <Refund />
          </div>
        </div>
      </section>

      {/* Note */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-[#101922]" : "bg-gray-100"}`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Last updated:{" "}
            <span className="font-semibold">January 04, 2026</span>
          </p>
          <p
            className={`mt-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Questions about our policies?{" "}
            <a
              href="mailto:support@o-learn.com"
              className="text-[#137fec] font-medium hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
