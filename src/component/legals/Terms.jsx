import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Users, Gavel } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Terms = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const { theme } = useTheme();

  // Primary blue for icons and highlights
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
          <FileText
            className="w-20 h-20 mx-auto mb-6"
            style={{ color: primaryBlue }}
          />
          <h1
            className={`text-5xl font-extrabold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Terms of Use
          </h1>
          <p
            className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
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
              <ShieldCheck
                className="w-8 h-8 mr-3"
                style={{ color: primaryBlue }}
              />{" "}
              1. Acceptance of Terms
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              By accessing or using O-Learn, you agree to be bound by these
              Terms of Use. If you do not agree, please do not use our platform.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Users className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />{" "}
              2. User Accounts
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to notify us immediately of any
              unauthorized use.
            </p>
          </section>

          <section>
            <h2
              className={`text-3xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Gavel className="w-8 h-8 mr-3" style={{ color: primaryBlue }} />{" "}
              3. Intellectual Property
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              All course content is owned by O-Learn or its instructors. You are
              granted a limited, non-transferable license for personal,
              non-commercial use only. No sharing, reselling, or redistribution
              allowed.
            </p>
          </section>

          <p
            className={`text-center mt-12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Questions? Contact us at{" "}
            <a
              href="mailto:support@o-learn.com"
              className="underline"
              style={{ color: primaryBlue }}
            >
              support@o-learn.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
