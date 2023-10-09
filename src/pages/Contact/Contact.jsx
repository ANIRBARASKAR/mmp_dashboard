import { Link } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactFrom from "./ContactFrom/ContactFrom";

const Contact = () => {
  return (
    <div>
      {/* Banner start */}
      <CommonBanner title="Contact us" pageName="Contact us"></CommonBanner>
      {/* Banner end */}
      {/* Start Scroll-To-Top
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
      <Link to="#" className="scrollToTop">
        <i className="las la-angle-double-up"></i>
      </Link>
      {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    End Scroll-To-Top
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}

      {/* Contact Info start  */}
      <ContactInfo></ContactInfo>
      {/* Contact Info end  */}

      {/* Contact form Start */}
      <ContactFrom></ContactFrom>
      {/* Contact form End */}
    </div>
  );
};

export default Contact;
