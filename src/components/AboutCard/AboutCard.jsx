import arrowIcon from "../../media/card-button-arrow.svg";

export default function AboutCard({ image, name, text, details, onCardClick }) {
  return (
    <article className="card card_type_about">
      <img
        className="card__image card__image_type_icon"
        src={image}
        alt="Иконка"
      />
      <div className="card__info">
        <h3 className="card__heading">{name}</h3>
        <p className="card__text">{text}</p>
      </div>
      {details && (
        <button className="card__button" onClick={onCardClick}>
          Узнать больше
          <img
            alt="Иконка стрелки вправо"
            src={arrowIcon}
            className="card__button-arrow"
          />
        </button>
      )}
    </article>
  );
}
