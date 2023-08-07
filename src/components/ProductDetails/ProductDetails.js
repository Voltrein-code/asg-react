import "./ProductDetails.css";

const ProductDetails = ({ productData }) => {
  const { picture, title, subtitle, text } = productData;

  return (
    <div className="product-details">
      <img
        className="product-details__picture"
        alt="Иконка услуги"
        src={picture}
      />
      <div className="product-details__content">
        <h3 className="product-details__title">{title}</h3>
        <p className="product-details__subtitle">{subtitle}</p>
        <p className="product-details__text">{text}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
