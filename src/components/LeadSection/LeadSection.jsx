import Smartphone from "../Smartphone/Smartphone";

import "./LeadSection.css";

export default function LeadSection() {
  return (
    <section className="lead">
      <div className="lead__container">
        <div className="lead__heading">
          <h1 className="lead__slogan">
            Разработка, внедрение, консультация, поддержка
          </h1>
          <p className="lead__text">
            Наша компания оказывает ИТ услуги в разных областях. Все от
            проектирования и разработки до внедрения и сопровождения
          </p>
          <ul className="lead__buttons">
            <li>
              <a
                href="#contacts"
                className="button button_type_order anchor-scroll"
              >
                Написать нам
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="button button_type_examples anchor-scroll"
              >
                Наши услуги
              </a>
            </li>
          </ul>
        </div>
        <div className="lead__visuals">
          <Smartphone />
        </div>
      </div>
    </section>
  );
}
