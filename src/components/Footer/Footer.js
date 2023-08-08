import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">@ 2023 АСГ48</p>
        <ul className="footer__contacts">
          <li className="footer__contact">
            Наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АСГ48"
          </li>
          <li className="footer__contact">
            Юридический адрес: Липецкая область, Липецкий р-н, тер. Комплекс
            Рудничный, зд. 3
          </li>
          <li className="footer__contact">ИНН: 4813030827</li>
          <li className="footer__contact">КПП: 481301001</li>
          <li className="footer__contact">ОГРН: 1224800012910</li>
        </ul>
      </div>
    </footer>
  );
}
