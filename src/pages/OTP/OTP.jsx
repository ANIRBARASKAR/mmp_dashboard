import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import OTPFrom from "./OTPFrom/OTPFrom";

const OTP = () => {
  return (
    <div>
      {/* Banner start */}
      <CommonBanner
        title="
     OTP Verification"
        pageName="OTP"
      ></CommonBanner>
      {/* Banner end */}
      <OTPFrom></OTPFrom>
    </div>
  );
};

export default OTP;
