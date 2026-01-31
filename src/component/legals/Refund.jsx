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

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-base"
          : "bg-gradient-to-b from-gray-50 to-white py-16"
      }min-h-screen  `}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <DollarSign className="w-20 h-20 mx-auto text-indigo-600 mb-6" />
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-5xl font-extrabold mb-4`}
          >
            Refund Policy
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
              <CheckCircle className="w-8 h-8 mr-3 text-green-600" /> 1. 7-Day
              Money-Back Guarantee
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer a full refund within <strong>7 days</strong> of
              purchasing a premium course if you're not completely satisfied —
              no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-8 h-8 mr-3 text-indigo-600" /> 2. Eligibility
              Requirements
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Refund request must be made within 7 days of purchase.</li>
              <li>• You must have completed less than 20% of the course.</li>
              <li>• Only applies to first-time purchases of a course.</li>
              <li>• Free courses and subscriptions are not eligible.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-8 h-8 mr-3 text-orange-600" /> 3.
              Non-Refundable Cases
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Requests after 7 days or over 20% course progress.</li>
              <li>• Downloaded certificates or bulk purchases.</li>
              <li>• Violations of Terms of Use (e.g., sharing access).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-indigo-600" /> 4. How to
              Request a Refund
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Email{" "}
              <a
                href="mailto:support@o-learn.com"
                className="text-indigo-600 font-semibold hover:underline"
              >
                support@o-learn.com
              </a>{" "}
              with your order number and reason. Refunds are processed within
              5-7 business days to your original payment method.
            </p>
          </section>

          <div
            className={`${
              theme === "dark" ? "bg-base" : "bg-green-50"
            } border border-green-200 rounded-2xl p-8 text-center`}
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
