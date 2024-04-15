import React from "react";
import Container from "../components/Container";
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";

const Gallery = () => {
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
              <div className="rounded-lg shadow-xl sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1">
                <img
                  src={img1}
                  className="rounded-lg h-full object-cover"
                  alt="gallery image one"
                />
              </div>
              <div className="sm:row-span-2 md:col-span-1 md:row-span-1 shadow-xl">
                <img
                  src={img3}
                  className="rounded-lg h-full object-cover"
                  alt="gallery image three"
                />
              </div>
              <div className="col-span-1 row-span-1 shadow-xl">
                <img
                  src={img6}
                  className="rounded-lg h-full object-cover"
                  alt="gallery image six"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
              <div className="rounded-lg shadow-xl row-span-1 col-span-1 sm:row-span-2 h-full sm:col-span-1">
                <img
                  src={img4}
                  className="rounded-lg h-full object-cover"
                  alt="gallery image four"
                />
              </div>
              <div className=" shadow-xl">
                <img
                  src={img5}
                  className="rounded-lg h-full object-cover"
                  alt="gallery image five"
                />
              </div>
              <div className=" shadow-xl">
                <img
                  src={img2}
                  className="rounded-lg h-full object-cover"
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
