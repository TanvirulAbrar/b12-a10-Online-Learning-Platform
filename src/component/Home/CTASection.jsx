import React from "react";
import { ArrowRight, Zap, Star } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const CTASection = () => {
  const { theme } = useTheme();
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative p-8 md:p-16 lg:p-24 text-center shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-base/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-8 border border-white/30">
            <Zap className="w-4 h-4 text-yellow-300" />
            Limited Time: New Year Launch Offer — 50% OFF Premium Courses!
          </div>
          <div className="mb-8">
            <Star className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] fill-current" />
          </div>
          <h2
            className={`text-5xl md:text-7xl font-black ${
              theme === "dark" ? "text-white" : "text-slate-900"
            } mb-8 leading-tight`}
          >
            Start Learning Today <br />& <br />
            <span className="text-yellow-400">
              Transform Your Career in 2026
            </span>
          </h2>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-white/90" : "text-slate-900/90"
            } mb-12 max-w-2xl leading-relaxed`}
          >
            Join <span className="text-yellow-400 font-bold">15,000+</span>{" "}
            students already mastering in-demand skills with expert-led courses.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-black py-5 px-10 rounded-2xl transition-all shadow-xl flex items-center gap-2 group">
              Claim 50% Off Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-base/10 hover:bg-base/20 backdrop-blur-md text-white border-2 border-white/50 font-bold py-5 px-10 rounded-2xl transition-all">
              Browse Free Courses
            </button>
          </div>
          <div className="text-white/70 text-sm flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" /> 4.9/5
              average rating
            </span>
            <span>•</span>
            <span>Lifetime access</span>
            <span>•</span>
            <span>Certificates included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
