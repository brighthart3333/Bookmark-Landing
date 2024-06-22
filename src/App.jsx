import React from "react";
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="lg:px-[100px]">
      <NavMenu />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
