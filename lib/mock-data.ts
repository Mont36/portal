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
  comments: number;
};

export type ServerItem = {
  name: string;
  mode: string;
  language: "RU" | "EN";
  online: string;
  status: string;
  description: string;
  tag: string;
  accent: "pink" | "cyan" | "violet";
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
    "Русскоязычный премиальный портал про GTA 6: дата выхода, новости, карта, персонажи, Online, RP и серверы.",
  trailerUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  releaseDateIso: "2026-11-19T00:00:00+03:00",
  releaseDateLabel: "19 ноября 2026",
};

export const navItems: NavItem[] = [
  { title: "Новости", href: "/news" },
  { title: "GTA 6", href: "/gta-6-data-vyhoda" },
  { title: "Карта", href: "/karta" },
  { title: "Персонажи", href: "/personazhi" },
  { title: "GTA 6 Online", href: "/online" },
  { title: "RP сервера", href: "/rp" },
  { title: "Гайды", href: "/news" },
  { title: "Сообщество", href: "/servera" },
];

export const quickLinks: QuickLink[] = [
  { title: "Дата выхода", href: "/gta-6-data-vyhoda", description: "Когда выйдет GTA 6", accent: "pink", icon: "◴" },
  { title: "Карта", href: "/karta", description: "Леонида и Vice City", accent: "cyan", icon: "♢" },
  { title: "Персонажи", href: "/personazhi", description: "Герои и их история", accent: "pink", icon: "♙" },
  { title: "GTA 6 Online", href: "/online", description: "Что известно", accent: "violet", icon: "✹" },
  { title: "RP сервера", href: "/rp", description: "Каталог и рейтинг", accent: "pink", icon: "▣" },
  { title: "Гайды", href: "/news", description: "Советы и прохождение", accent: "cyan", icon: "◰" },
];

export const latestNews: NewsItem[] = [
  {
    id: "trailer-two-window",
    title: "Rockstar Games: второй трейлер GTA 6 выйдет в начале 2025 года",
    excerpt: "Rockstar подтвердила, что второй трейлер GTA 6 будет показан в начале 2025 года. Ожидается больше деталей о сюжете и игровом мире.",
    category: "Официально",
    href: "/news",
    date: "2 часа назад",
    image: "/images/home/news-trailer.png",
    accent: "pink",
    comments: 128,
  },
  {
    id: "pc-later",
    title: "Инсайдер: GTA 6 не выйдет на ПК в день релиза",
    excerpt: "По данным обсуждений в индустрии, консольный запуск останется первым этапом, а ПК-версия получит отдельное окно.",
    category: "Слухи",
    href: "/gta-6-na-pk",
    date: "5 часов назад",
    image: "/images/home/news-street.png",
    accent: "cyan",
    comments: 64,
  },
  {
    id: "screenshots-online",
    title: "Новые скриншоты GTA 6 утекли в сеть",
    excerpt: "Фанаты обсуждают городской трафик, береговую линию и ночной неон в свежих кадрах.",
    category: "Новости",
    href: "/news",
    date: "8 часов назад",
    image: "/images/home/online-preview.png",
    accent: "violet",
    comments: 93,
  },
  {
    id: "characters-confirmed",
    title: "Подтверждены новые персонажи GTA 6",
    excerpt: "Собираем карточки героев, связи и сюжетные роли без использования официальных материалов.",
    category: "Официально",
    href: "/personazhi",
    date: "12 часов назад",
    image: "/images/home/news-characters.png",
    accent: "pink",
    comments: 77,
  },
];

export const importantSections: ImportantSectionItem[] = [
  {
    title: "Карта GTA 6",
    description: "Исследуйте карту Леониды, Vice City и окрестностей",
    href: "/karta",
    cta: "Смотреть карту",
    accent: "cyan",
  },
  {
    title: "Персонажи",
    description: "Познакомьтесь с героями GTA 6",
    href: "/personazhi",
    cta: "Подробнее",
    accent: "pink",
  },
  {
    title: "GTA 6 Online",
    description: "Всё, что известно об онлайн-режиме",
    href: "/online",
    cta: "Читать",
    accent: "violet",
  },
  {
    title: "RP сервера",
    description: "Каталог будущих RP-серверов GTA 6",
    href: "/rp",
    cta: "Выбрать сервер",
    accent: "pink",
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
    name: "Vice City RP",
    mode: "Hard RP",
    language: "RU",
    online: "320/1000",
    status: "RU",
    description: "Неоновый криминальный RP с фракциями, бизнесами и медиа.",
    tag: "vice",
    accent: "pink",
  },
  {
    name: "Leonida RP",
    mode: "Medium RP",
    language: "RU",
    online: "278/1000",
    status: "RU",
    description: "Полиция, банды, карьеры и спокойный вход для новичков.",
    tag: "leonida",
    accent: "violet",
  },
  {
    name: "Sunshine State RP",
    mode: "RP / Online",
    language: "EN",
    online: "195/1000",
    status: "EN",
    description: "Баланс открытого мира, гонок и городской ролевой игры.",
    tag: "sunshine",
    accent: "cyan",
  },
  {
    name: "GTA 6 RP Project",
    mode: "Soft RP",
    language: "RU",
    online: "150/1000",
    status: "RU",
    description: "Каталог команд, форум, заявки и первые игровые сценарии.",
    tag: "project",
    accent: "pink",
  },
];

export const discussions: DiscussionItem[] = [
  { title: "Второй трейлер GTA 6 — что показали?", comments: 128, href: "/news" },
  { title: "Какие системные требования будут у GTA 6?", comments: 96, href: "/gta-6-na-pk" },
  { title: "Будет ли GTA 6 на ПК в 2026?", comments: 74, href: "/gta-6-na-pk" },
  { title: "Обсуждение карты Леониды", comments: 58, href: "/karta" },
  { title: "Какой RP сервер ждёте больше всего?", comments: 42, href: "/rp" },
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
    heroText: "Отдельная страница ожиданий ПК-версии: возможное окно релиза, оптимизация, моды и системные требования.",
    highlights: ["Окно релиза", "Системные требования", "Моды"],
    sections: [
      { title: "Статус ПК-версии", text: "На портале ПК-версия описывается как отдельный ожидаемый релиз после консольного запуска, без неподтверждённых дат." },
      { title: "Что важно ПК-игрокам", text: "Производительность, настройки графики, поддержка модификаций и перенос прогресса из Online." },
    ],
  },
  online: {
    slug: "online",
    title: "GTA 6 Online — всё об онлайн-режиме",
    description: "GTA 6 Online: новости, ожидания, экономика, активности, обновления и мультиплеер.",
    eyebrow: "Online",
    heroTitle: "GTA 6 Online",
    heroText: "Хаб для будущего онлайн-режима: активности, сезоны, экономика, кооператив и RP-возможности.",
    highlights: ["Сезоны", "Активности", "RP-сценарии"],
    sections: [
      { title: "Что ждём от Online", text: "Более живой открытый мир, социальные активности, расширенные роли игроков и продолжительную поддержку обновлениями." },
      { title: "Связь с RP", text: "RP-серверы и комьюнити-каталоги могут стать отдельным направлением вокруг GTA 6 Online." },
    ],
  },
  rp: {
    slug: "rp",
    title: "GTA 6 RP — сервера, правила и гайды",
    description: "GTA 6 RP: будущие серверы, правила, фракции, профессии и советы новичкам.",
    eyebrow: "Roleplay",
    heroTitle: "GTA 6 RP",
    heroText: "Раздел для будущей RP-экосистемы: серверы, правила, whitelist, роли, фракции и комьюнити.",
    highlights: ["Каталог серверов", "Правила RP", "Гайды новичкам"],
    sections: [
      { title: "Для игроков", text: "Поможем выбрать сервер, понять правила, найти фракцию и стартовую роль." },
      { title: "Для проектов", text: "Каталог сможет принимать карточки серверов, статусы разработки, языки и ссылки на сообщества." },
    ],
  },
  servera: {
    slug: "servera",
    title: "Серверы GTA 6 RP — каталог проектов",
    description: "Каталог будущих GTA 6 RP-серверов: язык, онлайн, режимы, описание и рейтинги.",
    eyebrow: "Серверы",
    heroTitle: "Серверы GTA 6 RP",
    heroText: "Будущий каталог проектов с фильтрами по языку, онлайну, режимам и уровню ролевой строгости.",
    highlights: ["RU и EN", "Онлайн", "Рейтинги"],
    sections: [
      { title: "Карточка сервера", text: "Название, язык, режим, статус, онлайн, описание и быстрый переход к правилам проекта." },
      { title: "Рейтинг", text: "Планируем отдельный рейтинг с голосами, отзывами и модерацией карточек." },
    ],
  },
  karta: {
    slug: "karta",
    title: "Карта GTA 6 — Вайс-Сити и Леонида",
    description: "Карта GTA 6: Леонида, Вайс-Сити, районы, побережье, болота, трассы и будущие точки интереса.",
    eyebrow: "Карта",
    heroTitle: "Карта GTA 6",
    heroText: "Собираем визуальную базу районов, трасс, пляжей, болот и городских зон будущей карты GTA 6.",
    highlights: ["Vice City", "Леонида", "Точки интереса"],
    sections: [
      { title: "Регионы", text: "Побережье, центр города, пригороды, болотистые зоны и трассы — всё будет структурировано в базе портала." },
      { title: "Интерактив", text: "После появления проверенных данных страницу можно расширить интерактивной картой и фильтрами." },
    ],
  },
  personazhi: {
    slug: "personazhi",
    title: "Персонажи GTA 6 — герои и сюжет",
    description: "Персонажи GTA 6: главные герои, сюжетные детали, отношения и теории сообщества.",
    eyebrow: "Персонажи",
    heroTitle: "Персонажи GTA 6",
    heroText: "Герои, роли в сюжете, отношения и аккуратные разборы кадров без неподтверждённых спойлеров.",
    highlights: ["Главные герои", "Сюжет", "Теории"],
    sections: [
      { title: "Карточки героев", text: "Будущая база персонажей с портретами-заглушками, фактами, цитатами и связями." },
      { title: "Теории", text: "Фанатские предположения отделяются от подтверждённых деталей и помечаются отдельно." },
    ],
  },
};
