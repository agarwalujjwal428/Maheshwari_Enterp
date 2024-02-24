import "../styles/Contactus.css";

const Contactus = () => {
    return (
        <>
       <div class="contact-container">
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form id="contact-form" class="contact-form-inner">
      <div class="form-group">
        <label for="name">FULL NAME:</label>
        <input type="text" id="name" name="name" required></input>
      </div>
      <div class="form-group">
        <label for="subject">SUBJECT:</label>
        <input type="text" id="subject" name="subject" required></input>
      </div>
      <div class="form-group">
        <label for="message">MESSAGE:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div class="form-group">
        <label for="email">EMAIL ADDRESS:</label>
        <input type="email" id="email" name="email" required></input>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
  <div class="contact-info">

    </div>
    </div>
        </>
    );

};

export default Contactus;
