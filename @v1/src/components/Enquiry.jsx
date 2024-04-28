import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Enquiry.css";

export const Enquiry = ({ itemTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    enquiryItem: itemTitle,
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
        "template_32r0y0r",
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
              phoneNumber: "",
              enquiryItem: itemTitle,
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
    <div className="enq-form">
      <h2>Enquire Us</h2>
      <form id="enq-form" className="enq-form-inner" onSubmit={handleSubmit}>
        <div className="enq-fm">
          <div className="enq-form-group enq-form-fm">
            <label className="enq-lbl" htmlFor="name">
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
            />
          </div>
          <div className="enq-form-group enq-form-fm">
            <label className="enq-lbl" htmlFor="email">
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
            />
          </div>
        </div>

        <div className="enq-form-group">
          <label className="enq-lbl" htmlFor="number">
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
          />
        </div>
        <div className="enq-form-group">
          <label className="enq-lbl" htmlFor="product">
            Enquiry-Item:
          </label>
          <input
            type="text"
            id="product"
            name="enquiryItem"
            value={formData.enquiryItem}
            readOnly
            required
            placeholder="Enquiry-Item"
          />
        </div>

        <div className="enq-form-group">
          <label className="enq-lbl" htmlFor="message">
            MESSAGE:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
          />
        </div>

        <button type="submit" className="enq-send-button">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
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
        <div className="success-popup">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};
