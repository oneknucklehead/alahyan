import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({
  bg = "#FF967C",
  title = "Title",
  description = "We help companies navigate their manpower requirements and provide them with effective solutions for their company.",
  logo,
  type = "service",
}) => {
  return (
    <div className="relative ring-1 ring-black ring-opacity-5 rounded-lg">
      <div
        className={`absolute bg-[${bg}] h-full w-full top-2 left-2 shadow-xl  rounded-lg`}
      ></div>
      <div
        className={`${
          type == "stat" && "flex flex-col justify-center items-center"
        } h-full relative p-8 bg-white rounded-lg shadow-xl`}
      >
        <h4
          className={`${
            type == "stat" ? "text-4xl md:text-5xl" : "text-2xl"
          } text-center font-semibold`}
        >
          {title}
        </h4>
        <p
          className={`${
            type == "stat" ? "text-lg md:text-2xl" : "text-sm md:text-lg"
          } text-center leading-6`}
        >
          {description}
        </p>
        {logo && (
          <span className="border-2 flex justify-center items-center bg-white h-14 w-14 border-[#091036] rounded-full p-2 absolute -top-3 -right-3">
            {logo}
          </span>
        )}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.any,
  type: PropTypes.string,
};

export default ServiceCard;
