import { useState } from "react";
import { School, Sparkles, BookOpen, Award, GraduationCap } from "lucide-react";
import useTheme from "../hooks/useTheme"; 
const Loading = () => {
  const { theme } = useTheme(); 
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center overflow-x-hidden px-4 transition-colors duration-300 ${
        isDark ? "bg-[#101922] text-white" : "bg-[#f6f7f8] text-[#111418]"
      }`}
    >
      <div className="relative flex w-full max-w-[480px] flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative flex items-center justify-center">
            <div
              className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors ${
                isDark ? "border-[#137fec]/30" : "border-[#137fec]/20"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 border-t-transparent animate-spin ${
                  isDark ? "border-[#137fec]" : "border-[#137fec]"
                }`}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <School className="text-[#137fec] size-10" />
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-[#137fec] text-white p-1 rounded-full shadow-lg">
              <Sparkles className="size-3" />
            </div>
          </div>

          <h1
            className={`text-2xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-[#111418]"
            }`}
          >
            O-Learn
          </h1>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-end">
            <p
              className={`text-base font-medium leading-normal ${
                isDark ? "text-gray-300" : "text-[#111418]"
              }`}
            >
              Preparing your workspace...
            </p>
            <p className="text-[#137fec] text-sm font-semibold leading-normal">68%</p>
          </div>
          <div
            className={`rounded-full h-2 w-full overflow-hidden transition-colors ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div
              className="h-full rounded-full bg-[#137fec] transition-all duration-300"
              style={{ width: "68%" }}
            ></div>
          </div>
          <p
            className={`text-xs font-normal leading-normal text-center ${
              isDark ? "text-gray-500" : "text-[#617589]"
            }`}
          >
            Optimizing your personalized learning path
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[400px]">
          <div
            className={`p-6 rounded-xl border shadow-sm italic transition-colors ${
              isDark
                ? "bg-gray-800/50 border-gray-700 text-gray-200"
                : "bg-white border-gray-100 text-[#111418]"
            }`}
          >
            <p className="text-base font-normal leading-relaxed text-center">
              "The expert in anything was once a beginner."
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pt-4">
          <div className="flex gap-4">
            <BookOpen
              className={`size-6 ${
                isDark ? "text-[#137fec]/50" : "text-[#137fec]/40"
              }`}
            />
            <Award
              className={`size-6 ${
                isDark ? "text-[#137fec]/50" : "text-[#137fec]/40"
              }`}
            />
            <GraduationCap
              className={`size-6 ${
                isDark ? "text-[#137fec]/50" : "text-[#137fec]/40"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-8 text-center">
          <p
            className={`text-xs font-medium uppercase tracking-widest ${
              isDark ? "text-gray-500" : "text-[#617589]"
            }`}
          >
            Powered by O-Learn AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;