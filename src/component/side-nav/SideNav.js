import React from "react";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";

function SideNav(props) {
    const navigate = useNavigate();

    function active_component() {
        let components = document.querySelectorAll("side-nav-component");
        components.forEach((component) => {
            component
                .getElementsById(props.active_ele)
                .className.append("active-nav");
        });
    }
    return (
        <div className="side-nav-container">
            <div className="side-nav-body">
                <div
                    className="side-nav-component"
                    onClick={() => navigate("/about-me")}
                    id="about_me"
                >
                    <i class="fas fa-user-tie"> </i>{" "}
                    <span className="tooltiptext">About me</span>{" "}
                </div>{" "}
                <div
                    className="side-nav-component"
                    onClick={() => navigate("/resume")}
                    id="resume"
                >
                    <i class="fas fa-file"> </i>
                    <span className="tooltiptext">Resume</span>{" "}
                    {" "}
                </div>{" "}
                <div
                    className="side-nav-component"
                    onClick={() => navigate("/projects")}
                    id="projects"
                >
                    <i class="fas fa-project-diagram"> </i>
                    <span className="tooltiptext">Projects</span>{" "}
                    {" "}
                </div>{" "}
                <div
                    className="side-nav-component"
                    onClick={() => navigate("/contact-me")}
                    id="contact_me"
                >
                    <i class="fas fa-inbox"> </i>
                    <span className="tooltiptext">Contact me</span>{" "}
                    {" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
}

export default SideNav;
