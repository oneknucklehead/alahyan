import React from "react";

const TitleBox = () => {
  return (
    <div className="break-all md:break-words flex flex-col px-8 py-8 justify-end text-white font-bold text-[8vw] lg:text-[5vw] bg-[#5D8DE2] h-full w-fit">
      <div className="">Al</div>
      <div className="leading-9">Ahyan</div>
      <div className="text-[2.53vw] mt-7">Consultancy</div>
      <a href="#" className="text-sm font-normal underline">
        Read more
      </a>
    </div>
  );
};

export default TitleBox;
