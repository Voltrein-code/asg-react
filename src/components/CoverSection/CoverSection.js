/* eslint-disable import/order */
import Laptop from "../Laptop/Laptop";
import "./CoverSection.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <AnchorLink href="#order" className="anchor-scroll">
          <button className="button button_type_order">Оставить заявку</button>
        </AnchorLink>
        <div className="cover__visuals">
          <Laptop />
        </div>
      </div>
    </section>
  );
}
