import React from "react";
import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

import About from "./AboutMe/About";
import Background from "./background/Background";
import Profile from "./Profile/Profile";
import "./Complete.css";

function Complete() {
  return (
    <div className="complete-container">
      <Background />
      <div className="complete-contents">
        <Router>
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/about-me" element={<About />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact-me" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Complete;
