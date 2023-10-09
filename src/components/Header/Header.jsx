import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="header-section two">
      <div className="header">
        <div className="header-bottom-area five">
          <div className="container custom-container">
            <div className="header-menu-content">
              <nav className="navbar navbar-expand-xl p-0">
                <Link className="site-logo site-title" to="/">
                  <img src={Logo} width="280px" alt="site-logo" />
                </Link>
                <button
                  className="navbar-toggler d-block d-xl-none ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggle-bar"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main-menu">
                    <li className="menu_has_children">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu_has_children">
                      <Link to="">
                        Our Services <i className="las la-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/music-distribution">
                            Music Distribution
                          </Link>
                        </li>
                        <li>
                          <Link to="/calltertune-distribution">
                            Caller Tune Distribution
                          </Link>
                        </li>
                        <li>
                          <Link to="/musicvideo-distribution">
                            Music Video Distribution in india & Worldwide
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="header-right">
                    <div className="header-action-area">
                      <div className="header-action">
                        <Link to="/logIn" className="btn--base">
                          LOGIN / REGISTER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
