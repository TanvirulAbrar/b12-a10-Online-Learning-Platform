import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import axios from "axios";

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
    axios
      .patch(`${addressOfServer}/courses/${course._id}`, newCourse)
      .then((data) => {
        console.log("add c", data.data);
        console.log("Submitted Data:", newCourse);
        toast.success("Course updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Course</h2>

      <div className="card-body p-0">
        <form onSubmit={handelUpdateCourse} className="space-y-4">
          <div>
            <label className="label font-medium">Title</label>
            <input
              name="title"
              type="text"
              defaultValue={course.title}
              className="input input-bordered w-full"
              placeholder="Course title"
            />
          </div>

          <div>
            <label className="label font-medium">Image URL</label>
            <input
              name="image"
              type="text"
              defaultValue={course.image}
              className="input input-bordered w-full"
              placeholder="Image link"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label font-medium">Price</label>
              <input
                name="price"
                type="text"
                defaultValue={course.price}
                className="input input-bordered w-full"
                placeholder="Price"
              />
            </div>

            <div>
              <label className="label font-medium">Duration</label>
              <input
                name="duration"
                type="text"
                defaultValue={course.duration}
                className="input input-bordered w-full"
                placeholder="Duration"
              />
            </div>
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <input
              name="category"
              type="text"
              defaultValue={course.category}
              className="input input-bordered w-full"
              placeholder="Category"
            />
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={course.description}
              className="textarea textarea-bordered w-full"
              placeholder="Course description"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isFeatured}
              name="isFeatured"
              onChange={(e) => setIsChecked(e.target.checked)}
              className="checkbox"
            />
            <span className="text-gray-700">Featured Course</span>
          </div>

          <button className="btn btn-neutral bg-indigo-700 w-full">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
