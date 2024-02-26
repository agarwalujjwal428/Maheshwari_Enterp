import "../styles/Footer.css";
import { RiFacebookBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-12">
          <div className="footer-top">
            <div className="footer-image">
              <img
                src="https://static.wixstatic.com/media/b9782c_cac6b56e882744ffad78d25a4a42e2e7~mv2.png/v1/crop/x_56,y_156,w_478,h_274/fill/w_275,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                style={{
                  height: "79px",
                  paddingLeft: "15px",
                  marginTop: "15px",
                  paddingRight: "10px",
                }}
                alt="logo"
              ></img>
              <div>
                <h4>Maheshwari </h4>
              </div>
              <div className="ent">
                <span>Enterprises</span>
              </div>
            </div>

            <div className="footerlogotext">
              <p>
                Raees the best Architect agency perspiciatis unde omnis iste
                natus error sit volutatem accusantium doloremque antium, totam
                rem aperiam perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudan
              </p>
              <div className="logocontainer">
                <a href="#">
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
                style={{ marginRight: "13px", marginTop: "6px",color:"#fafafa" }}
              />
              <p>
                {" "}
                Behind Central Bank Of India,<br></br>Kheme ka Kua, Pal Road,
                Jodhpur,<br></br>Rajasthan (342008)
              </p>
            </li>
            <li className="handlecontact">
              <BsTelephone style={{ marginRight: "13px", marginTop: "6px",color:"#fafafa" }} />
              <p>
                Mobile : +91-94141-30505 <br></br> Telephone : +0291-3551427
              </p>
            </li>
            <li className="handlecontact">
              <FaEarthAmericas style={{ marginRight: "13px", marginTop: "4px",color:"#fafafa" }} />
              <p>Email : maheshwari9@hotmail.com</p>
            </li>
          </ul>
        </div>

        <div className="footercolumn2">
          <h3>Our Services</h3>
          <span>Architecture</span>
          <span>Planning</span>
          <span>Interior Design</span>
          <span>Exterior Design</span>
        </div>
        <div className="footercolumn3">
          <h3>Site Link</h3>
          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#">Products & Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
        </div>

        <div className="footercolumn4">
          <h3>Recent Blog</h3>
          <div className="blog-single">
            <p>
              Raees the best Architect agency perspiciatis unde omnis iste natus
              error sit volutatem
            </p>
            <a href="#">By Devang Maheshwari, 3rd March, 12.30 pm</a>
          </div>
          <div className="blog-single">
            <p>
              Raees the best Architect agency perspiciatis unde omnis iste natus
              error sit volutatem
            </p>
            <a href="#">By Devang Maheshwari, 3rd March, 12.30 pm</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
