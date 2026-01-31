import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight, Crown } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const CourseCard = ({ course }) => {
  const { _id, title, image, price, category } = course;
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  return (
    <NavLink to={`/courses/${_id}`} className="">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="p-4 bg-base-100 rounded-3xl max-w-80 border border-[#e1e1e1] transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      >
        <figure className="overflow-hidden rounded-2xl h-50">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="banner"
          />
        </figure>

        <div className="py-3 flex flex-col gap-1">
          <h2 className="font-bold h-20">{title}</h2>

          <div className="w-fit px-2 rounded-[5px] bg-green-200 font-bold text-[#198686]">
            <h2 className="text-[13px]">{category}</h2>
          </div>

          <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-violet-600 text-[13px] text-white font-semibold">
            <Crown className="h-4 w-4 text-white" />
            <span>Premium</span>
          </div>

          <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-[#ff448f] text-[13px] text-white font-semibold">
            <BadgeCheck className="h-4 w-4" />
            <span>featured</span>
          </div>

          <h2 className="pt-3 text-[16px] font-semibold">${price}</h2>

          <div className="card-actions flex items-center w-fit px-2 rounded-[5px] hover:bg-blue-200 font-bold text-[13px] text-[#311986]">
            more details <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
};

export default CourseCard;
