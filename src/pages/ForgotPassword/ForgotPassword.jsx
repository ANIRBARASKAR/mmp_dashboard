import CommonBanner from "../../components/CommonBanner/CommonBanner";
import ForgotPasswordPage from "./ForgotPasswordPage/ForgotPasswordPage";
const ForgotPassword = () => {
  return (
    <div>
      {" "}
      {/* Banner start */}
      <CommonBanner
        title="
 Forgot Password"
        pageName="Forgot Password"
      ></CommonBanner>
      <ForgotPasswordPage></ForgotPasswordPage>
    </div>
  );
};

export default ForgotPassword;
