import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import HeroSection from "./HeroSection";

export default function Banner() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerClass = `font-display transition-colors duration-300 ${
    isDark ? "bg-[#101922] text-white" : "bg-[#f6f7f8] text-[#111418]"
  }`;

  return (
    <div className={containerClass}>
      <main className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <HeroSection isDark={isDark} user={user} navigate={navigate} />
        {/* <TrustSection isDark={isDark} />
        <HowItWorksSection isDark={isDark} />
        <PromoSection isDark={isDark} navigate={navigate} />
        <TopCategoriesSection isDark={isDark} navigate={navigate} />
        <StatsCtaSection isDark={isDark} user={user} navigate={navigate} /> */}
      </main>
    </div>
  );
}
