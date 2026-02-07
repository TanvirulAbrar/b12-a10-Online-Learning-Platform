import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Users,
  ShieldCheck,
  Landmark,
  Network,
  Star,
  Clock,
  Gamepad2,
  Shield,
  ChevronRight,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";

const TopInstructor = () => {
  const { theme } = useTheme();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };
  return (
    <div>
      <section className="py-16 bg-base ">
        <motion.div
          className="max-w-6xl mx-auto px-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              } mb-4`}
            >
              Top Instructors
            </h2>
            {/* <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div> */}
          </div>

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
                  <h2 className="font-bold text-start text-lg text-base-800">
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

export default TopInstructor;
