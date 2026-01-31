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
  return (
    <div
      className={`${
        theme === "dark" ? "bg-base" : "bg-gradient-to-b from-gray-50 to-white"
      } min-h-screen py-16`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Cookie className="w-20 h-20 mx-auto text-indigo-600 mb-6" />
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-5xl font-extrabold text-gray-900 mb-4`}
          >
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 04, 2026
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-base rounded-3xl shadow-xl p-10 space-y-12"
        >
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Cookie className="w-8 h-8 mr-3 text-indigo-600" /> 1. What Are
              Cookies?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cookies are small text files placed on your device when you visit
              a website. They help improve your experience by remembering
              preferences, tracking usage, and enabling essential features.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="w-8 h-8 mr-3 text-indigo-600" /> 2. Types of
              Cookies We Use
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-indigo-600" /> 3. Third-Party
              Cookies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We use trusted partners like Google Analytics and payment
              processors. These may set cookies to provide services. You can opt
              out via your browser settings or their privacy tools.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <EyeOff className="w-8 h-8 mr-3 text-indigo-600" /> 4. Managing
              Cookies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You can control cookies through your browser settings (block,
              delete, or get notified). Note: Disabling essential cookies may
              limit platform functionality.
            </p>
          </section>

          <p className="text-center text-gray-600 mt-12 italic">
            We respect your privacy and only use cookies to enhance your
            learning experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
