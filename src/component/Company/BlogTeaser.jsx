import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, User, ArrowRight, Tag, X } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { toast } from "react-toastify";

const BlogTeaser = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const { theme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Online Learning: Trends to Watch in 2024",
      excerpt:
        "Discover the emerging trends shaping the future of digital education and how they'll transform the way we learn.",
      author: "David Smith",
      date: "Jan 15, 2024",
      category: "Education Trends",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "How to Stay Motivated During Long Learning Journeys",
      excerpt:
        "Practical strategies to maintain motivation and momentum when pursuing extended educational goals.",
      author: "James Wilson",
      date: "Jan 10, 2024",
      category: "Learning Tips",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Building Effective Study Habits for Maximum Retention",
      excerpt:
        "Science-backed techniques to optimize your study sessions and improve information retention rates.",
      author: "Dr. Robert Taylor",
      date: "Jan 5, 2024",
      category: "Study Techniques",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div
      className={`py-20 relative ${
        theme === "dark" ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-[#111418]"
            } text-4xl md:text-5xl font-bold mb-6`}
          >
            From Our Blog
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Insights, tips, and stories to help you succeed in your learning
            journey and beyond.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#101922] border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag
                      className={`w-4 h-4 ${
                        theme === "dark" ? "text-[#137fec]" : "text-[#137fec]"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-[#137fec]" : "text-[#137fec]"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      •
                    </span>
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 line-clamp-2 transition-colors ${
                      theme === "dark"
                        ? "text-white hover:text-[#137fec]"
                        : "text-[#111418] hover:text-[#137fec]"
                    }`}
                  >
                    {post.title}
                  </h3>

                  <p
                    className={`mb-4 line-clamp-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    className={`flex items-center justify-between pt-4 border-t transition-colors ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          theme === "dark"
                            ? "bg-[#137fec]/20"
                            : "bg-[#137fec]/10"
                        }`}
                      >
                        <User
                          className={`w-4 h-4 ${
                            theme === "dark"
                              ? "text-[#137fec]"
                              : "text-[#137fec]"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            theme === "dark" ? "text-white" : "text-[#111418]"
                          }`}
                        >
                          {post.author}
                        </p>
                        <div
                          className={`flex items-center gap-1 text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Calendar
                            className={`w-3 h-3 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          />
                          {post.date}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                        theme === "dark"
                          ? "text-[#137fec] hover:text-[#0e64c7]"
                          : "text-[#137fec] hover:text-[#0e64c7]"
                      }`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center"
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(to right, #137fec, #0a62c7)" // blue dark gradient
                : "linear-gradient(to right, #4f8ffb, #137fec)", // blue light gradient
            color: "white",
          }}
        >
          <BookOpen
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: "inherit" }}
          />
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest
            articles, learning tips, and educational insights.
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-[#0f172a] text-white placeholder-[#93c5fd] focus:ring-white"
                  : "bg-white text-gray-900 placeholder-gray-400 focus:ring-[#137fec]"
              }`}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const emailInput = e.target.parentElement.querySelector(
                  'input[type="email"]',
                );
                if (emailInput && emailInput.value) {
                  toast(`Subscribed with email: ${emailInput.value}`);
                  emailInput.value = "";
                } else {
                  toast("Please enter a valid email address");
                }
              }}
              className={`font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white text-[#137fec] hover:bg-gray-200"
                  : "bg-[#137fec] text-white hover:bg-[#0e64c7]"
              }`}
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for blog post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              theme === "dark" ? "bg-[#101922]" : "bg-white"
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-[#111418]"
                  }`}
                >
                  {selectedPost.title}
                </h3>
                <button
                  onClick={() => setSelectedPost(null)}
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div
                className={`flex items-center gap-2 mb-4 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Tag
                  className={`w-4 h-4 ${
                    theme === "dark" ? "text-[#137fec]" : "text-[#137fec]"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-[#137fec]" : "text-[#137fec]"
                  }`}
                >
                  {selectedPost.category}
                </span>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  •
                </span>
                <span>{selectedPost.readTime}</span>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  •
                </span>
                <div className="flex items-center gap-1">
                  <User
                    className={`w-3 h-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  {selectedPost.author}
                </div>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  •
                </span>
                <div className="flex items-center gap-1">
                  <Calendar
                    className={`w-3 h-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  {selectedPost.date}
                </div>
              </div>

              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedPost.excerpt}
              </p>

              <div className="prose max-w-none">
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedPost.title.includes("Motivated")
                    ? "Maintaining motivation during extended learning journeys can be challenging, but with the right strategies, you can stay on track and achieve your educational goals. Here are practical approaches to help you maintain momentum when pursuing extended educational goals:"
                    : "This article discusses important topics related to the blog post."}
                </p>

                <ul
                  className={`mt-4 space-y-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li className="flex items-start">
                    <span className="text-[#137fec] mr-2">•</span> Set
                    achievable milestones to track your progress
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#137fec] mr-2">•</span> Find a
                    learning buddy or community for support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#137fec] mr-2">•</span> Celebrate
                    small wins along the way
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#137fec] mr-2">•</span> Take regular
                    breaks to prevent burnout
                  </li>
                </ul>

                <p
                  className={`mt-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  By implementing these strategies, you can maintain your
                  motivation and make steady progress toward your learning
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTeaser;
