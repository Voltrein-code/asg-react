import "./ProductDetails.css";
import React from "react";

const ProductDetails = ({ productData }) => {
  const { cardIcon, cardHeading, cardSubtitle, cardDetails } = productData;

  return (
    <div className="product-details">
      <div className="product-details__content">
        <img
          className="product-details__picture"
          alt="Иконка услуги"
          src={cardIcon}
        />
        <div className="product-details__heading">
          <h3 className="product-details__title">{cardHeading}</h3>
          <p className="product-details__subtitle">{cardSubtitle}</p>
        </div>
      </div>
      <div className="product-details__text">
        {cardDetails.map((element, index) => {
          return (
            <div className="product-details__card" key={index}>
              <h4 className="product-details__card-name">{element.name}</h4>
              <p className="product-details__card-text">{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
