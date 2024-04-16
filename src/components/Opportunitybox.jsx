import React from "react";
import semi from "../assets/semi2.png";
import Info from "./Info";
const Opportunitybox = () => {
  return (
    <div>
      <div className="p-4 z-20 absolute w-full h-full flex gap-4 flex-col justify-center items-center">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="z-20 text-white text-[1.8vw] text-center"
        >
          Opportunities from all over the world
        </p>
        <div
          className="w-[80%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Info />
        </div>
      </div>
      <img src={semi} alt="semicircle" className="absolute z-10 top-0 left-0" />
    </div>
  );
};

export default Opportunitybox;
