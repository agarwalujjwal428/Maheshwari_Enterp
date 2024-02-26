import "../styles/Contactus.css";

const Contactus = () => {
  return (
    <>
      <div class="contact-container">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form id="contact-form" className="contact-form-inner">
            <div className="contact-fm">
              <div class="form-group form-fm">
                <label className="contact-lbl" for="name">FULL NAME:</label>
                <input type="text" id="name" name="name" required placeholder="Name"></input>
              </div>
              <div class="form-group form-fm">
                <label className="contact-lbl" for="email">EMAIL ADDRESS:</label>
                <input type="email" id="email" name="email" required placeholder="Email"></input>
              </div>
            </div>

            <div class="form-group">
              <label className="contact-lbl" for="subject">SUBJECT:</label>
              <input type="text" id="subject" name="subject" required placeholder="Subject"></input>
            </div>
            <div class="form-group">
              <label className="contact-lbl" for="number">PHONE NUMBER:</label>
              <input type="text" id="number" name="number" required placeholder="Phone Number"></input>
            </div>
            <div class="form-group">
              <label className="contact-lbl" for="message">MESSAGE:</label>
              <textarea id="message" name="message" required placeholder="Message"></textarea>
            </div>

            <button id="contact-btn" type="submit">Send Message</button>
          </form>
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
