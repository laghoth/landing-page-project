import React, { useState } from "react";
import Heading from "../../../layout/Heading.jsx";
import Button from "../../../layout/Button.jsx";
import img from "../../../assets/contact.svg";

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

    console.log("Form Data Updated: ", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 py-10">
      <Heading title1="Contact" title2="Us" />
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/5 space-y-5 pt-20"
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Your Nameeeeeeeeeeeeeeee</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="tel"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
              value={formData.userNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="w-full md:w-2/5 pt-10 md:pt-0">
          <img src={img} alt="contact illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
