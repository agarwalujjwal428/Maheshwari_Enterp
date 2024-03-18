import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProductService from "./components/AllProductService";
import ProductServiceDetails from "./components/ProductServiceDetails";
import Home from "./components/Home";
import AllBlog from "./components/AllBlog";
import RecentProjectsPage from "./components/RecentProjectsPage";
import ProductServiceItem from "./components/ProductServiceItem";
import BlogDetails from "./components/BlogDetails";

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

        <Route exact path="/blog" element={<AllBlog />}></Route>
        <Route
          exact
          path="/blog/:title/:blogId"
          element={<BlogDetails />}
        ></Route>
        <Route
          exact
          path="/recentproject"
          element={<RecentProjectsPage />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
