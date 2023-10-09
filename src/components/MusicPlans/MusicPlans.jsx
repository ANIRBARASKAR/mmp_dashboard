const MusicPlans = () => {
  return (
    <section className="plan-section two ptb-120">
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
              <div className="row justify-content-center mb-30-none">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 mb-30">
                  <div className="plan-item">
                    <div className="plan-header">
                      <h3 className="title">
                        Single Song (All Stores + Caller Tune)
                      </h3>
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹299<sub>One Time</sub>
                        </h2>
                        <div className="plan-list">
                          <p>Single Song Music Distribution Plan</p>
                        </div>
                      </div>
                      <ul className="plan-list">
                        <li>All Music Live Steam Platforms</li>
                        <li>Caller Tune Facility</li>
                        <li>95 % Royalty</li>
                        <li>Payment/Report (4 Months)</li>
                        <li>Lifetime Song Availability</li>
                        <li>No Need to Renewal</li>
                        <li>18-24Hours Approval</li>
                        <li>YouTube Content ID</li>
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
                        Record Label (All Store + Caller Tune )
                      </h3>
                      {/* <!-- <div className="plan-badge-area">
                          <span className="plan-badge">Most Popular</span>
                        </div> --> */}
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹1999<sub>Monthly</sub>
                        </h2>
                        <div className="plan-list">
                          <p>
                            Record Label / annually Charges Unlimited
                            Songs/Artist Releases
                          </p>
                        </div>
                      </div>
                      <ul className="plan-list">
                        <li>Unlimited Song/Artist Releases</li>
                        <li>Registered Label in 6-8 Hours</li>
                        <li>All Music Live Steam Platforms</li>
                        <li>Caller Tune Facility</li>
                        <li>Bulk Upload Facility</li>
                        <li>Free ISRC and UPC</li>
                        <li>95% Royalty</li>
                        <li>Payment/Report (4 Months)</li>
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
                        Previous Released Songs (Selected Platforms + Caller
                        Tune)
                      </h3>
                    </div>
                    <div className="plan-body">
                      <div className="plan-price-area">
                        <h2 className="price-title">
                          ₹99<sub>One Time</sub>
                        </h2>
                        <div className="plan-list">
                          <p>
                            If your song already Publish on all streaming
                            platforms you can also create callertune for that
                            song
                          </p>
                        </div>
                      </div>
                      <ul className="plan-list">
                        <li>Caller Tune Live in 3 to 6 days</li>
                        <li>Unlimited Storage</li>
                        <li>JIO , VI , BSNL , Airtel</li>
                        <li>No Need to Renewal</li>
                        <li>Lifetime Availability</li>
                        <li>Cross Domain Copy Paste</li>
                        <li>Select Music Stores</li>
                        <li>95% Royalty</li>
                        <li>CRBT Codes</li>
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

export default MusicPlans;
