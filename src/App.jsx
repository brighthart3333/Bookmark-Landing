import React from "react";
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Faqs from "./components/Faqs";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div className="">
      <NavMenu />
      <Hero />
      <Features />
      <Download />
      <Faqs />
      <Newsletter />
    </div>
  );
};

export default App;
