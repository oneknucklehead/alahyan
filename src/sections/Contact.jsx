import React from "react";
import Container from "../components/Container";

import semi1 from "../assets/semi1.png";
import semi2 from "../assets/semi2.png";

const Contact = () => {
  return (
    <div className="relative my-16 flex flex-col justify-center">
      <div className="hidden lg:flex z-10 absolute bottom-0 left-0">
        <img src={semi1} alt="background semicircle1" />
        <img src={semi2} alt="background semicircle2" />
      </div>
      <div className="z-20 p-4 md:p-8">
        <Container>
          <div className="relative ring-1 ring-black ring-opacity-5 rounded-lg">
            {/* <div
              className={`absolute bg-[#A3CBD7] h-full w-full top-2 left-2 shadow-xl  rounded-lg`}
            ></div> */}
            <div
              className="bg-white h-full p-8 md:p-16 rounded-lg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div className="">
                <h1 className="text-4xl md:text-6xl text-[#091036] text-center font-semibold">
                  Get your dream job abroad <br />
                  Book a call with us now!
                </h1>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="flex flex-col gap-8">
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Name
                      </label>
                    </div>
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Phone
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Email
                      </label>
                    </div>
                    <div>
                      <button className="bg-[#091036] px-4 sm:px-8 py-3 rounded-full md:text-lg text-white">
                        Enquire now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative bg-white">
            <div className="bg-white shadow-xl p-16 rounded-lg">
              <h1 className="text-6xl text-[#091036] text-center font-semibold">
                Get your dream job abroad <br />
                Book a call with us now!
              </h1>
              <div className="grid grid-cols-2 gap-8 my-8">
                <div className="flex flex-col gap-8">
                  <div className="relative w-full min-w-[200px]">
                    <input
                      placeholder=""
                      className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                      Name
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px]">
                    <input
                      placeholder=""
                      className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                      Phone
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="relative w-full min-w-[200px]">
                    <input
                      placeholder=""
                      className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                      Email
                    </label>
                  </div>
                  <div>
                    <button className="bg-[#091036] px-8 py-3 rounded-full text-lg text-white">
                      Enquire now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
