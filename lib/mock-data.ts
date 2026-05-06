export type NavItem = {
  title: string;
  href: string;
};

export type Accent = "pink" | "cyan" | "violet" | "blue";

export type QuickLink = NavItem & {
  description: string;
  icon: string;
  accent: Accent;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date: string;
  image: string;
  featured?: boolean;
};

export type ServerItem = {
  name: string;
  mode: string;
  language: "RU" | "EN";
  online: string;
  status: string;
  description: string;
  tag: string;
  href: string;
};

export type DiscussionItem = {
  title: string;
  comments: number;
  href: string;
  tag: string;
};

export type ImportantSection = {
  title: string;
  description: string;
  href: string;
  cta: string;
  accent: Accent;
  icon: string;
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
  { title: "Дата выхода", href: "/gta-6-data-vyhoda", description: "Таймер, платформы, релиз", icon: "⏱", accent: "pink" },
  { title: "Карта", href: "/karta", description: "Вайс-Сити и Леонида", icon: "◆", accent: "cyan" },
  { title: "Персонажи", href: "/personazhi", description: "Герои, сюжет, связи", icon: "◉", accent: "violet" },
  { title: "GTA 6 Online", href: "/online", description: "Мультиплеер и сезоны", icon: "✦", accent: "blue" },
  { title: "RP сервера", href: "/rp", description: "Roleplay-комьюнити", icon: "▰", accent: "pink" },
  { title: "Гайды", href: "/news", description: "Разборы и чек-листы", icon: "⌁", accent: "cyan" },
];

export const latestNews: NewsItem[] = [
  {
    id: "release-window",
    title: "GTA 6 получила точную дату релиза: что важно знать игрокам",
    excerpt: "Собрали главное о заявленном окне запуска, версиях для консолей и ожиданиях игроков в России.",
    category: "Дата выхода",
    href: "/gta-6-data-vyhoda",
    date: "6 мая 2026",
    image: "/placeholders/card-neon.svg",
    featured: true,
  },
  {
    id: "vice-city-map",
    title: "Карта GTA 6: районы Леониды, которые стоит ждать в первую очередь",
    excerpt: "Пляжи, хайвеи, болота и ночной центр — каким может стать самый живой регион серии.",
    category: "Карта",
    href: "/karta",
    date: "5 мая 2026",
    image: "/placeholders/card-neon.svg",
  },
  {
    id: "online-rp",
    title: "GTA 6 Online и RP: какие серверы появятся первыми",
    excerpt: "Премиальные RP-проекты уже готовят концепции экономик, фракций и криминальных сценариев.",
    category: "Online",
    href: "/online",
    date: "4 мая 2026",
    image: "/placeholders/server-neon.svg",
  },
  {
    id: "pc-version",
    title: "GTA 6 на ПК: почему отдельный релиз может стать главным событием для моддеров",
    excerpt: "Разбираем ожидания PC-аудитории: графика, моды, RP-инструменты и возможные системные требования.",
    category: "PC",
    href: "/gta-6-na-pk",
    date: "3 мая 2026",
    image: "/placeholders/card-neon.svg",
  },
  {
    id: "characters",
    title: "Персонажи GTA 6: что известно о героях и динамике истории",
    excerpt: "Без спойлеров: отношения, криминальный вайб, мотивация и тон будущего сюжета.",
    category: "Персонажи",
    href: "/personazhi",
    date: "2 мая 2026",
    image: "/placeholders/card-neon.svg",
  },
  {
    id: "rp-rules",
    title: "Какими должны быть правила RP-серверов на старте GTA 6",
    excerpt: "Короткий чек-лист для будущих администраторов и игроков, которые хотят качественный roleplay.",
    category: "RP",
    href: "/rp",
    date: "1 мая 2026",
    image: "/placeholders/server-neon.svg",
  },
];

export const importantItems = [
  "Ожидаемая дата выхода — 19 ноября 2026 года.",
  "На первом этапе фокус — консольный релиз, ПК-версия вынесена в отдельный трек ожиданий.",
  "Действие разворачивается в штате Леонида с центром в Вайс-Сити.",
  "Portal будет обновляться как база знаний: новости, гайды, карта, RP и серверы.",
];

export const importantSections: ImportantSection[] = [
  {
    title: "Карта GTA 6",
    description: "Районы Вайс-Сити, трассы Леониды, пляжи, болота и точки интереса для первых маршрутов.",
    href: "/karta",
    cta: "Открыть карту",
    accent: "cyan",
    icon: "◈",
  },
  {
    title: "Персонажи",
    description: "Главные герои, связи, криминальные сюжетные линии и аккуратные разборы без лишних спойлеров.",
    href: "/personazhi",
    cta: "Смотреть героев",
    accent: "pink",
    icon: "◎",
  },
  {
    title: "GTA 6 Online",
    description: "Мультиплеер, бизнесы, сезоны, кооператив, экономика и будущие активности открытого мира.",
    href: "/online",
    cta: "Что ждать Online",
    accent: "blue",
    icon: "✦",
  },
  {
    title: "RP сервера",
    description: "Будущий каталог русскоязычных RP-проектов, правила, фракции и стартовые гайды.",
    href: "/servera",
    cta: "Каталог серверов",
    accent: "violet",
    icon: "▰",
  },
];

export const servers: ServerItem[] = [
  {
    name: "Vice Roleplay",
    mode: "Hard RP",
    language: "RU",
    online: "2 400+",
    status: "Waitlist",
    description: "Премиальный RP-проект с акцентом на криминальные истории, бизнесы и медиа.",
    tag: "ожидание GTA 6",
    href: "/servera",
  },
  {
    name: "Leonida Life",
    mode: "Medium RP",
    language: "RU",
    online: "1 800+",
    status: "Concept",
    description: "Городская жизнь, полиция, банды, недвижимость и карьерные ветки для новичков.",
    tag: "русскоязычный",
    href: "/servera",
  },
  {
    name: "Neon State",
    mode: "RP / Online",
    language: "EN",
    online: "980+",
    status: "Community",
    description: "Баланс между RP, гонками, открытым миром и быстрыми событиями для небольших команд.",
    tag: "community",
    href: "/servera",
  },
  {
    name: "Ocean Drive RP",
    mode: "Soft RP",
    language: "RU",
    online: "720+",
    status: "Soon",
    description: "Лёгкий вход, понятные правила, фракции, nightlife-сценарии и упор на социальную игру.",
    tag: "new players",
    href: "/servera",
  },
];

export const discussions: DiscussionItem[] = [
  { title: "Будет ли GTA 6 на ПК в день релиза?", comments: 128, href: "/gta-6-na-pk", tag: "PC" },
  { title: "Какие районы Вайс-Сити покажут во втором трейлере?", comments: 96, href: "/karta", tag: "Карта" },
  { title: "Нужны ли строгие RP-правила на старте GTA 6?", comments: 74, href: "/rp", tag: "RP" },
  { title: "Какие активности Online должны появиться сразу?", comments: 61, href: "/online", tag: "Online" },
  { title: "Кого ждём среди второстепенных персонажей?", comments: 48, href: "/personazhi", tag: "Story" },
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
