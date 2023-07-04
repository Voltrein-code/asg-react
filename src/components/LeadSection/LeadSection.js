import Button from "../Button/Button";
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
              <Button styles="button button_type_order" withRocket={true}>
                Написать нам
              </Button>
            </li>
            <li>
              <Button styles="button button_type_examples">Наши услуги</Button>
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
