import "./serviceSection.css";
import services from "./services";
import { ServiceCard } from "../../components/index";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const ServiceSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const service = services;
    const urlPath = useLocation();
  return (
    <div id="services" className="services-section reveal">
            <div class={`custom-shape-divider-top-1681868294 ${urlPath.pathname == '/services' ? 'hide-svg' : ''} `}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className={`services-section-body  section-padding ${location.pathname == "/services" ? "section-padding-small" : ""}  `} >
                <div className="services-section-header">
                    <p>It Support For Business</p>
                    <h2>Our Services</h2>
                </div>
                <div className="services-section-cards" >
                    {
                    service.map(
                        service => <ServiceCard name={service.name} greenIcon={service.greenIcon}  image={service.image} info={service.info} key={service.id} pageInfo={service.info} pageImage={service.greenIcon} pageImages={service.images} pageDescription={service.briefInfo}    />
                    )
                    }
                </div>
            </div>
            <div class={`custom-shape-divider-bottom-1681868449 ${urlPath.pathname == '/services' ? 'hide-svg' : ''} `}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
    </div>
  )
}

export default ServiceSection;
