import React from "react";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import About from "./AboutMe/About";
import "./Complete.css";

function Complete() {
  return (
    <div class="complete-container">
      {/* <Header /> */}
      <Home />
      {/* <About /> */}
      {/* <Resume /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Complete;
