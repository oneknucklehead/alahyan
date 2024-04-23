import React from "react";
import Container from "../components/Container";
import logo from "../assets/logo.png";
import iglogowhite from "../assets/iglogowhite.png";
import fblogowhite from "../assets/fblogowhite.png";
const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full text-white bg-[#091036] p-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex my-4 md:my-0 flex-col md:justify-center md:items-center">
            <div>
              <div>
                <img src={logo} className="min-w-[150px] w-[15vw]" />
              </div>
              <div className="my-3">
                <p>
                  1st Floor, 31, Marquis Street, opp. HDFC Bank, New Market
                  Area,
                  <br /> Taltala, Kolkata, West Bengal 700016
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-4 md:my-0 flex-col md:justify-center md:items-center">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <p>Call: </p>
                <p>+91 82405 55940</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <p>Email: </p>
                <p>Alahyan.overseas@gmail.com</p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <p>Connect with us: </p>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/alahyanconsultancy">
                    <span>
                      <img src={fblogowhite} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-4 text-sm">
        <p className="text-center">
          &copy; Al Ahyan manpower consultancy {date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
