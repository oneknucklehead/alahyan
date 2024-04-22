import React from "react";
import { Link } from "react-router-dom";

const TitleBox = () => {
  return (
    <div className="break-all md:break-words flex flex-col px-8 py-8 justify-end text-white font-bold text-[8vw] lg:text-[5vw] bg-[#5D8DE2] h-full w-fit">
      <div className="" data-aos="fade-up" data-aos-duration="1000">
        Al
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="leading-9"
      >
        Ahyan
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="text-[2.53vw] mt-7"
      >
        Consultancy
      </div>
      <Link
        to="/alahyan/about"
        className="text-sm font-normal underline"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Read more
      </Link>
    </div>
  );
};

export default TitleBox;
