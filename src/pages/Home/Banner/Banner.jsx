import React from "react";

const Banner = () => {
  return (
    <section className="banner-section two five">
      <div className="banner-element-thirty">
        <img
          src="assets/images/element/icons8-microphone-94.png"
          alt="element"
        />
      </div>
      <div className="banner-element-thirty-one">
        <img
          src="assets/images/element/icons8-musical-notes-94.png"
          alt="element"
        />
      </div>
      <div className="banner-element-thirty-two">
        <img src="assets/images/element/icons8-music-94.png" alt="element" />
      </div>
      <div className="banner-element-thirty-three">
        <img src="assets/images/element/element-109.png" alt="element" />
      </div>
      <div className="banner-element-thirty-four">
        <img src="assets/images/element/element-110.png" alt="element" />
      </div>
      <div className="banner-element-thirty-five">
        <img src="assets/images/element/element-111.png" alt="element" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-12">
            <div className="banner-content two three">
              <h1 className="title">Best Music Distribution India</h1>
              <p>Upload Unlimited Songs 150+ Stores and Quality Service</p>
              {/* <div className="banner-btn">
                <a href="#0" className="btn--base">
                  TRY IT FREE NOW!
                </a>
                <a href="#0" className="btn--base two">
                  CREATE ACOUNT
                </a>
              </div> */}
            </div>
            <div className="banner-thumb">
              <img src="assets/images/element/element-98.png" alt="element" />
              <div className="banner-thumb-element">
                <img
                  src="assets/images/element/element-108.png"
                  alt="element"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
