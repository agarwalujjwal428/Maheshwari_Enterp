import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-section">
        <div className="container navContainer">
          <div className="row">
            <div className="main-menu navbar navbar-expand-md justify-content-between">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <img
                    className="navbar-logo"
                    src="/src/assets/images/melogo.png"
                    alt="logo"
                  ></img>
                </a>
              </div>
              <div className="navList">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Home
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
