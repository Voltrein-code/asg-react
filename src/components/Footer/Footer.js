import "./Footer.css";

export default function Footer() {
  const getCurrentYear = () => {
    return String(new Date().getFullYear());
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__contacts">
          <li className="footer__contact">
            <span className="footer__contact-name">Наименование:</span>
            <p className="footer__contact-text">ООО "АСГ48"</p>
          </li>
          <li className="footer__contact">
            <span className="footer__contact-name">Банк:</span>
            <p className="footer__contact-text">
              АО «Россельхозбанк», р/с: 40702810224000001658, БИК: 044206756,
              к/с: 30101810800000000756
            </p>
          </li>
          <li className="footer__contact">
            <p className="footer__contact-text no-margin">
              <span className="footer__contact-name">ИНН: </span> 4813030827
            </p>
            <p className="footer__contact-text no-margin">
              <span className="footer__contact-name">КПП: </span> 481301001
            </p>
            <p className="footer__contact-text no-margin">
              <span className="footer__contact-name">ОГРН: </span> 1224800012910
            </p>
          </li>
          <li className="footer__contact">
            <span className="footer__contact-name">Юридический адрес:</span>
            <p className="footer__contact-text">
              398501, Липецкая обл, Липецкий м.о., Комплекс Рудничный тер.,
              здание № 1
            </p>
          </li>
          <li className="footer__contact">
            <span className="footer__contact-name">Основной код ОКВЭД:</span>
            <p className="footer__contact-text">1224800012910</p>
          </li>
          <li className="footer__contact">
            <span className="footer__contact-name">Фактический адрес:</span>
            <p className="footer__contact-text">
              398501, Липецкая обл, Липецкий м.о., Комплекс Рудничный тер.,
              здание № 1
            </p>
          </li>
          <li className="footer__contact">
            <span className="footer__contact-name">
              Виды ИТ-деятельности согласно приказу Минцифры №449:
            </span>
            <p className="footer__contact-text">
              1.01, 3.01, 4.01, 28.01, 28.02
            </p>
          </li>
        </ul>
        <p className="footer__text">©АСГ48 2022 - {getCurrentYear()}</p>
      </div>
    </footer>
  );
}
