import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Featuers from "../../components/Featuers/Featuers";
import Gallery from "../../components/Gallery/Gallery";
import Media from "../../components/Media/Media";
import WeDo from "../../components/WeDo/WeDo";
import CoreServices from "./CoreService/CoreServices";
import StartGetUp from "./StartGetUp/StartGetUp";
import Proccess from "../../components/Process/Proccess";
import Segment from "./Segment/Segment";

const Home = () => {
  return (
    <main>
      {/* Banner part start ----------------------------------------*/}
      <Banner></Banner>
      {/* Banner part 
       end ------------------------------------------------------------------- */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Scroll-To-Top
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}

      <Link to="/" className="scrollToTop">
        <i className="las la-angle-double-up"></i>
      </Link>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End Scroll-To-Top
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Service
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Featuers></Featuers>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End Service
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Gallery
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Gallery direction="center"></Gallery>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End Gallery
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start Media
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Media></Media>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End Media
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start we do
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <WeDo></WeDo>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End we do
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start core services
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <CoreServices></CoreServices>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End core services
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start segment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Segment></Segment>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End segment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Proccess></Proccess>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Start start get up
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <StartGetUp></StartGetUp>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End start get up
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
    </main>
  );
};

export default Home;
