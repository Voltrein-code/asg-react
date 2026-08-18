import "./HeaderMenu.css";

const menuItems = [
  { href: "#services", label: "Услуги" },
  { href: "#technologies", label: "Технологии" },
  { href: "#it-accreditation", label: "ИТ-деятельность" },
  { href: "#contacts", label: "Контакты" },
  { href: "#requisites", label: "Реквизиты" },
];

export default function HeaderMenu() {
  return (
    <nav aria-label="Основная навигация">
      <ul className="header__menu">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a className="header__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
