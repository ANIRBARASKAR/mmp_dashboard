import React from "react";

const Plans = () => {
  return (
    <section className="plan-section two ptb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 text-center">
            <div className="section-header">
              <h2 className="section-title mb-0">Our Digital Pricing Plan</h2>
            </div>
          </div>
        </div>
        <div className="plan-tab">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="monthly"
              role="tabpanel"
              aria-labelledby="monthly-tab"
            >
              <h1>Video Distribution Plans</h1>
              <div className="row justify-content-center mb-30-none">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                  <div className="plan-item">
                    <div className="plan-header">
                      <h3 className="title">Single Music Video Distribution</h3>
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹399<sub>One Time</sub>
                        </h2>
                      </div>
                      <ul className="plan-list">
                        <li>Video Live on Vevo Video</li>
                        <li>5 to 10 Days Approval</li>
                        <li>One time Payment</li>
                        <li>Video Availability Lifetime</li>
                        <li>95% Royalty</li>
                        <li>Payment/Report (6 Months)</li>
                      </ul>
                    </div>
                    <div className="plan-footer">
                      <div className="plan-btn">
                        <a href="#0" className="btn--base active w-100">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                  <div className="plan-item">
                    <div className="plan-header">
                      <h3 className="title">
                        Multiple Music Video Distribution
                      </h3>
                      {/* <!-- <div className="plan-badge-area">
                            <span className="plan-badge">Most Popular</span>
                          </div> --> */}
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹5999<sub>One Time</sub>
                        </h2>
                      </div>
                      <ul className="plan-list">
                        <li>Video Live on Vevo Video</li>
                        <li>Video Live on MX Player</li>
                        <li>5 to 10 Days Approval</li>
                        <li>One time Payment</li>
                        <li>Video Availability Lifetime</li>
                        <li>95% Royalty</li>
                        <li>Payment/Report (6 Months)</li>
                      </ul>
                    </div>
                    <div className="plan-footer">
                      <div className="plan-btn">
                        <a href="#0" className="btn--base active w-100">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                  <div className="plan-item">
                    <div className="plan-header">
                      <h3 className="title">Single Music Video Distribution</h3>
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹399<sub>One Time</sub>
                        </h2>
                      </div>
                      <ul className="plan-list">
                        <li>Video Live on MX Player</li>
                        <li>5 to 10 Days Approval</li>
                        <li>One time Payment</li>
                        <li>Video Availability Lifetime</li>
                        <li>95% Royalty</li>
                        <li>Payment/Report (6 Months)</li>
                      </ul>
                    </div>
                    <div className="plan-footer">
                      <div className="plan-btn">
                        <a href="#0" className="btn--base active w-100">
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
