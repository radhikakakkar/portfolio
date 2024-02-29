import React from "react";
import CompHead from "../comp-header/CompHead";
import "./Resume.css";
import { useNavigate } from "react-router-dom";
import SideNav from "../side-nav/SideNav";
import ResumeDownload from "../ResumeDownload/ResumeDownload";

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="resume-container">
      {/* <ResumeDownload /> */}
      <div className="resume-body">
        <div className="resume-side-bar">
          <div className="resume-icon-bar">
            {/* i am icon bar */}
            <ul className="nav nav-pills nav-fill" id="icon-bar-ul">
              <li className="nav-item" id="icon-bar-items">
                <a
                  className="nav-link active"
                  id="icon-bar-links"
                  href="#education"
                  data-toggle="tab"
                >
                  <i className="fas fa-user-graduate"></i>
                </a>
              </li>
              <li className="nav-item" id="icon-bar-items">
                <a
                  className="nav-link"
                  id="icon-bar-links"
                  href="#experience"
                  data-toggle="tab"
                >
                  <i className="fas fa-briefcase"></i>
                </a>
              </li>
              {/* <li className="nav-item" id="icon-bar-items">
                <a
                  className=" nav-link"
                  id="icon-bar-links"
                  href="#skills"
                  data-toggle="tab"
                >
                  <i className="fas fa-laptop-code"></i>
                </a>
              </li> */}
              <li className="nav-item" id="icon-bar-items">
                <a
                  className=" nav-link"
                  id="icon-bar-links"
                  href="#skills"
                  data-toggle="tab"
                >
                  <i className="bi bi-person-workspace"></i>
                </a>
              </li>
              <li className="nav-item" id="icon-bar-items">
                <a
                  className=" nav-link"
                  id="icon-bar-links"
                  href="#interests"
                  data-toggle="tab"
                >
                  <i className="fas fa-music"></i>
                </a>
              </li>
              {/* <li className="nav-item" id="icon-bar-items">
                
                <i
                  style={{ "font-size": "20px" }}
                  href="https://docs.google.com/document/d/1tfjBZkql4QM-Ibb9xWL7y8qtIeLaMRdyE50HSPU6voM/edit?usp=sharing"
                  className="bi bi-arrow-up-right-square-fill"
                ></i>
              </li> */}
            </ul>
          </div>

          <div className="resume-list">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#education"
                  data-toggle="tab"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience" data-toggle="tab">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" data-toggle="tab">
                  Skills
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects-resume"
                  data-toggle="tab"
                >
                  Projects
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#interests" data-toggle="tab">
                  Hobbies
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#interests" data-toggle="tab">
                  View CV
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="resume-content">
          {/* <h1> hello i am content</h1> */}
          <div className="tab-content">
            <div
              id="education"
              className="tab-pane active animated slideInDown"
            >
              <div className="education-section">
                <div className="school-list">
                  <ul className="schools">
                    <li className="school-li">
                      <span className="school-header">
                        Manipal University, Jaipur
                      </span>
                      <p>
                        Enjoyed every bit of software engineering in a lushful
                        campus, with the best resources, in a beautiful city.
                      </p>
                    </li>

                    <li className="school-li">
                      <span className="school-header">
                        Delhi Public School, Vasant Kunj
                      </span>
                      <p>
                        Graduated from one of the best schools with enriching
                        experiences and lots of fun.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="year-labels">
                  <div className="college-label">
                    <span>2019-2023</span>
                  </div>
                  <div className="school-label">
                    <span>2005-2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="experience" className="tab-pane animated slideInDown">
              <div className="experience-section">
                <div className="work-list">
                  <ul className="works">
                    <li className="work-li">
                      <span className="work-header">
                        Codenia Technologies, Noida{" "}
                        <i
                          style={{ color: "#ffd49c" }}
                          class="fas fa-map-pin"
                        ></i>
                      </span>
                      <p>Full Stack Developer</p>
                    </li>
                    <li className="work-li">
                      <span className="work-header">
                        Synopsys, Banaglore{" "}
                        <i
                          style={{ color: "#ffd49c" }}
                          class="fas fa-map-pin"
                        ></i>
                      </span>
                      <p>Software Engineer Intern</p>
                    </li>
                    <li className="work-li">
                      <span className="work-header">CariKture, Remote</span>
                      <p>Software Engineer Intern</p>
                    </li>
                  </ul>
                </div>
                <div className="year-labels">
                  <div className="internship3-label">
                    <span>Oct'23-Present</span>
                  </div>

                  <div className="internship2-label">
                    <span>Jan'23-Sep'23</span>
                  </div>
                  <div className="internship1-label">
                    <span>Aug'21-Sep'21</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="skills" className="tab-pane animated slideInDown">
              <div className="skills-section">
                <div className="skills-list">
                  <div class="skills-list-div" id="languages-span">
                    <span>Languages</span>
                    <div class="skills-list-div-inner-list">
                      <div>
                        <span className="skills-header">C/C++</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">Python</span>
                        <div class="progress">
                          <div className="learning"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">Bash</span>
                        <div class="progress">
                          <div className="pro"></div>
                        </div>
                      </div>
                    </div>
                    <div style={{ "padding-left": "1.2rem" }}>
                      <span className="skills-header">JavaScript</span>
                      <div class="progress">
                        <div className="learning"></div>
                      </div>
                    </div>
                  </div>
                  <div class="skills-list-div" id="backend-span">
                    <span>Backend</span>
                    <div class="skills-list-div-inner-list">
                      <div>
                        <span className="skills-header">FastAPI</span>
                        <div class="progress">
                          <div class="learning"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">REST</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="skills-list-div" id="frontend-span">
                    <span>Frontend</span>
                    <div class="skills-list-div-inner-list">
                      <div>
                        <span className="skills-header">ReactJS</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">CSS</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">Bootsrap</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="skills-list-div" id="frontend-span">
                    <span>Databases</span>
                    <div class="skills-list-div-inner-list">
                      <div>
                        <span className="skills-header">MongoDB</span>
                        <div class="progress">
                          <div class="pro"></div>
                        </div>
                      </div>
                      <div>
                        <span className="skills-header">MySQL</span>
                        <div class="progress">
                          <div class="learning"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ul className="skills">
                    <div>
                      <li className="skills-li">
                        <span className="skills-header">C/C++</span>
                        <div class="progress">
                          <div class="javascript"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">FastAPI</span>
                        <div class="progress">
                          <div class="javascript"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">ReactJS</span>
                        <div class="progress">
                          <div className="react-js"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">Python</span>
                        <div class="progress">
                          <div className="php"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">MongoDB</span>
                        <div class="progress">
                          <div className="sql"></div>
                        </div>
                      </li>
                    </div>
                    <div>
                      <li className="skills-li">
                        <span className="skills-header">OOP</span>
                        <div class="progress">
                          <div className="oop"></div>
                        </div>
                      </li>
                    </div>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* <div id="projects-resume" className="tab-pane animated slideInDown">
              <div className="projects-section">
                <span id="projects-header">A detailed view of my projects</span>
                <a onClick={() => navigate("/projects")}> Go to projects</a> */}
            {/* <div className="projects-list">
                  <ul className="projects">
                    <li className="project-li">
                      <span className=""></span>
                      <p></p>
                    </li>

                    <li className="project-li">
                      <span className=""></span>
                      <p></p>
                    </li>
                  </ul>
                  
                </div> */}
            {/* </div> */}
            {/* </div> */}
            <div id="interests" className="tab-pane animated slideInDown">
              <div className="interests-section">
                <div className="interests-list">
                  <ul className="interests">
                    <li className="interests-li">
                      <span className="interests-header">Music</span>
                      <div className="interests-description">
                        I am an Indian classical singer with bachelors' degree
                        and currently procastinating learning guitar.
                      </div>
                    </li>
                    <li className="interests-li">
                      <span className="interests-header">Social Service</span>
                      <div className="interests-description">
                        Would never sleep on the opportunity to give back to
                        society through the help of social communties in
                        college.
                      </div>
                    </li>
                    <li className="interests-li">
                      <span className="interests-header">Designing</span>
                      <div className="interests-description">
                        Not a professional but I love mixing colours for club
                        posters and my UIs ;)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideNav />
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
        </div>
      </div>
    </div>
  );
}

export default Resume;
