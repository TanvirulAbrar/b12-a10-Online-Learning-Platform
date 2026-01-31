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
          <FileText className="w-20 h-20 mx-auto text-indigo-600 mb-6" />
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-5xl font-extrabold  mb-4`}
          >
            Terms of Use
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
              <ShieldCheck className="w-8 h-8 mr-3 text-indigo-600" /> 1.
              Acceptance of Terms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By accessing or using O-Learn, you agree to be bound by these
              Terms of Use. If you do not agree, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-8 h-8 mr-3 text-indigo-600" /> 2. User
              Accounts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to notify us immediately of any
              unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Gavel className="w-8 h-8 mr-3 text-indigo-600" /> 3. Intellectual
              Property
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All course content is owned by O-Learn or its instructors. You are
              granted a limited, non-transferable license for personal,
              non-commercial use only. No sharing, reselling, or redistribution
              allowed.
            </p>
          </section>

          <p className="text-center text-gray-600 mt-12">
            Questions? Contact us at support@o-learn.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
