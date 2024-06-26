import React from "react";
import { absoluteBg, heroImg } from "../assets";

const Hero = () => {
  return (
    <section className="flex justify-between lg:px-[100px]">
      <div className="mt-[150px]">
        <h1 className="text-[40px] font-bold">
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text-[--Grayish-Blue] w-[460px] mt-[15px]">
          A clean and simple interface to organize your favorite websites. Open
          a new browser and tab and see your sites load instantly. Try it for
          free
        </p>

        <div className="flex mt-[20px]">
          <button className="text-[10px] text-bold bg-[--soft-blue] p-[10px] rounded-[5px] text-[#fff] mr-[10px]">
            Get it on Chrome
          </button>
          <button className="text-[10px] text-bold bg-[--#333] p-[10px] rounded-[5px] text-[#000]">
            Get it on Firefox
          </button>
        </div>
      </div>

      <div className="relative mt-[80px]">
        <img className="z-10" src={heroImg} alt="heroImg" />
        <img src={absoluteBg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
