import "./MetricsSection.css";

export default function MetricsSection() {
  return (
    <section className="metrics">
      <div className="metrics__info">
        <h2 className="metrics__heading section-heading">Статистика</h2>
        <p className="metrics__text section-text">
          Мы объединяем отраслевую и технологическую экспертизу, чтобы помочь
          организациям максимально реализовать свой потенциал, повысить
          эффективность и ускорить развитие.
        </p>
      </div>
      <ul className="metrics__tabs">
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">15+</h3>
          <p className="metrics__tab-text">Крупных проектов</p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">1000+</h3>
          <p className="metrics__tab-text">Доработок и оптимизаций</p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">95%</h3>
          <p className="metrics__tab-text">Вернувшихся клиентов</p>
        </li>
        <li className="metrics__tab">
          <h3 className="metrics__tab-heading">12+</h3>
          <p className="metrics__tab-text">Компаний с нами сотрудничают</p>
        </li>
      </ul>
    </section>
  );
}
