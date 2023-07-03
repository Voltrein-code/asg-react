import "./HeaderMenu.css";
import Button from "../Button/Button";

export default function HeaderMenu() {
  return (
    <ul className="header__menu">
      <li>
        <Button styles="button button_type_about">О компании</Button>
      </li>
      <li>
        <Button styles="button button_type_about" withRocket={true}>
          Написать нам
        </Button>
      </li>
    </ul>
  );
}
