import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[--soft-blue] w-full h-[200px] mt-[100px] text-center justify-center m-auto items-center lg:px-[0] z-10">
      <p className="uppercase tracking-[2px] text-white text-[10px] pt-[40px]">
        35,000+ Already Joined
      </p>
      <h1 className="text-[20px] text-white mb-[20px] mt-[10px]">
        Stay up-to-date with what <br /> we're doing
      </h1>

      <div className="justify-center items-center">
        <input
          className="rounded-[5px] text-[15px] py-[3px] placeholder:text-[10px] pl-[10px] border-none outline-none"
          placeholder="Enter your email address"
          type="email"
        />
        <a
          className="ml-[10px] bg-[--soft-red] text-white pt-[9px] pb-[7px] px-[10px] rounded-[5px] text-[10px]"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Newsletter;
