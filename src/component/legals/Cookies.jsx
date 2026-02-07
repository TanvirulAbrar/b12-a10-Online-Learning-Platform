import React from "react";
import { motion } from "framer-motion";
import { Cookie, Settings, Eye, EyeOff } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Cookies = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const { theme } = useTheme();

  const primaryBlue = "#137fec";

  return (
    <div
      className={`min-h-screen py-16 ${
        theme === "dark"
          ? "bg-[#101922]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Cookie
            className="w-20 h-20 mx-auto mb-6"
            style={{ color: primaryBlue }}
          />
          <h1
            className={`text-5xl font-extrabold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Cookie Policy
          </h1>
          <p
            className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-xl`}
          >
            Last updated: January 04, 2026
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-3xl shadow-xl p-10 space-y-12 ${
            theme === "dark" ? "bg-[#131e2f]" : "bg-white"
          }`}
        >
          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Cookie className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />{" "}
              1. What Are Cookies?
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Cookies are small text files placed on your device when you visit
              a website. They help improve your experience by remembering
              preferences, tracking usage, and enabling essential features.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Settings
                className="w-8 h-8 mr-3"
                style={{ color: primaryBlue }}
              />{" "}
              2. Types of Cookies We Use
            </h2>
            <ul
              className={`space-y-4 text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                <strong>Essential Cookies:</strong> Required for core
                functionality (login, navigation, security).
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors use the site (anonymous analytics).
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                (language, progress tracking).
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used for personalized
                recommendations and ads (third-party, optional).
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Eye className="w-8 h-8 mr-3" style={{ color: primaryBlue }} /> 3.
              Third-Party Cookies
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We use trusted partners like Google Analytics and payment
              processors. These may set cookies to provide services. You can opt
              out via your browser settings or their privacy tools.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <EyeOff className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />{" "}
              4. Managing Cookies
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              You can control cookies through your browser settings (block,
              delete, or get notified). Note: Disabling essential cookies may
              limit platform functionality.
            </p>
          </section>

          <p
            className={`text-center mt-12 italic ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We respect your privacy and only use cookies to enhance your
            learning experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
