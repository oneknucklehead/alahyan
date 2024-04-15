import React from "react";
import img1 from "../assets/woman1.png";
import img2 from "../assets/semi1.png";
const ImageBoxOne = () => {
  return (
    <div className="relative h-full flex items-end justify-center bg-[#A3CBD7]">
      <div>
        <img src={img2} className="absolute top-0 right-0" alt="semi circle" />
      </div>
      <div className="z-10 h-full w-full px-3 flex items-end justify-center">
        <img src={img1} className="object-contain" alt="woman" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default ImageBoxOne;
