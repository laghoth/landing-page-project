// import React from "react";

// const Button = (props) => {
//   return (
//     <div data-aos="zoom-in">
//       <button className="bg-brightGreen py-1 px-4 text-white hover:text-brightGreen rounded-sm mt-4 outline outline-brightGreen  hover:shadow-primaryShadow hover:bg-white transition">
//         {props.title}
//       </button>
//     </div>
//   );
// };

// export default Button;

import React from "react";

const Button = ({
  title,
  color = "bg-brightGreen",
  textColor = "text-white",
  hoverTextColor = "hover:text-brightGreen",
  hoverBg = "hover:bg-white",
  outline = "outline-brightGreen",
}) => {
  return (
    <div data-aos="zoom-in">
      <button
        className={`${color} py-1 px-4 ${textColor} ${hoverTextColor} rounded-sm mt-4 outline ${outline} hover:shadow-primaryShadow ${hoverBg} transition`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
