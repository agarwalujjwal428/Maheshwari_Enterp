import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section_2 from "./components/Section_2";
import Testimonials from "./components/Testimonials";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Client_review from "./components/Client_review";

const App = () => {
  return (
    <>
      <Navbar />
      <Aboutus/>
      <Section_2 />
      <Client_review/>
      <Testimonials />
      <Contactus/>
    
      <Footer />
    </>
  );
};

export default App;
