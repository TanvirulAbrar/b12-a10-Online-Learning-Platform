import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";
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

      <div className="">poular course</div>
      <div className="flex flex-wrap gap-5">
        {courses
          .filter((a) => a.isFeatured == true)
          .map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
      </div>
      <div className="">why choose us</div>
      <div className="">top instructors</div>
    </div>
  );
};

export default Home;
