import React from "react";
import { Link } from "react-scroll";
import Button from "../../../layout/Button";
import img from "../../../assets/hero.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center md:justify-between md:px-32 px-5 py-10"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
        <h1 className="text-5xl font-bold leading-tight">
          Knowledge with
          <span className="text-brightGreen"> eStudy</span>
        </h1>

        <p className="text-lightText mt-6 max-w-lg mx-auto md:mx-0">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>

        <div className="mt-8">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 w-full mt-10 md:mt-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          src={img}
          alt="Students learning on eStudy platform"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
