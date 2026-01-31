import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const FAQ = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are the courses free or paid?",
      answer:
        "We offer both free introductory modules and comprehensive premium courses. Premium courses provide in-depth curriculum, certificates of completion, and direct support from instructors.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, all premium courses come with a verifiable digital certificate that you can share on your LinkedIn profile or resume to showcase your new skills.",
    },
    {
      question: "Can I learn on my mobile device?",
      answer:
        "Absolutely! Our platform is fully responsive, and we have a dedicated mobile app available for both iOS and Android for seamless learning on the go.",
    },
    {
      question: "How long do I have access to a course?",
      answer:
        "Once you purchase a course, you get lifetime access. You can revisit the material anytime as industry standards evolve.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-base-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            } mb-4`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Everything you need to know about O-Learn
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-base dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 cursor-pointer list-none font-bold text-base-900 dark:hover:bg-base dark:text-white text-left hover:bg-base-50 dark:hover:bg-base-700/50 transition-colors"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 transition-transform" />
                )}
              </button>
              {openIndex === index && (
                <div
                  className="p-6 pt-0 text-base-600  dark:hover:bg-base
                dark:text-base-400 dark:hover:bg-base leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <p
          className={`text-center mt-8 text-sm ${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Still have questions?{" "}
          <a className="text-purple-600 font-bold hover:underline" href="#">
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
