import React, { useState } from "react";
import Container from "../components/Container";

import semi1 from "../assets/semi1.png";
import semi2 from "../assets/semi2.png";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {
    setResult(null);
    if (name === "") {
      setNameErr("You left the name field empty.");
      return;
    }
    setNameErr(null);

    if (phone === "") {
      setPhoneErr("You left the phone field empty.");
      return;
    }
    setPhoneErr(null);
    if (email === "") {
      setEmailErr("You left the email field empty.");
      return;
    }
    setEmailErr(null);
    setLoader(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/Alahyan.overseas@gmail.com", {
        name: name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        console.log(response);
        setLoader(false);
        if (response.data.success === "true") {
          // setResultBorder("#00a0d2");
          setResult(
            "Thank you for getting in touch with us! We've received your message and we'll get back to you asap. 💙"
          );
        } else {
          // setResultBorder("#FCE205");
          setResult(
            "⚠️ There was an error submitting your message, try refreshing the page and sending your message again. Inconvenience is regretted."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        // setResultBorder("#DC3232");
        setResult(
          "There was an error submitting your message, try refreshing the page and sending your message again. Inconvenience is regretted."
        );
      });
  };

  return (
    <div id="contact" className="relative my-16 flex flex-col justify-center">
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
                <h1
                  className="text-4xl md:text-6xl text-[#091036] text-center font-semibold"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Get your dream job abroad <br />
                  Book a call with us now!
                </h1>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="flex flex-col gap-8">
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Name
                      </label>
                    </div>
                    {nameErr && (
                      <span className="text-[#DC3232] text-xs">{nameErr}</span>
                    )}
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        onChange={(e) => setPhone(e.target.value)}
                        name="email"
                        required
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Phone
                      </label>
                    </div>
                    {phoneErr && (
                      <span className="text-[#DC3232] text-xs">{phoneErr}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="relative w-full sm:min-w-[200px]">
                      <input
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                        className="peer h-full font-normal w-full border-b border-[#091036] bg-transparent pt-4 pb-1.5 font-sans text-lg text-[#091036] outline outline-0 transition-all placeholder-shown:border-[#091036] focus:border-[#091036] focus:outline-0 disabled:border-0 disabled:bg-[#091036]  placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label className="after:content[''] text-lg font-semibold pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate leading-0 text-[#091036]  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#091036]  after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-[#091036] peer-focus:text-lg peer-focus:leading-tight peer-focus:text-[#091036] peer-focus:after:scale-x-100 peer-focus:after:border-[#091036]  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#091036] ">
                        Email
                      </label>
                    </div>
                    {emailErr && (
                      <span className="text-[#DC3232] text-xs">{emailErr}</span>
                    )}
                    <div>
                      <button
                        onClick={() => handleSubmit()}
                        className="bg-[#091036] px-4 sm:px-8 py-3 rounded-full md:text-lg text-white"
                      >
                        <span className="flex justify-between gap-3 items-center font-bold text-lg">
                          <span>{loader ? "Enquiring..." : "Enquire now"}</span>
                          <span className="">
                            <svg
                              width="18"
                              height="12"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5H10V3.5H0V4.5Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                      {result && (
                        <div>
                          <div className={`w-full text-sm text-[#091036] p-2`}>
                            <p>{result}</p>
                          </div>
                        </div>
                      )}
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
