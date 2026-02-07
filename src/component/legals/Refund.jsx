import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Refund = () => {
  const { theme } = useTheme();
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          <DollarSign
            className="w-20 h-20 mx-auto mb-6"
            style={{ color: primaryBlue }}
          />
          <h1
            className={`text-5xl font-extrabold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Refund Policy
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
              <CheckCircle
                className="w-8 h-8 mr-3"
                style={{ color: "#22c55e" }} // Keep green for success
              />{" "}
              1. 7-Day Money-Back Guarantee
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We offer a full refund within <strong>7 days</strong> of
              purchasing a premium course if you're not completely satisfied —
              no questions asked.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Clock className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />{" "}
              2. Eligibility Requirements
            </h2>
            <ul
              className={`space-y-4 text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>• Refund request must be made within 7 days of purchase.</li>
              <li>• You must have completed less than 20% of the course.</li>
              <li>• Only applies to first-time purchases of a course.</li>
              <li>• Free courses and subscriptions are not eligible.</li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <AlertCircle
                className="w-8 h-8 mr-3"
                style={{ color: "#f97316" }} // Keep orange for warning
              />{" "}
              3. Non-Refundable Cases
            </h2>
            <ul
              className={`space-y-4 text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>• Requests after 7 days or over 20% course progress.</li>
              <li>• Downloaded certificates or bulk purchases.</li>
              <li>• Violations of Terms of Use (e.g., sharing access).</li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <DollarSign
                className="w-8 h-8 mr-3"
                style={{ color: primaryBlue }}
              />{" "}
              4. How to Request a Refund
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email{" "}
              <a
                href="mailto:support@o-learn.com"
                className="font-semibold hover:underline"
                style={{ color: primaryBlue }}
              >
                support@o-learn.com
              </a>{" "}
              with your order number and reason. Refunds are processed within
              5-7 business days to your original payment method.
            </p>
          </section>

          <div
            className={`rounded-2xl p-8 text-center border ${
              theme === "dark"
                ? "bg-[#131e2f] border-green-700"
                : "bg-green-50 border-green-200"
            }`}
          >
            <p className="text-xl font-semibold text-green-800">
              Your satisfaction is our priority — learn with confidence!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;
