export type NavItem = {
  title: string;
  href: string;
};

export type QuickLink = NavItem & {
  description: string;
  accent: "pink" | "cyan" | "violet";
  icon: string;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date: string;
  image: string;
  accent: "pink" | "cyan" | "violet";
};

export type ServerItem = {
  name: string;
  mode: string;
  language: "RU" | "EN";
  online: string;
  status: string;
  description: string;
  tag: string;
};

export type DiscussionItem = {
  title: string;
  comments: number;
  href: string;
};

export type ImportantSectionItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  accent: "pink" | "cyan" | "violet";
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  highlights: string[];
  sections: Array<{
    title: string;
    text: string;
  }>;
};

export const site = {
  name: "GTA6Portal.ru",
  url: "https://gta6portal.ru",
  description:
    "Русскоязычный SEO-портал про GTA 6: дата выхода, новости, карта, персонажи, Online, RP и серверы.",
  trailerUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  releaseDateIso: "2026-11-19T00:00:00+03:00",
  releaseDateLabel: "19 ноября 2026",
};

export const navItems: NavItem[] = [
  { title: "Новости", href: "/news" },
  { title: "Дата выхода", href: "/gta-6-data-vyhoda" },
  { title: "GTA 6 на ПК", href: "/gta-6-na-pk" },
  { title: "Online", href: "/online" },
  { title: "RP", href: "/rp" },
  { title: "Серверы", href: "/servera" },
  { title: "Карта", href: "/karta" },
  { title: "Персонажи", href: "/personazhi" },
];

export const quickLinks: QuickLink[] = [
  { title: "Дата выхода", href: "/gta-6-data-vyhoda", description: "Таймер, платформы и ожидания релиза", accent: "pink", icon: "◷" },
  { title: "Карта", href: "/karta", description: "Вайс-Сити, Леонида и ключевые зоны", accent: "cyan", icon: "◇" },
  { title: "Персонажи", href: "/personazhi", description: "Герои, сюжет и связи", accent: "violet", icon: "✦" },
  { title: "GTA 6 Online", href: "/online", description: "Мультиплеер, экономика, сезоны", accent: "pink", icon: "◎" },
  { title: "RP серверы", href: "/rp", description: "Будущее ролевых проектов", accent: "cyan", icon: "◆" },
  { title: "Гайды", href: "/news", description: "Разборы трейлеров и механик", accent: "violet", icon: "▣" },
];

export const latestNews: NewsItem[] = [
  {
    id: "release-window",
    title: "GTA 6 получила точную дату релиза: что важно знать игрокам",
    excerpt: "Собрали главное о заявленном запуске, версиях для консолей и ожиданиях игроков в России.",
    category: "Дата выхода",
    href: "/gta-6-data-vyhoda",
    date: "6 мая 2026",
    image: "/placeholders/card-neon.svg",
    accent: "pink",
  },
  {
    id: "vice-city-map",
    title: "Карта GTA 6: почему Леонида может стать самым живым регионом серии",
    excerpt: "Разбираем районы, возможные активности, трассы, пляжи и болота по материалам трейлеров.",
    category: "Карта",
    href: "/karta",
    date: "5 мая 2026",
    image: "/placeholders/card-neon.svg",
    accent: "cyan",
  },
  {
    id: "online-rp",
    title: "GTA 6 Online и RP: какие серверы появятся первыми",
    excerpt: "Премиальные RP-проекты уже готовят концепции экономик, фракций и криминальных сценариев.",
    category: "Online",
    href: "/online",
    date: "4 мая 2026",
    image: "/placeholders/server-neon.svg",
    accent: "violet",
  },
  {
    id: "pc-version",
    title: "PC-версия GTA 6: какие вопросы остаются открытыми",
    excerpt: "Отдельный трек ожиданий для игроков на ПК: сроки, графика, моды и системные требования.",
    category: "PC",
    href: "/gta-6-na-pk",
    date: "3 мая 2026",
    image: "/placeholders/card-neon.svg",
    accent: "cyan",
  },
  {
    id: "characters-story",
    title: "Персонажи и сюжет: что фанаты ищут в новых кадрах",
    excerpt: "Безопасно отделяем подтверждённые детали от теорий и собираем базу героев портала.",
    category: "Персонажи",
    href: "/personazhi",
    date: "2 мая 2026",
    image: "/placeholders/card-neon.svg",
    accent: "pink",
  },
];

export const importantSections: ImportantSectionItem[] = [
  {
    title: "Карта GTA 6",
    description: "Визуальная база районов: побережье, трассы, болота, центр Вайс-Сити и будущие точки интереса.",
    href: "/karta",
    cta: "Открыть карту",
    accent: "cyan",
  },
  {
    title: "Персонажи",
    description: "Герои, отношения, мотивация и сюжетные детали без спойлеров и без непроверенных утверждений.",
    href: "/personazhi",
    cta: "Смотреть героев",
    accent: "pink",
  },
  {
    title: "GTA 6 Online",
    description: "Мультиплеерный хаб: активности, обновления, экономика, сезоны и совместная игра.",
    href: "/online",
    cta: "К Online",
    accent: "violet",
  },
  {
    title: "RP сервера",
    description: "Будущий каталог RP-проектов, правил, фракций, профессий и гайдов для новичков.",
    href: "/rp",
    cta: "Изучить RP",
    accent: "cyan",
  },
];

export const importantItems = [
  "Ожидаемая дата выхода — 19 ноября 2026 года.",
  "На первом этапе фокус — консольный релиз, ПК-версия вынесена в отдельный трек ожиданий.",
  "Действие разворачивается в штате Леонида с центром в Вайс-Сити.",
  "Portal будет обновляться как база знаний: новости, гайды, карта, RP и серверы.",
];

export const servers: ServerItem[] = [
  {
    name: "Vice Roleplay",
    mode: "Hard RP",
    language: "RU",
    online: "скоро",
    status: "лист ожидания",
    description: "Премиальный RP-проект с акцентом на криминальные истории, бизнесы и медиа.",
    tag: "ожидание GTA 6",
  },
  {
    name: "Leonida Life",
    mode: "Medium RP",
    language: "RU",
    online: "скоро",
    status: "концепт",
    description: "Городская жизнь, полиция, банды, недвижимость и карьерные ветки для новичков.",
    tag: "русскоязычный",
  },
  {
    name: "Neon State",
    mode: "RP / Online",
    language: "EN",
    online: "скоро",
    status: "набор команды",
    description: "Сервер для игроков, которые хотят баланс между RP, гонками и открытым миром.",
    tag: "community",
  },
  {
    name: "Ocean Drive RP",
    mode: "Soft RP",
    language: "RU",
    online: "скоро",
    status: "анонс",
    description: "Лёгкий вход для новичков, социальные активности, автокультура и вечерние ивенты.",
    tag: "new player friendly",
  },
];

export const discussions: DiscussionItem[] = [
  { title: "Будет ли GTA 6 на ПК в день релиза?", comments: 128, href: "/gta-6-na-pk" },
  { title: "Какие районы Вайс-Сити покажут во втором трейлере?", comments: 96, href: "/karta" },
  { title: "Нужны ли строгие RP-правила на старте GTA 6?", comments: 74, href: "/rp" },
  { title: "Каким должен быть первый русский RP-каталог?", comments: 53, href: "/servera" },
];

export const pageContents: Record<string, PageContent> = {
  news: {
    slug: "news",
    title: "Новости GTA 6 — свежие материалы, слухи и разборы",
    description: "Все новости GTA 6 на русском: дата выхода, трейлеры, карта, персонажи, GTA 6 Online и RP-серверы.",
    eyebrow: "Новости",
    heroTitle: "Новости GTA 6",
    heroText: "Единая лента важных материалов о GTA 6: проверенные факты, аккуратные разборы и понятные обновления для игроков.",
    highlights: ["Трейлеры и детали", "Разборы карты", "Новости Online и RP"],
    sections: [
      { title: "Что публикуем", text: "Фокусируемся на событиях, которые реально важны игрокам: релиз, платформы, механики, карта и мультиплеер." },
      { title: "Подход к слухам", text: "Отделяем подтверждённые факты от предположений и явно помечаем материалы, где речь идёт об ожиданиях сообщества." },
    ],
  },
  "gta-6-data-vyhoda": {
    slug: "gta-6-data-vyhoda",
    title: "Дата выхода GTA 6 — релиз 19 ноября 2026",
    description: "Дата выхода GTA 6, таймер до релиза, платформы и всё, что известно о запуске игры.",
    eyebrow: "Релиз",
    heroTitle: "Дата выхода GTA 6",
    heroText: "Главная дата для игроков — 19 ноября 2026 года. На этой странице собираем всю информацию о запуске GTA 6.",
    highlights: ["Таймер до релиза", "Платформы", "Версии и ожидания"],
    sections: [
      { title: "Когда выйдет GTA 6", text: "MVP портала использует дату 19 ноября 2026 как ключевую точку отсчёта для таймера и SEO-страниц." },
      { title: "Что отслеживать", text: "Будем обновлять информацию о предзаказах, изданиях, локализации, переносах и отличиях версий." },
    ],
  },
  "gta-6-na-pk": {
    slug: "gta-6-na-pk",
    title: "GTA 6 на ПК — дата, системные требования и ожидания",
    description: "Когда GTA 6 выйдет на ПК, какие системные требования ждать и чем ПК-версия может отличаться.",
    eyebrow: "PC",
    heroTitle: "GTA 6 на ПК",
    heroText: "Отдельный раздел для игроков на PC: сроки, возможные требования, моды, графика и будущие обновления.",
    highlights: ["Сроки ПК-версии", "Системные требования", "Моды и графика"],
    sections: [
      { title: "Почему ПК важен", text: "PC-сообщество традиционно делает GTA долгоживущей благодаря модам, RP-серверам, графическим сборкам и стримерам." },
      { title: "Что будет на странице", text: "После официальных деталей здесь появятся требования, сравнения настроек и рекомендации по апгрейду." },
    ],
  },
  online: {
    slug: "online",
    title: "GTA 6 Online — мультиплеер, активности и обновления",
    description: "Раздел о GTA 6 Online: кооператив, бизнесы, гонки, события, обновления и будущие возможности мультиплеера.",
    eyebrow: "Multiplayer",
    heroTitle: "GTA 6 Online",
    heroText: "Следим за тем, каким станет онлайн-режим GTA 6: экономика, миссии, карта, сезоны и социальные функции.",
    highlights: ["Активности", "Экономика", "Сезоны"],
    sections: [
      { title: "Будущее Online", text: "Ожидаем эволюцию формулы GTA Online: больше событий, персонализации, кооператива и живой карты." },
      { title: "Материалы", text: "Будем публиковать гайды по старту, заработку, транспорту, недвижимости и совместной игре." },
    ],
  },
  rp: {
    slug: "rp",
    title: "GTA 6 RP — ролевые серверы, правила и фракции",
    description: "GTA 6 RP на русском: будущие ролевые серверы, правила, фракции, профессии и старт для новичков.",
    eyebrow: "Roleplay",
    heroTitle: "GTA 6 RP",
    heroText: "Раздел про ролевую сцену GTA 6: серверы, правила, профессии, криминал, госструктуры и истории игроков.",
    highlights: ["Правила RP", "Фракции", "Новичкам"],
    sections: [
      { title: "RP после релиза", text: "Когда появятся инструменты и серверные решения, раздел станет каталогом гайдов, правил и лучших практик." },
      { title: "Для кого", text: "Для новичков, администраторов, лидеров фракций и игроков, которые хотят заранее понять формат GTA 6 RP." },
    ],
  },
  servera: {
    slug: "servera",
    title: "Серверы GTA 6 — каталог RP и Online проектов",
    description: "Будущий каталог серверов GTA 6: RP-проекты, Online-комьюнити, рейтинги, описания и подборки.",
    eyebrow: "Servers",
    heroTitle: "Серверы GTA 6",
    heroText: "Каталог будущих серверов и комьюнити GTA 6 с акцентом на русскоязычные RP-проекты и качественную модерацию.",
    highlights: ["Каталог", "Рейтинги", "Комьюнити"],
    sections: [
      { title: "Как будет работать каталог", text: "На MVP этапе показываем концепт, далее добавим фильтры по онлайну, режиму, языку, правилам и уровню RP." },
      { title: "Критерии", text: "Будем выделять стабильность, честную экономику, активную администрацию и понятные правила входа." },
    ],
  },
  karta: {
    slug: "karta",
    title: "Карта GTA 6 — Вайс-Сити, Леонида и районы",
    description: "Карта GTA 6: Вайс-Сити, штат Леонида, районы, пляжи, трассы, болота и возможные активности.",
    eyebrow: "Map",
    heroTitle: "Карта GTA 6",
    heroText: "Разбираем географию GTA 6: Вайс-Сити, побережье, пригороды, трассы, болота и потенциальные точки интереса.",
    highlights: ["Вайс-Сити", "Леонида", "Точки интереса"],
    sections: [
      { title: "Почему карта важна", text: "Открытый мир задаёт темп всей игре: от сюжетных миссий до RP, гонок, бизнеса и случайных событий." },
      { title: "Что добавим", text: "После появления официальных материалов здесь будет интерактивная база районов, активностей и маршрутов." },
    ],
  },
  personazhi: {
    slug: "personazhi",
    title: "Персонажи GTA 6 — герои, сюжет и связи",
    description: "Главные персонажи GTA 6, сюжетные линии, отношения героев, банды и второстепенные персонажи.",
    eyebrow: "Story",
    heroTitle: "Персонажи GTA 6",
    heroText: "Собираем подтверждённые сведения и аккуратные разборы о героях GTA 6, их мотивации и роли в истории.",
    highlights: ["Главные герои", "Сюжет", "Банды"],
    sections: [
      { title: "Герои и динамика", text: "Ожидаем сильный фокус на отношениях персонажей, криминальных решениях и последствиях выбора." },
      { title: "База персонажей", text: "После новых трейлеров добавим карточки героев, связи, цитаты, факты и сюжетные заметки без спойлеров." },
    ],
  },
};
