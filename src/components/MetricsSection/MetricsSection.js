import "./MetricsSection.css";

export default function MetricsSection() {
  return (
    <section class="metrics">
      <div class="metrics__info">
        <h2 class="metrics__heading section-heading">Статистика</h2>
        <p class="metrics__text section-text">
          Мы объединяем отраслевую и технологическую экспертизу, чтобы помочь
          организациям максимально реализовать свой потенциал, повысить
          эффективность и ускорить развитие.
        </p>
      </div>
      <ul class="metrics__tabs">
        <li class="metrics__tab">
          <h3 class="metrics__tab-heading">15+</h3>
          <p class="metrics__tab-text">Крупных проектов</p>
        </li>
        <li class="metrics__tab">
          <h3 class="metrics__tab-heading">1000+</h3>
          <p class="metrics__tab-text">Доработок и оптимизаций</p>
        </li>
        <li class="metrics__tab">
          <h3 class="metrics__tab-heading">95%</h3>
          <p class="metrics__tab-text">Вернувшихся клиентов</p>
        </li>
        <li class="metrics__tab">
          <h3 class="metrics__tab-heading">12+</h3>
          <p class="metrics__tab-text">Компаний с нами сотрудничают</p>
        </li>
      </ul>
    </section>
  );
}
