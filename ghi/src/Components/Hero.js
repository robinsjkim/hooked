import React from "react";
import Typed from "react-typed";
import InfoCard from "./InfoCard";
import Newsletter from "./Newsletter";

const Hero = () => {
  return (
    <>
      <div className="text-white bg-[#00000053] pb-5">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] text-xl font-bold">MODERN DAY FISHING</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-1">
            Fish smarter.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold">
              Find fishing&nbsp;
            </p>
            <Typed
              className="md:text-4xl sm:text-3xl text-xl font-bold text-[#00df9a]"
              strings={["locations", "techniques", "communities"]}
              typeSpeed={60}
              backSpeed={80}
              loop
            />
          </div>
          <button className="bg-[#05bd83] w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#009767]">
            Get Started
          </button>
        </div>
      </div>
      <InfoCard />
      <Newsletter />
    </>
  );
};

export default Hero;
