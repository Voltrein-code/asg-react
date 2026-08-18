import { technologies } from "../../content/siteContent";
import "./TechnologiesSection.css";

export default function TechnologiesSection() {
  return (
    <section className="technologies" id="technologies" tabIndex="-1">
      <div className="technologies__intro">
        <h2 className="section-heading">Используемые технологии</h2>
        <p className="section-text">
          Применяем технологии, которые фактически используются при разработке,
          внедрении и сопровождении решений.
        </p>
      </div>
      <ul className="technologies__list">
        {technologies.map((technology) => (
          <li className="technologies__item" key={technology.name}>
            <h3 className="technologies__name">{technology.name}</h3>
            <p className="technologies__description">
              {technology.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="technologies__note">
        Компания использует платформу 1С в работе, но не является официальным
        партнёром 1С.
      </p>
    </section>
  );
}
