import React from "react";

const HomeSkeleton = () => {
  return (
    <div>
      <section className="p-5">
        <div className=" h-100 w-full skeleton"></div>
      </section>
      <div className="h-30 m-5 my-10 skeleton"></div>
      <div className=" p-5 flex flex-wrap w-fit justify-center mx-auto gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="card w-72 bg-base-100 shadow border border-base-300"
          >
            <figure className="px-4 pt-4">
              <div className="skeleton h-40 w-full rounded-xl"></div>
            </figure>

            <div className="card-body gap-3">
              <div className="skeleton h-5 w-3/4"></div>
              <div className="skeleton h-4 w-1/2"></div>

              <div className="flex gap-2">
                <div className="skeleton h-4 w-16"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>

              <div className="skeleton h-10 w-full rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
