import React, { use } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

const MyCourseCard = ({ course, setCourses, courses }) => {
  const { _id, title, image, price, category } = course;
  const { user } = use(AuthContext);
  const handeldelete = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`http://localhost:3000/courses/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
            toast.success("Course deleted successfully!");
            setCourses(courses.filter((a) => a._id != course._id));
          })
          .catch((error) => {
            console.error(error);
            toast.error("Server error — please try again later!");
          });
      }
    });
  };

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
            <NavLink to={`/courses/${_id}`}>view</NavLink>
          </div>
          <NavLink to={`/updateCourse/${_id}`}>updateCourse</NavLink>
          <button onClick={handeldelete}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
