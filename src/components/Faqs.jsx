import React, { useState } from "react";
import { arrow } from "../assets";

const Faqs = () => {
  const [toggleFaq, setToggleFaq] = useState(false);

  const faqToggle = () => {
    setToggleFaq(!toggleFaq);
  };
  return (
    <section className="mt-[50px] text-center justify-center items-center m-auto lg:px-[100px]">
      <h1 className="text-[20px] font-semibold">Frequently Asked Questions</h1>
      <p className="text-[--Grayish-Blue] text-[12px] mt-[5px] w-[350px] text-center m-auto">
        Here are some FAQS. if you have any other question you'd like to ask
        please email us.
      </p>

      <div className="flex flex-col text-center justify-center items-center m-auto mt-[30px] mb-[30px]">
        <span className="w-[500px] bg-[--Grayish-Blue] p-[1px] mb-[10px] mt-[20px]"></span>
        <div className="block w-[500px]">
          <div className="flex items-center justify-between">
            <h1 className="font-[500]">What is Bookmark</h1>
            <img
              className={
                toggleFaq
                  ? "rotate-[180deg] w-[12px] h-[10px] cursor-pointer"
                  : "w-[12px] h-[10px]"
              }
              src={arrow}
              alt=""
              onClick={faqToggle}
            />
          </div>

          <p
            className={
              toggleFaq
                ? "text-left pt-[20px] text-[--Grayish-Blue] text-[12px] transition duration-300"
                : "hidden"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus, molestiae magnam quibusdam voluptatem animi quam ipsa ab?
            Dignissimos, eligendi.
          </p>
        </div>

        <span className="w-[500px] bg-[--Grayish-Blue] p-[1px] mb-[10px] mt-[20px]"></span>
        <div className="block w-[500px]">
          <div className="flex items-center justify-between">
            <h1 className="font-[500]">What is Bookmark</h1>
            <img
              className={`"w-[12px] h-[10px] cursor-pointer" ${
                toggleFaq
                  ? "rotate-[180deg] w-[12px] h-[10px] cursor-pointer"
                  : "w-[12px] h-[10px] cursor-pointer"
              }`}
              src={arrow}
              alt=""
              onClick={faqToggle}
            />
          </div>

          <p
            className={`"text-left pt-[20px] text-[--Grayish-Blue] text-[12px]" ${
              toggleFaq
                ? "text-left pt-[20px] text-[--Grayish-Blue] text-[12px] transition duration-300"
                : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus, molestiae magnam quibusdam voluptatem animi quam ipsa ab?
            Dignissimos, eligendi.
          </p>
        </div>

        <span className="w-[500px] bg-[--Grayish-Blue] p-[1px] mb-[10px] mt-[20px]"></span>
        <div className="block w-[500px]">
          <div className="flex items-center justify-between">
            <h1 className="font-[500]">What is Bookmark</h1>
            <img
              className={`"w-[12px] h-[10px] cursor-pointer" ${
                toggleFaq
                  ? "rotate-[180deg] w-[12px] h-[10px] cursor-pointer"
                  : "w-[12px] h-[10px] cursor-pointer"
              }`}
              src={arrow}
              alt=""
              onClick={faqToggle}
            />
          </div>

          <p
            className={`"text-left pt-[20px] text-[--Grayish-Blue] text-[12px]" ${
              toggleFaq
                ? "text-left pt-[20px] text-[--Grayish-Blue] text-[12px] transition duration-300"
                : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus, molestiae magnam quibusdam voluptatem animi quam ipsa ab?
            Dignissimos, eligendi.
          </p>
        </div>

        <span className="w-[500px] bg-[--Grayish-Blue] p-[1px] mb-[10px] mt-[20px]"></span>
        <div className="block w-[500px]">
          <div className="flex items-center justify-between">
            <h1 className="font-[500]">What is Bookmark</h1>
            <img
              className={`"w-[12px] h-[10px] cursor-pointer" ${
                toggleFaq
                  ? "rotate-[180deg] w-[12px] h-[10px] cursor-pointer"
                  : "w-[12px] h-[10px] cursor-pointer"
              }`}
              src={arrow}
              alt=""
              onClick={faqToggle}
            />
          </div>

          <p
            className={`"text-left pt-[20px] text-[--Grayish-Blue] text-[12px]" ${
              toggleFaq
                ? "text-left pt-[20px] text-[--Grayish-Blue] text-[12px] transition duration-300"
                : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus, molestiae magnam quibusdam voluptatem animi quam ipsa ab?
            Dignissimos, eligendi.
          </p>
        </div>
      </div>

      <a
        href=""
        className="text-[#fff] bg-[--soft-blue] p-[10px] rounded-[5px] text-[10px]"
      >
        More Info
      </a>
    </section>
  );
};

export default Faqs;
