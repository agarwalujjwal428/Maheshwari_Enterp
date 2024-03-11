import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProductService from "./components/AllProductService";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products&services" element={<AllProductService />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
