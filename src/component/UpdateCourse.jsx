import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const UpdateCourse = () => {
  const course = useLoaderData();
  const [isFeatured, setIsChecked] = useState(course.isFeatured);

  const { user } = use(AuthContext);

  const handelUpdateCourse = (event) => {
    event.preventDefault();

    const title = event.target.title.value?.trim();
    const image = event.target.image.value?.trim();
    const price = event.target.price.value?.trim();
    const duration = event.target.duration.value?.trim();
    const category = event.target.category.value?.trim();
    const description = event.target.description.value?.trim();
    const isFeatured = event.target.isFeatured.checked;

    if (!title || !image || !price || !duration || !category || !description) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    const newCourse = {
      title: title,
      image: image,
      price: price,
      duration: duration,
      category: category,
      description: description,
      isFeatured: isFeatured,
      instructor: {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      },
    };
    fetch(`http://localhost:3000/courses/${course._id}`, {
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
        toast.success("Course updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
  };
  return (
    <div>
      UpdateCourse UpdateCourse
      <div className="card-body">
        <form action="" onSubmit={handelUpdateCourse}>
          {" "}
          <fieldset className="fieldset">
            <label className="label">title</label>
            <input
              name="title"
              type="text"
              defaultValue={course.title}
              className="input"
              placeholder="title"
            />
            <label className="label">image</label>
            <input
              name="image"
              type="text"
              defaultValue={course.image}
              className="input"
              placeholder="image"
            />
            <label className="label">price</label>
            <input
              name="price"
              type="text"
              defaultValue={course.price}
              className="input"
              placeholder="price"
            />
            <label className="label">duration</label>
            <input
              name="duration"
              type="text"
              defaultValue={course.duration}
              className="input"
              placeholder="duration"
            />
            <label className="label">category</label>
            <input
              name="category"
              type="text"
              defaultValue={course.category}
              className="input"
              placeholder="category"
            />
            <label className="label">description</label>
            <input
              name="description"
              type="text"
              defaultValue={course.description}
              className="input"
              placeholder="description"
            />

            <input
              type="checkbox"
              checked={isFeatured}
              name="isFeatured"
              value="isFeatured"
              onChange={(e) => setIsChecked(e.target.checked)}
            />

            <button className="btn btn-neutral mt-4">updateCourse</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
