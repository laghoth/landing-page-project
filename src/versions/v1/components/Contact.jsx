<<<<<<< HEAD
// import React, { useState } from "react";
// import Heading from "../../../layout/Heading.jsx";
// import Button from "../../../layout/Button.jsx";
// import img from "../../../assets/contact.svg";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     userEmail: "",
//     userNumber: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));

//     console.log("Form Data Updated: ", formData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted ✅", formData);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 py-10 bg-white">
//       <Heading title1="Contact" title2="Us" />
//       <div className="flex flex-col md:flex-row justify-between w-full">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full md:w-2/5 space-y-5 pt-20"
//         >
//           <div className="flex flex-col">
//             <label htmlFor="userName">Your Name</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
//               type="text"
//               name="userName"
//               id="userName"
//               placeholder="Enter your name"
//               value={formData.userName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="userEmail">Your Email</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
//               type="email"
//               name="userEmail"
//               id="userEmail"
//               placeholder="Enter your email"
//               value={formData.userEmail}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="userNumber">Your Number</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
//               type="tel"
//               name="userNumber"
//               id="userNumber"
//               placeholder="Enter your number"
//               value={formData.userNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-row justify-center">
//             <Button title="Send Message" />
//           </div>
//         </form>

//         <div className="w-full md:w-2/5 pt-10 md:pt-0">
//           <img src={img} alt="contact illustration" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Heading from "../../../layout/Heading.jsx";
import Button from "../../../layout/Button.jsx";
import img from "../../../assets/images/pic-contact-v1.png";
=======
import React, { useState } from "react";
import Heading from "../../../layout/Heading.jsx";
import Button from "../../../layout/Button.jsx";
import img from "../../../assets/contact.svg";
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b

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
<<<<<<< HEAD
=======

    console.log("Form Data Updated: ", formData);
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
  };

  return (
<<<<<<< HEAD
    <div
      id="contact"
      className="
        min-h-screen flex flex-col items-center justify-center md:px-32 px-5 py-20 bg-white
      "
    >
      <Heading
        title1="Contact"
        title2="Us"
        color="text-brightOrange"
        paragraph="Quick support. Real answers"
      />

      <div className="flex flex-col lg:flex-row justify-between w-full items-center mt-10">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full md:w-2/4 lg:w-2/5 space-y-5 pt-14
            bg-brightBackground p-8 rounded-2xl
            shadow-lg
          "
        >
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1">Your Name</label>
            <input
              className="
                py-3 px-3 rounded-lg
                border border-gray-200
                focus:outline-none focus:border-brightOrange
              "
              type="text"
              name="userName"
=======
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 py-10 bg-white">
      <Heading title1="Contact" title2="Us" />
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/5 space-y-5 pt-20"
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="text"
              name="userName"
              id="userName"
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
              placeholder="Enter your name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
<<<<<<< HEAD
            <label className="text-gray-700 mb-1">Your Email</label>
            <input
              className="
                py-3 px-3 rounded-lg
                border border-gray-200
                focus:outline-none focus:border-brightOrange
              "
              type="email"
              name="userEmail"
=======
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
              placeholder="Enter your email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
<<<<<<< HEAD
            <label className="text-gray-700 mb-1">Your Number</label>
            <input
              className="
                py-3 px-3 rounded-lg
                border border-gray-200
                focus:outline-none focus:border-brightOrange
              "
              type="tel"
              name="userNumber"
=======
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-primaryShadow transition-all"
              type="tel"
              name="userNumber"
              id="userNumber"
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
              placeholder="Enter your number"
              value={formData.userNumber}
              onChange={handleChange}
              required
            />
          </div>

<<<<<<< HEAD
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
=======
          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        <div className="w-full md:w-2/5 pt-10 md:pt-0">
          <img src={img} alt="contact illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
