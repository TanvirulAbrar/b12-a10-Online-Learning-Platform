import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  Crown,
  Star,
  Eye,
  SquarePen,
  Trash2,
} from "lucide-react";

const YourCardStyle = () => {
  // Sample data for different card types
  const courseCardData = {
    _id: "1",
    title: "Complete Web Development Bootcamp",
    image: "https://img-c.udemycdn.com/course/240x135/2161030_84b2_3.jpg",
    price: 89.99,
    category: "Web Development",
    isFeatured: true,
  };

  const topInstructorData = {
    title: "Machine Learning Engineer",
    gradient: "from-[#bfad22] to-[#d19937]",
    icon: <div className="text-yellow-300 -rotate-30 text-5xl">🤖</div>,
    img: "https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/machine-learning-engineer/machine-learning-engineer-person.png",
  };

  const testimonialData = {
    name: "Sarah Johnson",
    course: "Full Stack Web Development",
    photo:
      "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
    text: "O-Learn transformed my career! The Full Stack Web Development course was incredibly practical...",
  };

  const categoryData = {
    title: "Web Development",
    description: "Build modern websites & apps",
    courseCount: 12,
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-600">
            Your Card Styles
          </h2>
          <p className="text-xl text-gray-600">
            Explore different card designs used throughout our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Course Card Style */}
          <div className="bg-base rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4">
              <div className="rounded-lg h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={courseCardData.image}
                  alt={courseCardData.title}
                />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-2">{courseCardData.title}</h3>

            <div className="w-fit px-2 rounded-[5px] bg-green-200 font-bold text-[#198686] mb-2">
              <span className="text-[13px]">{courseCardData.category}</span>
            </div>

            <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-violet-600 text-[13px] text-white font-semibold mb-2">
              <Crown className="h-4 w-4 text-white" />
              <span>Premium</span>
            </div>

            {courseCardData.isFeatured && (
              <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#ff448f] text-[13px] text-white font-semibold mb-3">
                <BadgeCheck className="h-4 w-4" />
                <span>featured</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-semibold">
                ${courseCardData.price}
              </h4>
              <div className="flex items-center w-fit px-2 rounded-[5px] hover:bg-blue-200 font-bold text-[13px] text-[#311986]">
                details <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Top Instructor Card Style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-base-100 rounded-3xl w-full border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            <div className="overflow-hidden rounded-2xl h-40 relative">
              <div
                className={`relative h-40 bg-gradient-to-r p-5 w-full ${topInstructorData.gradient} overflow-hidden rounded-lg`}
              >
                {topInstructorData.icon}
                <img
                  src={topInstructorData.img}
                  alt={topInstructorData.title}
                  className="absolute bottom-0 right-0 object-contain translate-x-10 size-100 translate-y-40"
                />
              </div>
            </div>

            <div className="py-3 flex flex-col gap-1">
              <h2 className="font-bold text-start text-lg text-base-800">
                {topInstructorData.title}
              </h2>

              <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-yellow-200 text-[13px] text-[#1f2937] font-semibold">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.6 (223K ratings)</span>
              </div>

              <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-blue-100 text-[13px] text-[#1e40af] font-semibold">
                <div className="h-4 w-4 text-blue-500">⏱️</div>
                <span>47.1 total hours</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Card Style */}
          <div className="bg-base rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <img
                src={testimonialData.photo}
                alt={testimonialData.name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-indigo-100"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  {testimonialData.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonialData.course}
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 italic">
              "{testimonialData.text}"
            </p>

            <div className="flex">
              <img
                src="https://media.istockphoto.com/id/1263576329/vector/five-golden-stars-tot-quality-concept-illustration-rating-stars-icon-3d-award-stars-vector.jpg?s=612x612&w=0&k=20&c=g2tIKh-VECv1q_SLuwuAO49Ql7F8Wtfv4D8aDNMk8K0="
                alt="5 stars"
                className="h-6"
              />
            </div>
          </div>

          {/* Category Card Style */}
          <div
            className={`relative overflow-hidden rounded-2xl shadow-lg ${categoryData.bgColor} transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="p-10 text-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-base bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{categoryData.title}</h3>
              <p className="text-lg opacity-90 mb-4">
                {categoryData.description}
              </p>
              <p className="text-sm font-medium">
                {categoryData.courseCount} Courses
              </p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Table-style cards (MyCourseCard and MyEnrolledCard) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Table-Based Cards
          </h3>

          <div className="overflow-x-auto bg-base rounded-xl shadow-lg p-6">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Course Name</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <div className="rounded-xl items-center overflow-hidden h-[50px] w-[50px] bg-[#f4f4f4]">
                      <img
                        className="w-full h-full object-cover"
                        src={courseCardData.image}
                        alt="Course"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center">
                      <div className="mb-0 font-semibold">
                        {courseCardData.title}
                      </div>
                    </div>
                  </td>
                  <td>{courseCardData.category}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-square">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="btn btn-square">
                        <SquarePen className="h-4 w-4" />
                      </button>
                      <button className="btn btn-square">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    <div className="rounded-xl items-center overflow-hidden h-[50px] w-[50px] bg-[#f4f4f4]">
                      <img
                        className="w-full h-full object-cover"
                        src={courseCardData.image}
                        alt="Course"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center">
                      <div className="mb-0 font-semibold">
                        Advanced React Patterns
                      </div>
                    </div>
                  </td>
                  <td>React Development</td>
                  <td>
                    <button className="btn btn-square">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourCardStyle;
