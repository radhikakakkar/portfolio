import React from "react";
import CompHead from "../comp-header/CompHead";
import SideNav from "../side-nav/SideNav";
import "./About.css";

function About() {
  const comp_name = "About Me";
  const comp_description = "In a snippet...";
  const about_me = "about_me";
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-header">
          <img src={require("../../assets/Home/hanging-apt2.png")} />
          <div className="image-txt">
            <p>About Me</p>
          </div>
          {/* <CompHead comp_name={comp_name} comp_description={comp_description} /> */}
          {/* <img src={require("../../assets/Home/hanging-board.jpeg")} />  */}
          {/* <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="64.000000pt"
            height="64.000000pt"
            viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M271 604 c-12 -15 -21 -36 -21 -47 0 -12 -23 -56 -51 -99 l-52 -78
-46 0 c-26 0 -56 -7 -69 -16 -21 -15 -22 -21 -22 -169 0 -126 3 -156 16 -169
23 -24 565 -24 588 0 13 13 16 43 16 169 0 148 -1 154 -22 169 -13 9 -43 16
-69 16 l-46 0 -52 78 c-28 43 -51 87 -51 99 0 33 -38 73 -70 73 -19 0 -36 -9
-49 -26z m78 -8 c17 -20 10 -77 -11 -90 -26 -16 -52 4 -56 43 -4 36 12 61 38
61 10 0 23 -6 29 -14z m-29 -116 c13 0 31 7 41 16 17 15 21 12 59 -47 l41 -64
-70 -3 c-39 -2 -102 -2 -141 0 l-70 3 42 63 c37 57 42 61 58 47 9 -8 27 -15
40 -15z m288 -279 c2 -97 -1 -148 -9 -157 -16 -19 -538 -21 -557 -2 -13 13
-18 289 -5 301 4 4 133 6 287 5 l281 -3 3 -144z"
              />
            </g>
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                gradientUnits="userSpaceOnUse"
                cx="218.923"
                cy="324.542"
                r="83.854"
                id="gradient-1"
                gradientTransform="matrix(1, 0, 0, 1, -1.458252, 2.213011)"
              >
                <stop offset="0" style="stop-color: rgba(0, 0, 0, 1)" />
                <stop offset="1" style="stop-color: rgba(0, 0, 0, 1)" />
              </radialGradient>
            </defs>
            <rect
              x="133.611"
              y="278.49"
              width="167.707"
              height="96.53"
              style="fill: rgb(255, 255, 255); stroke: url(#gradient-1); stroke-width: 4px;"
              rx="33.388"
              ry="33.388"
            />
            <path
              style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"
              d="M 163.895 276.099 L 217.859 236.068 L 267.573 276.039"
            />
            <path
              style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
              d="M 218.1 220.488 L 221.364 -3.58"
            />
            <ellipse
              style="stroke: rgb(0, 0, 0); stroke-width: 4px; paint-order: fill; fill: rgb(255, 255, 255);"
              cx="217.451"
              cy="230.366"
              rx="13.456"
              ry="11.967"
            />
          </svg> */}
        </div>
        <div className="about-body">
          <p className="about-text">
            I am an undergrad Information Technology student from Manipal
            University Jaipur who is intrigued by development on the web with a
            knack for Frontend. I am currently working on my UI/UX skills and
            absorbing newer design tools. Creating & learning by the day, I
            aspire to become an excellent full stack developer among alot of
            other things ;)
          </p>
        </div>
      </div>
      <SideNav active_ele={about_me} />
      <a href="http://localhost:3000/">
        <i id="home" class="fas fa-home"></i>
      </a>
      <div id="icons-div">
        <div className="details-icons">
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-github"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
