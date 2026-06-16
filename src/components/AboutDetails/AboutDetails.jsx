import "./AboutDetails.css";

const AboutDetails = ({ aboutData }) => {
  const { cardIcon, cardHeading, cardSubtitle, cardDetails } = aboutData;

  return (
    <div className="about-details">
      <div className="about-details__content">
        <img
          className="about-details__picture"
          alt="Иконка услуги"
          src={cardIcon}
        />
        <div className="about-details__heading">
          <h3 className="about-details__title">{cardHeading}</h3>
          <p className="about-details__subtitle">{cardSubtitle}</p>
        </div>
      </div>
      <div className="about-details__text">
        {cardDetails.map((element, index) => {
          const isIntroCard = index === 0;

          return (
            <article
              className={
                isIntroCard
                  ? "about-details__card about-details__card_type_intro"
                  : "about-details__card"
              }
              key={`${element.name}-${index}`}
            >
              <div className="about-details__card-header">
                {!isIntroCard && (
                  <span className="about-details__card-number">
                    {String(index).padStart(2, "0")}
                  </span>
                )}
                <h4 className="about-details__card-name">{element.name}</h4>
              </div>
              <div className="about-details__card-body">
                <p className="about-details__card-text">{element.text}</p>
                {element.list && (
                  <ul className="about-details__card-list">
                    {element.list.map((item, itemIndex) => {
                      return (
                        <li
                          className="about-details__card-list-item"
                          key={`${element.name}-${itemIndex}`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AboutDetails;
