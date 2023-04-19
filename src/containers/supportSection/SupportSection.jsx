import "./supportSection.css";
import serviceIcon from "../../images/supportSection/support.svg";
import { useEffect } from "react";

const ServiceSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="aboutUs" className="service-section-main reveal" >
        <div className="service-section-sub container section-padding" >
            <div className="left-section" >
                <img src={serviceIcon} alt="services icon" />
            </div>
            <div className="right-section" >
                <h2>Who We Are</h2>
                <div className="info" >
                <p>
                  MAC Production & Graphics is a company that specializes in the creation of various forms of media content, including short films, digital content, advertisements, and other multimedia projects. We are responsible for the entire process of media production & digital content creation, from ideation and conceptualization to filming, editing, post-production & graphic designing.
                  We are a team of creative professionals such as editors, graphic designers, web developers and cinematographers to bring their ideas to life. We utilize the latest technology and equipment to create high-quality media content that is engaging, informative, and visually appealing.
                  We work with clients to produce content for their specific needs. This may include commercials, promotional videos, corporate videos, training videos, graphic design, Social media management, documenteries & short films. We work closely with our clients to understand their needs and create content that is aligned with their brand identity and messaging.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection;