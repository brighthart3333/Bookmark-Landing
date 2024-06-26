import React, { useState } from "react";
import { logo, hamburger } from "../assets";

const NavMenu = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
      console.log("working");
    }
  };
  return (
    <nav className="flex justify-between lg:mt-[30px] lg:px-[100px]">
      <img src={logo} width={150} height={1} alt="Logo" />
      <img
        src={hamburger}
        onClick={toggleNavigation}
        className="lg:hidden bg-white bg-clip-content"
        alt=""
      />
      <div>
        <ul
          className={`lg:flex flex ${
            openNavigation ? "lg:flex flex" : "hidden"
          }`}
        >
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
              className="text-[12px] uppercase text-bold bg-[--soft-red] rounded-[5px] p-[10px] text-white"
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
