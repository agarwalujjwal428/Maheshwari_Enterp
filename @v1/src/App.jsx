import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section_2 from "./components/Section_2";
import Testimonials from "./components/Testimonials";
import Contactus from "./components/Contactus";

const App = () => {
  return (
    <>
      <Navbar />
      <Section_2 />
      <Testimonials />
      <Contactus />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.1686840703283!2d72.98113219999999!3d26.256188200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ebcd41ad64d%3A0xa7ebbd0f6f68247d!2sMaheshwari%20Enterprises!5e0!3m2!1sen!2sin!4v1708801277996!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <Footer />
    </>
  );
};

export default App;
