import "./heroSection.css";
import { HeroCard, Spinner } from "../../components/index";
import heroBanner from "../../images/heroSection/banner.svg";
import adIcon from "../../images/heroIcons/advertisment.svg";
import webIcon from "../../images/heroIcons/webdev.svg";
import graphicIcon from "../../images/heroIcons/graphicsdesign.svg";
import whatsappIcon from "../../images/heroSection/whatsapp.svg";
const HeroSection = () => { 
  const services = [
    {
      name: "Graphic Designing Video Editing",
      info: "We provide a full graphic design and Video Editing services to help you communicate your message",
      image: adIcon
    },
    {
      name: "Advertising and Marketing",
      info: "We create campaings and all type of  digital content for Advertising and Marketing",
      image: webIcon
    },
    {
      name: "Development",
      info: "We offers you a range of development services with a passion for building state-of-the-art websites for your business",
      image: graphicIcon
    },
  ];
  return (
    <div id="home" className="hero-section" >
      <div className="pos-center">
      </div>
      <a href="https://api.whatsapp.com/send?phone=+923338070666&text=Hi%20there%21" className="float" target="_blank">
      <i className="fa fa-whatsapp my-float">
        <img className="float-icon" src={whatsappIcon} alt="" srcSet="" />
      </i>
      </a>
      <div className="hero-flex container" >
        <div className="hero-section-left">
          <h1>
            <span>
            We do
            </span>
            <br/> 
            <span className="what-we" >
            What we Say
            </span>
            </h1>
          <div>
          <div className="description" >
            <p>
            MAC Production & Graphics is a company that specializes in the creation of various forms of media content, including commercials, promotional videos, corporate videos, training videos, graphic designs, social media management, documenteries, short films and other multimedia projects. We are responsible for the entire process of media production & digital content creation, from ideation and conceptualization to filming, editing, post-production & graphic designing.
            </p> 
          </div>
            <a href="https://www.google.com/maps/place/MAC+Production+%26+Graphics/@33.9939075,72.93723,15z/data=!4m2!3m1!1s0x0:0xd5783962cdeab88e?sa=X&ved=2ahUKEwi8nITgjpX-AhXN7rsIHZUWATAQ_BJ6BAhXEAM" target="_blank" >
            <div className="button button-big button-blue">
              <p>Meet with Us</p>
            </div>
            </a>

          </div>
        </div>
        <div className="hero-section-right">
          <img src={heroBanner} alt="Hero Banner"/>
        </div>
      </div>
      <div className="hero-cards-section" >
        <div className="hero-animation" >
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,112,56,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,112,56,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,112,56,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#007038" />
            </g>
            </svg>
        </div>
        <div className="hero-cards container">
          {
            services.map(
              service =>
              (
                <HeroCard name={service.name} image={service.image} info={service.info} key={service.name} />
              )
            )
          }
        </div>
        <div class="custom-shape-divider-bottom-1681868050">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;