import { HashLink as Link } from "react-router-hash-link";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="" className="logo">
      <div className="logo__image"></div>
      <p className="logo__name">АСГ48</p>
    </Link>
  );
}
