import React from "react";
import { motion } from "motion/react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";
import {
  Globe,
  Building2,
  Users,
  ShieldCheck,
  Landmark,
  Network,
  Star,
  Clock,
  User,
  Gamepad,
  LightbulbIcon,
  Database,
  NetworkIcon,
  Gamepad2,
  Shield,
  ArrowRight,
  Crown,
  ChevronRight,
  ChartNoAxesCombined,
} from "lucide-react";
const Home = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };
  const courses = useLoaderData();
  return (
    <div>
      <section className="relative bg-center overflow-hidden bg-gradient-to-r from-[#226ebf] to-[#37d1c9] fit py-5 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10  mx-auto px-8 text-white flex flex-col md:flex-row gap-12"
        >
          <div className="max-w-xl flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Unlock Your Potential with Premium Courses
            </h1>
            <p className="text-lg drop-shadow-md">
              Join thousands of learners mastering in-demand skills with
              expert-led classes.
            </p>

            <div className="flex gap-6">
              <button className="btn max-[500px]:hidden btn-primary">
                Get Started <ChevronRight className="w-5 h-5" />
              </button>
              <button className="btn max-[500px]:hidden btn-primary">
                Browse Courses <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-yellow-200 text-yellow-800 rounded-full px-4 py-2 font-semibold">
                <Star className="w-5 h-5" />
                4.8 (500K+ ratings)
              </div>
              <div className="flex items-center gap-2 bg-blue-200 text-blue-800 rounded-full px-4 py-2 font-semibold">
                <Clock className="w-5 h-5" />
                1500+ Hours of Content
              </div>
              <div className="flex items-center gap-2 bg-purple-200 text-purple-800 rounded-full px-4 py-2 font-semibold">
                <Crown className="w-5 h-5" />
                Premium Quality
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" relative w-full h-full max-[700px]:hidden "
        >
          {" "}
          <ChartNoAxesCombined className="text-blue-300 translate-x-full -rotate-10 size-70" />
          <img
            src="https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/machine-learning-engineer/machine-learning-engineer-person.png"
            alt=""
            className="absolute bottom-0 right-0 object-contain translate-x-10 size-150 translate-y-60"
          />
        </motion.div>
      </section>

      {/* <div className="bg-[url('./bg2.jpg')] bg-cover h-100">
       
      </div>
      <div className="bg-[url('./bg1.jpg')] bg-cover h-100">
        
      </div> */}
      <div className="max-w-6xl py-16 mx-auto content-center px-5 ">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">
          Popular Courses
        </h2>

        <div className="flex flex-wrap w-fit justify-center mx-auto gap-5">
          {courses
            .filter((a) => a.isFeatured == true)
            .map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
            {[
              {
                icon: <Globe className="h-6 w-6 text-blue-500" />,
                text: "Trusted by 17,000+ companies worldwide",
              },
              {
                icon: <Users className="h-6 w-6 text-green-500" />,
                text: "Millions of learners",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-yellow-500" />,
                text: "Industry-leading instructors",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                {item.icon}
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            Trusted by leading global companies
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-10 text-gray-500 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Building2 className="h-8 w-8 text-blue-600" />
              <span>Volkswagen</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Network className="h-8 w-8 text-sky-500" />
              <span>Samsung</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Globe className="h-8 w-8 text-cyan-600" />
              <span>Cisco</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Landmark className="h-8 w-8 text-purple-500" />
              <span>Vimeo</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Top Instructors */}
      <section className="py-16 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Top Instructors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              {
                title: "Game Developer",
                gradient: "from-[#bf22bf] to-[#83218c]",
                icon: <Gamepad2 className="text-pink-300 -rotate-30 size-30" />,
                img: "https://s.udemycdn.com/career-academies/careers/game-developer/game-developer-human-v2.png",
              },
              {
                title: "Cybersecurity Analyst",
                gradient: "from-[#22bf3f] to-[#218c7e]",
                icon: <Shield className="text-green-300 -rotate-30 size-30" />,
                img: "https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/cybersecurity-analyst/cybersecurity-analyst-person.png",
              },
              {
                title: "Machine Learning Engineer",
                gradient: "from-[#bfad22] to-[#d19937]",
                icon: (
                  <Network className="text-yellow-300 -rotate-30 size-30" />
                ),
                img: "https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/machine-learning-engineer/machine-learning-engineer-person.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="p-4 bg-base-100 rounded-3xl w-full max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              >
                <div className="overflow-hidden rounded-2xl h-40 relative">
                  <div
                    className={`relative h-40 bg-gradient-to-r p-5 w-full ${item.gradient} overflow-hidden rounded-lg`}
                  >
                    {item.icon}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute bottom-0 right-0 object-contain translate-x-10 size-100 translate-y-40"
                    />
                  </div>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <h2 className="font-bold text-start text-lg text-gray-800">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-yellow-200 text-[13px] text-[#1f2937] font-semibold">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.6 (223K ratings)</span>
                  </div>

                  <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-blue-100 text-[13px] text-[#1e40af] font-semibold">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>47.1 total hours</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
