import React from "react";
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="lg:px-[100px]">
      <NavMenu />
      <Hero />
    </div>
  );
};

export default App;
