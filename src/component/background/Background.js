import React from "react";
import About from "../AboutMe/About";
import Footer from "../Footer/Footer";

import "./Background.css";
import Profile from "../Profile/Profile";
import SideNav from "../side-nav/SideNav";

function Background() {
  return (
    <div className="bg-container">
      {/* <SideNav /> */}
      <Footer />
    </div>
  );
}

export default Background;
