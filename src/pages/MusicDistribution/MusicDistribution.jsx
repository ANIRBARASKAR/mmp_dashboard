import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import MusicService from "./MusicService/MusicService";
import Proccess from "../../components/Process/Proccess";
import WeDo from "../../components/WeDo/WeDo";
import MusicDistribitionIndia from "./MusicDistributionIndia/MusicDistribitionIndia";
import MusicPlans from "../../components/MusicPlans/MusicPlans";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";

const MusicDistribution = () => {
  return (
    <div>
      {/* Music service part start */}
      <MusicService></MusicService>
      {/* Music service part end */}
      {/* Gallaery part start */}
      <Gallery direction="left"></Gallery>
      {/* Gallaery part end */}
      {/* Proccess part start */}
      <Proccess></Proccess>
      {/* Proccess part end */}

      {/* Music distrubiton india part start */}
      <MusicDistribitionIndia></MusicDistribitionIndia>
      {/* Music distrubiton india part end */}

      {/* Plans part start */}
      <MusicPlans></MusicPlans>
      {/* Plans part 
      end */}
      {/* About part start  */}
      <About></About>
      {/* About part end  */}

      {/* wedo part start */}
      <WeDo></WeDo>
      {/* wedo part end */}
      {/* FAQ part start  */}
      <FAQ></FAQ>
      {/* FAQ part end  */}
    </div>
  );
};

export default MusicDistribution;
