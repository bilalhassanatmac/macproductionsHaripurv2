import { useLocation } from "react-router-dom";
import "./portfolioPage.css";

const PortfolioPage = () => {
  const location = useLocation();
  return (
    <div className="portfolio-page reveal">
      <div className="portfolio-page-top section-padding">
        <h2>Home ~ {location.state.name.cardName}</h2>
      </div>
      <div className="portfolio-page-left" >
        <img src={location.state.name.image} alt="" />
      </div>
      <div className="portfolio-page-right" >
        <h1>{location.state.name.cardName}</h1>
      </div>
    </div>
  )
}

export default PortfolioPage;