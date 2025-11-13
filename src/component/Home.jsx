import React from "react";
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
} from "lucide-react";
const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="bg-[url('./bg3.jpg')] bg-cover h-100">
        {/* <img src={banner} alt="" /> */}
      </div>
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
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <Globe className="h-6 w-6 text-blue-500" />
              <p className="text-gray-700 font-medium">
                Trusted by 17,000+ companies worldwide
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <Users className="h-6 w-6 text-green-500" />
              <p className="text-gray-700 font-medium">Millions of learners</p>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <ShieldCheck className="h-6 w-6 text-yellow-500" />
              <p className="text-gray-700 font-medium">
                Industry-leading instructors
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Trusted by leading global companies
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-gray-500 text-sm font-medium">
            <div className="flex flex-col items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span>Volkswagen</span>
            </div>
            <div className="flex flex-col items-center">
              <Network className="h-8 w-8 text-sky-500" />
              <span>Samsung</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-cyan-600" />
              <span>Cisco</span>
            </div>
            <div className="flex flex-col items-center">
              <Landmark className="h-8 w-8 text-purple-500" />
              <span>Vimeo</span>
            </div>
          </div>
        </div>
      </section>
      {/* Top Instructors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Top Instructors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <div className="overflow-hidden rounded-2xl h-40 relative">
                <div className="relative h-40 bg-gradient-to-r p-5 w-full from-[#bf22bf] to-[#83218c] overflow-hidden rounded-lg">
                  <Gamepad2 className="text-pink-300 -rotate-30 size-30"></Gamepad2>

                  <img
                    src="https://s.udemycdn.com/career-academies/careers/game-developer/game-developer-human-v2.png"
                    alt="Person"
                    className="absolute bottom-0 right-0 object-contain translate-x-10 size-100 translate-y-40"
                  />
                </div>
              </div>

              <div className="py-3 flex flex-col gap-1">
                <h2 className="font-bold text-start text-lg text-gray-800">
                  Game Developer
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
            </div>
            <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <div className="overflow-hidden rounded-2xl h-40 relative">
                <div className="relative h-40 bg-gradient-to-r p-5 w-full from-[#22bf3f] to-[#218c7e] overflow-hidden rounded-lg">
                  <Shield className="text-green-300 -rotate-30 size-30"></Shield>

                  <img
                    src="https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/cybersecurity-analyst/cybersecurity-analyst-person.png"
                    alt="Person"
                    className="absolute bottom-0 right-0 object-contain translate-x-10 size-100 translate-y-40"
                  />
                </div>
              </div>

              <div className="py-3 flex flex-col gap-1">
                <h2 className="font-bold text-start text-lg text-gray-800">
                  Cybersecurity Analyst
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
            </div>
            <div className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <div className="overflow-hidden rounded-2xl h-40 relative">
                <div className="relative h-40 bg-gradient-to-r p-5 w-full from-[#bfad22] to-[#d19937] overflow-hidden rounded-lg">
                  <Network className="text-yellow-300 -rotate-30 size-30"></Network>

                  <img
                    src=" https://frontends.udemycdn.com/staticx/udemy/images/career-accelerators/careers/machine-learning-engineer/machine-learning-engineer-person.png"
                    alt="Person"
                    className="absolute bottom-0 right-0 object-contain translate-x-10 size-100 translate-y-40"
                  />
                </div>
              </div>

              <div className="py-3 flex flex-col gap-1">
                <h2 className="font-bold text-start text-lg text-gray-800">
                  Machine Learning Engineer
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
