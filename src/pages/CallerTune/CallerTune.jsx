import React from "react";
import MusicPlans from "../../components/MusicPlans/MusicPlans";
import Proccess from "../../components/Process/Proccess";
import WeDo from "../../components/WeDo/WeDo";
import Service from "./Service/Service";
import About from "./About/About";

const CallerTune = () => {
  return (
    <div>
      {/* servie part start  */}
      <Service></Service>
      {/* servie part end  */}
      {/* Proccess part start */}
      <Proccess></Proccess>
      {/* Proccess part end */}
      {/* Plans part start */}
      <MusicPlans></MusicPlans>
      {/* Plans part end */}
      {/* about part start */}
      <About></About>
      {/* about part end */}
      {/* wedo part start */}
      <WeDo></WeDo>
      {/* wedo part end */}
    </div>
  );
};

export default CallerTune;
