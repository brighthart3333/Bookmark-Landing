import React from "react";
import { chrome, dots, firefox, opera } from "../assets";

const Download = () => {
  return (
    <section className="mt-[50px] text-center justify-center items-center m-auto lg:px-[100px]">
      <h1 className="text-[20px] font-semibold">Download</h1>
      <p className="text-[--Grayish-Blue] text-[12px] mt-[5px] w-[350px] text-center m-auto">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favorite you'd like us to prioritize
      </p>

      <div className="flex flex-row m-auto ">
        <div className="flex flex-col justify-center items-center text-center bg-yellow-100 rounded-md m-auto px-[20px] pt-[20px] pb-[15px] w-[200px] overflow-hidden mt-[30px]">
          <img
            src={chrome}
            alt="chrome logo"
            className="w-[70px] h-[70px] m-auto mb-[15px]"
          />
          <h1 className="text-[15px] font-semibold">Add to Chrome</h1>
          <p className="text-[12px] text-[--Grayish-Blue] m-auto">
            Minimum version 62
          </p>
          <a
            className="p-[10px] bg-[--soft-blue] text-white rounded-md text-[10px]  w-[100%] mt-[40px]"
            href=""
          >
            Add & Install Extension
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-center mx-[20px] m-auto bg-yellow-100 rounded-md px-[20px] pt-[20px] pb-[15px] w-[200px] overflow-hidden mt-[60px]">
          <img
            src={firefox}
            alt="firefox logo"
            className="w-[70px] h-[70px] m-auto mb-[15px]"
          />
          <h1 className="text-[15px] font-semibold">Add to Firefox</h1>
          <p className="text-[12px] text-[--Grayish-Blue] m-auto">
            Minimum version 62
          </p>
          <a
            className="p-[10px] bg-[--soft-blue] text-white rounded-md text-[10px] w-[100%] mt-[40px]"
            href=""
          >
            Add & Install Extension
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-center bg-yellow-100 m-auto rounded-md px-[20px] pt-[20px] pb-[15px] w-[200px] overflow-hidden mt-[80px]">
          <img
            src={opera}
            alt="opera logo"
            className="w-[70px] h-[70px] m-auto mb-[15px]"
          />
          <h1 className="text-[15px] font-semibold">Add to Opera</h1>
          <p className="text-[12px] text-[--Grayish-Blue] m-auto">
            Minimum version 62
          </p>
          <a
            className="p-[10px] bg-[--soft-blue] text-white rounded-md text-[10px] w-[100%] mt-[40px]"
            href=""
          >
            Add & Install Extension
          </a>
        </div>
      </div>

      <img
        src={dots}
        className="mt-[20px] mb-[10px] w-[200px] relative top-0 translate-y-[-110px] left-0 m-auto overflow-hidden "
        alt=""
      />
      <img
        src={dots}
        className="mt-[20px] mb-[10px] w-[200px] relative top-0 translate-y-[-160px] left-[105px] items-start overflow-hidden"
        alt=""
      />
    </section>
  );
};

export default Download;
