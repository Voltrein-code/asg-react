import "./AboutDetails.css";
import React from "react";

const AboutDetails = ({ aboutData }) => {
  const { cardIcon, cardHeading, cardSubtitle, cardDetails } = aboutData;

  return (
    <div className="about-details">
      <div className="about-details__content">
        <img
          className="about-details__picture"
          alt="Иконка услуги"
          src={cardIcon}
        />
        <div className="about-details__heading">
          <h3 className="about-details__title">{cardHeading}</h3>
          <p className="about-details__subtitle">{cardSubtitle}</p>
        </div>
      </div>
      <div className="about-details__text">
        {cardDetails.map((element, index) => {
          return (
            <div className="about-details__card" key={index}>
              <h4 className="about-details__card-name">{element.name}</h4>
              <p className="about-details__card-text">{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutDetails;
