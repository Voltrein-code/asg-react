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
            <span className="footer__contact-name">Наименование</span>
            <p className="footer__contact-text">ООО "АСГ48"</p>
          </li>
          <li className="footer__contact">
            Юридический адрес: Липецкая область, Липецкий муниципальный округ,
            территория Комплекс Рудничный, здание 1
          </li>
          <li className="footer__contact">ИНН: 4813030827</li>
          <li className="footer__contact">КПП: 481301001</li>
          <li className="footer__contact">ОГРН: 1224800012910</li>
        </ul>
        <p className="footer__text">©АСГ48 2023 - {getCurrentYear()}</p>
      </div>
    </footer>
  );
}
