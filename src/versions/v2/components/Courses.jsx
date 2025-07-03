import React, { useEffect } from "react";
import Heading from "../../../layout/Heading";
import webImg from "../../../assets/web-dev.svg";
import appImg from "../../../assets/App-dev.svg";
import graphicImg from "../../../assets/graphic.svg";
import digitalImg from "../../../assets/digital.svg";
import CoursesCard from "../../../layout/coursesCard";
import Button from "../../../layout/Button";

const Courses = () => {
  const coursesData = [
    {
      img: webImg,
      title: "Web Development",
      paragraph:
        "Master the latest web technologies and frameworks to build responsive, modern websites and powerful web applications.",
    },
    {
      img: appImg,
      title: "App Development",
      paragraph:
        "Learn to create high-performance mobile applications for both iOS and Android using cutting-edge tools and languages.",
    },
    {
      img: graphicImg,
      title: "Graphic Design",
      paragraph:
        "Develop your creativity by mastering tools like Photoshop and Illustrator to design stunning visuals and brand identities.",
    },
    {
      img: digitalImg,
      title: "Digital Marketing",
      paragraph:
        "Gain expertise in SEO, social media, and online advertising to grow businesses and reach wider audiences effectively.",
    },
  ];

  return (
    <div className="min-h-[100vh] flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {coursesData.map((course, index) => (
          <CoursesCard
            key={index}
            img={course.img}
            title={course.title}
            paragraph={course.paragraph}
          />
        ))}
      </div>

      <Button title="View All Courses" />
    </div>
  );
};

export default Courses;
