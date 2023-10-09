import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import Plans from "./Plans/Plans";

const Pricings = () => {
  return (
    <div>
      {/* Banner part start */}
      <CommonBanner title="Pricing Plan" pageName="Pricing"></CommonBanner>
      {/* Banner part end */}
      {/* plans start  */}
      <Plans></Plans>
      {/* plans end  */}
    </div>
  );
};

export default Pricings;
