export default function PopularCoursesSection({ isDark }) {
  const courses = [
    {
      title: "MongoDB For Developers",
      category: "Database",
      rating: 4.8,
      price: 49.99,
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      badgeColor: "bg-primary/10 text-primary",
    },
    {
      title: "Node.js Mastery",
      category: "Backend",
      rating: 4.9,
      price: 59.99,
      instructor: "David Chen",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
      badgeColor: "bg-green-100 text-green-600",
    },
    {
      title: "Kotlin for Android",
      category: "Mobile",
      rating: 4.7,
      price: 69.99,
      instructor: "Emily White",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      badgeColor: "bg-purple-100 text-purple-600",
    },
    // ... add the other 3 courses similarly
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-[#f0f2f4]"
            }`}
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url("${course.image}")` }}
            />
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span
                  className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${course.badgeColor}`}
                >
                  {course.category}
                </span>
                <span className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  {course.rating}
                </span>
              </div>

              <h3 className="text-xl font-bold">{course.title}</h3>

              <div className="flex items-center gap-3">
                {/* <img className="w-8 h-8 rounded-full" src={instructorAvatar} alt="" /> */}
                <span
                  className={`text-sm ${isDark ? "text-gray-400" : "text-[#617589]"}`}
                >
                  {course.instructor}
                </span>
              </div>

              <div
                className={`flex justify-between items-center pt-4 border-t ${isDark ? "border-gray-700" : "border-[#f0f2f4]"}`}
              >
                <p className="text-2xl font-black text-primary">
                  ${course.price}
                </p>
                <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
