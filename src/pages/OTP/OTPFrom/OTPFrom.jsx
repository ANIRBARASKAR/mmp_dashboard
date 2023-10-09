import Lottie from "lottie-react";
import OTP from "../../../assets/animation/otp.json";
import { Link } from "react-router-dom";

const OTPFrom = () => {
  return (
    <div class="container overflow-hidden text-center py-5 my-5">
      <div class="row gy-5">
        <div class="col-sm-1  col-md-6">
          <Lottie animationData={OTP} loop={true} />
        </div>
        <div class="col-sm-1 col-md-6 p-5 my-5">
          <h2>OTP Verfication</h2>
          <p>Enter your OTP code</p>
          <form className="contact-form">
            <div className="row justify-content-center mb-25-none">
              <div className="col-xl-3  col-lg-3 col-md-2 col-sm-1 form-group">
                <input type="text" name="number1" className="form--control" />
              </div>
              <div className="col-xl-3  col-lg-3 col-md-2 col-sm-1 form-group">
                <input type="text" name="number2" className="form--control" />
              </div>
              <div className="col-xl-3  col-lg-3 col-md-2 col-sm-1 form-group">
                <input type="text" name="number5" className="form--control" />
              </div>
              <div className="col-xl-3  col-lg-3 col-md-2 col-sm-1 form-group">
                <input type="text" name="number4" className="form--control" />
              </div>

              <div className="col-xl-12 col-lg-12 form-group text-center">
                <Link to="/dashboard">
                  {" "}
                  <button type="submit" className="btn--base mt-20">
                    Verify OTP <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPFrom;
