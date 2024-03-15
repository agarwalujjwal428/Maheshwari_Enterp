import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProductService from "./components/AllProductService";
import Home from "./components/Home";
import AllBlog from "./components/AllBlog";
import RecentProjectsPage from "./components/RecentProjectsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/products&services"
          element={<AllProductService />}
        ></Route>
        <Route exact path="/blog" element={<AllBlog />}></Route>
        <Route exact path="/recentproject" element={<RecentProjectsPage />}></Route>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
