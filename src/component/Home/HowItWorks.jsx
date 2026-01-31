import React from "react";
import { UserPlus, Search, PlayCircle, Award } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const HowItWorks = () => {
  const { theme } = useTheme();
  const steps = [
    {
      number: "01",
      title: "Sign Up for Free",
      description:
        "Create your account in seconds—no credit card required. Get instant access to free courses and previews.",
      Icon: UserPlus,
      colorClass: "bg-pink-500",
      shadowClass: "shadow-pink-200",
      textOpacityClass: "text-pink-500/10",
    },
    {
      number: "02",
      title: "Browse & Enroll",
      description:
        "Explore hundreds of courses by category. Enroll in any course with one click—free or premium.",
      Icon: Search,
      colorClass: "bg-blue-500",
      shadowClass: "shadow-blue-200",
      textOpacityClass: "text-blue-500/10",
    },
    {
      number: "03",
      title: "Learn at Your Pace",
      description:
        "Watch high-quality videos, complete quizzes, and work on hands-on projects. Learn anytime, anywhere.",
      Icon: PlayCircle,
      colorClass: "bg-green-500",
      shadowClass: "shadow-green-200",
      textOpacityClass: "text-green-500/10",
    },
    {
      number: "04",
      title: "Earn Your Certificate",
      description:
        "Complete the course and receive a verified certificate to showcase on LinkedIn or your resume.",
      Icon: Award,
      colorClass: "bg-orange-500",
      shadowClass: "shadow-orange-200",
      textOpacityClass: "text-orange-500/10",
    },
  ];

  return (
    <section className="py-24 bg-base dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            } mb-4`}
          >
            How O-Learn Works
          </h2>
          <p
            className={`${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            } text-lg`}
          >
            Start learning in just a few simple steps—no complicated setup
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-base dark:bg-slate-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700 group hover:-translate-y-2 transition-transform duration-300"
            >
              <span
                className={`absolute -top-4 left-4 text-7xl font-black ${step.textOpacityClass} select-none`}
              >
                {step.number}
              </span>
              <div
                className={`w-16 h-16 ${step.colorClass} rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 shadow-lg ${step.shadowClass} dark:shadow-none`}
              >
                <step.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
