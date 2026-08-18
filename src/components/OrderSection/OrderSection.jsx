import "./OrderSection.css";
import { organization } from "../../content/siteContent";

const contacts = [
  {
    label: "Телефон",
    value: organization.phone.display,
    href: organization.phone.href,
    iconClassName: "order__contact-icon_type_phone",
    actionLabel: "Позвонить",
    actionClassName: "order__action",
  },
  {
    label: "Электронная почта",
    value: organization.email.display,
    href: organization.email.href,
    iconClassName: "order__contact-icon_type_email",
    actionLabel: "Написать",
    actionClassName: "order__action order__action_type_secondary",
  },
];

export default function OrderSection() {
  return (
    <section className="order" id="contacts" tabIndex="-1">
      <div className="order__container">
        <div className="order__text-block">
          <div className="order__info">
            <h2 className="order__heading">Оставайтесь на связи!</h2>
            <p className="order__text">
              Свяжитесь с нами по телефону или электронной почте. Сайт не
              содержит форм, аналитики, рекламных пикселей и иных средств сбора
              пользовательских данных.
            </p>
          </div>
        </div>
        <div className="order__contacts" aria-label="Контактная информация">
          {contacts.map((contact) => (
            <div className="order__contact-card" key={contact.href}>
              <div
                className={`order__contact-icon ${contact.iconClassName}`}
                aria-hidden="true"
              ></div>
              <div className="order__contact-content">
                <p className="order__contact-label">{contact.label}</p>
                <a href={contact.href} className="order__contact">
                  {contact.value}
                </a>
              </div>
              <a
                href={contact.href}
                className={`button button_type_submit ${contact.actionClassName}`}
              >
                {contact.actionLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
