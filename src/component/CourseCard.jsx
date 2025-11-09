import React from "react";
import { NavLink } from "react-router";

const CourseCard = ({ course }) => {
  const { _id, title, image, price, category } = course;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          <h2 className="card-title">{category}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <NavLink to={`/courses/${_id}`}>
              <details></details>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
