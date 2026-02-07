import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";
import Banner from "./Banner/Banner";
import PopularCourses from "./Popular Courses/PopularCourses";
import { useNavigate } from "react-router";
import TrustSection from "./Banner/TrustSection";
import HowItWorksSection from "./Banner/HowItWorksSection";
import PromoSection from "./Banner/PromoSection";
import TopCategoriesSection from "./Banner/TopCategoriesSection";
import StatsCtaSection from "./Banner/StatsCtaSection";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";
import PopularCoursesSection from "./Home/PopularCoursesSection";
import TopInstructorsSection from "./Home/TopInstructorsSection";
import TestimonialsSection from "./Home/TestimonialsSection";
import FAQ from "./Home/FAQ";

const Home = () => {
  const axios = useAxios();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (courses.length > 0) return;
    axios
      .get("/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, [courses.length, axios]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Banner />
      <PopularCourses courses={courses} />

      <main className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <TrustSection isDark={isDark} />
        <HowItWorksSection isDark={isDark} />
        <PromoSection isDark={isDark} navigate={navigate} />
        <TopCategoriesSection isDark={isDark} navigate={navigate} />
        <StatsCtaSection isDark={isDark} user={user} navigate={navigate} />

        {/* <PopularCoursesSection isDark={isDark} /> */}
        <TopInstructorsSection isDark={isDark} />
        <TestimonialsSection isDark={isDark} />
        <FAQ isDark={isDark} />
      </main>
    </div>
  );
};

export default Home;
