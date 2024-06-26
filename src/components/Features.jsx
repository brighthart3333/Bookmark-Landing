import React, { useState } from "react";
import { Features1, Features2, Features3 } from "../assets";

const Features = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (e, index) => {
    e.preventDefault();
    setToggleState(index);
    console.log(index);
  };

  /* const handleTabClick = (e, index) => {
    e.preventDefault();
    setToggleState(index);
  }; */
  return (
    <section className="mt-[30px] text-center justify-center m-auto lg:px-[100px]">
      <h1 className="text-[20px] font-semibold">Features</h1>
      <p className="text-[--Grayish-Blue] text-[12px] mt-[5px] w-[350px] text-center m-auto">
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="flex flex-col justify-center items-center m-auto text-center mt-[50px] w-[100%]">
        <div className="flex flex-row justify-around">
          <a
            href=""
            className={` ${
              toggleState === 1
                ? "active-tabs text-[12px] text-[--Grayish-Blue] pr-[50px]"
                : "text-[12px] text-[--Grayish-Blue] mr-[50px]"
            }`}
            onClick={(e) => toggleTab(1)}
          >
            Simple Bookmarking
          </a>
          <a
            href=""
            className={` ${
              toggleState === 2
                ? "active-tabs text-[12px] text-[--Grayish-Blue] pr-[50px]"
                : "text-[12px] text-[--Grayish-Blue] mr-[50px]"
            }`}
            onClick={(e) => toggleTab(2)}
          >
            Speedy Searching
          </a>
          <a
            href=""
            className={` ${
              toggleState === 3
                ? "active-tabs-3 text-[12px] text-[--Grayish-Blue]"
                : "text-[12px] text-[--Grayish-Blue] "
            }`}
            onClick={(e) => toggleTab(3)}
          >
            Easy Sharing
          </a>
        </div>

        <span className="bg-[--Grayish-Blue] w-[420px] mt-[15px] p-[1px]"></span>
      </div>

      <div className="flex justify-evenly text-center mt-[50px] px-[20px]">
        <div className={` ${toggleState === 1 ? "flex" : "hidden"}`}>
          <img src={Features1} width={500} className="mt[20px] mr-[0]" alt="" />
          <div className="text-left mt-[50px] mb-[5px] ml-[100px]">
            <h1 className="text-[20px] text-left mb-[10px] font-semibold">
              Bookmark in one click
            </h1>
            <p className="text-[10px] text-[--Grayish-Blue] w-[250px] text-left mb-[15px]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <a
              href=""
              className="text-[#fff] bg-[--soft-blue] p-[10px] mt-[10px] rounded-[5px] text-[10px]"
            >
              More Info
            </a>
          </div>
        </div>

        <div className={` ${toggleState === 2 ? "flex" : "hidden"}`}>
          <img src={Features2} width={500} className="mt[20px] mr-[0]" alt="" />
          <div className="text-left mt-[50px] mb-[5px] ml-[100px]">
            <h1 className="text-[20px] text-left mb-[10px] font-semibold">
              Bookmark in one click
            </h1>
            <p className="text-[10px] text-[--Grayish-Blue] w-[250px] text-left mb-[15px]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <a
              href=""
              className="text-[#fff] bg-[--soft-blue] p-[10px] mt-[10px] rounded-[5px] text-[10px]"
            >
              More Info
            </a>
          </div>
        </div>

        <div className={` ${toggleState === 3 ? "flex" : "hidden"}`}>
          <img src={Features3} width={500} className="mt[20px] mr-[0]" alt="" />
          <div className="text-left mt-[50px] mb-[5px] ml-[100px]">
            <h1 className="text-[20px] text-left mb-[10px] font-semibold">
              Bookmark in one click
            </h1>
            <p className="text-[10px] text-[--Grayish-Blue] w-[250px] text-left mb-[15px]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <a
              href=""
              className="text-[#fff] bg-[--soft-blue] p-[10px] mt-[10px] rounded-[5px] text-[10px]"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
