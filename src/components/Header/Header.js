import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderMenu />
    </header>
  );
}
