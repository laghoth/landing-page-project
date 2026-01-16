import React, { useState } from "react";
import Heading from "../../../layout/Heading.jsx";
import Button from "../../../layout/Button.jsx";
import img from "../../../assets/images/pic-contact-v1.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 py-32 bg-white "
    >
      <Heading
        title1="Contact"
        title2="Us"
        color="text-brightOrange"
        paragraph="Quick support. Real answers."
      />

      <div className="flex flex-col lg:flex-row justify-between w-full items-stretch mt-12 gap-4">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/4 space-y-5 bg-brightBackground p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Name</label>
            <input
              className="py-3 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brightOrange"
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Email</label>
            <input
              className="py-3 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brightOrange"
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Number</label>
            <input
              className="py-3 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brightOrange"
              type="tel"
              name="userNumber"
              placeholder="Enter your number"
              value={formData.userNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              title="Send Message"
              color="bg-brightOrange"
              textColor="text-white"
              hoverBg="hover:bg-white"
              hoverTextColor="hover:text-brightOrange"
              outline="outline-brightOrange"
            />
          </div>
        </form>

        {/* IMAGE */}
        <div className="w-full lg:w-2/5 h-auto">
          <img src={img} alt="contact illustration" className="w-full object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
