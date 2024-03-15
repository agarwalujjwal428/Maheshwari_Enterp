import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProductService from "./components/AllProductService";
import ProductServiceDetails from "./components/ProductServiceDetails";
import Home from "./components/Home";
import ProductServiceItem from "./components/ProductServiceItem";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/products-and-services"
          element={<AllProductService />}
        />
        <Route
          exact
          path="/products-and-services/:title/:prodId/:category"
          element={<ProductServiceDetails />}
        />
        <Route
          exact
          path="/products-and-services/:title/:prodId/:category/:itemTitle"
          element={<ProductServiceItem />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
