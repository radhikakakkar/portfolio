import React from "react";
import Typical from "react-typical";
import "./Profile.css";
// import Resume from ''
import userVid from "../../../assets/Home/user.mp4";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="main-nav">
          <div className="grid-row">
            <div className="main-nav-component" id="about-me">
              <div className="component-inner">
                <div className="flip-front">
                  <i class="fas fa-user-tie accent-text"></i>
                </div>
                <div className="flip-back">
                  <span className="nav-component-text">About Me</span>
                </div>
              </div>
            </div>
            <div class="main-nav-component" id="resume">
              <div className="component-inner">
                <div className="flip-front">
                  <i class="fas fa-file accent-text"></i>
                </div>
                <div className="flip-back">
                  <span className="nav-component-text">Resume</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="main-nav-component" id="projects">
              <div className="component-inner">
                <div className="flip-front">
                  <i class="fas fa-project-diagram accent-text"></i>
                </div>
                <div className="flip-back">
                  <span className="nav-component-text">Projects</span>
                </div>
              </div>
            </div>
            <div class="main-nav-component" id="contact-me">
              <div className="component-inner">
                <div className="flip-front">
                  <i class="fas fa-inbox accent-text"></i>
                </div>
                <div className="flip-back">
                  <span className="nav-component-text">Contact me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-right">
        <div className="intro-div">
          <div id="name-div">
            <span id="profile-name">
              HEY, I AM <span className="accent-text">RADHIKA KAKKAR</span>
            </span>
          </div>
          {/* <div id="greetings-div">
            <Typical
              loop={Infinity}
              steps={[
                "It's great to have you here!",
                2000,

                "Welcome to my Portfolio",
                2000,
              ]}
            />
          </div> */}
          {/* <div id="get-resume-div">
            <a href="Resume.pdf" download="radhika kakkar.pdf">
              <button className="download-btn">GET RESUME</button>
            </a>
          </div> */}
          <div id="profile-icons-div">
            <div className="profile-details-icons">
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
            <div id="get-resume-div">
              <a href="Resume.pdf" download="radhika kakkar.pdf">
                <button className="download-btn">GET RESUME</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* 
  <div className="profile-details">
  <div className="profile-details-icons">
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
          <div className="profile-details-name">
            <span className="primary-text">
              <Typical
                loop={Infinity}
                steps={[
                  "It's great to have you here!",
                  2000,
                  "I am Radhika",
                  2000,
                  "Welcome to my portfolio",
                  2000,
                ]}
              />
               Hi, I am <span className="highlighted-name">Radhika Kakkar </span> 
            </span>
          </div> 
        {/* <div className="profile-options">
            <a href="Resume.pdf" download="radhika kakkar.pdf">
              <button className="download-btn">Get Resume</button>
            </a>
          </div> 
        </div>*/
}

{
  /* <img id="my-photo" src="radhika_kakkar.jpg"></img> */
}
{
  /*<h6>You will see me soon !</h6> */
}
