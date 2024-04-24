import { useEffect } from "react";
import img1 from "../assets/man1.png";
import img1Small from "../assets/man1-small.png";
import img2 from "../assets/semi1.png";

import "../css/LazyPng.css";

const ImageBoxOne = () => {
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-loadpng");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        // SHOW IMAGE
        div.classList.add("loaded");
        div.classList.add("bg-hidden");
      }
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, []);
  return (
    <div className="relative h-full flex items-end justify-center bg-[#A3CBD7]">
      <div>
        <img src={img2} className=" absolute top-0 right-0" alt="semi circle" />
      </div>
      <div className="z-10 h-full w-full px-3 flex items-end justify-center">
        {/* <div
          className="blur-load"
          style={{ "background-image": `url(${img1Small})` }}
        > */}
        <div
          className="blur-loadpng bg-cover bg-center"
          style={{
            backgroundImage: `url(${img1Small})`,
          }}
        >
          <img
            src={img1}
            loading="lazy"
            className="to-blur max-h-[500px] object-center object-cover"
            alt="woman"
          />
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ImageBoxOne;
