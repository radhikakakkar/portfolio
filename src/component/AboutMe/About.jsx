import React from "react";
import CompHead from "../comp-header/CompHead";
import SideNav from "../side-nav/SideNav";
import Carousel from "react-images";
// import $ from "jquery";
// import "lightbox2/dist/css/lightbox.min.css"; // Import Lightbox CSS
// import "lightbox2/dist/js/lightbox.min.js"; // Import Lightbox JS
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const images = [
    { source: "/images/metro.JPG" },
    { source: "/images/manipal.jpg" },
    { source: "/images/synopsys.jpg" },
    { source: "/images/room.jpg" },
    { source: "/images/car.JPG" },
  ];
  const about_me = "about_me";
  return (
    <div className="about-container">
      <div className="about-main">
        <div id="about-my-image">
          <img id="my-img" src="/me.jpg" />
        </div>
        <div id="about-text">
          <p>Hey, I'm Radhika 🙌🏻 </p>
          <p>I love wearing weird glasses & writing code 👩🏻‍💻.</p>
          <p>
            As a recent CS graduate, I possess a blend of expertise in system
            development and enhancement, coupled with a solid foundation in
            computer fundamentals and programming 🦾.{" "}
          </p>
        </div>
        <span></span>
        <div id="about-my-gadgets-music-container">
          {/* <div id="my-gadgets">
            <div id="my-gadgets-1">
              <p>Uses</p>
              <ul>
                <li>13" Macbook pro, M2</li>
                <li>iPhone XR</li>
                <li>AirPods Pro 2</li>
              </ul>
            </div>

            <div id="my-gadgets-2">
              <p>Dev tools</p>
              <ul>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Notion</li>
              </ul>
            </div>
          </div> */}
          <div id="my-gadgets" class="container">
            <div class="carousel-view">
              {/* <button id="prev-btn" class="prev-btn"> */}
              {/* {" "} */}
              {/* </button> */}
              <div id="items-list" class="items-list">
                <div class="item">
                  <span style={{ "font-size": "15px", "font-weight": "700" }}>
                    I use,
                  </span>
                  <ul id="my-gadgets-list">
                    <li>13" Macbook pro, M2</li>
                    <span class="list-desc">
                      Never going nowhere without this
                    </span>

                    <li>iPhone XR</li>
                    <span class="list-desc">
                      The newer iPhones just don't cut it
                    </span>
                    <li>AirPods Pro 2</li>
                    <span class="list-desc">My go to focus inducer</span>
                  </ul>
                </div>

                {/* <div class="item" id="my-gadgets-2">
                  <p>Dev tools</p>
                  <ul>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Notion</li>
                  </ul>
                </div> */}
              </div>
              {/* <button id="next-btn" class="next-btn"> */}
              {/* {" "} */}
              {/* </button> */}
            </div>
          </div>
          <div style={{ "text-align": "center" }} id="my-apple-music-card">
            <p>What I'm listening to </p>
            <p>Loading... ⚙️</p>
          </div>
        </div>
        <div id="pov-span">
          <span>POV</span>
        </div>
        <div id="about-my-updates">
          <Carousel views={images} />
        </div>
      </div>
      <SideNav active_ele={about_me} />{" "}
      <a onClick={() => navigate("/")}>
        <i id="home" class="fas fa-home"></i>
      </a>
      <div id="icons-div">
        <div className="details-icons">
          <a target="_blank" href="https://twitter.com/radhikakkar">
            <i id="footer-icon" className="bi bi-twitter">
              {" "}
            </i>{" "}
          </a>{" "}
          <a target="_blank" href="https://github.com/radhikakakkar">
            <i id="footer-icon" className="bi bi-github">
              {" "}
            </i>{" "}
          </a>{" "}
          <a target="_blank" href="https://www.linkedin.com/in/radhika-kakkar/">
            <i id="footer-icon" className="bi bi-linkedin">
              {" "}
            </i>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default About;
