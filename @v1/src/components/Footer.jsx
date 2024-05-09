import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import blogData from "../blog.json";
import "../styles/Footer.css";

const Footer = () => {
  const sortedBlogs = [...blogData.blogs].sort((a, b) => {
    const dateA = new Date(a.publish_date.split("/").reverse().join("/"));
    const dateB = new Date(b.publish_date.split("/").reverse().join("/"));
    return dateB - dateA;
  });

  const latestBlogs = sortedBlogs.slice(0, 2);

  const scrollToTop = () => {
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-12">
          <div className="footer-top">
            <div className="footer-image">
              <img
                src="/assets/images/E_6.1.png"
                style={{
                  height: "79px",
                  paddingLeft: "15px",
                  marginTop: "52px",
                  paddingRight: "10px",
                }}
                alt="logo"
              ></img>
            </div>

            <div className="footerlogotext">
              <p>
                Maheshwari Enterprises, is a leading name in the construction
                and waterproofing products industry. With over 30 years of
                expertise, we offer top-quality products and cutting-edge
                technologies, serving Jodhpur and neighboring areas.
              </p>
              <div className="logocontainer">
                <a
                  href="https://www.facebook.com/maheshwarienterprisesjodhpur"
                  target="_blank"
                >
                  <RiFacebookBoxLine size={43} style={{ color: "#fafafa" }} />
                </a>
                <a href="#">
                  <LiaTwitterSquare size={46} style={{ color: "#fafafa" }} />
                </a>
                <a href="#">
                  <CiInstagram size={42} style={{ color: "#fafafa" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-linkcontainer">
        <div className="footercolumn1">
          <h3>Contact Us</h3>
          <ul>
            <li className="handlecontact">
              <IoLocationOutline
                style={{
                  marginRight: "13px",
                  marginTop: "6px",
                  color: "#fafafa",
                }}
              />
              <p>
                Behind Central Bank Of India,<br></br>Kheme ka Kua, Pal Road,
                Jodhpur,<br></br>Rajasthan (342008)
              </p>
            </li>
            <li className="handlecontact">
              <BsTelephone
                style={{
                  marginRight: "13px",
                  marginTop: "6px",
                  color: "#fafafa",
                }}
              />
              <p>
                Mobile : +91-94141-30505 <br></br> Telephone : +0291-3551427
              </p>
            </li>
            <li className="handlecontact">
              <FaEarthAmericas
                style={{
                  marginRight: "13px",
                  marginTop: "4px",
                  color: "#fafafa",
                }}
              />
              <p>Email : maheshwari9@hotmail.com</p>
            </li>
          </ul>
        </div>

        <div className="footercolumn2">
          <h3>Our Services</h3>
          <span>Penetrative WaterProofing</span>
          <span>Termite Treatment</span>
          <span>WaterProof Textures</span>
          <span>Composite Plumbing</span>
          <span>Mineral Paints</span>
          <span>Tile Adhesives</span>
        </div>
        <div className="footercolumn3">
          <h3>Site Link</h3>
          <ul>
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/products-and-services">Products & Services</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/recentproject">Project</a>
            </li>
          </ul>
        </div>

        <div className="footercolumn4">
          <h3>Recent Blog</h3>
          {latestBlogs.map((blog) => (
            <Link
              to={`/blog/${blog.title}/${blog.id}`}
              onClick={scrollToTop}
              key={blog.id}
            >
              <div className="blog-single">
                <div className="blog-single-author">
                  <p>{blog.title}</p>
                  <p>{blog.description}</p>
                </div>
                <div className="footer-bg-author">
                  By {blog.author}, On {blog.publish_date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
