import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section pt-120">
      <div className="footer-element-one">
        <img src="assets/images/element/element-48.png" alt="element" />
      </div>
      <div className="footer-element-two">
        <img src="assets/images/element/element-39.png" alt="element" />
      </div>
      <div className="footer-element-three">
        <img src="assets/images/element/element-40.png" alt="element" />
      </div>
      <div className="footer-element-four">
        <img src="assets/images/element/element-7.png" alt="element" />
      </div>
      <div className="footer-element-five">
        <img src="assets/images/element/element-41.png" alt="element" />
      </div>
      <div className="footer-element-six">
        <img src="assets/images/element/element-42.png" alt="element" />
      </div>
      <div className="footer-element-seven">
        <img src="assets/images/element/element-39.png" alt="element" />
      </div>
      <div className="container">
        <div className="row mb-30-none">
          <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link className="site-logo site-title" to="index.html">
                  <img
                    src="assets/images/logo.png"
                    width="280px"
                    alt="site-logo"
                  />
                </Link>
              </div>
              <p>
                Mehra Music Production
                <br />
                #1 Best Music Distribution Company in India.
                <br />
                #Proudlyindian 🇮🇳
              </p>
              <ul className="footer-social">
                <li>
                  <Link to="https://www.facebook.com/mehrarecordsentertainment01?mibextid=LQQJ4d">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://youtube.com/@Mehra_Music_Production?si=FAbAI-vfo_ip_Mr9">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>

                <li>
                  <Link to="https://instagram.com/mehra_music_production01?igshid=MzRlODBiNWFlZA==">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="footer-widget">
              <h5 className="title">Quick Links</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/music-distribution">Services</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="footer-widget">
              <h4 className="title">Services</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/music-distribution">Music Distribution </Link>
                </li>
                <li>
                  <Link to="/calltertune-distribution">
                    Caller Tune Distribution
                  </Link>
                </li>
                <li>
                  <Link to="/musicvideo-distribution">
                    Music Video Distribution <br />
                    in india & Worldwide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center">
              <div className="copyright-area">
                <p>
                  Copyright © 2023
                  <Link to="/">Mehra Music Production</Link>. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
