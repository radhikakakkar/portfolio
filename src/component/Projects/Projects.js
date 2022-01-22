import React from "react";
import CompHead from "../comp-header/CompHead";

import "./Projects.css";

function Projects() {
  const comp_name = "Projects";
  const comp_description = "A list of my Projects";
  return (

    <div className="projects-container">
      <div className="projects-header">
        <CompHead comp_name={comp_name} comp_description={comp_description} />
      </div>
      <section className="projects-body">
      <div className="projects-row4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Portfolio website</h5>
              <p className="card-text">
                A personal Portfolio website create using ReactJS
              </p>
              <a
                // target="_blank"
                // href="#"
                // onclick="return false;"
                className="btn card-btn"
                
              >
                You are currently here!
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">On the Go</h5>
              <p className="card-text">
                A mobile first application created for a hackathon,
                Frontend in ReactJs as my contribution to the team.
              </p>
              <a
                // target="_blank"
                // href="#"
                // onclick="return false;"
                className="btn card-btn"
                
              >
                yet to be deployed
              </a>
            </div>
          </div>
        </div>
        <div className="projects-row2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Hangman Game</h5>
              <p className="card-text text-center">
                A word guessing Game created using ReactJs
              </p>
              <a
                target="_blank"
                href="https://hangman-game-rk.herokuapp.com/"
                className="btn card-btn"
              >
                Have a look
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login/Signup Page</h5>
              <p className="card-text text-center">
                A complete and ready to use Login/signup page created using
                ReactJs
              </p>
              <a
                target="_blank"
                href="https://login-signup-reactjs2.herokuapp.com/"
                className="btn card-btn"
              >
                Have a look
              </a>
            </div>
          </div>
        </div>
        <div className="projects-row1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Netflix page clone</h5>
              <p className="card-text text-center">
                Created using HTML,CSS and JavaScript.
              </p>
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
        <div className="projects-row2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Memory Game</h5>
              <p className="card-text">
                Created using HTML,CSS and JavaScript.
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
                Created using HTML,CSS,JavaScript and Bootstrap.
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
        <div className="projects-row3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Message-Display App</h5>
              <p className="card-text">
                Created front-end using HTML, CSS & JavaScript, back-end with
                PHP.
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
                Created front-end using HTML,CSS,JavaScript & Bootstrap,
                back-end with PHP, database with SQL{" "}
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
        </div>
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
      </section>
    </div>
  );
}

export default Projects;
