import React from "react";

const AllCourceSkeleton = () => {
  return (
    <div className="">
      {/* <div className="skeleton h-10 m-5 rounded-2xl"></div> */}
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 mt-10  gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={"skall" + i}
            className=" border rounded-3xl border-gray-100 h-100"
          >
            <div className="skeleton h-30 m-5 rounded-2xl"></div>
            <div className="skeleton h-10 m-5 rounded-2xl"></div>
            <div className="skeleton h-10 m-5 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourceSkeleton;
