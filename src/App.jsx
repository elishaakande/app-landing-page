import React from "react";
import "./style.css";
import {
  About,
  Download,
  Footer,
  Functions,
  HeroSection,
  NavBar,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="app_container">
        <NavBar />
        <HeroSection />
        <About />
        <Functions />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default App;
