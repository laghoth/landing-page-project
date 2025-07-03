import React from "react";

const CoursesCard = ({ img, title, paragraph }) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full sm:w-[48%] lg:w-[24%] flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none p-5 cursor-pointer rounded-lg hover:shadow-primaryShadow transition-all"
    >
      <div className="w-3/5">
        <img src={img} alt={`${title} illustration`} />
      </div>
      <div>
        <h3
          className="font-semibold text-lg text-center my-5"
          aria-label={title}
        >
          {title}
        </h3>
        <p className="text-lightText text-center md:text-start">{paragraph}</p>
      </div>
    </div>
  );
};

export default CoursesCard;
