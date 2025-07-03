import React from "react";
import img from "../../../assets/about.svg"; // Assuming you have an image to use
import Button from "../../../layout/Button";
import { Link } from "react-scroll";
import Heading from "../../../layout/Heading";

const About = () => {
  return (
    <div className="min-h-[100vh] flex flex-col-reverse md:flex-row items-center gap-5 md:px-32 px-5 mt-14 bg-white w-full">
      <div className="w-full md:w-2/4" data-aos="fade-right">
        <img src={img} alt="image" />
      </div>
      <div
        className="w-full md:w-2/4 text-center space-y-2"
        data-aos="fade-left"
      >
        <Heading title1="About" title2="Us?" />
        <p data-aos="zoom-in">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          itaque excepturi rerum consequuntur illum totam vitae? At,
          consequuntur ad! Sint magnam sed alias voluptate ea nulla at hic
          fugiat. Ducimus.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
