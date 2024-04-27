import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer";
import Container from "../components/Container";
import axios from "axios";

const Contact = () => {
  function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle("hidden");
  }

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
    console.log({ name: name, email: email, phone: phone });
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/267c1c780346d25c5614b89b6257cf72", {
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
    <>
      <div className="min-h-screen my-16 px-8 text-[#091036]">
        <Container>
          <div>
            <div className="flex gap-2 flex-wrap justify-between items-center">
              <Link to="/" className="rounded-full shadow-xl bg-[#091036] p-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM28 10.5L2 10.5V13.5L28 13.5V10.5Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <div>
                <div className="flex mx-2">
                  <div className="relative inline-block text-left mr-2">
                    <button
                      className="border-[3px] p-3 border-[#091036] bg-white
                       rounded-full shadow-xl
                       flex flex-col gap-1
                       "
                      onClick={() => toggleDropdown("dropdownMenuLeft")}
                    >
                      <div className="h-[3px] w-[20px] bg-[#091036]"></div>
                      <div className="h-[3px] w-[20px] bg-[#091036]"></div>
                      <div className="h-[3px] w-[20px] bg-[#091036]"></div>
                    </button>
                    <div
                      className="hidden origin-top-left absolute right-0 
                    mt-2 w-56 rounded-md shadow-xl bg-white
                    ring-1 ring-black ring-opacity-5 
                    animate-fadeIn"
                      id="dropdownMenuLeft"
                    >
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-sm 
                               text-[#091036] 
                               hover:bg-gray-100"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm
                               text-[#091036] 
                               hover:bg-gray-100"
                      >
                        Services
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm
                               text-gray-700 
                               hover:bg-gray-100"
                      >
                        Contact Us
                      </Link>
                      <Link
                        to="/jobs"
                        className="block px-4 py-2 text-sm
                                   text-gray-700 
                                   hover:bg-gray-100"
                      >
                        Jobs available
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-4xl md:text-6xl font-semibold text-center my-8">
                  Let&#39;s talk
                </h3>
                <p className="text-center text-lg">
                  We ensure safety and security of our jobseekers
                </p>
                <div className="w-[90%] md:w-[60%] mx-auto text-lg">
                  {/* <p className="text-center my-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p> */}
                  <p className="text-center my-4">
                    Looking for a job abroad? Get in touch with us in just a few
                    simple steps! <br />
                    Fill out the form below.
                  </p>
                </div>
              </div>
              <div className="grid  lg:grid-cols-2 gap-8">
                <div
                  className="p-8 rounded-lg"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <div className="grid gap-8 my-8">
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
                        <span className="text-[#DC3232] text-xs">
                          {nameErr}
                        </span>
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
                        <span className="text-[#DC3232] text-xs">
                          {phoneErr}
                        </span>
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
                        <span className="text-[#DC3232] text-xs">
                          {emailErr}
                        </span>
                      )}
                      <div>
                        <button
                          onClick={handleSubmit}
                          className="bg-[#091036] px-4 sm:px-8 py-3 rounded-full md:text-lg text-white"
                        >
                          <span className="flex justify-between gap-3 items-center font-bold text-lg">
                            <span>
                              {loader ? "Enquiring..." : "Enquire now"}
                            </span>
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
                      </div>
                      {result && (
                        <div>
                          <div
                            className={`w-full text-sm border-2 text-[#091036] p-2`}
                          >
                            <p>{result}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.28718943588606!2d88.35422489712494!3d22.55683806926277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027705c2695349%3A0xe9375e7e1fccf7c7!2s31%2C%20Marquis%20St%2C%20Fire%20Brigade%20Head%20Quarter%2C%20New%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1713866790957!5m2!1sen!2sin"
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "100%",
                      minHeight: "420px",
                    }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
