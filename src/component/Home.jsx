import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";
import Banner from "./Banner/Banner";
import PopularCourses from "./Popular Courses/PopularCourses";
import TopInstructor from "./Home/TopInstructor";
import WhyChooseUs from "./Home/WhyChooseUs";
import Testimonials from "./Home/Testimonials";
import CourseCategories from "./Home/CourseCategories";
import FAQ from "./Home/FAQ";
import Statistics from "./Home/Statistics";
import HowItWorks from "./Home/HowItWorks";
import CTASection from "./Home/CTASection";
import YourCardStyle from "./Home/YourCardStyle";
import YourHeaderStyle from "./Home/YourHeaderStyle";
const Home = () => {
  const axios = useAxios();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (courses.length > 0) {
      return;
    }
    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <Banner />
      <HowItWorks />
      <CourseCategories />
      <CTASection />
      <PopularCourses courses={courses} />
      <TopInstructor />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <Statistics />
    </div>
  );
};

export default Home;
