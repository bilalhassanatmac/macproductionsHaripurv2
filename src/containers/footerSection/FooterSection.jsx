import "./footerSection.css";
import numberIcon from "../../images/footerIcons/number.svg";
import emailIcon from "../../images/footerIcons/email.svg";
import locationIcon from "../../images/footerIcons/location.svg";
import facebookIcon from "../../images/footerIcons/facebook.svg";
import instagramIcon from "../../images/footerIcons/instagram.svg";
import twitterIcon from "../../images/footerIcons/twitter.svg";
import { Map } from "../../components/index";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
  const location = useLocation();
  
  return (
    <div id="contactUs" className={`footer-wrapper reveal ${location.pathname == '/contact-us'  ? "contact-height" : ""} `} >
      <div class={`custom-shape-divider-top-1681868556 ${location.pathname == '/contact-us' ?  "hide-svg" : ""} ${location.pathname == '/services' ?  "hide-svg" : ""} ${location.pathname == '/service' ?  "hide-svg" : ""} `} >
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <div className="footer-section container section-padding-top">
        <div className="footer-icons" >
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
              <img src={numberIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Call Us</p>
              <p className="sub">+92 333 8070666</p>
            </div>
          </div>
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
            <img src={emailIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Email Us</p>
              <p className="sub">mac.hrp01@gmail.com</p>
            </div>
          </div>
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
              <img src={locationIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Reach Us</p>
              <p className="sub">Haripur, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Map/>
      <hr />
      <div className="footer-end container section-padding-bottom" >
        <div className="footer-end-icons section-margin" >
          <a href="https://www.facebook.com/mac.hrp/" target="_blank">
          <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="">
          <img src={instagramIcon} alt="facebook icon" />
          </a>
          <a href="">
          <img src={twitterIcon} alt="facebook icon" />
          </a>
        </div>
        <p>© Copyright 2023 MAC Production & Graphics All Rights Reserved</p>
      </div>
    </div>
  )
}

export default FooterSection;