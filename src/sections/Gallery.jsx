import React, { useEffect } from "react";
import Container from "../components/Container";
import img1 from "../assets/gallery/img1.jpg";
import img1Small from "../assets/gallery/img1-small.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img2Small from "../assets/gallery/img2-small.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img3Small from "../assets/gallery/img3-small.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img4Small from "../assets/gallery/img4-small.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img5Small from "../assets/gallery/img5-small.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img6Small from "../assets/gallery/img6-small.jpg";

import "../css/Lazy.css";

const Gallery = () => {
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        // SHOW IMAGE
        div.classList.add("loaded");
      }
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, []);

  return (
    <div className="relative my-16 min-h-screen flex flex-col justify-center">
      <div>
        <h3 className="text-4xl md:text-6xl text-center font-semibold mt-0 mb-16">
          Gallery
        </h3>
      </div>
      <div className="px-8">
        <Container>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 h-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
              <div
                className="bg-cover bg-center blur-load rounded-lg shadow-xl sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1"
                style={{
                  backgroundImage: `url(${img1Small})`,
                }}
              >
                <img
                  src={img1}
                  className="block object-center object-cover rounded-lg h-full"
                  loading="lazy"
                  alt="gallery image one"
                />
              </div>
              <div
                className="bg-cover bg-center rounded-lg blur-load sm:row-span-2 md:col-span-1 md:row-span-1 shadow-xl"
                style={{
                  backgroundImage: `url(${img3Small})`,
                }}
              >
                <img
                  src={img3}
                  loading="lazy"
                  className="block object-center rounded-lg h-full object-cover"
                  alt="gallery image three"
                />
              </div>
              <div
                className="bg-cover blur-load rounded-lg bg-center col-span-1 row-span-1 shadow-xl"
                style={{
                  backgroundImage: `url(${img6Small})`,
                }}
              >
                <img
                  src={img6}
                  loading="lazy"
                  className="rounded-lg h-full block object-center object-cover "
                  alt="gallery image six"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
              <div
                style={{
                  backgroundImage: `url(${img4Small})`,
                }}
                className="bg-cover blur-load bg-center rounded-lg shadow-xl row-span-1 col-span-1 sm:row-span-2 h-full sm:col-span-1"
              >
                <img
                  src={img4}
                  loading="lazy"
                  className="rounded-lg h-full block object-center object-cover "
                  alt="gallery image four"
                />
              </div>
              <div
                className="rounded-lg bg-cover blur-load bg-center shadow-xl"
                style={{
                  backgroundImage: `url(${img5Small})`,
                }}
              >
                <img
                  src={img5}
                  loading="lazy"
                  className="rounded-lg h-full block object-center object-cover "
                  alt="gallery image five"
                />
              </div>
              <div
                className="bg-cover rounded-lg blur-load bg-center shadow-xl w-full h-full"
                style={{
                  backgroundImage: `url(${img2Small})`,
                }}
              >
                <img
                  src={img2}
                  loading="lazy"
                  className="rounded-lg h-full block object-center object-cover"
                  alt="gallery image two"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
