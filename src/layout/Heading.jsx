import React from "react";

const Heading = (props) => {
  return (
    <div data-aos="zoom-in">
<<<<<<< HEAD
      <h3 className="text-4xl font-semibold text-center">
=======
      <h3 className="text-4xl font-semibold">
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        {props.title1}
        <span className={`${props.color}`}> {props.title2}</span>
      </h3>
      {props.paragraph && (
        <p className="text-lightText mt-2 max-w-xl text-center">
          {props.paragraph}
        </p>
      )}
    </div>
  );
};

export default Heading;
