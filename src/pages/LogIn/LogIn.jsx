import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import LogInFrom from "./LogInFrom/LogInFrom";

const LogIn = () => {
  return (
    <div>
      {/* Banner start */}
      <CommonBanner title="Log In Now" pageName="Log In Now"></CommonBanner>
      {/* Banner end */}

      {/* LogIn Form start  */}
      <LogInFrom></LogInFrom>
      {/* LogIn Form end  */}
    </div>
  );
};

export default LogIn;
