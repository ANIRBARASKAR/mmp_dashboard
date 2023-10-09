import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const ResetPassrod = () => {
  return (
    <div>
      {/* Banner start */}
      <CommonBanner
        title="
 Reset Password"
        pageName="Reset Password"
      ></CommonBanner>
      <div className="container text-center my-5 py-5">
        <h2>Reset Password</h2>
        <div className=" mx-auto">
          <form className="contact-form ">
            <div className=" mb-25-none">
              <div className="col-md-6 col-sm-1 mx-auto text-left form-group">
                <input
                  type="password"
                  name="password"
                  className="form--control"
                  placeholder="Enter your new password"
                />
              </div>
              <div className="col-md-6 col-sm-1 mx-auto text-left form-group">
                <input
                  type="password"
                  name="confrim_password"
                  className="form--control"
                  placeholder="Enter your confrim password"
                />
              </div>

              <div className="col-xl-12 col-lg-12 form-group text-center">
                <button type="submit" className="btn--base mt-20 ">
                  Reset Password<i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassrod;
