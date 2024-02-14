import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navImg">
          <a className="nav-link" href="#">
            <img
              src="https://static.wixstatic.com/media/b9782c_cac6b56e882744ffad78d25a4a42e2e7~mv2.png/v1/crop/x_56,y_156,w_478,h_274/fill/w_275,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
              style={{ height: "30px" }}
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="navList">
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ho
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products & Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
