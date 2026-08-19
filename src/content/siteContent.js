export const REQUIRES_COMPANY_CONFIRMATION = "REQUIRES_COMPANY_CONFIRMATION";

export const confirmationStates = {
  confirmed: "CONFIRMED_BY_COMPANY",
  notApplicable: "NOT_APPLICABLE",
  notRequired: "NOT_REQUIRED",
  absent: "ABSENT",
};

export const softwareDisclosureStates = {
  pending: REQUIRES_COMPANY_CONFIRMATION,
  rightsHolder: "RIGHTS_HOLDER",
  inRussianSoftwareRegistry: "IN_RUSSIAN_SOFTWARE_REGISTRY",
  noApplicableProductsOrRights: "NO_APPLICABLE_PRODUCTS_OR_RIGHTS",
  fiscalDataOperator: "FISCAL_DATA_OPERATOR",
};

export const organization = {
  fullName: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АСГ48»",
  shortName: "ООО «АСГ48»",
  inn: "4813030827",
  kpp: "481301001",
  ogrn: "1224800012910",
  address:
    "398501, Липецкая область, Липецкий муниципальный округ, территория Комплекс Рудничный, здание № 1",
  okved: {
    code: "62.01",
    description: "Разработка компьютерного программного обеспечения",
  },
  phone: {
    display: "+7 (4742) 72-72-18",
    href: "tel:+74742727218",
  },
  email: {
    display: "asg.48@mail.ru",
    href: "mailto:asg.48@mail.ru",
  },
  lastUpdated: "15 мая 2026 года",
};

export const bankDetails = {
  publicationStatus: confirmationStates.confirmed,
  bank: "АО «Россельхозбанк»",
  settlementAccount: "40702810224000001658",
  bik: "044206756",
  correspondentAccount: "30101810800000000756",
};

export const privacyPolicy = {
  lastUpdated: "18 августа 2026 года",
  hostingProvider: {
    name: "REG.RU",
    website: "https://www.reg.ru/",
    dataLocation: "Российская Федерация",
  },
};

export const technologies = [
  {
    name: "1С",
    description:
      "Настройка, доработка, интеграция и сопровождение решений на платформе 1С.",
  },
  {
    name: "React",
    description: "Разработка пользовательских интерфейсов веб-приложений.",
  },
  {
    name: "Node.js",
    description: "Серверная разработка на JavaScript.",
  },
  {
    name: "Express",
    description: "Создание серверных приложений и программных интерфейсов.",
  },
  {
    name: "JavaScript",
    description: "Клиентская и серверная разработка.",
  },
  {
    name: "HTML",
    description: "Семантическая структура веб-интерфейсов.",
  },
  {
    name: "CSS",
    description: "Адаптивное оформление веб-интерфейсов.",
  },
];

export const itActivityCodes = [
  {
    code: "1.01",
    description:
      "Проектирование, разработка, адаптация, модификация, интеграция, внедрение, сопровождение и техническая поддержка программ для ЭВМ, баз данных и пользовательских интерфейсов.",
    relatedServices: [
      "Разработка и внедрение",
      "Автоматизация процессов",
      "Поддержка и сопровождение",
    ],
  },
  {
    code: "3.01",
    description:
      "Создание структуры и состава баз данных и информационных ресурсов, формирование, ведение и актуализация данных, администрирование доступа, поиск, отбор и предоставление данных пользователям.",
    relatedServices: [
      "Разработка и внедрение",
      "Автоматизация процессов",
      "Администрирование",
    ],
  },
  {
    code: "4.01",
    description:
      "Комплексное обслуживание ИТ-инфраструктуры: управление доступом и учётными записями, администрирование аппаратной платформы, баз данных и мониторинга, обновления, резервное копирование, восстановление и перенос данных.",
    relatedServices: ["Администрирование", "Поддержка и сопровождение"],
  },
  {
    code: "28.01",
    description:
      "Ремонт и обслуживание программно-аппаратных комплексов, компьютерного оборудования и оборудования ИТ-инфраструктуры.",
    relatedServices: ["Обслуживание оргтехники", "Ремонт оборудования"],
  },
  {
    code: "28.02",
    description:
      "Ремонт и обслуживание компьютеров, серверов, принтеров, мониторов, сканеров, периферийного оборудования и компьютерных терминалов.",
    relatedServices: ["Обслуживание оргтехники", "Ремонт оборудования"],
  },
];

export const servicePricing = {
  development: {
    value: 2000,
    unit: "₽/час",
    display: "от 2 000 ₽/час",
    confirmationStatus: confirmationStates.confirmed,
  },
  automation: {
    value: 2000,
    unit: "₽/час",
    display: "от 2 000 ₽/час",
    confirmationStatus: confirmationStates.confirmed,
  },
  administration: {
    value: 1500,
    unit: "₽/час",
    minimumPrice: 1500,
    hourlyRate: 1500,
    perWorkstation: confirmationStates.notRequired,
    perEquipmentUnit: confirmationStates.notRequired,
    priceRange: confirmationStates.notRequired,
    calculationFormula: confirmationStates.notRequired,
    factors: [
      "состав инфраструктуры",
      "число пользователей",
      "число серверов и баз данных",
      "режим обслуживания",
    ],
    calculationExample: confirmationStates.notRequired,
    confirmationStatus: confirmationStates.confirmed,
    display:
      "от 1 500 ₽/час. Итоговая стоимость рассчитывается после уточнения состава инфраструктуры, числа пользователей, серверов, баз данных и требуемого режима обслуживания.",
  },
  officeEquipment: {
    value: 1500,
    unit: "₽/час",
    minimumPrice: 1500,
    hourlyRate: 1500,
    perWorkstation: confirmationStates.notRequired,
    perEquipmentUnit: confirmationStates.notRequired,
    priceRange: confirmationStates.notRequired,
    calculationFormula: confirmationStates.notRequired,
    factors: [
      "вид и количество техники",
      "перечень работ",
      "запасные части",
      "необходимость выезда",
    ],
    calculationExample: confirmationStates.notRequired,
    confirmationStatus: confirmationStates.confirmed,
    display:
      "от 1 500 ₽/час. Итоговая стоимость рассчитывается после диагностики с учётом вида и количества техники, перечня работ, запасных частей и выезда специалиста.",
  },
  equipmentRepair: {
    value: 1500,
    unit: "₽/час",
    minimumPrice: 1500,
    hourlyRate: 1500,
    perWorkstation: confirmationStates.notRequired,
    perEquipmentUnit: confirmationStates.notRequired,
    priceRange: confirmationStates.notRequired,
    calculationFormula: confirmationStates.notRequired,
    factors: [
      "тип и количество оборудования",
      "сложность неисправности",
      "запасные части",
      "срочность работ",
    ],
    calculationExample: confirmationStates.notRequired,
    confirmationStatus: confirmationStates.confirmed,
    display:
      "от 1 500 ₽/час. Итоговая стоимость рассчитывается после диагностики с учётом типа и количества оборудования, сложности неисправности, запасных частей и срочности работ.",
  },
  support: {
    value: 1500,
    unit: "₽/час",
    display: "от 1 500 ₽/час",
    confirmationStatus: confirmationStates.confirmed,
  },
};

export const softwareDisclosure = {
  exclusiveRights: {
    status: softwareDisclosureStates.noApplicableProductsOrRights,
    products: [],
  },
  russianSoftwareRegistry: {
    status: softwareDisclosureStates.noApplicableProductsOrRights,
    products: [],
  },
  fiscalDataOperator: {
    status: softwareDisclosureStates.noApplicableProductsOrRights,
  },
  official1CPartner: {
    status: confirmationStates.absent,
  },
};

export const companyConfirmations = {
  knownServicePrices: confirmationStates.confirmed,
  activityCode105: confirmationStates.confirmed,
  exclusiveSoftwareRights:
    softwareDisclosureStates.noApplicableProductsOrRights,
  russianSoftwareRegistryEntries:
    softwareDisclosureStates.noApplicableProductsOrRights,
  fiscalDataOperatorStatus:
    softwareDisclosureStates.noApplicableProductsOrRights,
  regulatedSecurityServices: confirmationStates.notApplicable,
  official1CPartnerStatus: confirmationStates.absent,
  marketingEvidence: confirmationStates.notRequired,
  publishBankDetails: confirmationStates.confirmed,
  accreditationConfirmationFiledBy2026July1: confirmationStates.confirmed,
  accreditationStatusInGosuslugi: confirmationStates.confirmed,
  activeFtsDisclosureConsentCode20009: confirmationStates.confirmed,
};
