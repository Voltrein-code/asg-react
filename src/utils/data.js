import develop from "../media/cog-svgrepo-com.svg";
import consalting from "../media/macbook-pro-svgrepo-com.svg";
import admin from "../media/equaliser-svgrepo-com.svg";
import automatization from "../media/target-svgrepo-com.svg";
import help from "../media/phone-handle-svgrepo-com.svg";
import printer from "../media/printer-svgrepo-com.svg";

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
        text: "Осуществляем полный спектр услуг по интеграции средств автоматизации 1С в рамках вашего бизнеса. Без остановки бизнес-процессов переносим ваши операции в 1С, обеспечивая автоматизацию задач для оптимизации ресурсов и повышения эффективности операций. Наши специалисты готовы настроить и доработать стандартные решения 1С в соответствии с вашими потребностями, обеспечить интеграцию 1С с веб-сайтами, приложениями, системами CRM, телефонией и другими бизнес-системами. Мы работаем так же и с типовыми конфигурациями, такими как:",
        list: [
          "1С: Бухгалтерия 8",
          "1C: Управление торговлей",
          "1С: Зарплата и управление персоналом 8",
          "1С: ERP Управление предприятием 2",
          "1С: Бухгалтерия птицефабрики",
          "1С: ITIL Управление информационными технологиями предприятия",
          "1С: Управление ветеринарными сертификатами. Интеграция с ФГИС Меркурий",
        ],
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
    cardType: "row",
    cardSubtitle:
      "Разворачивание и настройка серверных решений с подбором комплектующих",
    cardCheckList: [
      "Современные комплектующие",
      "Устойчивость к нагрузкам",
      "Модульный подход",
    ],
    cardDetails: [
      {
        name: "Проектирование сетей",
        text: "Наша компания занимается проектированием сетей любой сложности. Мы проектируем сети передачи данных, системы связи, электроснабжения и управления производством. Наши специалисты имеют высокую квалификацию и опыт работы в этой области. Мы используем современное ПО и оборудование для моделирования сетей и их оптимизации. Мы предлагаем индивидуальный подход и гарантируем высокое качество. Наша компания также предоставляет монтаж и наладку сетей, чтобы обеспечить полную готовность к работе. Если вы ищете надежного поставщика услуг по проектированию и монтажу сетей, то наша компания готова предложить выгодные условия и высокое качество работ.",
      },
      {
        name: "Развертывание серверных решений",
        text: "Наша компания предоставляет полный спектр услуг в области серверного обеспечения и управления. Мы имеем большой опыт в установке, настройке и обслуживании серверного оборудования, баз данных, сетевых служб, почтовых сервисов и систем мониторинга. Мы работаем только с самым современным оборудованием и программным обеспечением, чтобы гарантировать нашим клиентам максимальную производительность, надежность и безопасность. Кроме того, наша компания предоставляет услуги резервного копирования данных. Мы готовы помочь вам с любыми проблемами, связанными с сервером, и гарантируем высокое качество предоставляемых услуг.",
      },
      {
        name: "Обеспечение информационной безопасности",
        text: "Наша компания предлагает профессиональные услуги по защите информации. Мы гарантируем конфиденциальность, целостность и безопасность данных. Наши специалисты имеют высокую квалификацию и опыт работы в области информационной безопасности, используют современные технологии и методы для обеспечения максимальной эффективности и надежности. Мы предлагаем полный спектр услуг, включая анализ рисков, разработку политики безопасности, установку систем защиты, мониторинг состояния информационной системы, восстановление данных в случае необходимости. Мы гарантируем безопасность и конфиденциальность всех данных, обрабатываемых нашей компанией. Если вы нуждаетесь в защите своей информационной системы от кибератак или других угроз, обратитесь к нам, и мы предоставим вам профессиональные и выгодные услуги.",
      },
      {
        name: "Взаимодействие с провайдерами и поставщиками",
        text: `Услуга "Взаимодействие с провайдерами и поставщиками" предоставляет возможность нашим клиентам быстро и эффективно взаимодействовать с поставщиками и провайдерами, чтобы получать необходимые ресурсы и услуги.
        Наши специалисты готовы помочь вам в выборе поставщиков и провайдеров, организовать переговоры, провести тендеры, заключить договоры, а также обеспечить полное сопровождение и контроль за выполнением обязательств.
        Мы работаем с различными категориями поставщиков и провайдеров - от крупных корпораций до небольших компаний, предоставляя нашим клиентам полный спектр услуг. Мы гарантируем индивидуальный подход к каждому клиенту и высокое качество предоставляемых услуг.`,
      },
      {
        name: "Обслуживание компьютеров, ноутбуков, моноблоков, офисной техники и другого компьютерного оборудования.",
        text: `Наша компания предоставляет услуги по обслуживанию компьютеров, ноутбуков, моноблоков, а также офисной техники и другой компьютерной аппаратуры. Мы гарантируем быстрый и качественный ремонт, а также профилактические меры для предотвращения возможных проблем в будущем. Наши специалисты имеют большой опыт работы с различными моделями компьютеров и ноутбуков, а также с офисной техникой. Они готовы помочь вам решить любые проблемы, связанные с вашей компьютерной техникой, и обеспечить ее бесперебойную работу.`,
      },
    ],
  },
  {
    cardIcon: printer,
    cardHeading: "Обслуживание оргтехники",
    cardSubtitle:
      "Установка и настройка оборудования, диагностика неисправностей, обслуживание МФУ",
    cardCheckList: [
      "Индивидуальный подход",
      "Сервисное обслуживание",
      "Квалифицированный персонал",
    ],
    cardDetails: [
      {
        name: "Установка и настройка нового оборудования",
        text: "Установка и настройка нового офисного оборудования включает в себя установку и настройку принтеров, сканеров, МФУ, компьютеров и других устройств, а также настройку программного обеспечения для работы с ними. Наши специалисты помогут вам выбрать оптимальное оборудование, проведут установку и настройку, а также предоставят инструкции по эксплуатации и обучению сотрудников.",
      },
      {
        name: "Ремонт и обслуживание существующего оборудования",
        text: "Мы проводим диагностику, ремонт и замену запчастей, чтобы ваше оборудование работало максимально эффективно и без сбоев. Также мы предлагаем профилактическое обслуживание, которое поможет предотвратить возникновение проблем в будущем. Мы работаем с различными типами оборудования, включая принтеры, сканеры, МФУ и компьютеры.",
      },
      {
        name: "Замена расходных материалов",
        text: "Услуга замены расходных материалов включает в себя замену тонеров, картриджей, чернил и других компонентов в принтерах, МФУ, копировальных аппаратах и другой технике.",
      },
      {
        name: "Регулярное техническое обслуживание",
        text: "Наша компания предлагает услуги по регулярному техническому обслуживанию оргтехники, чтобы обеспечить ее бесперебойную работу и продлить срок службы. Мы проводим диагностику, чистку, замену расходных материалов и регулировку оборудования, а также обучаем пользователей правильной эксплуатации техники.",
      },
      {
        name: "Обеспечение наличия запасных частей и комплектующих для быстрого устранения неисправностей",
        text: "Наша компания предоставляет услугу по обеспечению наличия запчастей и комплектующих для оперативного устранения неисправностей в оборудовании. Мы имеем широкий ассортимент качественных запчастей и комплектующих, а наши специалисты быстро и эффективно определят причину поломки и предложат оптимальное решение для ее устранения.",
      },
      {
        name: "Техническая поддержка и консультации",
        text: "Мы предоставляем своим клиентам профессиональную помощь в решении любых проблем с оборудованием и ПО, а также консультации по их настройке и использованию. Наши опытные специалисты всегда готовы прийти на помощь и помочь вам сохранить свою офисную технику в отличном состоянии.",
      },
    ],
  },
  {
    cardIcon: consalting,
    cardHeading: "ИТ консалтинг и инжиниринг",
    cardType: "row",
    cardSubtitle:
      "Оценка текущего состояния ИТ-систем вашего бизнеса и оптимизация ИТ-процессов в нем",
    cardCheckList: [
      "Объективная оценка",
      "Экспертное мнение",
      "Разработка стратегии",
    ],
    cardDetails: [
      {
        name: "Аудит ИТ-инфраструктуры",
        text: "Наша компания предлагает услугу аудита ИТ-инфраструктуры для выявления проблем и оптимизации работы. Мы проверяем все компоненты системы, включая сетевое оборудование, сервера, системы хранения и программное обеспечение, и предоставляем рекомендации по улучшению производительности. Экспресс-аудит позволяет быстро выявить проблемы, а полный аудит дает более полное представление о состоянии системы. Наши эксперты имеют большой опыт работы в различных областях ИТ и готовы помочь вам оптимизировать вашу ИТ-инфраструктуру.",
      },
      {
        name: "Стратегия развития ИТ",
        text: `Услуга "Стратегия развития ИТ" - это комплекс мероприятий, направленных на повышение эффективности и конкурентоспособности вашей ИТ-системы. Она включает в себя анализ текущей ситуации, определение стратегических целей и разработку плана действий для их достижения.
        Наша команда экспертов поможет вам выявить проблемы и возможности, которые могут повлиять на развитие вашей ИТ-инфраструктуры. Мы проанализируем текущую ситуацию, определим основные направления развития и разработаем стратегию, которая позволит достичь поставленных целей.
        В рамках услуги мы также проводим обучение и консультации для сотрудников вашей компании по вопросам использования новых технологий и инструментов, а также по повышению квалификации.`,
      },
      {
        name: "Разработка технического задания",
        text: `Наша компания предлагает услуги по разработке технического задания (ТЗ) для любых проектов, начиная от небольших задач до крупных и сложных проектов. Мы работаем с различными отраслями и технологиями, и готовы предложить индивидуальный подход к каждому клиенту.
        Наша команда профессионалов имеет богатый опыт в разработке технических заданий, и мы всегда стараемся учитывать все требования и пожелания заказчика. Наше ТЗ будет содержать подробную информацию о проекте, включая его цели, задачи, требования к функциональности, дизайну и тестированию.
        Мы гарантируем, что наше ТЗ будет максимально полным и точным, а также понятным для всех участников проекта. Мы также предоставляем консультации и поддержку на всех этапах разработки ТЗ, чтобы обеспечить успешную реализацию проекта.`,
      },
    ],
  },
  {
    cardIcon: help,
    cardHeading: "Поддержка и сопровождение",
    cardType: "row",
    cardSubtitle:
      "Услуги по сопровождению ПО и обеспечение бесперебойной работы ИТ-инфраструктуры",
    cardCheckList: [
      "Опытные специалисты",
      "Поддержка пользователей",
      "Мониторинг работоспособности",
    ],
    cardDetails: [
      {
        name: "Сопровождение автоматизированных систем на базе 1С",
        text: `Наши специалисты имеют большой опыт работы с программой 1С и готовы помочь вам решить любые проблемы, связанные с ее использованием. Мы также предоставляем услуги по обучению пользователей работе с программой, что позволяет им быстро освоить все возможности программы и повысить эффективность работы.
        Кроме того, мы предлагаем услуги по обновлению программы 1С до последней версии, что обеспечивает ее максимальную производительность и безопасность. Мы также готовы помочь вам с настройкой отчетов и форм, чтобы вы могли получать необходимую информацию для принятия решений.
        В целом, услуга "Сопровождение автоматизированных систем 1С" позволяет вашей компании получить максимальную пользу от использования программы 1С. Наши специалисты готовы помочь вам в любой ситуации и обеспечить эффективную работу вашей программы.`,
      },
      {
        name: "Техническая поддержка пользователей",
        text: "Мы предоставляем профессиональную техническую поддержку, готовую помочь вам решить любые технические вопросы или неполадки в работе ваших решений. Обработка обращений обеспечивается тремя линиями поддержки:",
        list: [
          "Служба первой линии поддержки выполняет функции обработки и передачи заявок на обслуживание систем и оборудования. Пользователь может связаться с службой поддержки по телефону или электронной почте. Время обработки заявок определяется соглашением об уровне обслуживания (SLA)",
          "В задачи второй линии поддержки входит оказание экспертной помощи в нестандартных ситуациях. Это включает обслуживание рабочих станций и оборудования пользователей как на месте, так и удаленно",
          "Служба третьей линии поддержки занимается сопровождением сетевых систем, серверов, хранилищ данных, а также программных приложений. Ее специалисты обеспечивают бесперебойную работу всех систем и приложений, а также осуществляют поддержку пользователей в случае возникновения проблем",
        ],
      },
      {
        name: "Мониторинг работоспособности",
        text: `Эта услуга включает в себя настройку мониторинга на различных устройствах, таких как компьютеры, сервера, сетевое оборудование, и т.д. Пользователи получают уведомления о любых проблемах, которые могут возникнуть в работе их устройств, что позволяет им быстро реагировать на проблемы и предотвращать возможные потери данных.
        Также наша услуга позволяет клиентам отслеживать производительность своих устройств и выявлять проблемы с использованием ресурсов или производительностью. Это помогает клиентам оптимизировать работу своих устройств и повысить их эффективность.
        В целом, услуга "Мониторинг работоспособности" от нашей компании является важным инструментом для поддержания стабильной работы устройств и предотвращения возможных проблем. Мы предлагаем эту услугу как для частных клиентов, так и для организаций любого масштаба.`,
      },
    ],
  },
];

export { aboutData, productData };
