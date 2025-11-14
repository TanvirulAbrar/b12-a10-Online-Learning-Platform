import React, { use } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { addressOfServer } from "./address";
import axios from "axios";

const AddCourse = () => {
  const { user } = use(AuthContext);
  // const data = {
  //
  //   },
  // };
  const handelAddCourse = (event) => {
    event.preventDefault();

    const title = event.target.title.value?.trim();
    const image = event.target.image.value?.trim();
    const price = event.target.price.value?.trim();
    const duration = event.target.duration.value?.trim();
    const category = event.target.category.value?.trim();
    const description = event.target.description.value?.trim();
    const isFeatured = event.target.isFeatured.checked; // checkbox

    // check for missing fields
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
      .post(`${addressOfServer}/courses`, newCourse)

      .then((data) => {
        console.log("add c", data.data);
        console.log("Submitted Data:", newCourse);
        toast.success("Course added successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Server error — please try again later!");
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Course</h2>

      <div className="card-body p-0">
        <form onSubmit={handelAddCourse} className="space-y-4">
          <div>
            <label className="label font-medium">Title</label>
            <input
              name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter course title"
            />
          </div>

          <div>
            <label className="label font-medium">Image URL</label>
            <input
              name="image"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label font-medium">Price</label>
              <input
                name="price"
                type="text"
                className="input input-bordered w-full"
                placeholder="Price"
              />
            </div>

            <div>
              <label className="label font-medium">Duration</label>
              <input
                name="duration"
                type="text"
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
              className="input input-bordered w-full"
              placeholder="Category"
            />
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Short description"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="isFeatured" className="checkbox" />
            <span className="text-gray-700">Featured Course</span>
          </div>

          <button className="btn btn-neutral bg-indigo-700 w-full">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
