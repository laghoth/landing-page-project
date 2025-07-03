import React from "react";
import Heading from "../../../layout/Heading";
import ReviewCard from "../../../layout/ReviewCard";
import img1 from "../../../assets/images/pic1.png";
import img2 from "../../../assets/images/pic2.png";
import img3 from "../../../assets/images/pic3.png";

const Reviews = () => {
  const reviewsData = [
    {
      img: img1,
      text: "eStudy transformed my learning experience with engaging courses and excellent instructors.",
      name: "John Doe",
    },
    {
      img: img2,
      text: "The platform is very intuitive and offers a wide variety of subjects to choose from!",
      name: "Jane Smith",
    },
    {
      img: img3,
      text: "I was able to improve my career thanks to the practical skills I learned on eStudy.",
      name: "Michael Johnson",
    },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 bg-white">
      <Heading title1="What Our" title2="Students Say" />
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            img={review.img}
            text={review.text}
            name={review.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
