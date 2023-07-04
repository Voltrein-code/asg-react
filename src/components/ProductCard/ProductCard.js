export default function ProductCard({ image, name, text, checkList }) {
  return (
    <article className="card card_type_product">
      <div className="card__info card__info_type_product">
        <img
          className="card__image card__image_type_icon"
          src={image}
          alt="Иконка"
        />
        <h3 className="card__heading card__heading_type_product">{name}</h3>
        <p className="card__text card__text_type_product">{text}</p>
      </div>
      <ul className="card__features">
        <li className="card__feature">
          <div className="card__feature-check"></div>
          {checkList[0]}
        </li>
        <li className="card__feature">
          <div className="card__feature-check"></div>
          {checkList[1]}
        </li>
        <li className="card__feature">
          <div className="card__feature-check"></div>
          {checkList[2]}
        </li>
      </ul>
      <button className="button button_type_product">Подробнее</button>
    </article>
  );
}
