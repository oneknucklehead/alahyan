import React, { useEffect } from "react";
import Container from "../components/Container";
import imgSrc from "../assets/womanthreedee.png";
import imgSrcSmall from "../assets/womanthreedee-small.png";
import ServiceCard from "../components/ServiceCard";

import "../css/Lazy.css";

const Stats = () => {
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
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
    <div className="relative min-h-screen my-16 flex flex-col justify-center items-center px-8">
      <div>
        <p className="text-center font-extralight text-2xl md:text-3xl">
          Why us?
        </p>
        <h3 className="text-4xl md:text-6xl font-semibold">Our stats</h3>
      </div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="hidden lg:block bg-[#b7d9e4] rounded-lg">
              <div
                className="blur-load bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imgSrcSmall})`,
                }}
              >
                <img
                  src={imgSrc}
                  loading="lazy"
                  alt="woman threeD"
                  className="to-blur object-center object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ServiceCard
                type="stat"
                bg="#A3CBD7"
                title="15000+"
                description="Online registered Jobseekers"
              />
              <ServiceCard
                type="stat"
                title="1000+"
                description="Happy clients"
              />
              <ServiceCard
                type="stat"
                bg="#5D8DE2"
                title="10000+"
                description="Jobseeker's placed"
              />
              <ServiceCard
                type="stat"
                bg="#091036"
                title="30000+"
                description="Hours worked"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Stats;
