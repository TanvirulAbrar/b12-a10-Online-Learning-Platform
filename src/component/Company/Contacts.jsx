import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Contacts = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@o-learn.com",
      description: "We usually reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+880 1712-345678",
      description: "Sun–Thu, 10AM–6PM (BDT)",
    },
    {
      icon: MapPin,
      title: "Our Office",
      content: "Agrabad C/A, Chattogram",
      description: "Bangladesh – 4100",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "10:00 AM – 6:00 PM",
      description: "Sunday to Thursday",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app → send to backend / EmailJS / etc.
    console.log("Contact form:", formData);
    alert("Thank you! Your message has been sent. We'll reply soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get in Touch
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Questions, feedback, or just want to say hi? Our team is ready to
            help — reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6 md:space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group flex items-start gap-5 p-6 md:p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800/70 border-gray-700 backdrop-blur-sm"
                    : "bg-white border-gray-200 shadow-md hover:shadow-xl"
                }`}
              >
                <div
                  className={`flex-shrink-0 p-4 rounded-xl transition-colors ${
                    isDark
                      ? "bg-[#137fec]/10 text-[#60a5fa] group-hover:bg-[#137fec]/20"
                      : "bg-[#137fec]/10 text-[#137fec] group-hover:bg-[#137fec]/20"
                  }`}
                >
                  <info.icon
                    className="w-6 h-6 md:w-7 md:h-7"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-1.5 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {info.title}
                  </h3>
                  <p
                    className={`text-lg font-semibold mb-1 ${
                      isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                    }`}
                  >
                    {info.content}
                  </p>
                  <p
                    className={`text-base ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`rounded-2xl p-7 md:p-9 lg:p-10 border ${
              isDark
                ? "bg-gray-800/70 border-gray-700 backdrop-blur-sm shadow-xl"
                : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl md:text-3xl font-bold mb-7 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3.5 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#137fec] focus:border-[#137fec]"
                  }`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3.5 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#137fec] focus:border-[#137fec]"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3.5 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#137fec] focus:border-[#137fec]"
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3.5 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 resize-y min-h-[130px] ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#137fec] focus:border-[#137fec]"
                  }`}
                  placeholder="How can we help you today..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] ${
                  isDark
                    ? "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                    : "bg-[#137fec] hover:bg-[#0e6fd9] text-white"
                }`}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Trust / response time note */}
        <div className="text-center mt-12 md:mt-16">
          <p
            className={`text-sm md:text-base font-medium ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We aim to respond within{" "}
            <span className="font-semibold text-[#137fec]">24 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
