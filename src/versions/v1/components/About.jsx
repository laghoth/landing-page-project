import React from "react";
import Heading from "../../../layout/Heading";
import Button from "../../../layout/Button";
import img from "../../../assets/images/swatch_detail.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-5 md:px-32"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={img}
            alt="Smartwatch close-up detail"
            className="w-full max-w-md md:max-w-lg lg:max-w-[500px] max-h-[50vh] object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          data-aos="zoom-in"
        >
          <Heading
            title1="About"
            title2="The Product"
            color="text-brightOrange"
          />
          <p className="text-lightText leading-relaxed">
            Discover the cutting-edge features that make our smartwatch a
            must-have in both style and performance. Whether you're tracking
            your health, staying connected, or making a statement — this product
            delivers.
          </p>
          <ul className="list-disc list-inside text-sm text-lightText grid grid-cols-2 gap-2">
            <li>High-resolution display</li>
            <li>Long battery life</li>
            <li>Heart-rate monitor</li>
            <li>Water-resistant design</li>
            <li>Bluetooth connectivity</li>
            <li>Customizable watch faces</li>
            <li>Fitness tracking</li>
            <li>Sleep monitoring</li>
            <li>Notifications sync</li>
            <li>Elegant stainless steel</li>
          </ul>

          <div className="pt-4">
            <Button
              title="View All Features"
              color="bg-brightOrange"
              textColor="text-white"
              hoverTextColor="hover:text-brightOrange"
              outline="outline-brightOrange"
              hoverBg="hover:bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
