import "./HeaderMenu.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button/Button";

export default function HeaderMenu() {
  return (
    <ul className="header__menu">
      <li>
        <AnchorLink href="#about" className="anchor-scroll">
          <Button styles="button button_type_about">О компании</Button>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#order" className="anchor-scroll">
          <Button styles="button button_type_order" withRocket={true}>
            Написать нам
          </Button>
        </AnchorLink>
      </li>
    </ul>
  );
}
