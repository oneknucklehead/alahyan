import React from "react";
import Container from "../components/Container";

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";

import semi1 from "../assets/semi1.png";
import semi2 from "../assets/semi2.png";

const About = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="hidden lg:flex z-10 absolute bottom-0 left-0">
        <img src={semi1} alt="background semicircle1" />
        <img src={semi2} alt="background semicircle2" />
      </div>
      <div className="z-20">
        <Container>
          <div className="flex flex-col justify-center my-16">
            <h1 className="text-center text-4xl md:text-6xl font-semibold mb-16">
              About Us
            </h1>
            <div className="grid grid-cols-12 gap-4 px-8">
              <div className="col-span-12 lg:col-span-6">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="row-span-2 col-span-1">
                    <img
                      src={one}
                      alt="owner"
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </div>
                  <div className="col-span-1">
                    <img
                      src={two}
                      alt="second"
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </div>
                  <div className=" col-span-1">
                    <img
                      src={three}
                      alt="third"
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                <h3
                  className="text-2xl md:text-3xl font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="100"
                >
                  We are the Al Ahyan Consultancy
                </h3>
                <p className="text-sm md:text-xl py-5">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    Al-Ahyan, a seasoned leader in global recruitment, boasts
                    over a decade of invaluable experience. With a remarkable
                    portfolio of 80+ satisfied clients, we specialize in
                    sourcing top-tier talent from India for international
                    placements.
                  </span>
                  <br />
                  <br />
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    Our dedication to excellence ensures seamless recruitment
                    processes, tailored to meet the unique needs of each client.
                    Trust Al-Ahyan for unparalleled service and expertise in
                    navigating the complexities of global staffing, delivering
                    results that exceed expectations.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
