import React from "react";
import CompHead from "../comp-header/CompHead";
import SideNav from "../side-nav/SideNav";
import "./About.css";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  const comp_name = "About Me";
  const comp_description = "In a snippet...";
  const about_me = "about_me";
  return (
    <div className="about-container">
      <div className="about-main">
        {/* <div className="about-header">
        <div className="image-txt"> */}
        {/* <p> About Me </p> */}
        {/* </div> */}
        {/* <img src={require("../../assets/Home/hanging.png")} />{" "} */}
          
          {/* <CompHead comp_name={comp_name} comp_description={comp_description} /> */}{" "}
          {/* <img src={require("../../assets/Home/hanging-board.jpeg")} />  */}{" "}
          
        {/* </div> */}
        <div className="about-body">
            <div className="about-text">
             <p>
            I am an undergrad Information Technology student who is intrigued by development on the web with a
            knack for Frontend.I am currently working on my UI / UX skills and
            absorbing newer design tools. Creating & learning by the day, I
            aspire to become an excellent full stack developer among alot of
            other things;)
          </p>
          </div>
          <div className="about-cards-div">
          <div className="about-cards" id="front-end-developer">
          <span> Frontend Developer</span>
          <div className="rating">
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          </div>
          </div>
          <div className="about-cards" id="front-end-developer">
          <span> UI/UX Designer</span>
          <div className="rating">
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          {/* <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i> */}
          </div>
          </div>
          <div className="about-cards" id="front-end-developer">
          <span> Backend Developer</span>
          <div className="rating">
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          {/* <i class="fas fa-heart"></i> */}
          </div>
          </div>
          </div>
          {/* <div className="about-cards" id=">

          </div> */}

        </div>
      </div>
      <SideNav active_ele={about_me} />{" "}
      <a onClick={() => navigate("/")}>
        <i id="home" class="fas fa-home">
        </i>
      </a>
      <div id="icons-div">
        <div className="details-icons">
          <a href="https://twitter.com/radhikakkar">
            <i id="footer-icon" className="bi bi-twitter"> </i>{" "}
          </a>{" "}
          <a href="github.com/radhikakakkar">
            <i id="footer-icon" className="bi bi-github"> </i>{" "}
          </a>{" "}
          <a href="in.com/in/radhika-kakkar-bb6824193/">
            <i id="footer-icon" className="bi bi-linkedin"> </i>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default About;
