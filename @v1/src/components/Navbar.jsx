import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`nav-section ${
          scrolling ? "nav-scrolled" : "nav-not-scrolled"
        }`}
        style={{ transition: "all 1s ease-out" }}
      >
        <div className="container navContainer">
          <div className="row">
            <div className="main-menu navbar navbar-expand-md justify-content-between">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img
                    className="navbar-logo"
                    src="/src/assets/images/E_6.1.png"
                    alt="logo"
                  ></img>
                </a>
              </div>
              <div className="navList">
                <ul className="nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        location.pathname.startsWith("/products-and-services")
                          ? "active"
                          : ""
                      }`}
                      href="/products-and-services"
                    >
                      Products & Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        location.pathname === "/blog" ? "active" : ""
                      }`}
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        location.pathname === "/recentproject" ? "active" : ""
                      }`}
                      href="/recentproject"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
