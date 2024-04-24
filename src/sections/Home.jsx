import TitleBox from "../components/TitleBox";
import InfoBox from "../components/InfoBox";
import ImageBoxOne from "../components/ImageBoxOne";
import ImageBoxTwo from "../components/ImageBoxTwo";
import Opportunitybox from "../components/Opportunitybox";
import "../css/Home.css";
import imgSrc from "../assets/logo.png";
import fbLogo from "../assets/fblogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle("hidden");
  }

  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 h-full">
        <div className="h-full hidden md:block md:col-span-6 xl:col-span-8">
          <div className="grid  grid-rows-2 2xl:grid-rows-1 bg-[#5D8DE2] h-full grid-cols-12">
            <div className="col-span-12 lg:col-span-6 xl:col-span-4 ">
              <TitleBox />
            </div>
            <div className="hidden lg:block col-span-6 xl:col-span-4 ">
              <ImageBoxOne />
            </div>
            <div className="hidden xl:block col-span-6 xl:col-span-4 relative bg-[#FF967C]">
              <Opportunitybox />
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <InfoBox />
            </div>
            <div className="hidden lg:block xl:hidden col-span-6 xl:col-span-4 relative bg-[#FF967C]">
              <Opportunitybox />
            </div>
            <div className="hidden xl:block lg:col-span-8 relative bg-[#091036]">
              <ImageBoxTwo />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 p-8 flex flex-col justify-between">
          <div className="flex flex-wrap justify-between items-end">
            <div className=" z-50">
              {/* DROPDOWN BUTTON */}
              {/* <ul className="menu">
              <li className="dropdown dropdown-4">
                Scale
                <ul className="dropdown_menu dropdown_menu-4">
                  <li className="dropdown_item-1">Item 1</li>
                  <li className="dropdown_item-2">Item 2</li>
                  <li className="dropdown_item-3">Item 3</li>
                </ul>
              </li>
            </ul> */}
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
                    className="hidden origin-top-left absolute left-0 
                        mt-2 w-56 rounded-md shadow-xl bg-white
                        ring-1 ring-black ring-opacity-5 
                        animate-fadeIn"
                    id="dropdownMenuLeft"
                  >
                    <Link
                      to="/alahyan/about"
                      className="block px-4 py-2 text-sm 
                                   text-[#091036] 
                                   hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/alahyan/services"
                      className="block px-4 py-2 text-sm
                                   text-[#091036] 
                                   hover:bg-gray-100"
                    >
                      Services
                    </Link>
                    <Link
                      to="/alahyan/contact"
                      className="block px-4 py-2 text-sm
                                   text-gray-700 
                                   hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/alahyan/">
              <img src={imgSrc} className="w-32 md:w-28" alt="brand logo" />
            </Link>
          </div>
          <div className="break-all lg:break-normal flex flex-col gap-4">
            <div className="">
              <p
                className="text-5xl sm:text-6xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Trusting
              </p>
              <p
                className="text-5xl sm:text-6xl"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Manpower
                <br /> Consultancy
                <br /> In Kolkata
              </p>
            </div>
            <div>
              <p
                className="text-xl"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Seasoned team boasting over 10+ years of collective expertise,
                with candidates spanning diverse industries.
              </p>
            </div>
            <div>
              <a href="#contact">
                <button
                  className="text-white text-lg bg-[#091036] rounded-full px-4 py-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Get Vacancy
                </button>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-lg leading-5 font-semibold">Connect with us</p>
            <div className="flex gap-1">
              <a href="https://www.facebook.com/alahyanconsultancy">
                <span>
                  <img src={fbLogo} alt="facebook logo" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
