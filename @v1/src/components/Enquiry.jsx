import React from "react";
import "../styles/Enquiry.css";
export const Enquiry = () => {
  return (
    <>
      <div class="enq-form">
        <h2>Contact Us</h2>
        <form id="enq-form" className="enq-form-inner">
          <div className="enq-fm">
            <div class="enq-form-group enq-form-fm">
              <label className="enq-lbl" for="name">
                FULL NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              ></input>
            </div>
            <div class="enq-form-group enq-form-fm">
              <label className="enq-lbl" for="email">
                EMAIL ADDRESS:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              ></input>
            </div>
          </div>

          <div class="enq-form-group">
            <label className="enq-lbl" for="subject">
              SUBJECT:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Subject"
            ></input>
          </div>
          <div class="enq-form-group">
            <label className="enq-lbl" for="number">
              PHONE NUMBER:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required
              placeholder="Phone Number"
            ></input>
          </div>
          <div class="enq-form-group">
            <label className="enq-lbl" for="message">
              MESSAGE:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
            ></textarea>
          </div>

          <button className="enq-send-button">
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
      </div>
    </>
  );
};
