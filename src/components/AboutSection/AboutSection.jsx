import "./AboutSection.css";

import { useEffect, useState } from "react";
import { aboutData } from "../../utils/data";
import AboutCard from "../AboutCard/AboutCard";
import Modal from "../Modal/Modal";
import AboutDetails from "../AboutDetails/AboutDetails";

export default function AboutSection() {
  const [aboutInModal, setAboutInModal] = useState(null);
  const closeAboutInModal = () => setAboutInModal(null);

  useEffect(() => {
    document.body.style.overflow = aboutInModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [aboutInModal]);

  return (
    <>
      <section className="about" id="about" tabIndex="-1">
        <div className="about__info">
          <h2 className="about__heading section-heading">О нас</h2>
          <p className="section-text about__text">
            Наша Компания предлагает услуги в области информационных технологий
            – аутсорсинг, разработку ПО, поддержку серверов для организаций и
            юридических лиц. Нам делегируют экспертные задачи по
            профессиональному сопровождению ИТ-инфраструктуры как новые
            компании, начинающие свой бизнес-путь, так и крупные организации,
            испытывающие потребность в привлечении компетентных специалистов в
            связи с растущими потребностями в сфере IT.
          </p>
        </div>
        <div className="about__cards">
          {aboutData.map((card) => {
            return (
              <AboutCard
                key={card.cardHeading}
                image={card.cardIcon}
                name={card.cardHeading}
                text={card.cardSubtitle}
                details={card.cardDetails}
                onCardClick={() => setAboutInModal(card)}
              />
            );
          })}
        </div>
      </section>
      {aboutInModal && (
        <Modal
          onClose={closeAboutInModal}
          title={`Подробнее: ${aboutInModal.cardHeading}`}
        >
          <AboutDetails aboutData={aboutInModal} />
        </Modal>
      )}
    </>
  );
}
