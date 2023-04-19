import "./serviceCard.scss";
import React from 'react';
import { Link } from "react-router-dom";

const ServiceCard = ({greenIcon ,image, name, info, pageInfo, pageImages, pageDescription}) => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <img src={image}/>
            <p class="card-text">{info}</p>
            <Link to="/service" state={{name, pageImages ,pageInfo, pageDescription}} className="button button-small button-white">View</Link>
          </div>
        </div>
        <div class="face face2">
          <img src={greenIcon} alt="" />
          <h4>{name}</h4>
          <Link to="/service" state={{name, pageImages ,pageInfo, pageDescription}} className="button button-small button-green">View</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;