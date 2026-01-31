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
  ChartNoAxesCombined,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";

const WhyChooseUs = () => {
  const { theme } = useTheme();
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-slate-100 dark:border-slate-800 bg-base dark:bg-slate-900">
      <h2
        className={`text-4xl font-extrabold ${
          theme === "dark" ? "text-white" : "text-slate-900"
        } mb-6`}
      >
        Why Choose Us
      </h2>
      <p
        className={`${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        } text-lg mb-12`}
      >
        Trusted by leading global companies and thousands of students
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-60 dark:invert">
        <div className="flex justify-center items-center h-12 text-2xl font-bold text-slate-400">
          GOOGLE
        </div>
        <div className="flex justify-center items-center h-12 text-2xl font-bold text-slate-400">
          MICROSOFT
        </div>
        <div className="flex justify-center items-center h-12 text-2xl font-bold text-slate-400">
          NETFLIX
        </div>
        <div className="flex justify-center items-center h-12 text-2xl font-bold text-slate-400">
          META
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
