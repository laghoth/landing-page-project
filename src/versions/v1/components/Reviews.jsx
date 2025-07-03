import React from "react";
import Heading from "../../../layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/customers/customer1.jpg";
import img2 from "../../../assets/customers/customer2.jpg";
import img3 from "../../../assets/customers/customer3.jpg";
import img4 from "../../../assets/customers/customer4.jpg";
import img5 from "../../../assets/customers/customer5.jpg";
import img6 from "../../../assets/customers/customer6.jpg";
import img7 from "../../../assets/customers/customer6.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Tech Enthusiast",
    feedback:
      "This smartwatch changed the way I stay connected and monitor my health daily. Highly recommended!",
  },
  {
    name: "Maria Lopez",
    title: "Fitness Coach",
    feedback:
      "Sleek design with powerful features. I use it during all my sessions and love the accuracy.",
  },
  {
    name: "Omar Khalil",
    title: "Entrepreneur",
    feedback:
      "Stylish, fast, and intuitive. It keeps me productive without ever needing to take out my phone.",
  },
  {
    name: "Sophie Lee",
    title: "Designer",
    feedback:
      "Beautiful interface and excellent battery life. It fits perfectly into my workflow and lifestyle.",
  },
  {
    name: "Sophie Lee",
    title: "Designer",
    feedback:
      "Beautiful interface and excellent battery life. It fits perfectly into my workflow and lifestyle.",
  },
  {
    name: "Sophie Lee",
    title: "Designer",
    feedback:
      "Beautiful interface and excellent battery life. It fits perfectly into my workflow and lifestyle.",
  },
  {
    name: "Sophie Lee",
    title: "Designer",
    feedback:
      "Beautiful interface and excellent battery life. It fits perfectly into my workflow and lifestyle.",
  },
];

const Reviews = () => {
  return (
    <section
      id="testimonials"
      className=" w-full py-24 bg-white px-5 md:px-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="text-center mb-10 ">
        <Heading
          title1="What Our"
          title2="Customers Say"
          color="text-brightOrange"
        />

        <p className="text-lightText mt-2 max-w-xl mx-auto">
          Hear from people who love our product.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[230px] bg-brightOrangeTwo border border-brightOrange rounded-xl p-6 shadow-md  flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={images[index]}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="text-md font-bold text-gray-800">{item.name}</h3>
                <span className="text-sm text-gray-500">{item.title}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 italic text-center">
                "{item.feedback}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
