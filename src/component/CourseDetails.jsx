import { Feather, FeatherIcon } from "lucide-react";
import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const course = useLoaderData();

  const {
    _id,
    title,
    image,
    price,
    duration,
    category,
    isFeatured,
    description,
  } = course;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          <h2 className="card-title">{duration}</h2>
          <h2 className="card-title">{category}</h2>
          {isFeatured ? (
            <div className="">
              <Feather></Feather>isFeatured
            </div>
          ) : (
            <div className="">
              <FeatherIcon></FeatherIcon>
            </div>
          )}
          <p className="card-title">{description}</p>
          <div onClick={() => toast("add funs to enroll")} className="btn">
            enroll now
          </div>
          <div className="card-actions justify-end">
            <NavLink to={`/courses`}>back</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
