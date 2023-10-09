import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <section className="contact-item-section ptb-120">
      <div className="contact-item-element-one">
        <img src="assets/images/element/element-71.png" alt="element" />
      </div>
      <div className="contact-item-element-two">
        <img src="assets/images/element/element-72.png" alt="element" />
      </div>
      <div className="container">
        <div className="row justify-content-center mb-30-none">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="contact-item text-center">
              <div className="contact-icon-area">
                <div className="contact-icon">
                  <i className="las la-map-marked-alt"></i>
                </div>
              </div>
              <div className="contact-content">
                <h3 className="title">Visit Our Office</h3>
                <p>Haryana</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="contact-item text-center">
              <div className="contact-icon-area">
                <div className="contact-icon">
                  <i className="las la-phone"></i>
                </div>
              </div>
              <div className="contact-content">
                <h3 className="title">Call Us</h3>
                <p>
                  <Link to="tel:+91 93061 32154">+91 93061 32154</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="contact-item text-center">
              <div className="contact-icon-area">
                <div className="contact-icon">
                  <i className="las la-envelope-open-text"></i>
                </div>
              </div>
              <div className="contact-content">
                <h3 className="title">Mail Us</h3>
                <p>
                  <Link to="mailto:">info@Mehramusicproduction.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
