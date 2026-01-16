// import React from "react";
// import { Link } from "react-scroll";
// import Button from "../../../layout/Button";
// import img2 from "../../../assets/images/pic4.png";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row lg:justify-between gap-10 items-center mt-24 md:mt-20 px-5 md:px-32">
//       <div
//         data-aos="fade-down-right"
//         className=" mt-8 bg-red-900"
//       >
//         <h2 className="text-5xl font-semibold leading-tight text-center md:text-start">
//           Smart Digital <br /> Watch For <br />
//           <span className=" text-brightOrange font-semibold">
//             Luxurios Life
//           </span>
//         </h2>
//         <p className="text-lightText mt-5 text-start max-w-lg">
//           Experience the future of luxury with our Smart Digital Watch.
//         </p>

//         <Link to="contact" spy={true} smooth={true} duration={500}>
//           <Button
//             title="Pay Products"
//             color="bg-brightOrange"
//             textColor="text-white"
//             hoverTextColor="hover:text-brightOrange"
//             outline="outline-brightOrange"
//             hoverBg="hover:bg-white"
//           />
//         </Link>
//       </div>
//       <div
//         data-aos="fade-down-left"
//         className="w-full lg:w-2/4 flex justify-center"
//       >
//         <img
//           src={img2}
//           alt="Students learning on eStudy platfor"
//           className="-rotate-45 sm:px-14 sm:mt-[-30px] w-9/12 md:w-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-scroll";
import Button from "../../../layout/Button";
import img2 from "../../../assets/images/pic4.png";

const Home = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-24 md:mt-20 px-5 md:px-32">
      
      {/* Image */}
      <div
        data-aos="fade-down-left"
        className="order-2 md:order-2 flex justify-center"
      >
        <img
          src={img2}
          alt="Smart digital watch"
          className="-rotate-45 w-9/12 md:w-full"
        />
      </div>

      {/* Text */}
      <div
        data-aos="fade-down-right"
        className="order-1 md:order-1"
      >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-start">
          Smart Digital <br /> Watch For <br />
          <span className="text-brightOrange font-semibold">
            Luxurios Life
          </span>
        </h2>

        <p className="text-lightText mt-5 max-w-lg text-center md:text-start">
          Experience the future of luxury with our Smart Digital Watch.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <Link to="contact" spy smooth duration={500}>
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
      </div>

    </section>
  );
};

export default Home;
