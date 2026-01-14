import React from "react";
import Heading from "../../../layout/Heading.jsx";
import Button from "../../../layout/Button.jsx";
import img from "../../../assets/contact.svg"; // Assuming you have an image at this path

const Contact = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20" action="">
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              required
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              required
              className="py-3 px-2 rounded-ld hover:shadow-primaryShadow transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              type="tel"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
              required
              className="py-3 px-2 rounded-ld hover:shadow-primaryShadow transition-all"
            />
          </div>
          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="w-full md:w-2/5">
          <img src={img} alt="contact image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
