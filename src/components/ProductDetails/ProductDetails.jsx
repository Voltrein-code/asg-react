import "./ProductDetails.css";

const ProductDetails = ({ productData }) => {
  const {
    cardIcon,
    cardType,
    cardHeading,
    cardSubtitle,
    cardDetails,
    cardPrice,
  } = productData;

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
          <p className="product-details__price">
            <span className="product-details__price-label">Цена</span>
            {cardPrice}
          </p>
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
            <article
              className={
                cardType !== "row"
                  ? "product-details__card"
                  : "product-details__card product-details__card_type_row"
              }
              key={`${element.name}-${index}`}
            >
              <div className="product-details__card-header">
                <span className="product-details__card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="product-details__card-name">{element.name}</h4>
              </div>
              <div className="product-details__card-body">
                <p
                  className={
                    cardType !== "row"
                      ? "product-details__card-text"
                      : "product-details__card-text product-details__card-text_type_row"
                  }
                >
                  {element.text}
                </p>
                {element.list && (
                  <ul className="product-details__card-list">
                    {element.list.map((item, itemIndex) => {
                      return (
                        <li
                          className="product-details__card-list-item"
                          key={`${element.name}-${itemIndex}`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
