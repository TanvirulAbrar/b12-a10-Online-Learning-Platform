import { Feather, FeatherIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { NavLink, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";

const CourseDetails = () => {
  const course = useLoaderData();
  const { user, enroll, enrollid, setenroll } = use(AuthContext);

  const [isEnrolled, setisEnrolled] = useState(false);

  useEffect(() => {
    const data = enroll.filter((a) => a == course._id);
    if (data.length) {
      setisEnrolled(true);
      // toast("true");
      console.log(data);
    }
  }, [enroll]);
  const handelSubmit = (event) => {
    event.preventDefault();

    let newCourse = {};
    if (isEnrolled) {
      const filterid = enroll.filter((a) => a != course._id);

      setenroll([...filterid]);
      newCourse = {
        email: user.email,
        enrolled: [...filterid],
      };
    } else {
      setenroll([...enroll, course._id]);
      newCourse = {
        email: user.email,
        enrolled: [...enroll, course._id],
      };
    }
    // console.log("hitted");
    console.log(enroll);

    fetch(`${addressOfServer}/enroll/${enrollid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("add c", data);
        console.log("Submitted Data:", newCourse);

        if (isEnrolled) {
          toast("canceled successfully");
        } else {
          toast.success(" enrolled successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
    setisEnrolled(!isEnrolled);
  };

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
          <div onClick={handelSubmit} className="btn">
            {!isEnrolled ? "enroll now" : "cancel enroll"}
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
