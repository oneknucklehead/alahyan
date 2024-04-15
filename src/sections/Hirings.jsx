import React from "react";
// import "../css/Hirings.css";

import mcd from "../assets/mcd.png";
import microsoft from "../assets/microsoft.png";
import novotel from "../assets/novotel.png";
import pizzahut from "../assets/pizzahut.png";
import albaik from "../assets/albaik.png";
import bk from "../assets/bk.png";
const Hirings = () => {
  return (
    <div className="min-h-fit">
      <div className="w-full h-full mt-16 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="animate-infinite-scroll flex h-20 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
          <li>
            <img className="h-20" src={mcd} alt="Mc Donalds" />
          </li>
          <li>
            <img className="h-20" src={microsoft} alt="Microsoft" />
          </li>
          <li>
            <img className="h-20" src={novotel} alt="Novotel" />
          </li>
          <li>
            <img className="h-20" src={pizzahut} alt="Pizzahut" />
          </li>
          <li>
            <img className="h-20" src={albaik} alt="Albaik" />
          </li>
          <li>
            <img className="h-20" src={bk} alt="Burger King" />
          </li>
        </ul>
        <ul
          className="animate-infinite-scroll flex h-20 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
          aria-hidden="true"
        >
          <li>
            <img className="h-20" src={mcd} alt="Mc Donalds" />
          </li>
          <li>
            <img className="h-20" src={microsoft} alt="Microsoft" />
          </li>
          <li>
            <img className="h-20" src={novotel} alt="Novotel" />
          </li>
          <li>
            <img className="h-20" src={pizzahut} alt="Pizzahut" />
          </li>
          <li>
            <img className="h-20" src={albaik} alt="Albaik" />
          </li>
          <li>
            <img className="h-20" src={bk} alt="Burger King" />
          </li>
        </ul>
        <ul
          className="animate-infinite-scroll flex h-20 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
          aria-hidden="true"
        >
          <li>
            <img className="h-20" src={mcd} alt="Mc Donalds" />
          </li>
          <li>
            <img className="h-20" src={microsoft} alt="Microsoft" />
          </li>
          <li>
            <img className="h-20" src={novotel} alt="Novotel" />
          </li>
          <li>
            <img className="h-20" src={pizzahut} alt="Pizzahut" />
          </li>
          <li>
            <img className="h-20" src={albaik} alt="Albaik" />
          </li>
          <li>
            <img className="h-20" src={bk} alt="Burger King" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hirings;
