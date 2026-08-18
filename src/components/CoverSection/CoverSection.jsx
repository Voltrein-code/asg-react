/* eslint-disable import/order */
import Laptop from "../Laptop/Laptop";
import "./CoverSection.css";

export default function CoverSection() {
  return (
    <section className="cover">
      <div className="cover__container">
        <div className="cover__info">
          <h2 className="cover__heading">Обсудите задачу с нами</h2>
          <p className="cover__text">
            Позвоните или напишите по указанным контактам — формы сбора данных
            на сайте нет.
          </p>
        </div>
        <a href="#contacts" className="button button_type_order anchor-scroll">
          Перейти к контактам
        </a>
        <div className="cover__visuals">
          <Laptop />
        </div>
      </div>
    </section>
  );
}
