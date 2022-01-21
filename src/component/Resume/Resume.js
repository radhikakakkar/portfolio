import React from "react";
import CompHead from "../comp-header/CompHead";
import "./Resume.css";

function Resume() {
  const comp_name = "Resume";
  const comp_description = "My formal bio details";
  return (
    <div className="resume-container">
      <div className="resume-header">
        <CompHead comp_name={comp_name} comp_description={comp_description} />
      </div>
      <div className="resume-body">
        <div className="resume-side-bar">
          <div className="resume-icon-bar">
            {/* i am icon bar */}
            <i className="fas fa-user-graduate"></i>
            <i className="fas fa-briefcase"></i>
            <i className="fas fa-laptop-code"></i>
            <i className="bi bi-person-workspace"></i>
            <i className="fas fa-music"></i>
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
              <li className="nav-item">
                <a className="nav-link" href="#projects" data-toggle="tab">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#interests" data-toggle="tab">
                  Interests
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-content">
          {/* <h1> hello i am content</h1> */}
          <div className="tab-content">
            <div id="education" className="tab-pane active animated slideInUp">
              <div className="education-section">
                <div className="school-list">
                  <ul className="schools">
                    <li className="school-li">
                      <span className="school-header">
                        Manipal University Jaipur
                      </span>
                      <p>Engineering in information technology</p>
                    </li>

                    <li className="school-li">
                      <span className="school-header">
                        Delhi Publick School, Vasant Kunj
                      </span>
                      <p>High School</p>
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
            <div id="experience" className="tab-pane animated slideInUp">
              <div className="experience-section">
                <div className="work-list">
                  <ul className="works">
                    <li className="work-li">
                      <span className="work-header">CariKture</span>
                      <p>Web Development Intern</p>
                    </li>
                  </ul>
                </div>
                <div className="year-labels">
                  <div className="internship1-label">
                    <span>Aug'21-Sep'21</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="skills" className="tab-pane animated slideInUp">
              <div className="skills-section">
                <div className="skills-list">
                  <ul className="skills">
                    <div>
                      <li className="skills-li">
                        <span className="skills-header">JavaScript</span>
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
                        <span className="skills-header">PHP</span>
                        <div class="progress">
                          <div className="php"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">NodeJS</span>
                        <div class="progress">
                          <div className="node-js"></div>
                        </div>
                      </li>
                      {/* <li className="skills-li">
                      <span className="skills-header">HTML</span>
                      <div class="progress">
                        <div className="html"></div>
                      </div>
                    </li> */}
                      <li className="skills-li">
                        <span className="skills-header">CSS</span>
                        <div class="progress">
                          <div className="css"></div>
                        </div>
                      </li>
                      {/* <li className="skills-li">
                      <span className="skills-header">C</span>
                      <div class="progress">
                        <div className="c"></div>
                      </div>
                    </li> */}
                    </div>
                    <div>
                      <li className="skills-li">
                        <span className="skills-header">SQL</span>
                        <div class="progress">
                          <div className="sql"></div>
                        </div>
                      </li>
                      <li className="skills-li" id="cpp-li">
                        <div className="skills-header">C++</div>
                        <div class="progress">
                          <div className="cpp"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">DSA</span>
                        <div class="progress">
                          <div className="dsa"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">Python</span>
                        <div class="progress">
                          <div className="python"></div>
                        </div>
                      </li>
                      <li className="skills-li">
                        <span className="skills-header">OOP</span>
                        <div class="progress">
                          <div className="oop"></div>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div id="interests" className="tab-pane animated slideInUp">
              <div className="interests-section">
                <div className="interests-list">
                  <ul className="interests">
                    <li className="interests-li">
                      <span className="interests-header">Music</span>
                      <div className="interests-description">
                        I am a Indian classical singer with a bachelors' degree
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
                      <span className="interests-header">Deisigning</span>
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
    </div>
  );
}

export default Resume;