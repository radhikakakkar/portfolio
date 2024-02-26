import React from "react";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import CompHead from "../comp-header/CompHead";
import SideNav from "../side-nav/SideNav";
import { useNavigate } from "react-router-dom";

// import {image1} from "../../assets/contact.jpg";

function Contact() {
  const navigate = useNavigate();
  const form = useRef();
  function sendEmail(e) {
    console.log("inside sendEmail");
    // console.log(e.target);
    emailjs
      .sendForm("service_7p7gdvy", "template_cdnfuun", form.current, {
        publicKey: "EqvbGQxn7TpFjCU9s",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function validate(e) {
    console.log("i am validate");
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text-msg").value;
    var msg = document.getElementById("notification");

    if (name == "" || email == "" || text == "") {
      msg.className = "alert alert-danger";
      msg.innerHTML = "Please enter all values";
    } else if (name.length < 3) {
      msg.className = "alert alert-danger";
      msg.innerHTML = "Thats an awfully short name";
    } else {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos <= 1 || dotpos <= atpos + 2 || email.lenth >= dotpos + 2) {
        msg.className = "alert alert-danger";
        msg.innerHTML = "Enter a valid Email";
      } else {
        msg.className = "alert alert-success";
        msg.innerHTML = name + ", your message has been sent! Thankyou";
        sendEmail(msg);
      }
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-body">
        <div className="contact-form-div">
          <div id="notification"> </div>
          <form ref={form} id="contact-form" onSubmit={validate}>
            <div>
              <input
                id="name"
                name="from_name"
                type="text"
                className="form-control"
                // placeholder="Name"
                placeholder=" "
                required
              ></input>
              <label className="form-label">Name</label>
            </div>
            <div>
              <input
                type="text"
                name="from_email"
                id="email"
                className="form-control"
                // placeholder="Email"
                placeholder=" "
                required
              ></input>
              <label className="form-label">Email</label>
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                id="text-msg"
                className="form-control"
                // placeholder="I am listening! Go Ahead"
                placeholder=" "
                required
              ></textarea>
              <label className="form-label-t">Glad you are here!</label>
            </div>
            <div id="div-btn">
              <button
                type="submit"
                // onClick={() => {
                //   validate();
                //   sendEmail();
                // }}
                className="send-btn"
              >
                <i class="far fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="contact-space-div">
          <div className="space-div-top">
            <div className="connect-header">
              <p>Let's</p>
              <p>Connect</p>
            </div>
          </div>
          <div className="space-div-bottom">
            <div className="space-div-icons" id="email-id">
              <i class="fas fa-envelope-open-text"></i>
              <span>radhika3273@gmail.com</span>
            </div>
            <div className="space-div-icons" id="location">
              <i class="fas fa-map-pin"></i>
              <span>New Delhi</span>
            </div>
            <div className="space-div-icons" id="location">
              <a
                target="_blank"
                style={{ "text-decoration": "none" }}
                href="https://docs.google.com/document/d/1tfjBZkql4QM-Ibb9xWL7y8qtIeLaMRdyE50HSPU6voM/edit?usp=sharing"
              >
                <i
                  // style={{ "font-size": "15px" }}
                  style={{ color: "#ffd49c" }}
                  className="bi bi-arrow-up-right-square-fill"
                ></i>
                <span
                  style={{
                    color: "white",
                    margin: "10px",
                    "font-size": "20px",
                  }}
                  id="view-cv-span"
                >
                  View CV
                </span>
              </a>
            </div>
          </div>

          {/* <h2>hi i am space</h2> */}
          {/* <img src={require("../../assets/contact/contact1.jpg")} /> */}
          {/* <div id="row1">
            <img src={require("../../assets/contact/contact2.jpg")} />
            <img src={require("../../assets/contact/contact6.jpg")} />
          </div>
          <div id="row2">
            <img src={require("../../assets/contact/contact7.jpg")} />
          </div>
          <div id="row3">
            <img src={require("../../assets/contact/contact4.jpg")} />
            <img src={require("../../assets/contact/contact5.jpg")} />
          </div> */}
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

export default Contact;
{
  /* <script type="text/javascript">

    function register(e){
        e.preventDefault();
        var name= document.getElementById("name").value;
        var email= document.getElementById("email").value;
        var msg = document.getElementById("msg");

        if( name==''||email ==''){
            
            msg.className="alert alert-danger";
            msg.innerHTML="please enter all values";

        }
        else if(name.length < 3){

            msg.className="alert alert-danger";
            msg.innerHTML="name should be atleast three characters long";

        }

        else{
            var atpos= email.indexOf("@");
            var dotpos= email.lastIndexOf(".");
                if(atpos<=1 || dotpos<= atpos+2 || email.lenth>= dotpos+2){

                    msg.className="alert alert-danger";
                    msg.innerHTML="Enter valid email";

                }
                
                else{

                msg.className="alert alert-success";
                msg.innerHTML=name +' is registered with '+ email;
            }
        }
    }

        document.getElementById("regform").addEventListener('submit', register);
    
    </script> */
}
