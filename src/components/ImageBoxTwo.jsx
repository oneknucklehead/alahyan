import React from "react";
import semiup from "../assets/semiup.png";
import semidown from "../assets/semidown.png";
import woman from "../assets/woman2.png";
import Lottie from "react-lottie";
import animationData from "../assets/lottie.json";

const ImageBoxTwo = () => {
  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
      {/* <img src={semiup} alt="semicircle bg" />
        <img src={semiup} alt="semicircle bg" /> */}
      {/* <div className="bg-[#5D8DE2] absolute -top-[0px] rounded-t-full w-full h-[50%] "></div>
        <div className="bg-[#5D8DE2] absolute bottom-0 rounded-t-full w-full h-[50%] "></div>
        <img
          src={woman}
          alt="woman"
          className="absolute h-full top-0 bottom-0"
        /> */}
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          // height={400}
          // width={400}
        />
      </div>
    </div>
  );
};

export default ImageBoxTwo;
