import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Privacy = () => {
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
          <Shield
            className="w-20 h-20 mx-auto mb-6"
            style={{ color: primaryBlue }}
          />
          <h1
            className={`text-5xl font-extrabold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Privacy Policy
          </h1>
          <p
            className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            Last updated: January 04, 2026
          </p>
        </motion.div>

        <motion.div
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
              <Lock className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />
              Information We Collect
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We collect information you provide (name, email, payment details),
              usage data, and cookies to improve your experience.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Database
                className="w-8 h-8 mr-3"
                style={{ color: primaryBlue }}
              />
              How We Use Your Data
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              To provide services, process payments, send updates, and analyze
              platform usage. We never sell your data.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
