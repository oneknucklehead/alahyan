import React from "react";
import Container from "../components/Container";
import logo from "../assets/logo.png";
import owner from "../assets/one.jpg";
import aboutImg from "../assets/two.jpg";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer";
const About = () => {
  function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle("hidden");
  }
  return (
    <>
      <div className="min-h-screen my-16 px-8 text-[#091036]">
        <Container>
          <div>
            <div className="flex gap-2 flex-wrap justify-between items-center">
              <Link to="/" className="rounded-full bg-[#091036] p-3">
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
              <div className="flex justify-center mt-8">
                <img
                  src={logo}
                  alt="logo"
                  className="min-w-[150px] max-w-[12vw]"
                />
              </div>
              <div className="flex justify-center flex-col text-center">
                <h3 className="text-4xl font-semibold">Who are we?</h3>
                <p className="font-semibold text-xl my-4">
                  We are the Al Ahyan Consultancy
                </p>
                <div className="w-[90%] md:w-[60%] mx-auto text-lg">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <br />
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 w-[90%] mx-auto gap-8 justify-center items-center">
                <img
                  src={owner}
                  alt="owner"
                  className="rounded-full mx-auto h-[30vw] w-[30vw] object-cover"
                />
                <div className="">
                  <h3 className="text-center lg:text-left text-4xl font-semibold mb-4">
                    What we do?
                  </h3>
                  <p className="text-lg text-center lg:text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <br />
                  <p className="text-lg text-center lg:text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 w-[90%] mx-auto gap-8 justify-center items-center">
                <div className="order-last lg:order-first">
                  <h3 className="text-center lg:text-right text-4xl font-semibold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-center lg:text-right">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry.
                  </p>
                </div>
                <img
                  src={aboutImg}
                  alt="about us image"
                  className="rounded-full mx-auto h-[30vw] w-[30vw] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
