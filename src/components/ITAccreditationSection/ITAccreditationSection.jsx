import {
  confirmationStates,
  itActivityCodes,
  organization,
  servicePricing,
  softwareDisclosure,
  softwareDisclosureStates,
  technologies,
} from "../../content/siteContent";
import { productData } from "../../utils/data";
import "./ITAccreditationSection.css";

const pendingText =
  "Сведения ожидают документального подтверждения компании и не публикуются как установленный факт.";

function ExclusiveRightsDisclosure() {
  const { status, products } = softwareDisclosure.exclusiveRights;

  if (status === softwareDisclosureStates.pending) {
    return <p className="it-info__pending">{pendingText}</p>;
  }

  if (status === softwareDisclosureStates.noApplicableProductsOrRights) {
    return (
      <p className="it-info__value">
        Компания подтвердила отсутствие применимых исключительных прав на
        программы для ЭВМ и базы данных.
      </p>
    );
  }

  if (status === softwareDisclosureStates.rightsHolder && products.length) {
    return (
      <ul className="it-info__software-list">
        {products.map((product) => (
          <li key={product.name}>
            <strong>{product.name}</strong>
            <span>Исключительное право: {product.exclusiveRightDetails}</span>
            <span>
              Предоставление права использования:{" "}
              {product.usageMethods.join(", ")}.
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="it-info__pending">{pendingText}</p>;
}

function RegistryDisclosure() {
  const { status, products } = softwareDisclosure.russianSoftwareRegistry;

  if (status === softwareDisclosureStates.pending) {
    return <p className="it-info__pending">{pendingText}</p>;
  }

  if (status === softwareDisclosureStates.noApplicableProductsOrRights) {
    return (
      <p className="it-info__value">
        Компания подтвердила отсутствие собственного ПО в Едином реестре
        российского ПО.
      </p>
    );
  }

  if (
    status === softwareDisclosureStates.inRussianSoftwareRegistry &&
    products.length
  ) {
    return (
      <ul className="it-info__software-list">
        {products.map((product) => (
          <li key={product.registryNumber}>
            <strong>{product.name}</strong>
            <span>Номер реестровой записи: {product.registryNumber}</span>
            {product.registryUrl && (
              <a href={product.registryUrl}>Открыть реестровую запись</a>
            )}
            <span>
              Лицензирование или предоставление прав:{" "}
              {product.licensingMethods.join(", ")}.
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="it-info__pending">{pendingText}</p>;
}

function FiscalDataOperatorDisclosure() {
  const { status, details } = softwareDisclosure.fiscalDataOperator;

  if (status === softwareDisclosureStates.fiscalDataOperator && details) {
    return <p className="it-info__value">{details}</p>;
  }

  if (status === softwareDisclosureStates.noApplicableProductsOrRights) {
    return (
      <p className="it-info__value">
        Компания подтвердила, что не является оператором фискальных данных.
      </p>
    );
  }

  return <p className="it-info__pending">{pendingText}</p>;
}

function OneCPartnerDisclosure() {
  if (
    softwareDisclosure.official1CPartner.status === confirmationStates.absent
  ) {
    return (
      <p className="it-info__value">
        Компания подтвердила, что не является официальным партнёром 1С.
      </p>
    );
  }

  return <p className="it-info__pending">{pendingText}</p>;
}

export default function ITAccreditationSection() {
  return (
    <section
      className="it-info"
      id="it-accreditation"
      tabIndex="-1"
      aria-labelledby="it-accreditation-title"
    >
      <header className="it-info__header">
        <p className="it-info__eyebrow">Открытые сведения</p>
        <h2 className="it-info__title" id="it-accreditation-title">
          Сведения об ИТ-деятельности и организации
        </h2>
        <p className="it-info__lead">
          Информация размещена в открытом доступе на главной странице и не
          требует регистрации или передачи персональных данных.
        </p>
      </header>

      <div className="it-info__block" aria-labelledby="company-details-title">
        <h3 className="it-info__subtitle" id="company-details-title">
          Сведения об организации
        </h3>
        <dl className="it-info__details">
          <div className="it-info__detail it-info__detail_wide">
            <dt>Полное наименование</dt>
            <dd>{organization.fullName}</dd>
          </div>
          <div className="it-info__detail">
            <dt>Сокращённое наименование</dt>
            <dd>{organization.shortName}</dd>
          </div>
          <div className="it-info__detail">
            <dt>Основной ОКВЭД</dt>
            <dd>
              {organization.okved.code} — {organization.okved.description}
            </dd>
          </div>
          <div className="it-info__detail it-info__detail_wide">
            <dt>Адрес</dt>
            <dd>{organization.address}</dd>
          </div>
          <div className="it-info__detail">
            <dt>ИНН / КПП</dt>
            <dd>
              {organization.inn} / {organization.kpp}
            </dd>
          </div>
          <div className="it-info__detail">
            <dt>ОГРН</dt>
            <dd>{organization.ogrn}</dd>
          </div>
          <div className="it-info__detail">
            <dt>Телефон</dt>
            <dd>
              <a href={organization.phone.href}>{organization.phone.display}</a>
            </dd>
          </div>
          <div className="it-info__detail">
            <dt>Электронная почта</dt>
            <dd>
              <a href={organization.email.href}>{organization.email.display}</a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="it-info__block" aria-labelledby="activity-codes-title">
        <h3 className="it-info__subtitle" id="activity-codes-title">
          Виды деятельности по приказу Минцифры России № 449
        </h3>
        <ul className="it-info__codes">
          {itActivityCodes.map((activity) => (
            <li className="it-info__code" key={activity.code}>
              <p className="it-info__code-number">Код {activity.code}</p>
              <p className="it-info__code-description">
                {activity.description}
              </p>
              <p className="it-info__code-services">
                <span>Связанные услуги:</span>{" "}
                {activity.relatedServices.join(", ")}.
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="it-info__block" aria-labelledby="services-prices-title">
        <h3 className="it-info__subtitle" id="services-prices-title">
          Услуги и стоимость
        </h3>
        <p className="it-info__section-note">
          Итоговая стоимость и состав работ определяются после обследования и
          фиксируются в договоре. Для услуг с расчётной стоимостью указана
          минимальная ставка.
        </p>
        <ul className="it-info__services">
          {productData.map((service) => {
            const pricing = servicePricing[service.serviceId];

            return (
              <li className="it-info__service" key={service.serviceId}>
                <h4 className="it-info__service-name">{service.cardHeading}</h4>
                <p className="it-info__service-description">
                  {service.cardSubtitle}
                </p>
                <p className="it-info__service-price">
                  <span>
                    {pricing.minimumPrice
                      ? "Минимальная стоимость:"
                      : "Стоимость:"}
                  </span>{" "}
                  {pricing.display}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="it-info__block" aria-labelledby="technology-list-title">
        <h3 className="it-info__subtitle" id="technology-list-title">
          Технологии и инструменты
        </h3>
        <p className="it-info__technology-list">
          {technologies.map((technology) => technology.name).join(" · ")}
        </p>
        <p className="it-info__section-note">
          Компания использует платформу 1С в работе, но не является официальным
          партнёром 1С.
        </p>
      </div>

      <div className="it-info__block" aria-labelledby="software-title">
        <h3 className="it-info__subtitle" id="software-title">
          Программное обеспечение, права и специальные статусы
        </h3>
        <div className="it-info__disclosures">
          <article className="it-info__disclosure">
            <h4>Исключительные права на программы для ЭВМ и базы данных</h4>
            <ExclusiveRightsDisclosure />
          </article>
          <article className="it-info__disclosure">
            <h4>Собственное ПО в Едином реестре российского ПО</h4>
            <RegistryDisclosure />
          </article>
          <article className="it-info__disclosure">
            <h4>Статус оператора фискальных данных</h4>
            <FiscalDataOperatorDisclosure />
          </article>
          <article className="it-info__disclosure">
            <h4>Партнёрский статус 1С</h4>
            <OneCPartnerDisclosure />
          </article>
        </div>
      </div>

      <p className="it-info__updated">
        Дата последнего обновления сведений: {organization.lastUpdated}.
      </p>
    </section>
  );
}
