import "./OrderSection.css";

const contacts = [
  {
    label: "Телефон",
    value: "+7 (4742) 72-72-18",
    href: "tel:+74742727218",
    iconClassName: "order__contact-icon_type_phone",
    actionLabel: "Позвонить",
    actionClassName: "order__action",
  },
  {
    label: "Электронная почта",
    value: "asg.48@mail.ru",
    href: "mailto:asg.48@mail.ru",
    iconClassName: "order__contact-icon_type_email",
    actionLabel: "Написать",
    actionClassName: "order__action order__action_type_secondary",
  },
];

export default function OrderSection() {
  return (
    <section className="order" id="order">
      <div className="order__container">
        <div className="order__text-block">
          <div className="order__info">
            <h2 className="order__heading">Оставайтесь на связи!</h2>
            <p className="order__text">
              Свяжитесь с нами удобным способом. Ответим на вопросы,
              проконсультируем по услугам и подскажем следующий шаг.
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
