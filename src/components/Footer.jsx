import React from "react";
import { facebook, twitter, logo } from "../assets";

const Footer = () => {
  return (
    <section className="flex justify-between">
      <img src={logo} alt="" />
      <ul className="flex">
        <li>
          <a href="">features</a>
        </li>
        <li>
          <a href="">pricing</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>

      <div>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
    </section>
  );
};

export default Footer;
