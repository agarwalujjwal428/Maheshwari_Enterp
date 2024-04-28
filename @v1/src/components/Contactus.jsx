import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5dz6tgm",
        "template_4bd8nyd",
        e.target,
        "0hA4brvvYVm6NFf9d"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
            setFormData({
              name: "",
              email: "",
              subject: "",
              phoneNumber: "",
              message: "",
            });
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          alert("Message sending failed!");
        }
      );
  };

  return (
    <>
      <div class="contact-container">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form
            id="contact-form"
            className="contact-form-inner"
            onSubmit={handleSubmit}
          >
            <div className="contact-fm">
              <div class="form-group form-fm">
                <label className="contact-lbl" for="name">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                ></input>
              </div>
              <div class="form-group form-fm">
                <label className="contact-lbl" for="email">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                ></input>
              </div>
            </div>

            <div class="form-group">
              <label className="contact-lbl" for="subject">
                SUBJECT:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              ></input>
            </div>
            <div class="form-group">
              <label className="contact-lbl" for="number">
                PHONE NUMBER:
              </label>
              <input
                type="text"
                id="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Phone Number"
              ></input>
            </div>
            <div class="form-group">
              <label className="contact-lbl" for="message">
                MESSAGE:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </form>
          {isSent && (
            <div className="contact-success-popup">
              <p>Message sent successfully!</p>
            </div>
          )}
        </div>
        <div class="map">
          <iframe
            className="map_frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.1686840703283!2d72.98113219999999!3d26.256188200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ebcd41ad64d%3A0xa7ebbd0f6f68247d!2sMaheshwari%20Enterprises!5e0!3m2!1sen!2sin!4v1708863187170!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contactus;
