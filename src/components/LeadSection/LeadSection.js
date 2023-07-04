import Button from "../Button/Button";
import Smartphone from "../Smartphone/Smartphone";

export default function LeadSection() {
  return (
    <section classNameName="lead">
      <div classNameName="lead__container">
        <div classNameName="lead__heading">
          <h1 classNameName="lead__slogan">
            Разработка, внедрение, консультация, поддержка
          </h1>
          <p classNameName="lead__text">
            Наша компания оказывает ИТ услуги в разных областях. Все от
            проектирования и разработки до внедрения и сопровождения
          </p>
          <ul classNameName="lead__buttons">
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
        <div classNameName="lead__visuals">
          <div classNameName="lead__star lead__star_color_white"></div>
          <div className="lead__star lead__star_color_red"></div>
          <Smartphone />
        </div>
      </div>
    </section>
  );
}
