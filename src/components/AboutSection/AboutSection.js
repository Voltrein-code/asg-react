import "./AboutSection.css";

import { aboutData } from "../../utils/data";
import AboutCard from "../AboutCard/AboutCard";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__info">
        <h2 className="about__heading section-heading">О нас</h2>
        <p className="section-text about__text">
          Наша Компания предлагает услуги в области информационных технологий –
          аутсорсинг, разработку ПО, поддержку серверов для организаций и
          юридических лиц. Нам делегируют экспертные задачи по профессиональному
          сопровождению ИТ-инфраструктуры как новые компании, начинающие свой
          бизнес-путь, так и крупные организации, испытывающие потребность в
          привлечении компетентных специалистов в связи с растущими
          потребностями в сфере IT.
        </p>
      </div>
      <div className="about__cards">
        {aboutData.map((card) => {
          return (
            <AboutCard
              image={card.cardIcon}
              name={card.cardHeading}
              text={card.cardSubtitle}
            />
          );
        })}
      </div>
    </section>
  );
}
