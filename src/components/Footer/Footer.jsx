import "./Footer.css";

const legalDetails = [
  {
    title: "Наименование",
    text: 'ООО "АСГ48"',
  },
  {
    title: "Банк",
    text: "АО «Россельхозбанк», р/с: 40702810224000001658, БИК: 044206756, к/с: 30101810800000000756",
  },
  {
    title: "Реквизиты",
    lines: ["ИНН: 4813030827", "КПП: 481301001", "ОГРН: 1224800012910"],
  },
  {
    title: "Юридический адрес",
    text: "398501, Липецкая обл, Липецкий м.о., Комплекс Рудничный тер., здание № 1",
  },
  {
    title: "Основной код ОКВЭД",
    text: "62.01 Разработка компьютерного программного обеспечения",
  },
  {
    title: "Фактический адрес",
    text: "398501, Липецкая обл, Липецкий м.о., Комплекс Рудничный тер., здание № 1",
  },
  {
    title: "Виды ИТ-деятельности согласно приказу Минцифры №449",
    text: "1.01, 3.01, 4.01, 28.01, 28.02",
  },
];

export default function Footer() {
  const getCurrentYear = () => {
    return String(new Date().getFullYear());
  };

  return (
    <footer className="footer">
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
        <p className="footer__text">©АСГ48 2022 - {getCurrentYear()}</p>
      </div>
    </footer>
  );
}
