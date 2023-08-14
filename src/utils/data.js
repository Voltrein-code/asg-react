import develop from "../media/cog-svgrepo-com.svg";
import consalting from "../media/macbook-pro-svgrepo-com.svg";
import admin from "../media/equaliser-svgrepo-com.svg";
import automatization from "../media/target-svgrepo-com.svg";
import help from "../media/phone-handle-svgrepo-com.svg";
import consult from "../media/thumb-up-svgrepo-com.svg";

import technology from "../media/cloud-svgrepo-com.svg";
import strategy from "../media/presentation-svgrepo-com.svg";
import experience from "../media/star-svgrepo-com.svg";

const aboutData = [
  {
    cardIcon: technology,
    cardHeading: "Технологии",
    cardSubtitle: `Мы имеем значительный опыт работы с несколькими стеками технологий и обладаем навыками
    проектирования и разработки решений "с нуля", начиная от их концептуального проектирования и
    заканчивая полноценной реализацией.`,
    cardDetails: [
      {
        name: "Платформа 1С",
        text: "Осуществляем полный спектр услуг по интеграции средств автоматизации 1С в рамках вашего бизнеса. Без остановки бизнес-процессов переносим ваши операции в 1С, обеспечивая автоматизацию задач для оптимизации ресурсов и повышения эффективности операций. Наши специалисты готовы настроить и доработать стандартные решения 1С в соответствии с вашими потребностями, обеспечить интеграцию 1С с веб-сайтами, приложениями, системами CRM, телефонией и другими бизнес-системами.",
      },
      {
        name: "Фронтенд на React",
        text: "Разработка сложных и простых веб-сайтов и веб-приложений с использованием React, которые способны эффективно обрабатывать большие нагрузки и обеспечивать безупречное функционирование даже при интенсивном пользовательском взаимодействии. В процессе нашей деятельности мы регулярно проводим анализ и проверку кода, чтобы гарантировать его высокое качество и соответствие стандартам. Кроме того, особое внимание мы уделяем поддержанию целостности архитектуры проектов, обеспечивая их стабильность и возможность горизонтального масштабирования при необходимости.",
      },
      {
        name: "Бэкенд на Node.js",
        text: "Node.js и Express - мощный дуэт для создания быстрых и масштабируемых веб-приложений. Node.js - платформа для серверного JavaScript, обеспечивает скорость выполнения кода и эффективное взаимодействие с сетью и базами данных. Express - надежный фреймворк для управления маршрутами и обработки запросов, позволяет создавать чистый и структурированный код. Сочетание Node.js и Express дарит полный контроль над приложениями, обеспечивает высокую производительность и упрощает сопровождение. Наша команда полагается на этот стек для достижения впечатляющих результатов в веб-разработке.",
      },
      {
        name: "Разработка на HTML/CSS/JS",
        text: "Мы создаем уникальные веб-сайты на HTML, CSS и JS. Вы получите современный дизайн, адаптивность под разные устройства, интуитивную навигацию и профессиональную поддержку. Доверьте нам свои идеи, и мы превратим их в потрясающий онлайн-проект.",
      },
    ],
  },
  {
    cardIcon: strategy,
    cardHeading: "Стратегия",
    cardSubtitle: `Наша задача - выявлять реальные потребности бизнеса в области информационных
    технологий и создавать конкурентоспособные IT-решения, которые позволят получить существенные
    преимущества для вашего бизнеса.`,
  },
  {
    cardIcon: experience,
    cardHeading: "Наш опыт",
    cardSubtitle: `Мы предлагаем полный спектр услуг по созданию комплексных решений, начиная от
    разработки стратегии и заканчивая внедрением и сопровождением, благодаря нашей опытной команде и тесному
    взаимодействию с нашими клиентами.`,
  },
];

const productData = [
  {
    cardIcon: develop,
    cardHeading: "Разработка и внедрение",
    cardSubtitle:
      "Разработка эффективных решений с нуля, а так же адаптация имеющихся систем",
    cardCheckList: [
      "Разработка с нуля",
      "Адаптация имеющихся систем",
      "Современный подход",
    ],
    cardDetails: [
      {
        name: "Обновление 1С конфигураций",
        text: "Быстро и качественно обновляем любые конфигурации 1C до актуальных версий (8.2 или 8.3), сохраняя внесенные изменения, как удалённо, так и с выездом на место.",
      },
      {
        name: "Доработка ваших конфигураций 1С",
        text: "Мы готовы адаптировать программное обеспечение 1С под индивидуальные требования, чтобы обеспечить максимальный комфорт и удобство в работе.",
      },
      {
        name: "Настройка 1С",
        text: "1С — платформа для автоматизации бизнеса, но для эффективной работы системы нужно правильно настроить интерфейс пользователя. Наши специалисты готовы помочь вам в этом вопросе и выполнить настройку системы с максимальной тщательностью и вниманием к деталям.",
      },
      {
        name: "Интеграция 1С с другими системами",
        text: "Наши специалисты обладают большим опытом работы с 1С и другими системами, что позволяет нам создавать эффективные и удобные обработки для интеграции. Мы предлагаем широкий спектр услуг, включая разработку обработок для обмена данными, создание отчетов и форм, а также интеграцию с различными внешними системами.",
      },
      {
        name: "Оптимизация и ускорение работы информационных баз 1С",
        text: "Мы проводим аудит информационной системы, выявляем узкие места и неэффективные процессы, предлагаем оптимальные решения для оптимизации базы данных и ее работы, а также обучаем пользователей работе с системой.",
      },
      {
        name: "Разработка конфигурации 1С на заказ",
        text: "Это услуга, которая позволяет клиентам получить индивидуальную разработку программного обеспечения 1С под свои потребности и требования. Данная услуга включает в себя весь цикл разработки: от анализа потребностей до внедрения готового решения.",
      },
      {
        name: "Разработка мобильных приложений на базе 1С",
        text: "Мы разрабатываем мобильные приложения на базе 1С, которые позволяют автоматизировать различные виды деятельности и обеспечить мобильность работы.",
      },
      {
        name: "Разработка веб-приложений и сайтов на React",
        text: "Мы предлагаем услуги разработки веб-приложений с использованием React. Наши разработчики имеют опыт создания сложных и масштабируемых приложений. Полный цикл разработки включает в себя концепцию, дизайн, тестирование и развертывание. Наши приложения отличаются высокой производительностью и простотой использования, что делает их удобными для адаптации под бизнес-требования. Интеграция с другими сервисами и платформами обеспечивает полную функциональность. Мы гарантируем качество работы и соблюдение сроков. Обращайтесь к нам за помощью в создании идеального веб-приложения на React.",
      },
      {
        name: "Создание сайтов на HTML/CSS/JS",
        text: "Наша компания предлагает услуги по созданию сайтов на HTML, CSS и JavaScript. Мы предоставляем полный спектр услуг, начиная от разработки дизайна и заканчивая вёрсткой и интеграцией с другими системами. Наши специалисты имеют большой опыт работы в данной области и могут предложить вам индивидуальный подход к каждому проекту. Мы также предоставляем гарантию на все наши работы и готовы помочь вам в любое время.",
      },
    ],
  },
  {
    cardIcon: automatization,
    cardType: "row",
    cardHeading: "Автоматизация процессов",
    cardSubtitle:
      "Оптимизация бизнес процессов с применением готовых ИТ-решений, а так же индивидуально разработанных",
    cardCheckList: ["Эффективность", "Анализ проблем", "Разработка решений"],
    cardDetails: [
      {
        name: "Торговое оборудование",
        list: [
          "подключение и настройка оборудования",
          "обновление программного обеспечения (ПО)",
          "добавление новых опций и приложений в существующие базы данных (БД)",
          "решение проблем в работе оборудования, перенос БД",
        ],
        text: `После установки и настройки программного обеспечения мы проводим обслуживание оборудования с целью обеспечения его эффективной работы и предотвращения возможных сбоев. Кроме того, обслуживание оборудования помогает совершенствовать торговую деятельность, ассортимент товаров и услуг и модернизировать оборудование.
        Для автоматизации в торговле мы предлагаем следующие услуги:`,
      },
      {
        name: "Штрихкодирование",
        text: `Для контроля сроков и условий хранения, учета каждой упаковки и ее индивидуальных характеристик, мониторинга влажности и температуры на складе, партионного учета в производстве и на складе, контроля вхождения партий в готовую продукцию, учета сырья и продукции по партиям и хранения истории списания и выпуска, а также для отслеживания объема выпуска в режиме реального времени, необходимо использовать специализированное программное обеспечение для управления складом и производством. Эти программы позволяют автоматизировать все процессы и обеспечить контроль за соблюдением технологических регламентов и сроков хранения.
        Вы можете обратиться к нам для подбора оборудования и проектирования программного обеспечения, а также обучения персонала на рабочих местах. Мы поможем выбрать оптимальное решение для конкретной компании и обучить персонал работе с программным обеспечением.`,
      },
      {
        name: "Автоматизация производства",
        list: [
          "cнижение производственных затрат: автоматизация позволяет оптимизировать процессы производства и уменьшить количество ошибок, что приводит к сокращению затрат на производство",
          "увеличение производительности: автоматизированные системы управления производством могут увеличить производительность и эффективность работы персонала, что приводит к увеличению объемов производства",
          "улучшение качества продукции: автоматизация может помочь улучшить качество продукции, так как она позволяет контролировать процессы производства более точно",
          "оптимизация движения материалов и товаров: автоматизация производства может помочь оптимизировать движение материалов и товаров, что снижает затраты на логистику и улучшает эффективность работы",
        ],
        text: "Автоматизация производства - это важный шаг для любого бизнеса, который стремится к повышению эффективности и конкурентоспособности. Наша компания занимается автоматизацией производственных процессов, которая может привести к ряду преимуществ, таких как:",
      },
    ],
  },
  {
    cardIcon: admin,
    cardHeading: "Администрирование",
    cardSubtitle:
      "Разворачивание и настройка серверных решений с подбором комплектующих",
    cardCheckList: [
      "Современные комплектующие",
      "Устойчивость к нагрузкам",
      "Модульный подход",
    ],
    cardDetails: [
      {
        name: "Современные комплектующие",
        text: "Мы понимаем, что ваш бизнес требует высокой производительности и надежности. Поэтому мы используем современные комплектующие и технологии, чтобы обеспечить вас максимальной производительностью и стабильностью ваших IT-систем.",
      },
      {
        name: "Устойчивость к нагрузкам",
        text: "Мы разрабатываем IT-решения, способные выдержать высокие нагрузки и обеспечивать стабильное функционирование в условиях интенсивной активности. Независимо от того, насколько велик объем операций, вы можете быть уверены в надежности наших решений.",
      },
      {
        name: "Модульный подход",
        text: "Модульный подход, который мы используем, делает вашу IT-инфраструктуру более гибкой и способной адаптироваться к изменениям. Если вы хотите надежного партнера, который обеспечит гарантированную надежность и готовность к росту, АСГ48 – ваш выбор. Доверьте нам обеспечение стабильной и гибкой IT-инфраструктуры, пока вы сосредотачиваетесь на своем бизнесе. Свяжитесь с нами сегодня, и давайте начнем путь к надежности и гибкости вместе.",
      },
    ],
  },
  {
    cardIcon: consalting,
    cardHeading: "ИТ консалтинг и инжиниринг",
    cardSubtitle:
      "Оценка текущего состояния ИТ-систем вашего бизнеса и оптимизация ИТ-процессов в нем",
    cardCheckList: [
      "Объективная оценка",
      "Экспертное мнение",
      "Разработка стратегии",
    ],
    cardDetails: [
      {
        name: "Объективная оценка",
        text: "Наши специалисты проводят анализ ваших бизнес-процессов и потребностей. Мы предлагаем реалистичные решения и помогаем вам выбрать оптимальные варианты для достижения ваших целей.",
      },
      {
        name: "Экспертное мнение",
        text: "Наши специалисты обладают глубокими знаниями в области ИТ. Мы предоставляем экспертное мнение, основанное на практическом опыте и передовых технологических трендах.",
      },
      {
        name: "Разработка стратегии",
        text: "Мы с вами от начала до конца, помогая разработать технологическую стратегию, которая выстроит ваш путь к успеху. Независимо от того, где вы сейчас и где хотите быть, наши эксперты помогут вам достичь ваших целей.",
      },
    ],
  },
  {
    cardIcon: help,
    cardHeading: "Поддержка и сопровождение",
    cardSubtitle:
      "Услуги по сопровождению ПО и обеспечение бесперебойной работы ИТ-инфраструктуры",
    cardCheckList: [
      "Опытные специалисты",
      "Поддержка пользователей",
      "Мониторинг работоспособности",
    ],
    cardDetails: [
      {
        name: "Опытные специалисты",
        text: "Мы предоставляем профессиональную техническую поддержку, готовую помочь вам решить любые технические вопросы или неполадки в работе ваших решений.",
      },
      {
        name: "Поддержка пользователей",
        text: "Наша команда экспертов стоит на страже, готовая предоставить вам профессиональную поддержку в любое время. Мы разрешаем вопросы, решаем проблемы и обеспечиваем бесперебойную работу ваших решений.",
      },
      {
        name: "Мониторинг работоспособности",
        text: "Наша команда опытных специалистов следит за работоспособностью ваших решений 24/7. Мы оперативно реагируем на любые сбои или неполадки, чтобы минимизировать простои и обеспечить бесперебойную работу.",
      },
    ],
  },
  {
    cardIcon: consult,
    cardHeading: "Консультация",
    cardSubtitle:
      "Помощь в подборе комплектующих, программного обеспечения и технологий",
    cardCheckList: [
      "Современные решения",
      "Опыт в нескольких сферах",
      "Квалифицированный персонал",
    ],
    cardDetails: [
      {
        name: "Современные решения",
        text: "Мы помогаем вам понять, как современные технологии могут оптимизировать ваш бизнес. Независимо от того, какие решения вас интересуют, мы поможем вам сделать обоснованный выбор.",
      },
      {
        name: "Опыт в нескольких сферах",
        text: "Наша команда специалистов обладает опытом в разработке и консультировании в различных сферах. Мы готовы поделиться знаниями и опытом, чтобы помочь вам воплотить в жизнь любые идеи.",
      },
      {
        name: "Квалифицированный персонал",
        text: "Наша команда состоит из высококвалифицированных специалистов, обладающих глубокими знаниями в различных областях. Мы готовы поделиться этими знаниями, чтобы помочь вам сделать обоснованные решения.",
      },
    ],
  },
];

export { aboutData, productData };
