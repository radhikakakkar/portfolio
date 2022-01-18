import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-md" aria-label="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact Me</a>
              </li>
            </ul>
            {/* <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
