import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    console.log("inside sendEmail");

    emailjs
      .sendForm(
        "service_eo8fgmu",
        "template_ndu19ec",
        e.target,
        "user_0r97fg0jiQNQYnFa3n44R"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function validate(e) {
    //   console.log("i am validate");
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
        msg.innerHTML = name + " Your Email has been sent! Thankyou";
      }
    }
  }

  return (
    <div className="contact-container">
      <span className="contact-header">Let's keep in touch</span>
      <div className="contact-body">
        <div className="contact-space">
          <h2>hi i am space</h2>
        </div>
        <div className="contact-form">
          <div id="notification"> </div>
          <form id="regform">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="user-email"
                id="email"
                className="form-control"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Type in your message</label>
              <textarea
                type="text"
                name="message"
                id="text-msg"
                className="form-control"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={() => {
                validate();
                sendEmail();
              }}
              className="btn btn-primary"
            >
              Send
            </button>
          </form>
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
