import "./Footer.css";
import {
  bankDetails,
  itActivityCodes,
  organization,
} from "../../content/siteContent";

const legalDetails = [
  {
    title: "Наименование",
    text: organization.fullName,
  },
  {
    title: "Реквизиты",
    lines: [
      `ИНН: ${organization.inn}`,
      `КПП: ${organization.kpp}`,
      `ОГРН: ${organization.ogrn}`,
    ],
  },
  {
    title: "Юридический адрес",
    text: organization.address,
  },
  {
    title: "Основной код ОКВЭД",
    text: `${organization.okved.code} — ${organization.okved.description}`,
  },
  {
    title: "Виды ИТ-деятельности согласно приказу Минцифры №449",
    text: itActivityCodes.map((activity) => activity.code).join(", "),
  },
];

export default function Footer() {
  const getCurrentYear = () => {
    return String(new Date().getFullYear());
  };

  return (
    <footer className="footer" id="requisites" tabIndex="-1">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__brand-name">АСГ48</p>
            <p className="footer__brand-text">
              ИТ-услуги, разработка, внедрение и сопровождение
            </p>
          </div>
          <p className="footer__note">Реквизиты компании</p>
        </div>
        <ul className="footer__contacts">
          {legalDetails.map((detail) => (
            <li className="footer__contact" key={detail.title}>
              <span className="footer__contact-name">{detail.title}</span>
              {detail.lines ? (
                <div className="footer__contact-lines">
                  {detail.lines.map((line) => (
                    <p className="footer__contact-text no-margin" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="footer__contact-text">{detail.text}</p>
              )}
            </li>
          ))}
        </ul>
        <details className="footer__bank-details">
          <summary>Банковские реквизиты</summary>
          <p>
            {bankDetails.bank}, р/с: {bankDetails.settlementAccount}, БИК:{" "}
            {bankDetails.bik}, к/с: {bankDetails.correspondentAccount}.
          </p>
        </details>
        <nav className="footer__navigation" aria-label="Навигация в подвале">
          <a href="#services">Услуги</a>
          <a href="#technologies">Технологии</a>
          <a href="#it-accreditation">Сведения об ИТ-деятельности</a>
          <a href="#privacy">Конфиденциальность сайта</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <p className="footer__text">©АСГ48 2022 - {getCurrentYear()}</p>
      </div>
    </footer>
  );
}
