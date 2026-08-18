import "./MetricsSection.css";

export default function MetricsSection() {
  return (
    <section className="metrics">
      <div className="metrics__info">
        <h2 className="metrics__heading section-heading">Принципы работы</h2>
        <p className="metrics__text section-text">
          Согласуем состав работ, этапы, критерии приёмки и условия поддержки.
        </p>
      </div>
      <ul className="metrics__tabs">
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">Проектирование</h3>
          <p className="metrics__tab-text">
            Уточняем требования и состав работ
          </p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">Внедрение</h3>
          <p className="metrics__tab-text">
            Согласуем этапы и критерии приёмки
          </p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">Поддержка</h3>
          <p className="metrics__tab-text">Фиксируем режим работы и SLA</p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">Прозрачность</h3>
          <p className="metrics__tab-text">
            Указываем стоимость и условия расчёта
          </p>
        </li>
      </ul>
    </section>
  );
}
