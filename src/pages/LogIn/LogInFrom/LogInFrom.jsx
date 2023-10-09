import Lottie from "lottie-react";
import LogInAnimation from "../../../assets/animation/login2.json";
import { Link } from "react-router-dom";
import GoogleLogIn from "../../../components/GoogleLogIn/GoogleLogIn";

const LogInFrom = () => {
  return (
    <div class="container overflow-hidden text-center py-5 my-5">
      <div class="row gy-5">
        <div class="col-sm-1  col-md-6">
          <Lottie animationData={LogInAnimation} loop={true} />

          <Link to="/register" className="link-underline-dark">
            Don't you have an account? Then Register
          </Link>
        </div>
        <div class="col-sm-1 col-md-6 ">
          <form className="contact-form">
            <div className=" mb-25-none">
              <div className="text-left form-group">
                <label>Email Address: </label>
                <input type="email" name="email" className="form--control" />
              </div>
              <div className="text-left form-group">
                <label>Enter Password: </label>
                <input
                  type="password"
                  name="password"
                  className="form--control"
                />
              </div>
              <p className="link-underline-dark text-left">
                <Link to="/forgot-password">Forgot your password? </Link>
              </p>
              <Link
                to="/otp"
                className="col-xl-12 col-lg-12 form-group text-left"
              >
                <button type="submit" className="btn--base mt-20">
                  LogIn <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </Link>
            </div>
          </form>
          <GoogleLogIn></GoogleLogIn>
        </div>
      </div>
    </div>
  );
};

export default LogInFrom;
