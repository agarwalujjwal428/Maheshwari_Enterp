import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProductService from "./components/AllProductService";
import ProductServiceDetails from "./components/ProductServiceDetails";
import Home from "./components/Home";
import AllBlog from "./components/AllBlog";
import RecentProjectsPage from "./components/RecentProjectsPage";
import ProductServiceItem from "./components/ProductServiceItem";
import BlogDetails from "./components/BlogDetails";
import RpDetails from "./components/RpDetails";

// Higher-order component to check if the user's IP address is allowed
const withAdminAccess = (Component) => (props) => {
  const [userIP, setUserIP] = useState("192.168.20.1");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        // setUserIP(data.ip);
        console.log(data);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIP();
  }, []);

  const allowedIPs = ["192.168.20.1", "192.168.44.1", "192.168.29.51"];

  if (allowedIPs.includes(userIP)) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

const AdminDashboard = withAdminAccess(() => {
  return <div>Hello Admin!!</div>;
});

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop>
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
          <Route exact path="/blog" element={<AllBlog />} />
          <Route exact path="/blog/:title/:blogId" element={<BlogDetails />} />
          <Route
            exact
            path="/recentproject"
            element={<RecentProjectsPage />}
          />

          <Route
            exact
            path="/recentproject/:id/:title/:category"
            element={<RpDetails />}
          />
          {/* Admin routes */}
          <Route exact path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
