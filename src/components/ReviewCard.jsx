import React from "react";
import PropTypes from "prop-types";
import comma from "../assets/Comma.png";

const ReviewCard = ({ review, name, position }) => {
  return (
    <div className="bg-[#5D8DE2] shadow-xl flex flex-col gap-4 text-white text-lg p-8 rounded-lg">
      <div className="flex">
        <img src={comma} alt="comma" />
        <img src={comma} alt="comma" />
      </div>
      <div>
        <p className=" font-light text-lg">{review}</p>
      </div>
      <div className="flex font-extralight flex-col justify-end items-end">
        <p className="">{name}</p>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};
export default ReviewCard;
