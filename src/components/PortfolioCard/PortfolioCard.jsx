import "./portfolioCard.css";


const PortfolioCard = ({img, name, description, cardName, image}) => {  
  
  return (
    <div className="portfolio-card">
        <img   src={img} alt="" />
    </div>
  )
}

export default PortfolioCard;