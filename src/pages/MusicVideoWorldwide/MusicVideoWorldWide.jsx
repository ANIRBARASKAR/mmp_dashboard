import WeDo from "../../components/WeDo/WeDo";
import About from "./About/About";
import OurWork from "./OurWork/OurWork";
import Plans from "./Plans/Plans";
import Service from "./Service/Service";
const MusicVideoWorldWide = () => {
  return (
    <div>
      {/* service part start  */}
      <Service></Service>
      {/* service part end  */}

      {/* our work part start  */}
      <OurWork></OurWork>
      {/* our work part end  */}

      {/* our plan start */}
      <Plans></Plans>
      {/* our plan end */}

      {/* about part start  */}
      <About></About>
      {/* about part end  */}

      {/* wedo part start */}
      <WeDo></WeDo>
      {/* wedo part end */}
    </div>
  );
};

export default MusicVideoWorldWide;
