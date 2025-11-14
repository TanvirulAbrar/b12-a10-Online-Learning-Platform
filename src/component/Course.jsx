import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CourseCard from "./CourseCard";
import { toast } from "react-toastify";

const Course = () => {
  const courses = useLoaderData();
  // const { _id, title, image, price, category } = course;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (courses && courses.length > 0) {
      const uniqueCategories = [];

      for (const course of courses) {
        const cat = course.category;
        if (cat && !uniqueCategories.includes(cat)) {
          uniqueCategories.push(cat);
        }
      }

      setCategory(uniqueCategories);
    }
  }, [courses]);

  const [sort, setsort] = useState("");
  const [filterdata, setfilterdata] = useState(courses);
  const findWithWord = (a) => {
    const mdata = courses.filter((item) =>
      item.title.toLowerCase().includes(a.toLowerCase())
    );
    setfilterdata(mdata);
  };
  const handelsort = (type) => {
    if (type == "price High-Low") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setfilterdata(sortbyd);
    }
    if (type == "price Low-High") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      setfilterdata(sortbyd);
    }
    if (type == "size high-low") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(b.size) - Number(a.size)
      );
      setfilterdata(sortbyd);
    }
    if (type == "size low-high") {
      const sortbyd = [...filterdata].sort(
        (a, b) => Number(a.size) - Number(b.size)
      );
      setfilterdata(sortbyd);
    }
    setsort(type);
  };
  const handelsortb = (e) => {
    const filterdata = courses.filter((a) => a.category == e.target.innerText);

    setfilterdata([...filterdata]);
  };
  return (
    <div>
      <div className="max-w-6xl py-16 mx-auto content-center px-5 ">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">
          All course
        </h2>
        <div className="flex justify-center content-center items-center max-w-300 mx-auto   py-5">
          <div className="w-4xl">
            {" "}
            <label className="input  w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                onChange={(e) => findWithWord(e.target.value.trim())}
                className="grow"
                placeholder="Search Course"
              />
            </label>
          </div>
          <div className="w-fit">
            <details className="dropdown">
              <summary className="btn m-1">
                Sort By{" "}
                <span className="max-[350px]:hidden flex">
                  {" "}
                  {sort ? sort : ""}
                </span>{" "}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-fit  py-2 shadow-sm">
                <li>
                  <a onClick={() => handelsort("price High-Low")}>
                    price High-Low
                  </a>
                </li>
                <li>
                  <a onClick={() => handelsort("price Low-High")}>
                    price Low-High
                  </a>
                </li>
                <li>
                  <a onClick={() => handelsort("size high-low")}>
                    time high-low
                  </a>
                </li>
                <li>
                  <a onClick={() => handelsort("size low-high")}>
                    size low-high
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="max-w-300 mb-5  flex overflow-scroll  ">
          {category.map((a, i) => (
            <button
              onClick={(e) => handelsortb(e)}
              key={"ac" + i}
              className="btn  max-[500px]:hidden btn-outline btn-primary mr-1.5"
            >
              {a}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap w-fit justify-center mx-auto gap-5">
          {filterdata.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
