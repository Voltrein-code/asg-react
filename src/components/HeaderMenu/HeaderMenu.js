import { AnchorLink as ScrollableLink} from "react-anchor-link-smooth-scroll";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  return(
    <ul className="header__menu">
      <li>
        <ScrollableLink href="#" className="header__link header__link_type_about">О компании</ScrollableLink>
      </li>
      <li>
        <ScrollableLink href="#" className="header__link header__link_type_order">Написать нам</ScrollableLink>
      </li>
    </ul>
  )
}