import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";

const FAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-10 text-center ${
          isDark ? "text-white" : "text-[#111418]"
        }`}
      >
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-[#f0f2f4]"
            } ${
              openIndex === index
                ? isDark
                  ? "shadow-xl shadow-gray-900/30"
                  : "shadow-xl"
                : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-6 text-left transition-colors ${
                isDark ? "hover:bg-gray-700/70" : "hover:bg-gray-50"
              }`}
            >
              <h4
                className={`font-bold text-base md:text-lg ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                {faq.question}
              </h4>

              <span className="material-symbols-outlined text-[#137fec] transition-transform duration-300">
                {openIndex === index ? "expand_less" : "expand_more"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-300" : "text-[#617589]"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        className={`text-center mt-10 text-sm ${
          isDark ? "text-gray-400" : "text-[#617589]"
        }`}
      >
        Still have questions?{" "}
        <a
          href="#"
          className={`font-bold hover:underline transition-colors ${
            isDark ? "text-[#60a5fa]" : "text-[#137fec]"
          }`}
        >
          Contact our support team
        </a>
      </p>
    </section>
  );
};

export default FAQ;
