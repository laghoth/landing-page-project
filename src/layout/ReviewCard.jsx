import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ img, name, text, rating }) => {
  return (
    <div
      data-aos="fade-up"
      className="w-full md:basis-1/3 bg-white border-2 border-brightGreenTwo p-6 rounded-lg hover:shadow-primaryShadow transition-all"
    >
      <div className="flex justify-center mb-4">
        <img
          className="rounded-full w-24 h-24 object-cover"
          src={img}
          alt={`${name} photo`}
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <p className="text-lightText text-center mb-4">{text}</p>
      <div className="flex justify-center text-brightGreen">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "fill-current" : "text-brightGreen"}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
