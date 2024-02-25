import React from "react";
import CompHead from "../comp-header/CompHead";
import SideNav from "../side-nav/SideNav";
import { useNavigate } from "react-router-dom";

import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <section className="projects-body">
        <div className="projects-row4" id="project-rows">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Google-ads-keywords-stats</h5>
              <p className="card-text">
                An endpoint that fetches you the current pricing of the keywords
                you want to utilise to tune your google campaign ads
              </p>
              <a
                // target="_blank"
                href="https://github.com/radhikakakkar/google-ads-keyword-stats"
                // onclick="return false;"
                className="btn card-btn"
              >
                GitHub repo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog site (Backend)</h5>
              <p className="card-text">
                A backend with all crud operations to manage your blog site.
                Implemented using FastAPI and MongoDB.
              </p>
              <a
                target="_blank"
                href="https://github.com/radhikakakkar/blog_site_fastAPI"
                className="btn card-btn"
              >
                Github repo
              </a>
            </div>
          </div>
        </div>

        <div className="projects-row1" id="project-rows">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Netflix page clone</h5>
              <p className="card-text text-center">
                A replica of the Netflix landing page ended up catching the
                attention of GitHub, marking it suspicious ;)
              </p>
              <p>(details->visit this unsafe site)</p>
              <a
                target="_blank"
                href="https://radhikakakkar.github.io/page-clone/"
                className="btn card-btn"
              >
                Have a look
              </a>
            </div>
          </div>
        </div>
        <div className="projects-row2" id="project-rows">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Memory Game</h5>
              <p className="card-text">
                Relive the old days through the simplicity of this game.
              </p>
              <a
                target="_blank"
                href="https://radhikakakkar.github.io/memory-game/"
                className="btn card-btn"
              >
                Play
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Whack-a-Mole Game</h5>
              <p className="card-text">
                A fun Whack-a-Mole game, created using Vanilla JS and CSS.
              </p>
              <a
                target="_blank"
                href="https://radhikakakkar.github.io/whack-a-mole/"
                className="btn card-btn"
              >
                Play
              </a>
            </div>
          </div>
        </div>
        {/* <div className="projects-row3" id="project-rows">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Message-Display App</h5>
              <p className="card-text">
                Created using HTML, CSS, JavaScript along with PHP.
              </p>
              <a
                target="_blank"
                href="https://github.com/radhikakakkar/message_app"
                className="btn card-btn"
              >
                GitHub repo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login/Signup Page</h5>
              <p className="card-text">
                Created using HTML, CSS, JavaScript,Bootstrap, back-end with PHP
                and SQL
              </p>
              <a
                target="_blank"
                href="https://github.com/radhikakakkar/log-in-page"
                className="btn card-btn"
              >
                GitHub repo
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="projects-row4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">To-do List</h5>
              <p className="card-text">
                Created front-end using HTML, CSS & JavaScript.
              </p>
              <a
                target="_blank"
                href="https://radhikakakkar.github.io/todolist/"
                className="btn card-btn"
              >
                Have a look
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Registration-Form</h5>
              <p className="card-text">
                Created front-end using HTML, CSS & JavaScript, back-end with
                PHP..
              </p>
              <a
                target="_blank"
                href="https://github.com/radhikakakkar/registration-form"
                className="btn card-btn"
              >
                GitHub repo
              </a>
            </div>
          </div>
        </div> */}
        <div className="loading-projects">
          <span>Loading 10 more in 2 days ...</span>
          <div
            id="progress-bar"
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </section>

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

export default Projects;
