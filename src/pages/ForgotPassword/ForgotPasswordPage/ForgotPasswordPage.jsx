import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className=" text-center my-5 py-5">
      <h2>Forgot Password</h2>
      <p>Enter your email address</p>
      <div className=" container">
        <form className="contact-form">
          <div className=" mb-25-none">
            <div className=" col-md-6 col-sm-1 mx-auto text-left form-group">
              <input
                type="email"
                name="email"
                className="form--control"
                placeholder="Email Address:"
              />
            </div>

            <Link
              to="/reset-password"
              className="col-xl-12 col-lg-12 form-group text-center"
            >
              <button type="submit" className="btn--base mt-20 ">
                Forgot Password <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
