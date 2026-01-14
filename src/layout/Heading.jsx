import React from "react";

const Heading = (props) => {
  return (
    <div data-aos="zoom-in">
      <h3 className="text-4xl font-semibold">
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
