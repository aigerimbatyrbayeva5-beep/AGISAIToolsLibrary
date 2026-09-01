export type Lang = 'en' | 'ru' | 'kz';

export interface Translations {
  lang: Lang;
  nav: {
    home: string;
    explore: string;
    categories: string;
    about: string;
    exploreBtn: string;
  };
  hero: {
    headline: string;
    subtext: string;
    searchPlaceholder: string;
    exploreAll: string;
    browseCategory: string;
  };
  categories: {
    title: string;
    tools: string;
  };
  featured: {
    title: string;
    viewAll: string;
  };
  findTool: {
    title: string;
    tasks: string[];
  };
  responsible: {
    title: string;
    text: string;
    readGuidelines: string;
    learnMore: string;
  };
  explore: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: string;
    sortBy: string;
    sortRecommended: string;
    sortAZ: string;
    sortRecent: string;
    resultsCount: (n: number) => string;
    noResults: string;
    clearFilters: string;
    filterPricing: string;
    filterRegistration: string;
    filterUser: string;
    filterLanguage: string;
    filterCategories: string;
    pricingFree: string;
    pricingFreemium: string;
    pricingPaid: string;
    registrationRequired: string;
    noRegistration: string;
    userTeacher: string;
    userStudent: string;
    userBoth: string;
  };
  card: {
    viewDetails: string;
    visitTool: string;
    freePlan: string;
    multilingual: string;
    registrationRequired: string;
    noRegistration: string;
    bestFor: string;
  };
  detail: {
    overview: string;
    whatCanYouDo: string;
    bestForTeachers: string;
    accessPricing: string;
    advantages: string;
    limitations: string;
    classroomExamples: string;
    similarTools: string;
    registration: string;
    freePlan: string;
    freeWithoutReg: string;
    languages: string;
    exportFormats: string;
    freeLimitations: string;
    yes: string;
    no: string;
    visitTool: string;
    backToExplore: string;
    pricing: string;
  };
  about: {
    title: string;
    subtitle: string;
    howEvaluated: string;
    evaluationCriteria: string[];
    disclaimer: string;
    teamTitle: string;
    teamText: string;
  };
  footer: {
    tagline: string;
    links: string;
    explore: string;
    categories: string;
    about: string;
    responsible: string;
    disclaimer: string;
  };
  categoryNames: Record<string, string>;
  pricingLabels: Record<string, string>;
}

const en: Translations = {
  lang: 'en',
  nav: {
    home: 'Home',
    explore: 'Explore Tools',
    categories: 'Categories',
    about: 'About',
    exploreBtn: 'Explore AI Tools',
  },
  hero: {
    headline: 'Find the right AI tool for your teaching',
    subtext:
      'Explore AI-powered tools for lesson planning, assessment, differentiation, content creation, research and more.',
    searchPlaceholder: 'Search AI tools, tasks or features…',
    exploreAll: 'Explore all tools',
    browseCategory: 'Browse by category',
  },
  categories: {
    title: 'Browse by what you want to do',
    tools: 'tools',
  },
  featured: {
    title: 'Featured AI Tools',
    viewAll: 'View all AI tools →',
  },
  findTool: {
    title: 'What do you want AI to help you with?',
    tasks: [
      'I need to plan a lesson',
      'I need to create a quiz',
      'I need a presentation',
      'I need to differentiate a text',
      'I need to generate an image',
      'I need to give students feedback',
      'I need help with research',
      'I want students to use AI',
    ],
  },
  responsible: {
    title: 'Use AI Responsibly',
    text: "AI tools should support—not replace—professional judgment, creativity and academic integrity. Always consider privacy, age restrictions and your school's AI policy before using a tool with students.",
    readGuidelines: 'Read AI Guidelines',
    learnMore: 'Learn about Responsible AI',
  },
  explore: {
    title: 'Explore AI Tools',
    subtitle: 'Find the right tool for every teaching task',
    searchPlaceholder: 'Search by tool, feature or teaching task…',
    filters: 'Filters',
    sortBy: 'Sort by',
    sortRecommended: 'Recommended',
    sortAZ: 'A–Z',
    sortRecent: 'Recently Added',
    resultsCount: (n) => `${n} AI tool${n !== 1 ? 's' : ''} found`,
    noResults: 'No tools match your search. Try different keywords or filters.',
    clearFilters: 'Clear all filters',
    filterPricing: 'Pricing',
    filterRegistration: 'Registration',
    filterUser: 'User',
    filterLanguage: 'Language',
    filterCategories: 'Categories',
    pricingFree: 'Free',
    pricingFreemium: 'Freemium',
    pricingPaid: 'Paid',
    registrationRequired: 'Registration required',
    noRegistration: 'No registration required',
    userTeacher: 'Teacher',
    userStudent: 'Student',
    userBoth: 'Teacher & Student',
  },
  card: {
    viewDetails: 'View details',
    visitTool: 'Visit tool ↗',
    freePlan: 'Free plan',
    multilingual: 'Multilingual',
    registrationRequired: 'Registration required',
    noRegistration: 'No registration',
    bestFor: 'Best for',
  },
  detail: {
    overview: 'Overview',
    whatCanYouDo: 'What can you do with it?',
    bestForTeachers: 'Best for teachers',
    accessPricing: 'Access & Pricing',
    advantages: 'Advantages',
    limitations: 'Limitations',
    classroomExamples: 'How could I use this in my classroom?',
    similarTools: 'Similar AI Tools',
    registration: 'Registration',
    freePlan: 'Free Plan',
    freeWithoutReg: 'Available without registration',
    languages: 'Languages',
    exportFormats: 'Export formats',
    freeLimitations: 'Free plan limitations',
    yes: 'Yes',
    no: 'No',
    visitTool: 'Visit tool ↗',
    backToExplore: '← Back to tools',
    pricing: 'Pricing',
  },
  about: {
    title: 'About the AI Tools Library',
    subtitle:
      'This library helps educators discover AI tools that can support teaching, learning and productivity. Tools are organized according to their educational purpose, functions, accessibility and limitations.',
    howEvaluated: 'How tools are evaluated',
    evaluationCriteria: [
      'Educational usefulness',
      'Accessibility',
      'Free functionality',
      'Ease of use',
      'Language support',
      'Export options',
      'Potential classroom applications',
      'Limitations',
    ],
    disclaimer:
      'AI products and pricing change frequently. Information in this library should be periodically reviewed and verified on the provider\'s official website.',
    teamTitle: 'Built for educators',
    teamText:
      'Curated by teachers, for teachers. Every tool is evaluated for real classroom applicability.',
  },
  footer: {
    tagline: 'Built for educators',
    links: 'Quick Links',
    explore: 'Explore Tools',
    categories: 'Categories',
    about: 'About',
    responsible: 'Responsible AI',
    disclaimer: 'Tool availability, features and pricing may change.',
  },
  categoryNames: {
    'lesson-planning': 'Lesson Planning',
    'assessment': 'Assessment & Feedback',
    'differentiation': 'Differentiation',
    'presentations': 'Presentations',
    'worksheets': 'Worksheets & Resources',
    'research': 'Research',
    'writing': 'Writing',
    'images': 'Images & Design',
    'video': 'Video',
    'productivity': 'Productivity',
    'coding': 'Coding',
    'student-activities': 'Student Activities',
  },
  pricingLabels: {
    free: 'Free',
    freemium: 'Freemium',
    paid: 'Paid',
  },
};

const ru: Translations = {
  lang: 'ru',
  nav: {
    home: 'Главная',
    explore: 'ИИ-инструменты',
    categories: 'Категории',
    about: 'О библиотеке',
    exploreBtn: 'ИИ-инструменты',
  },
  hero: {
    headline: 'Найдите подходящий ИИ-инструмент для преподавания',
    subtext:
      'Исследуйте инструменты на основе ИИ для планирования уроков, оценивания, дифференциации, создания контента, исследований и многого другого.',
    searchPlaceholder: 'Поиск по ИИ-инструментам, задачам и функциям…',
    exploreAll: 'Все инструменты',
    browseCategory: 'Просмотр по категориям',
  },
  categories: {
    title: 'Выберите, что вы хотите сделать',
    tools: 'инструментов',
  },
  featured: {
    title: 'Рекомендуемые ИИ-инструменты',
    viewAll: 'Все ИИ-инструменты →',
  },
  findTool: {
    title: 'С чем вам помочь?',
    tasks: [
      'Мне нужно спланировать урок',
      'Мне нужно создать тест',
      'Мне нужна презентация',
      'Мне нужно дифференцировать текст',
      'Мне нужно создать изображение',
      'Мне нужно дать обратную связь ученикам',
      'Мне нужна помощь с исследованием',
      'Я хочу, чтобы ученики использовали ИИ',
    ],
  },
  responsible: {
    title: 'Используйте ИИ ответственно',
    text: 'ИИ-инструменты должны поддерживать — а не заменять — профессиональное суждение, творчество и академическую честность. Всегда учитывайте конфиденциальность, возрастные ограничения и политику школы в области ИИ перед использованием инструментов с учениками.',
    readGuidelines: 'Руководство по ИИ',
    learnMore: 'Об ответственном ИИ',
  },
  explore: {
    title: 'ИИ-инструменты для педагогов',
    subtitle: 'Найдите подходящий инструмент для каждой учебной задачи',
    searchPlaceholder: 'Поиск по инструменту, функции или задаче…',
    filters: 'Фильтры',
    sortBy: 'Сортировка',
    sortRecommended: 'Рекомендуемые',
    sortAZ: 'А–Я',
    sortRecent: 'Недавно добавленные',
    resultsCount: (n) => `Найдено инструментов: ${n}`,
    noResults: 'Инструменты не найдены. Попробуйте другие ключевые слова или фильтры.',
    clearFilters: 'Сбросить фильтры',
    filterPricing: 'Стоимость',
    filterRegistration: 'Регистрация',
    filterUser: 'Пользователь',
    filterLanguage: 'Язык',
    filterCategories: 'Категории',
    pricingFree: 'Бесплатно',
    pricingFreemium: 'Фримиум',
    pricingPaid: 'Платно',
    registrationRequired: 'Требуется регистрация',
    noRegistration: 'Без регистрации',
    userTeacher: 'Учитель',
    userStudent: 'Ученик',
    userBoth: 'Учитель и ученик',
  },
  card: {
    viewDetails: 'Подробнее',
    visitTool: 'Перейти ↗',
    freePlan: 'Бесплатный план',
    multilingual: 'Мультиязычный',
    registrationRequired: 'Требуется регистрация',
    noRegistration: 'Без регистрации',
    bestFor: 'Лучше всего для',
  },
  detail: {
    overview: 'Обзор',
    whatCanYouDo: 'Что можно делать?',
    bestForTeachers: 'Лучшее для учителей',
    accessPricing: 'Доступ и стоимость',
    advantages: 'Преимущества',
    limitations: 'Ограничения',
    classroomExamples: 'Как использовать в классе?',
    similarTools: 'Похожие ИИ-инструменты',
    registration: 'Регистрация',
    freePlan: 'Бесплатный план',
    freeWithoutReg: 'Доступно без регистрации',
    languages: 'Языки',
    exportFormats: 'Форматы экспорта',
    freeLimitations: 'Ограничения бесплатной версии',
    yes: 'Да',
    no: 'Нет',
    visitTool: 'Перейти на сайт ↗',
    backToExplore: '← Все инструменты',
    pricing: 'Стоимость',
  },
  about: {
    title: 'О библиотеке ИИ-инструментов',
    subtitle:
      'Эта библиотека помогает педагогам находить ИИ-инструменты, которые могут поддержать преподавание, обучение и продуктивность. Инструменты организованы по образовательному назначению, функциям, доступности и ограничениям.',
    howEvaluated: 'Как оцениваются инструменты',
    evaluationCriteria: [
      'Образовательная полезность',
      'Доступность',
      'Бесплатные функции',
      'Простота использования',
      'Языковая поддержка',
      'Параметры экспорта',
      'Возможности применения в классе',
      'Ограничения',
    ],
    disclaimer:
      'Продукты ИИ и ценообразование меняются. Информацию в этой библиотеке следует периодически проверять на официальном сайте поставщика.',
    teamTitle: 'Создано для педагогов',
    teamText: 'Подобрано учителями для учителей. Каждый инструмент оценивается с точки зрения реального применения в классе.',
  },
  footer: {
    tagline: 'Создано для педагогов',
    links: 'Навигация',
    explore: 'Инструменты',
    categories: 'Категории',
    about: 'О нас',
    responsible: 'Ответственный ИИ',
    disclaimer: 'Доступность инструментов, функции и цены могут меняться.',
  },
  categoryNames: {
    'lesson-planning': 'Планирование уроков',
    'assessment': 'Оценивание и обратная связь',
    'differentiation': 'Дифференциация',
    'presentations': 'Презентации',
    'worksheets': 'Рабочие листы',
    'research': 'Исследования',
    'writing': 'Письмо',
    'images': 'Изображения и дизайн',
    'video': 'Видео',
    'productivity': 'Продуктивность',
    'coding': 'Программирование',
    'student-activities': 'Деятельность учеников',
  },
  pricingLabels: {
    free: 'Бесплатно',
    freemium: 'Фримиум',
    paid: 'Платно',
  },
};

const kz: Translations = {
  lang: 'kz',
  nav: {
    home: 'Басты бет',
    explore: 'ЖИ құралдары',
    categories: 'Санаттар',
    about: 'Кітапхана туралы',
    exploreBtn: 'ЖИ құралдары',
  },
  hero: {
    headline: 'Оқытуға арналған қажетті ЖИ құралын табыңыз',
    subtext:
      'Сабақ жоспарлауға, бағалауға, саралауға, мазмұн жасауға, зерттеуге және т.б. арналған ЖИ-негізді құралдарды зерттеңіз.',
    searchPlaceholder: 'ЖИ құралдарын, тапсырмаларды немесе функцияларды іздеу…',
    exploreAll: 'Барлық құралдар',
    browseCategory: 'Санаттар бойынша шолу',
  },
  categories: {
    title: 'Не істегіңіз келетінін таңдаңыз',
    tools: 'құрал',
  },
  featured: {
    title: 'Ұсынылатын ЖИ құралдары',
    viewAll: 'Барлық ЖИ құралдары →',
  },
  findTool: {
    title: 'ЖИ сізге немен көмектесуін қалайсыз?',
    tasks: [
      'Сабақ жоспарлауым керек',
      'Тест жасауым керек',
      'Презентация жасауым керек',
      'Мәтінді саралауым керек',
      'Сурет жасауым керек',
      'Оқушыларға кері байланыс беруім керек',
      'Зерттеуге көмек керек',
      'Оқушылар ЖИ пайдалансын деймін',
    ],
  },
  responsible: {
    title: 'ЖИ-ні жауапты пайдаланыңыз',
    text: 'ЖИ құралдары кәсіби пайымдауды, шығармашылықты және академиялық адалдықты қолдауы керек — алмастырмауы. Оқушылармен пайдаланбас бұрын әрдайым құпиялылықты, жас шектеулерін және мектептің ЖИ саясатын ескеріңіз.',
    readGuidelines: 'ЖИ нұсқаулары',
    learnMore: 'Жауапты ЖИ туралы',
  },
  explore: {
    title: 'Педагогтарға арналған ЖИ құралдары',
    subtitle: 'Әр оқу тапсырмасына қажетті құралды табыңыз',
    searchPlaceholder: 'Құрал, функция немесе тапсырма бойынша іздеу…',
    filters: 'Сүзгілер',
    sortBy: 'Сұрыптау',
    sortRecommended: 'Ұсынылатын',
    sortAZ: 'А–Я',
    sortRecent: 'Жақында қосылған',
    resultsCount: (n) => `${n} құрал табылды`,
    noResults: 'Сәйкес құралдар табылмады. Басқа сөздерді немесе сүзгілерді қолданып көріңіз.',
    clearFilters: 'Сүзгілерді тазалау',
    filterPricing: 'Баға',
    filterRegistration: 'Тіркелу',
    filterUser: 'Пайдаланушы',
    filterLanguage: 'Тіл',
    filterCategories: 'Санаттар',
    pricingFree: 'Тегін',
    pricingFreemium: 'Фримиум',
    pricingPaid: 'Ақылы',
    registrationRequired: 'Тіркелу қажет',
    noRegistration: 'Тіркелусіз',
    userTeacher: 'Мұғалім',
    userStudent: 'Оқушы',
    userBoth: 'Мұғалім және оқушы',
  },
  card: {
    viewDetails: 'Толығырақ',
    visitTool: 'Өтіп кіру ↗',
    freePlan: 'Тегін жоспар',
    multilingual: 'Көптілді',
    registrationRequired: 'Тіркелу қажет',
    noRegistration: 'Тіркелусіз',
    bestFor: 'Ең жақсы',
  },
  detail: {
    overview: 'Шолу',
    whatCanYouDo: 'Онымен не істеуге болады?',
    bestForTeachers: 'Мұғалімдерге ең жақсы',
    accessPricing: 'Қол жетімділік және баға',
    advantages: 'Артықшылықтары',
    limitations: 'Шектеулері',
    classroomExamples: 'Сыныпта қалай пайдалануға болады?',
    similarTools: 'Ұқсас ЖИ құралдары',
    registration: 'Тіркелу',
    freePlan: 'Тегін жоспар',
    freeWithoutReg: 'Тіркелусіз қол жетімді',
    languages: 'Тілдер',
    exportFormats: 'Экспорт форматтары',
    freeLimitations: 'Тегін нұсқаның шектеулері',
    yes: 'Иә',
    no: 'Жоқ',
    visitTool: 'Сайтқа өту ↗',
    backToExplore: '← Барлық құралдар',
    pricing: 'Баға',
  },
  about: {
    title: 'ЖИ Құралдар Кітапханасы туралы',
    subtitle:
      'Бұл кітапхана педагогтарға оқыту, оқу және өнімділікті қолдай алатын ЖИ құралдарын табуға көмектеседі. Құралдар олардың білім беру мақсатына, функцияларына, қол жетімділігіне және шектеулеріне сәйкес ұйымдастырылған.',
    howEvaluated: 'Құралдар қалай бағаланады',
    evaluationCriteria: [
      'Білім беру пайдалылығы',
      'Қол жетімділік',
      'Тегін функционалдылық',
      'Қолданысының қарапайымдылығы',
      'Тілдік қолдау',
      'Экспорт мүмкіндіктері',
      'Сыныпта қолдану мүмкіндіктері',
      'Шектеулер',
    ],
    disclaimer:
      'ЖИ өнімдері мен бағалар жиі өзгеруде. Осы кітапханадағы ақпаратты мезгіл-мезгіл провайдердің ресми сайтында тексеріп отыру керек.',
    teamTitle: 'Педагогтарға арналған',
    teamText: 'Мұғалімдер мұғалімдер үшін таңдаған. Әрбір құрал нақты сыныпта қолдануға жарамдылығы тұрғысынан бағаланады.',
  },
  footer: {
    tagline: 'Педагогтарға арналған',
    links: 'Навигация',
    explore: 'Құралдар',
    categories: 'Санаттар',
    about: 'Туралы',
    responsible: 'Жауапты ЖИ',
    disclaimer: 'Құралдардың қол жетімділігі, мүмкіндіктері мен бағасы өзгеруі мүмкін.',
  },
  categoryNames: {
    'lesson-planning': 'Сабақ жоспарлау',
    'assessment': 'Бағалау және кері байланыс',
    'differentiation': 'Саралау',
    'presentations': 'Презентациялар',
    'worksheets': 'Жұмыс парақтары',
    'research': 'Зерттеу',
    'writing': 'Жазу',
    'images': 'Суреттер және дизайн',
    'video': 'Бейне',
    'productivity': 'Өнімділік',
    'coding': 'Бағдарламалау',
    'student-activities': 'Оқушы іс-шаралары',
  },
  pricingLabels: {
    free: 'Тегін',
    freemium: 'Фримиум',
    paid: 'Ақылы',
  },
};

export const translations: Record<Lang, Translations> = { en, ru, kz };

export const VALID_LANGS: Lang[] = ['en', 'ru', 'kz'];

export function isValidLang(lang: string): lang is Lang {
  return VALID_LANGS.includes(lang as Lang);
}
