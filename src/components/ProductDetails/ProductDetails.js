import "./ProductDetails.css";
import React from "react";

const ProductDetails = ({ productData }) => {
  const { cardIcon, cardType, cardHeading, cardSubtitle, cardDetails } =
    productData;

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
      <div
        className={
          cardType !== "row"
            ? "product-details__text"
            : "product-details__text product-details__text_type_row"
        }
      >
        {cardDetails.map((element, index) => {
          return (
            <div
              className={
                cardType !== "row"
                  ? "product-details__card"
                  : "product-details__card product-details__card_type_row"
              }
              key={index}
            >
              <h4 className="product-details__card-name">{element.name}</h4>
              <p
                className={
                  cardType !== "row"
                    ? "product-details__card-text"
                    : "product-details__card-text product-details__card-text_type_row"
                }
              >
                {element.text}
                {element.list && (
                  <ul className="product-details__card-list">
                    {element.list.map((item) => {
                      return (
                        <li className="product-details__card-list-item">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
