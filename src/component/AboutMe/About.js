import React from "react";
import CompHead from "../comp-header/CompHead";
import "./About.css";

function About() {
  const comp_name = "About Me";
  const comp_description = "In a snippet...";
  return (
    <div className="about-container">
      <div className="resume-header">
        <CompHead comp_name={comp_name} comp_description={comp_description} />
      </div>
      <div className="about-body">
        <p className="about-text">
          I am primarily an undergraduate information technology student who is
          highly intrigued by development on the web especially Frontend.
          Creating & learning by the day and aspiring to become an excellent full stack
          developer among alot of other things ;)
        </p>
      </div>
    </div>
  );
}

export default About;
