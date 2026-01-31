import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, User, ArrowRight, Tag, X } from "lucide-react";
import useTheme from "../../hooks/useTheme";
// import { useTheme } from "../hooks/useTheme";
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

  const categories = [
    "Education Trends",
    "Learning Tips",
    "Study Techniques",
    "Career Development",
    "Technology",
    "Student Life",
  ];

  return (
    <div className="py-20 relative">
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
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-4xl md:text-5xl font-bold mb-6`}
          >
            From Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300`}
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
                    <Tag className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">
                      {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
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

        {/* Categories */}
        {/* <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 mb-8"
          >
            Browse by Category
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 font-medium transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div> */}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest
            articles, learning tips, and educational insights.
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const emailInput = e.target.parentElement.querySelector(
                  'input[type="email"]'
                );
                if (emailInput && emailInput.value) {
                  alert(`Subscribed with email: ${emailInput.value}`);
                  emailInput.value = "";
                } else {
                  alert("Please enter a valid email address");
                }
              }}
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
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
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {selectedPost.title}
                </h3>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <Tag className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">
                  {selectedPost.category}
                </span>
                <span className="text-gray-300">•</span>
                <span>{selectedPost.readTime}</span>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {selectedPost.author}
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
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
                    <span className="text-purple-600 mr-2">•</span> Set
                    achievable milestones to track your progress
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span> Find a
                    learning buddy or community for support
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span> Celebrate
                    small wins along the way
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span> Take regular
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
