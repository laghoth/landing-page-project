import React from "react";
import { Link } from "react-scroll";
import Button from "../../../layout/Button";
import img2 from "../../../assets/images/pic4.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:justify-between gap-10 items-center md:mx-32 mx-5 mt-24 md:mt-20 ">
      <div
        data-aos="fade-down-right"
        className="lg:w-2/4 text-center md:text-start mt-8 "
      >
        <h2 className="text-5xl font-semibold leading-tight text-center md:text-start">
          Smart Digital <br /> Watch For <br />
          <span className=" text-brightOrange font-semibold">
            Luxurios Life
          </span>
        </h2>
        <p className="text-lightText mt-5 text-start max-w-lg">
          Experience the future of luxury with our Smart Digital Watch.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button
            title="Pay Products"
            color="bg-brightOrange"
            textColor="text-white"
            hoverTextColor="hover:text-brightOrange"
            outline="outline-brightOrange"
            hoverBg="hover:bg-white"
          />
        </Link>
      </div>
      <div
        data-aos="fade-down-left"
        className="w-full lg:w-2/4 flex justify-center"
      >
        <img
          src={img2}
          alt="Students learning on eStudy platfor"
          className="-rotate-45 sm:px-14 sm:mt-[-30px] w-9/12 md:w-full"
        />
      </div>
    </div>
  );
};

export default Home;
