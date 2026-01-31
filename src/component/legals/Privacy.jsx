import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Privacy = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-base" : "bg-gradient-to-b from-gray-50 to-white"
      } min-h-screen  py-16`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Shield className="w-20 h-20 mx-auto text-indigo-600 mb-6" />
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-5xl font-extrabold mb-4`}
          >
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 04, 2026
          </p>
        </motion.div>

        <motion.div className="bg-base rounded-3xl shadow-xl p-10 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-8 h-8 mr-3 text-indigo-600" /> Information We
              Collect
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We collect information you provide (name, email, payment details),
              usage data, and cookies to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-8 h-8 mr-3 text-indigo-600" /> How We Use
              Your Data
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
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
