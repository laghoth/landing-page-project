import React from "react";
import Heading from "../../../layout/Heading";
import imgQuality from "../../../assets/quality-control.png";
import imgIllustration from "../../../assets/illustration.png";
import imgHigh from "../../../assets/high-five.png";
import imgPlatform from "../../../assets/platform.png";
import healthTracking from "../../../assets/health-tracking.png";
import flexible from "../../../assets/flexible.png";
import longevity from "../../../assets/longevity.png";
import waterResistant from "../../../assets/water-resistant.png";

const features = [
  {
    icon: imgQuality,
    title: "High Quality",
    description: "Crafted with premium materials and built to last.",
  },
  {
    icon: imgIllustration,
    title: "Elegant Design",
    description: "Minimalist and modern, perfect for every style.",
  },
  {
    icon: imgHigh,
    title: "Latest Technology",
    description: "Advanced features for a seamless smart experience.",
  },
  {
    icon: imgPlatform,
    title: "User-Friendly",
    description: "Easy to use interface with intuitive controls.",
  },
  {
    icon: healthTracking,
    title: "Health Tracking",
    description: "Monitor your health metrics effortlessly.",
  },
  {
    icon: flexible,
    title: "Customizable",
    description: "Personalize watch faces and straps to match your style.",
  },
  {
    icon: longevity,
    title: "Long Battery Life",
    description: "Stay connected longer with efficient power management.",
  },
  {
    icon: waterResistant,
    title: "Water Resistant",
    description: "Durable design that withstands splashes and rain.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full bg-white py-16 px-5 md:px-32"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="text-center mb-12">
        <Heading title1="Product" title2="Features" color="text-brightOrange" />
        <p className="mt-4 max-w-xl mx-auto text-lightText">
          Discover what makes our smartwatch a game changer in the world of
          wearable tech.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-[100px] p-4 bg-brightOrangeTwo rounded-full shadow-secondaryShadow"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-lightText text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
