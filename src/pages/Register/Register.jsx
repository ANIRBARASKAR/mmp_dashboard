import React from "react";

import RegisterFrom from "./RegisterFrom/RegisterFrom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const Register = () => {
  return (
    <div>
      {/* Banner start */}
      <CommonBanner
        title="
      Regiter Now"
        pageName="Register"
      ></CommonBanner>
      {/* Banner end */}
      <RegisterFrom></RegisterFrom>
    </div>
  );
};

export default Register;
