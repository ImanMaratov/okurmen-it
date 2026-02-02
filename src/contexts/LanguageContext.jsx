import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  ru: {
    // Navigation
    about: 'О нас',
    format: 'Формат',
    directions: 'Направления',
    duration: 'Длительность',
    certificates: 'Сертификаты',
    gallery: 'Галерея',
    contacts: 'Контакты',
    
    // Hero
    heroTitle: 'Научитесь <span class="text-accent">программировать</span> с нуля',
    heroSubtitle: 'Okurmen IT Academy — ваш надежный путь в мир программирования. Обучаем с основ до продвинутых навыков в сфере IT.',
    chooseDirection: 'Выбрать направление',
    contactUs: 'Связаться с нами',
    programmingIllustration: 'Иллюстрация программистов за работой',
    students: 'Студентов',
    courses: 'Курсов',
    employmentRate: 'Трудоустройство',
    
    // About
    aboutTitle: 'О нас',
    aboutDescription: 'Okurmen IT Academy — это современная IT-академия, которая предоставляет качественное образование в сфере программирования с нуля. Мы помогаем нашим студентам стать востребованными специалистами в индустрии информационных технологий.',
    qualityEducation: 'Качественное обучение',
    qualityEducationDesc: 'Наши курсы разработаны профессионалами с многолетним опытом работы в IT.',
    practicalApproach: 'Практический подход',
    practicalApproachDesc: 'Большое количество практических заданий и реальных проектов.',
    employment: 'Трудоустройство',
    employmentDesc: 'Помощь в поиске работы после успешного завершения курсов.',
    
    // Learning Format
    learningFormatTitle: 'Формат обучения',
    onlineLearning: 'Онлайн обучение',
    onlineLearningDesc: 'Учитесь из любого места комфортно. Интерактивные занятия, доступ к материалам 24/7 и поддержка менторов онлайн.',
    onlineFeatures: ['Видео-лекции', 'Практические задания', 'Онлайн поддержка', 'Доступ к материалам'],
    offlineLearning: 'Оффлайн обучение',
    offlineLearningDesc: 'Традиционное обучение в аудитории с преподавателем. Личное взаимодействие, командная работа и живое общение.',
    offlineFeatures: ['Личное общение', 'Командная работа', 'Прямые консультации', 'Оборудованные классы'],
    
    // Directions
    directionsTitle: 'Направления обучения',
    frontend: 'Frontend',
    frontendDesc: 'Изучите современные технологии фронтенд-разработки: HTML, CSS, JavaScript, TailwindCss, Redux, React и другие.',
    frontendLevel: 'Для новичков и продолжающих',
    backend: 'Backend',
    backendDesc: 'Освойте серверную разработку с использованием Node.js, Python, Java, PHP, Django и других технологий.',
    backendLevel: 'Для новичков и продолжающих',
    flutter: 'Flutter',
    flutterDesc: 'Создавайте кроссплатформенные мобильные приложения с помощью Flutter и Dart.',
    flutterLevel: 'Для новичков и продолжающих',
    kids: 'Okurmen Kids',
    kidsDesc: 'Программирование для детей от 9 до 14 лет. Интерактивное обучение с элементами игры.',
    kidsLevel: 'Для детей 9-14 лет',
    level: 'Уровень',
    duration: 'Длительность',
    
    // Kids Section
    kidsSectionSubtitle: 'Программирование для будущих технологических лидеров',
    kidsInteractiveLearning: 'Интерактивное обучение',
    kidsInteractiveDesc: 'Увлекательные занятия с использованием современных технологий и игровых методов',
    kidsGameBased: 'Игровой подход',
    kidsGameBasedDesc: 'Обучение через игры и интерактивные задания для лучшего усвоения материала',
    kidsFutureSkills: 'Навыки будущего',
    kidsFutureSkillsDesc: 'Развитие логического мышления, креативности и цифровой грамотности',
    kidsAgeGroup: 'Возрастная группа',
    kidsYears: 'лет',
    kidsLocation: 'Местоположение',
    
    // Duration
    durationTitle: 'Сроки обучения',
    shortCourse: 'Краткий курс',
    shortDuration: '3 месяца',
    shortDesc: 'Интенсивное обучение основам программирования. Подходит для тех, кто хочет быстро освоить базовые навыки.',
    shortFeatures: ['Интенсивная программа', 'Базовые знания', 'Быстрое погружение', 'Поддержка менторов'],
    fullCourse: 'Полный курс',
    fullDuration: '7 месяцев',
    fullDesc: 'Полноценное обучение с углубленным изучением тем. Подходит для тех, кто хочет стать профессионалом.',
    fullFeatures: ['Полная программа', 'Глубокое изучение', 'Проектная работа', 'Трудоустройство'],
    
    // Certificates
    certificatesTitle: 'Сертификаты',
    standardCert: 'Обычный сертификат',
    standardSub: 'Базовый уровень',
    standardDesc: 'Подтверждает освоение базовых навыков по выбранному направлению. Выдается после успешной сдачи всех заданий и финального проекта.',
    goldenCert: 'Золотой сертификат',
    goldenSub: 'Продвинутый уровень',
    goldenDesc: 'Выдается за отличные результаты и глубокое понимание материала. Требует выполнения дополнительных заданий и защиты сложного проекта.',
    certFeatures: ['Официальное подтверждение', 'Признание работодателями', 'Помощь в трудоустройстве'],
    
    // Gallery
    galleryTitle: 'Галерея',
    eduPhoto: 'Образовательное фото',
    photo: 'Фото',
    
    // Contacts
    contactsTitle: 'Контакты',
    contactUsTitle: 'Свяжитесь с нами',
    address: 'Адрес',
    email: 'Email',
    phone: 'Телефон',
    workHours: 'Режим работы',
    workHoursValue: 'Пн-Пт: 9:00 - 21:00',
    mapLocation: 'Карта расположения',
    mapTitle: 'Расположение Okurmen IT Academy',
    turusbekovaAddress: 'г. Бишкек, ул. Турусбекова 109/1',
    tabysalievaAddress: 'г. Бишкек, ул. Табышалиева 29',
    
    // Footer
    navigation: 'Навигация',
    courses: 'Направления',
    
    // Modal
    signUp: 'Записаться',
    signUpModalTitle: 'Записаться на курсы',
    close: 'Закрыть',
    comingSoon: 'Скоро будут добавлены номера менеджеров',
    contactManager: 'Свяжитесь с нашим менеджером для записи на курсы',
    manager: 'Менеджер',
    clickToContact: 'Нажмите для связи через WhatsApp',
    
    // Footer copyright
    copyright: '© {year} Okurmen IT Academy. Все права защищены.',
    
    // City and country
    cityCountry: 'г.Бишкек, Турусбекова 109/1',
    emailValue: 'info@okurmen.kg',
    phoneValue: '+996 (507) 320-497',
    managerPhone: '+996 702 802 032',
  },
  kg: {
    // Navigation
    about: 'Биз жөнүндө',
    format: 'Формат',
    directions: 'Багыттар',
    duration: 'Мөөнөтү',
    certificates: 'Сертификаттар',
    gallery: 'Галерея',
    contacts: 'Байланыштар',
    
    // Hero
    heroTitle: '<span class="text-accent">Программалоо</span> боюнча нөлдөн үйрөнүңүз',
    heroSubtitle: 'Okurmen IT Academy сиздин программалоо дүйнөсүнө ишенимдүү дарбазаңыз. Биз сизге негиздеринен баштап алдыңкы IT көндүмдөрүнө чейин баарын үйрөтөбүз.',
    chooseDirection: 'Багыт тандаңыз',
    contactUs: 'Байланыш алуу',
    programmingIllustration: 'Программисттердин иш иллюстрациясы',
    students: 'Студенттер',
    courses: 'Курсдор',
    employmentRate: 'Иш менен камсыз кылуу',
    
    // About
    aboutTitle: 'Биз жөнүндө',
    aboutDescription: 'Okurmen IT Academy - бул башынан баштап жогорку сапаттагы программалоо боюнча билим берүүчү заманбап IT академиясы. Биз студенттерибизге IT тармагында талап кылынган адистер болууга жардам беребиз.',
    qualityEducation: 'Сапаттуу окутуу',
    qualityEducationDesc: 'Биздин курстар IT саласында көп жылдык тажрыйбага ээ болгон профессионалдар тарабынан иштелип чыккан.',
    practicalApproach: 'Практикалык мамиле',
    practicalApproachDesc: 'Көптөгөн практикалык тапшырмалар жана чыныгы долбоорлор.',
    employment: 'Ишке орноштуруу',
    employmentDesc: 'Курс убактысын ийгиликтүү өткөндөн кийин ишке жердештирүүгө жардам.',
    
    // Learning Format
    learningFormatTitle: 'Окутуу форматы',
    onlineLearning: 'Онлайн окутуу',
    onlineLearningDesc: 'Каалаган жерден ыңгайлуу окуңуз. Интерактивдүү сабактар, материалдарга 24/7 мүмкүнчүлүк жана онлайн режимде менторлордун колдоосу.',
    onlineFeatures: ['Видео-лекциялар', 'Практикалык тапшырмалар', 'Онлайн колдоо', 'Материалдарга жетки'],
    offlineLearning: 'Оффлайн окутуу',
    offlineLearningDesc: 'Окутуучу менен аудиторияда traditional окутуу. Жеке байланыш, команданын иши жана түздөн-түз байланыш.',
    offlineFeatures: ['Жеке байланыш', 'Командалык иш', 'Түз консультациялар', 'Жабдууланган класс-коому'],
    
    // Directions
    directionsTitle: 'Окутуу багыттары',
    frontend: 'Frontend',
    frontendDesc: 'HTML, CSS, JavaScript,TailwindCss, Redux, React жана башка заманбап кылган фронтенд-өндүрүү технологияларын үйрөңүз.',
    frontendLevel: 'Жаны үйрөнчүктөр жана алдыңкы колдонуучулар үчүн',
    backend: 'Backend',
    backendDesc: 'Node.js, Python, Java, PHP, Django жана башка технологияларды колдонуу менен сервердик өндүрүүн игерип алыңыз.',
    backendLevel: 'Жаны үйрөнчүктөр жана алдыңкы колдонуучулар үчүн',
    flutter: 'Flutter',
    flutterDesc: 'Flutter жана Dart колдонуу менен кросс-платформалык мобилдик колдонмолорду түзүңүз.',
    flutterLevel: 'Жаны үйрөнчүктөр жана алдыңкы колдонуучулар үчүн',
    kids: 'Okurmen Kids',
    kidsDesc: '9-14 жаштагы балдар үчүн программалоо. Оюн элементтерин камтыган интерактивдүү окутуу.',
    kidsLevel: '9-14 жаштагы балдар үчүн',
    level: 'Деңгээл',
    duration: 'Мөөнөтү',
    
    // Kids Section
    kidsSectionSubtitle: 'Келечектеги технологиялык лидерлер үчүн программалоо',
    kidsInteractiveLearning: 'Интерактивдүү окутуу',
    kidsInteractiveDesc: 'Заманбап технологияларды жана оюн ыкмаларын колдонуу менен кызыктуу сабактар',
    kidsGameBased: 'Оюнга негизделген мамиле',
    kidsGameBasedDesc: 'Материалды жакшыраак игери алуу үчүн оюндар жана интерактивдүү тапшырмалар аркылуу окутуу',
    kidsFutureSkills: 'Келечектеги көндүмдөр',
    kidsFutureSkillsDesc: 'Логикалык ой жүгүртүүнү, чыгармачылыкты жана санариптик сабаттуулукту өнүктүрүү',
    kidsAgeGroup: 'Жаш тобу',
    kidsYears: 'жаш',
    kidsLocation: 'Жайгашуу',
    
    // Duration
    durationTitle: 'Окутуу мөөнөтү',
    shortCourse: 'Кыска курс',
    shortDuration: '3 ай',
    shortDesc: 'Программалоо негиздерин интенсивдүү үйрөнүү. Негизги көндүмдөрдү тез игерип алгыңыз келсе жарайт.',
    shortFeatures: ['Интенсивдүү программа', 'Негизги билим', 'Тез деле тереңдикке жетүү', 'Менторлордун колдоосу'],
    fullCourse: 'Толук курс',
    fullDuration: '7 ай',
    fullDesc: 'Темаларды чоң тереңдикте үйрөнүү менен жүргүзүлгөн толук окутуу. Профессионал болгуга каалаган адам үчүн жарайт.',
    fullFeatures: ['Толук программа', 'Чоң тереңдикте үйрөнүү', 'Долбоор иши', 'Ишке орноштуруу'],
    
    // Certificates
    certificatesTitle: 'Сертификаттар',
    standardCert: 'Стандарттык сертификат',
    standardSub: 'Негизги деңгээл',
    standardDesc: 'Тандалган багыт боюнча негизги көндүмдөрдү игерүүн көрсөтөт. Баардык тапшырмаларды жана финалдуу долбоорду ийгиликтүү өткөндөн кийин берилет.',
    goldenCert: 'Алтын сертификат',
    goldenSub: 'Өнүккөн деңгээл',
    goldenDesc: 'Өзгөчө натыйжалар жана материалды чоң тереңдикте түшүнүү үчүн берилет. Кошумча тапшырмаларды аткарууну жана күрөө долбоорду коргоону талап кылат.',
    certFeatures: ['Официалдуу ырастоо', 'Иш бериүчүлөр тарабынан таануу', 'Ишке орноштурууга жардам'],
    
    // Gallery
    galleryTitle: 'Галерея',
    eduPhoto: 'Билим берүү фото',
    photo: 'Фото',
    
    // Contacts
    contactsTitle: 'Байланыштар',
    contactUsTitle: 'Байланыш алыңыз',
    address: 'Дарек',
    email: 'Email',
    phone: 'Телефон',
    workHours: 'Иш сааттары',
    workHoursValue: 'Дүй-Жм: 9:00 - 21:00',
    mapLocation: 'Жайгашуу картасы',
    mapTitle: 'Okurmen IT Academy жайгашуусу',
    turusbekovaAddress: 'Бишкек шаары, Турусбеков 109/1',
    tabysalievaAddress: 'Бишкек шаары, Табышалиев 29',
    
    // Footer
    navigation: 'Навигация',
    courses: 'Багыттар',
    
    // Modal
    signUp: 'Жазылуу',
    signUpModalTitle: 'Курска жазылыңыз',
    close: 'Жабуу',
    comingSoon: 'Жакында менеджерлердин номерлери кошулат',
    contactManager: 'Курска жазылуу үчүн биздин менеджерге кайрылыңыз',
    manager: 'Менеджер',
    clickToContact: 'WhatsApp аркылуу байланышуу үчүн басыңыз',
    
    // Footer copyright
    copyright: '© {year} Okurmen IT Academy. Бардык укуктар көзөмөлдөнөт.',
    
    // City and country
    cityCountry: 'Бишкек шаары, Турусбеков 109/1',
    emailValue: 'info@okurmen.kg',
    phoneValue: '+996 (507) 320-497',
    managerPhone: '+996 702 802 032',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // Default to Russian

  const t = (key, params = {}) => {
    let translation = translations[language][key];
    if (typeof translation === 'string') {
      // Handle parameter replacement (e.g., {year})
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, params[param]);
      });
      return translation;
    }
    return translation || key; // Return the key if translation not found
  };

  const tArray = (key) => {
    const translation = translations[language][key];
    if (Array.isArray(translation)) {
      return translation;
    }
    return []; // Return empty array if translation not found or not an array
  };

  const value = {
    language,
    setLanguage,
    t,
    tArray,
    availableLanguages: {
      ru: 'РУС',
      kg: 'КЫР'
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};