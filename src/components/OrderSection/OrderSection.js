import "./OrderSection.css";

export default function OrderSection() {
  return (
    <section className="order">
      <div className="order__container">
        <div className="order__text-block">
          <div className="order__info">
            <h2 className="order__heading">Оставайтесь на связи!</h2>
            <p className="order__text">
              Вы можете связаться с нами по телефону, написать на электронную
              почту, либо оставить заявку по форме справа.
            </p>
          </div>
          <div className="order__contacts">
            <div className="order__contact-container">
              <div className="order__contact-icon order__contact-icon_type_phone"></div>
              <a href="tel:+74742727218" className="order__contact">
                +7 (4742) 72-72-18
              </a>
            </div>
            <div className="order__contact-container">
              <div className="order__contact-icon order__contact-icon_type_email"></div>
              <a href="mailto:info@asg48.ru" className="order__contact">
                asg.48@mail.ru
              </a>
            </div>
          </div>
        </div>
        <form className="order__form">
          <div className="order__input-container">
            <div className="order__input-icon order__input-icon_type_name"></div>
            <input
              placeholder="Введите имя"
              className="order__input order__input_type_name"
              type="text"
              name="name"
              required
              minlength="4"
              maxlength="100"
              id="name-input"
            />
          </div>
          <span className="order__input-error name-input-error"></span>
          <div className="order__input-container">
            <div className="order__input-icon order__input-icon_type_mail"></div>
            <input
              placeholder="Введите email"
              className="order__input order__input_type_mail"
              type="email"
              name="mail"
              required
              minlength="4"
              maxlength="100"
              id="mail-input"
            />
          </div>
          <span className="order__input-error name-input-error"></span>
          <textarea
            placeholder="Введите ваше сообщение"
            className="order__input order__input_type_text"
            type="text"
            name="text"
            required
            minlength="150"
            id="mail-input"
          ></textarea>
          <span className="order__input-error name-input-error"></span>
          <button type="submit" className="button button_type_submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
