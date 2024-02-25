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
      <Contactus/>
      <Footer />
    </>
  );
};

export default App;
