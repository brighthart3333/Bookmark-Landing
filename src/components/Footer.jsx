import React from "react";
import { facebook, twitter, logo } from "../assets";

const Footer = () => {
  return (
    <section className="flex justify-between text-center items-center m-auto bg-[--Very-Dark-Blue] w-full lg:px-[100px] py-[10px]">
      <div className="flex justify-center items-center">
        <img src={logo} className="w-[90px] h-[15px] bg-white clip" alt="" />
        <ul className="flex text-white ml-[20px]">
          <li>
            <a
              className="uppercase text-[12px] cursor-pointer text-[--Grayish-Blue]"
              href=""
            >
              features
            </a>
          </li>
          <li>
            <a
              className="uppercase text-[12px] cursor-pointer ml-[20px] text-[--Grayish-Blue]"
              href=""
            >
              pricing
            </a>
          </li>
          <li>
            <a
              className="uppercase text-[12px] cursor-pointer ml-[20px] text-[--Grayish-Blue]"
              href=""
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <img className="w-[15px] h-[15px] mr-[15px]" src={facebook} alt="" />
        <img className="w-[15px] h-[15px]" src={twitter} alt="" />
      </div>
    </section>
  );
};

export default Footer;
