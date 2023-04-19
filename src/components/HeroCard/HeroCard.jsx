import "./heroCard.css";

const HeroCard = ({image, name, info}) => {
  return (
    <div className="hero-card" >
        <div className="hero-icon" >
          <img className="hero-image"  src={image} alt="icon" />
        </div>
        <h3>{name}</h3>
        <p>{info}</p>
    </div>
  )
}

export default HeroCard;