import React from "react";
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Faqs from "./components/Faqs";

const App = () => {
  return (
    <div className="lg:px-[100px]">
      <NavMenu />
      <Hero />
      <Features />
      <Download />
      <Faqs />
    </div>
  );
};

export default App;
