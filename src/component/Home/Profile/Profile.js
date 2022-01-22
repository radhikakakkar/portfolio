import React from "react";
import Typical from "react-typical";
import "./Profile.css";
// import Resume from ''
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left">
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
              {/* Hi, I am <span className="highlighted-name">Radhika Kakkar </span> */}
            </span>
          </div>
          {/* <div className="profile-details-role">
            <span className="primary-text">
                <h4>
                    <Typical 
                    loop={Infinity}
                    steps={[
                        "enthusiastic dev ♨️",
                        1000,              
                        "full stack dev 🔱",
                        1000,     
                    ]}
                    />
                </h4>
            </span>
            <span className="profile-tag-line">
                aspiring full stack developer.
            </span>
        </div> */}
          {/* <div className="profile-options">
            <a href="Resume.pdf" download="radhika kakkar.pdf">
              <button className="download-btn">Get Resume</button>
            </a>
          </div> */}
        </div>
      </div>
      <div className="profile-right">
        {/* <img id="my-photo" src="radhika_kakkar.jpg"></img> */}
        <h6>You will see me soon !</h6>
      </div>
    </div>
  );
}
