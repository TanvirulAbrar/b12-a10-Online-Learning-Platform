import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight, Compass } from "lucide-react";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24 rounded-[2rem] mx-4 my-6"
      style={{
        background:
          "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Unlock Your Potential with{" "}
              <span className="block text-slate-100/90">Premium Courses</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              Join thousands of learners mastering in-demand skills with
              expert-led classes. Your future starts today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => navigate("/courses")}
                className="bg-purple-600 hover:bg-base hover:text-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-black/10"
              >
                Get Started
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/courses")}
                className="bg-base/10 hover:bg-base/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 border border-white/20 shadow-lg"
              >
                Browse Courses
                <Compass className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-base/10 rounded-full blur-3xl"></div>
            <img
              alt="Instructor"
              className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white/10 transform transition hover:rotate-0 duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKKSzhrMIxPHIZPdFZvi0-MXujf7TmuZi3fJOwBR6CDelgL6xrC7WBLm2OdCU1YAHZSMjOJlC3ZLATFrw952mwDNZJKJIC3jIgTwnig3EHmh_IJEfg1INEUE9zhtL_lFePartDY6WEHVzXfe4kif61Dbnw7q-OaNrWRXEk0x_gA124ttfNP9o9qs-ttSAWOKE3dYtsS_R2wjBW_W7KkWaK92pTRfDU_36pwWF4mMWds1SEpRYVWx6ugnxcJ4GblKbfaxtmkchgayYk"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-base"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-base/40"></div>
      </div>
    </section>
  );
};

export default Banner;
