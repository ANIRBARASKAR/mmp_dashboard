import Lottie from "lottie-react";
import LogInAnimation from "../../../assets/animation/Register.json";
import { Link } from "react-router-dom";
import GoogleLogIn from "../../../components/GoogleLogIn/GoogleLogIn";

const RegisterFrom = ()=> {

  return (
    <div class="container overflow-hidden text-center py-5 my-5">
      <div class="row gy-5">
        <div class="col-sm-1  col-md-6">
          <Lottie animationData={LogInAnimation} loop={true} />

          <p className="link-underline-dark">
            <Link to="/logIn">Have an already account?Then LogIn </Link>
          </p>
        </div>
        <div class="col-sm-1 col-md-6 ">
          <form className="contact-form">
            <div className=" mb-25-none">
              <div className="text-left form-group">
                <label>Enter Name: </label>
                <input type="text" name="name"  className="form--control" />
              </div>

              <div className="text-left form-group">
                <label>Email Address: </label>
                <input type="email" name="email" className="form--control" />
              </div>
              <div className="text-left form-group">
                <label>Password: </label>
                <input type="password" name="password"  className="form--control" />
              </div>
              <div className="text-left form-group">
                <label>Number: </label>
                <input type="tel" name="number" className="form--control" />
              </div>

              <div className="col-xl-12 col-lg-12 form-group text-left">
                <Link to="/dashboard">
                  {" "}
                  <button type="submit"  className="btn--base mt-20">
                    Register <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <GoogleLogIn></GoogleLogIn>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
