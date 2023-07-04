import "./CoverSection.css";
import laptopImage from "../../media/laptop-back.jpg";

export default function CoverSection() {
  return (
    <section className="cover">
      <div className="cover__container">
        <div className="cover__info">
          <h3 className="cover__heading">Напишите нам уже сегодня!</h3>
          <p className="cover__text">
            Все очень просто! Нажмите на кнопку ниже и оставьте ваше сообщение.
          </p>
        </div>
        <button className="button button_type_order">Оставить заявку</button>
        <div className="cover__visuals">
          <div className="laptop">
            <div className="laptop__speaker"></div>
            <div className="laptop__screen">
              <div className="laptop__top-bar"></div>
              <img
                className="laptop__image"
                src={laptopImage}
                alt="Фон ноутбука"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
