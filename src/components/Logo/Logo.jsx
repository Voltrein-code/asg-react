import "./Logo.css";

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="АСГ48 — на начало страницы">
      <div className="logo__image" aria-hidden="true"></div>
      <p className="logo__name">АСГ48</p>
    </a>
  );
}
