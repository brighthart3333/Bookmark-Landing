import React from "react";
import { logo } from "../assets";

const NavMenu = () => {
  return (
    <nav className="flex justify-between lg:mt-[30px]">
      <img src={logo} width={150} height={1} alt="Logo" />
      <div>
        <ul className="flex">
          <li className="tracking-tight">
            <a
              href=""
              className=" text-[12px] uppercase text-bold text-[--Grayish-Blue]"
            >
              Features
            </a>
          </li>
          <li className="tracking-tight pl-[20px]">
            <a
              href=""
              className=" text-[12px] uppercase text-bold text-[--Grayish-Blue]"
            >
              Pricing
            </a>
          </li>
          <li className="tracking-tight pl-[20px]">
            <a
              href=""
              className=" text-[12px] uppercase text-bold text-[--Grayish-Blue]"
            >
              Contact
            </a>
          </li>
          <li className="ml-[20px] rounded-sm">
            <a
              href=""
              className=" text-[12px] uppercase text-bold bg-[--soft-red] rounded-[5px] px-[15px] py-[10px] text-white"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
