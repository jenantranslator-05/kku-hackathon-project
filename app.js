(() => {
  "use strict";

  const places = window.ABHA_PLACES;
  const hiddenAbhaDays = Array.isArray(window.ABHA_HIDDEN_ABHA_DAYS) ? window.ABHA_HIDDEN_ABHA_DAYS : [];
  const storageKey = "abhaVisitorGuideSavedTrip";
  const themeStorageKey = "abhaVisitorGuideTheme";
  const labels = {
    en: {
      home: "Home", hiddenAbha: "Hidden Abha", moods: "Abha by Mood", explore: "Explore", planner: "Plan my trip", saved: "Saved trip",
      language: "العربية", openNav: "Open navigation", closeNav: "Close navigation",
      themeLight: "Light", themeDark: "Dark", switchToLight: "Switch to light mode", switchToDark: "Switch to dark mode",
      plan: "Plan My Trip", exploreHero: "Explore Places", exploreAll: "Explore all places", viewAll: "View all destinations",
      heroEyebrow: "ABHA, ASIR", heroKicker: "A local guide to the mountain city",
      start: "START HERE", interestsTitle: "What are you looking for?", interestHint: "Explore places", approvedTag: "Approved tag",
      galleryEyebrow: "DESTINATION GALLERY", galleryTitle: "A closer look at Abha.", galleryCopy: "From misty peaks to warm café corners, find the place that fits your day.", exploreDestination: "Explore this place",
      callout: "YOUR DAY, YOUR WAY", calloutTitle: "Five quick choices. A plan made for you.", build: "Build my plan",
      exploreEyebrow: "EXPLORE ABHA", exploreTitle: "Places for every kind of day.",
      exploreText: "Filter places using the guide’s categories and approved interest tags.",
      showing: "Showing {count} places", showingDestination: "Showing {place}", noPlaces: "No places match these filters.",
      allMonths: "All months", monthFilter: "Best month", bestMonths: "Best months", enjoyableYearRound: "ENJOYABLE YEAR-ROUND", aprilToNovember: "APRIL – NOVEMBER",
      january: "January", february: "February", march: "March", april: "April", may: "May", june: "June", july: "July", august: "August", september: "September", october: "October", november: "November", december: "December",
      plannerEyebrow: "TRIP PLANNER", plannerTitle: "Build a day that feels like you.",
      plannerText: "Answer five quick questions. Recommendations use only the places and details in this guide.",
      qTraveler: "Who are you traveling with?", qInterest: "What do you love? Select all that apply.", qTime: "How much time do you have?",
      qBudget: "What is your budget?", qWalking: "What walking level works for you?", create: "Create My Trip", chooseInterest: "Choose at least one interest to create your trip.",
      resultEyebrow: "YOUR ABHA PLAN", resultTitle: "Your route is ready.", resultSummary: "A {time} plan shaped around {interest}.",
      change: "Change Something", save: "Save My Trip", savedSuccess: "Your trip has been saved in this browser.",
      savedEyebrow: "SAVED IN THIS BROWSER", savedTitle: "Your saved trip.", savedText: "Your choices stay on this device only. They are never sent anywhere.",
      loadExample: "Load example", noSaved: "No trip has been saved yet. Build a plan or load the built-in example.",
      map: "Open map", mapUnavailable: "Map link not available", imageUnavailable: "Image not available",
      category: "Category", cost: "Cost", walking: "Walking", setting: "Setting", duration: "Duration", bestTime: "Best time",
      selected: "Selected interests", estimate: "Estimated minimum", totalTime: "Planned time", day: "Day", hours: "hours",
      weather: "Weather alternative: {place}", aboveBudget: "This is the closest matching plan, but its estimated minimum cost is above your selected budget.",
      solo: "Solo suitability is not specifically listed in the source data.", noMatch: "No exact match was found for every choice. This plan uses the closest places from the guide.",
      morning: "Morning", lunch: "Lunch", evening: "Evening", lunchNote: "Lunch is recommended from the venue category; the source data does not label a lunch best time.", timeAdvisory: "This three-stop day is longer than your selected time. Keep the stops as a flexible guide.",
      all: "All", nature: "Nature", cafes: "Cafés", food: "Food", heritage: "Heritage", photography: "Photography", family: "Family", adventures: "Adventures",
      traveler: "Travelers", interest: "Interest", time: "Time", budget: "Budget", walkingLabel: "Walking",
      family: "Family", friends: "Friends", couple: "Couple", soloOption: "Solo",
      twoHours: "2 hours", halfDay: "Half day", oneDay: "1 day", twoDays: "2 days",
      under100: "Under 100 SAR", b100to300: "100–300 SAR", b300to500: "300–500 SAR", b500plus: "500+ SAR",
      dontMind: "I don’t mind", moderate: "Moderate", minimal: "Minimal walking",
      footerTitle: "Abha Visitor Guide", footerText: "Local guide data • Browser-only trip saving",
      heroTitle: "Find your Abha moment.", heroText: "Choose what calls you—mountain views, heritage, cafés, food, or a family day out—and create a plan from the places in this guide.", heroBadge: "16 places to discover",
      hiddenEyebrow: "HIDDEN ABHA", hiddenTitle: "One day, lived like a local.", hiddenStart: "Start the Experience", hiddenDay: "Your Hidden Abha day", hiddenStatus: "Your Hidden Abha itinerary for Day {day} is ready.", hiddenMap: "Open in Google Maps",
      moodsEyebrow: "ABHA BY MOOD", moodsTitle: "Choose the feeling for your day.", moodsText: "Pick a mood and discover existing places in the guide that fit it.",
      homeCardsSection: "Abha photo cards", homeCardsLabel: "Show the next Abha photo", homeCardsStatus: "Showing photo {number} of 6",
      moodPrompt: "Which Abha mood fits today?", moodCoffeeCalm: "Coffee & Calm", moodNatureViews: "Nature & Views", moodCultureHeritage: "Culture & Heritage", moodFoodDiscovery: "Food Discovery",
      moodSelected: "Abha for your {mood} mood", moodShowing: "Showing {count} places for {mood}", moodAllShowing: "Showing all {count} places", chooseAnotherMood: "Choose another mood", showAllMoods: "Show all moods", noMoodPlaces: "No guide places match this mood yet."
    },
    ar: {
      home: "الرئيسية", hiddenAbha: "أبها الخفية", moods: "أبها حسب المزاج", explore: "استكشف", planner: "خطط رحلتك", saved: "الرحلة المحفوظة",
      language: "English", openNav: "فتح القائمة", closeNav: "إغلاق القائمة",
      themeLight: "فاتح", themeDark: "داكن", switchToLight: "التبديل إلى الوضع الفاتح", switchToDark: "التبديل إلى الوضع الداكن",
      plan: "خطط رحلتك", exploreHero: "استكشف الوجهات", exploreAll: "استكشف كل الأماكن", viewAll: "عرض كل الوجهات",
      heroEyebrow: "أبها، عسير", heroKicker: "دليل محلي لمدينة الجبال",
      start: "ابدأ من هنا", interestsTitle: "ما الذي تبحث عنه؟", interestHint: "استكشف الأماكن", approvedTag: "وسم معتمد",
      galleryEyebrow: "معرض الوجهات", galleryTitle: "نظرة أقرب إلى أبها.", galleryCopy: "من القمم الضبابية إلى زوايا المقاهي الدافئة، اعثر على المكان المناسب ليومك.", exploreDestination: "استكشف هذا المكان",
      callout: "يومك بطريقتك", calloutTitle: "خمسة اختيارات سريعة. وخطة تناسبك.", build: "أنشئ خطتي",
      exploreEyebrow: "استكشف أبها", exploreTitle: "أماكن لكل نوع من الأيام.",
      exploreText: "صفِّ الأماكن باستخدام فئات الدليل ووسوم الاهتمامات المعتمدة.",
      showing: "عرض {count} أماكن", showingDestination: "عرض {place}", noPlaces: "لا توجد أماكن تطابق هذه الفلاتر.",
      allMonths: "كل الأشهر", monthFilter: "أفضل شهر", bestMonths: "أفضل الأشهر", enjoyableYearRound: "ممتعة طوال العام", aprilToNovember: "أبريل – نوفمبر",
      january: "يناير", february: "فبراير", march: "مارس", april: "أبريل", may: "مايو", june: "يونيو", july: "يوليو", august: "أغسطس", september: "سبتمبر", october: "أكتوبر", november: "نوفمبر", december: "ديسمبر",
      plannerEyebrow: "مخطط الرحلة", plannerTitle: "اصنع يوماً يشبهك.",
      plannerText: "أجب عن خمسة أسئلة سريعة. تستخدم الاقتراحات الأماكن والتفاصيل الموجودة في هذا الدليل فقط.",
      qTraveler: "مع من تسافر؟", qInterest: "ما الذي تحبه؟ اختر كل ما ينطبق.", qTime: "كم من الوقت لديك؟",
      qBudget: "ما ميزانيتك؟", qWalking: "ما مستوى المشي المناسب لك؟", create: "أنشئ رحلتي", chooseInterest: "اختر اهتمامًا واحدًا على الأقل لإنشاء رحلتك.",
      resultEyebrow: "خطتك في أبها", resultTitle: "مسارك جاهز.", resultSummary: "خطة لمدة {time} مبنية حول {interest}.",
      change: "غيّر شيئًا", save: "احفظ رحلتي", savedSuccess: "تم حفظ رحلتك في هذا المتصفح.",
      savedEyebrow: "محفوظة في هذا المتصفح", savedTitle: "رحلتك المحفوظة.", savedText: "تبقى اختياراتك على هذا الجهاز فقط، ولا تُرسل إلى أي مكان.",
      loadExample: "تحميل مثال", noSaved: "لم تُحفظ أي رحلة بعد. أنشئ خطة أو حمّل المثال المدمج.",
      map: "فتح الخريطة", mapUnavailable: "رابط الخريطة غير متوفر", imageUnavailable: "الصورة غير متوفرة",
      category: "الفئة", cost: "التكلفة", walking: "المشي", setting: "المكان", duration: "المدة", bestTime: "أفضل وقت",
      selected: "الاهتمامات المختارة", estimate: "الحد الأدنى التقديري", totalTime: "الوقت المخطط", day: "اليوم", hours: "ساعات",
      weather: "بديل الطقس: {place}", aboveBudget: "هذه أقرب خطة مطابقة، لكن الحد الأدنى التقديري لتكلفتها أعلى من ميزانيتك المحددة.",
      solo: "لا تُذكر ملاءمة المسافر المنفرد تحديدًا في بيانات المصدر.", noMatch: "لم يُعثر على تطابق دقيق لكل الاختيارات. تستخدم هذه الخطة أقرب الأماكن من الدليل.",
      morning: "الصباح", lunch: "الغداء", evening: "المساء", lunchNote: "توصية الغداء مبنية على فئة المكان؛ لا تصف بيانات المصدر الغداء كأفضل وقت.", timeAdvisory: "يتجاوز هذا اليوم ذو المحطات الثلاث وقتك المختار. اعتبر المحطات دليلاً مرنًا.",
      all: "الكل", nature: "طبيعة", cafes: "مقاهي", food: "طعام", heritage: "تراث", photography: "تصوير", family: "عائلات", adventures: "مغامرات",
      traveler: "المسافرون", interest: "الاهتمام", time: "الوقت", budget: "الميزانية", walkingLabel: "المشي",
      family: "عائلة", friends: "أصدقاء", couple: "زوجان", soloOption: "منفرد",
      twoHours: "ساعتان", halfDay: "نصف يوم", oneDay: "يوم واحد", twoDays: "يومان",
      under100: "أقل من 100 ريال", b100to300: "100–300 ريال", b300to500: "300–500 ريال", b500plus: "500+ ريال",
      dontMind: "لا أمانع", moderate: "متوسط", minimal: "مشي قليل",
      footerTitle: "دليل زائر أبها", footerText: "بيانات دليل محلية • حفظ الرحلة في المتصفح فقط",
      heroTitle: "اعثر على لحظتك في أبها.", heroText: "اختر ما يجذبك—إطلالات جبلية أو تراث أو مقاهٍ أو طعام أو يوم عائلي—وأنشئ خطة من الأماكن في هذا الدليل.", heroBadge: "16 مكانًا لاكتشافها",
      hiddenEyebrow: "أبها الخفية", hiddenTitle: "يوم واحد، بعيون أهل أبها.", hiddenStart: "ابدأ التجربة", hiddenDay: "يومك في أبها الخفية", hiddenStatus: "برنامج أبها الخفية لليوم {day} جاهز.", hiddenMap: "فتح في خرائط Google",
      moodsEyebrow: "أبها حسب المزاج", moodsTitle: "اختر الإحساس المناسب ليومك.", moodsText: "اختر مزاجًا واكتشف أماكن موجودة في الدليل تناسبه.",
      homeCardsSection: "بطاقات صور أبها", homeCardsLabel: "عرض صورة أبها التالية", homeCardsStatus: "عرض الصورة {number} من 6",
      moodPrompt: "أي مزاج في أبها يناسبك اليوم؟", moodCoffeeCalm: "قهوة وهدوء", moodNatureViews: "طبيعة وإطلالات", moodCultureHeritage: "ثقافة وتراث", moodFoodDiscovery: "اكتشاف الطعام",
      moodSelected: "أبها لمزاج {mood}", moodShowing: "عرض {count} أماكن لمزاج {mood}", moodAllShowing: "عرض كل الأماكن: {count}", chooseAnotherMood: "اختر مزاجًا آخر", showAllMoods: "عرض كل الخيارات", noMoodPlaces: "لا توجد أماكن في الدليل تطابق هذا المزاج حاليًا."
    }
  };

  const choiceOptions = {
    traveler: ["Solo", "Couple", "Family", "Friends"],
    interest: ["Nature", "Cafés", "Food", "Heritage", "Photography", "Adventures"],
    time: ["2 hours", "Half day", "1 day", "2 days"],
    budget: ["Under 100 SAR", "100–300 SAR", "300–500 SAR", "500+ SAR"],
    walking: ["I don’t mind", "Moderate", "Minimal walking"]
  };
  const interests = ["Nature", "Cafés", "Food", "Heritage", "Photography", "Family", "Adventures"];
  const homeCardImages = [
    "assets/images/card-1.jpg.jpeg",
    "assets/images/card-2.jpg.jpeg",
    "assets/images/card-3.jpg.jpeg",
    "assets/images/card-4.jpg.jpeg",
    "assets/images/card-5.jpg.jpeg",
    "assets/images/card-6.jpg.jpeg"
  ];

  function loadTheme() {
    try {
      const savedTheme = localStorage.getItem(themeStorageKey);
      return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    } catch {
      return "light";
    }
  }

  const state = {
    language: "en",
    theme: loadTheme(),
    filter: "All",
    visitMonth: null,
    featuredPlaceId: null,
    preferences: normalizePreferences(window.ABHA_EXAMPLE_PREFERENCES),
    plan: null,
    hiddenAbhaDay: null,
    mood: null,
    showAllMoods: false,
    homeCardIndex: 0
  };

  const moodOptions = [
    { id: "coffee-calm", labelKey: "moodCoffeeCalm" },
    { id: "nature-views", labelKey: "moodNatureViews" },
    { id: "culture-heritage", labelKey: "moodCultureHeritage" },
    { id: "food-discovery", labelKey: "moodFoodDiscovery" }
  ];

  const el = (selector) => document.querySelector(selector);
  const all = (selector) => [...document.querySelectorAll(selector)];
  const text = (key) => labels[state.language][key] || key;
  const isArabic = () => state.language === "ar";
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
  }

  function normalizePreferences(preferences = {}) {
    const rawInterests = Array.isArray(preferences.interest) ? preferences.interest : [preferences.interest];
    return {
      traveler: choiceOptions.traveler.includes(preferences.traveler) ? preferences.traveler : "Family",
      interest: [...new Set(rawInterests.filter((interest) => choiceOptions.interest.includes(interest)))],
      time: choiceOptions.time.includes(preferences.time) ? preferences.time : "Half day",
      budget: choiceOptions.budget.includes(preferences.budget) ? preferences.budget : "100–300 SAR",
      walking: choiceOptions.walking.includes(preferences.walking) ? preferences.walking : "Moderate"
    };
  }

  function nameFor(place) { return isArabic() ? place.nameAr : place.nameEn; }
  function oppositeNameFor(place) { return isArabic() ? place.nameEn : place.nameAr; }
  function descriptionFor(place) { return isArabic() ? place.descriptionAr : place.descriptionEn; }
  function valueLabel(value) {
    const lookup = {
      "Solo": "soloOption", "Couple": "couple", "Family": "family", "Friends": "friends",
      "Nature": "nature", "Cafés": "cafes", "Food": "food", "Heritage": "heritage", "Photography": "photography", "Adventures": "adventures",
      "2 hours": "twoHours", "Half day": "halfDay", "1 day": "oneDay", "2 days": "twoDays",
      "Under 100 SAR": "under100", "100–300 SAR": "b100to300", "300–500 SAR": "b300to500", "500+ SAR": "b500plus",
      "I don’t mind": "dontMind", "Moderate": "moderate", "Minimal walking": "minimal"
    };
    return text(lookup[value] || value);
  }

  function interestsLabel(selectedInterests) {
    const values = normalizePreferences({ interest: selectedInterests }).interest.map(valueLabel);
    return new Intl.ListFormat(isArabic() ? "ar-SA" : "en", { style: "long", type: "conjunction" }).format(values);
  }

  function updateThemeControl() {
    const toggle = el("#theme-toggle");
    const label = el("#theme-label");
    if (!toggle || !label) return;
    const dark = state.theme === "dark";
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", text(dark ? "switchToLight" : "switchToDark"));
    label.textContent = text(dark ? "themeLight" : "themeDark");
  }

  function applyTheme(theme, persist = false) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = state.theme;
    updateThemeControl();
    if (persist) {
      try { localStorage.setItem(themeStorageKey, state.theme); } catch { /* Storage is optional for the visual preference. */ }
    }
  }

  function renderHomeInterests() {
    el("#home-interests").innerHTML = interests.map((interest) => `
      <button class="interest-button" type="button" data-interest="${interest}">
        ${escapeHtml(valueLabel(interest))}
        <span>${escapeHtml(interest === "Photography" || interest === "Adventures" ? text("approvedTag") : text("interestHint"))}</span>
      </button>`).join("");
  }

  function destinationAccent(place) {
    if (/Nature/i.test(place.category)) return "accent-nature";
    if (/Heritage/i.test(place.category)) return "accent-heritage";
    return "";
  }

  function renderHomeGallery() {
    el("#home-gallery").innerHTML = places.map((place) => `
      <article class="gallery-card reveal-item ${destinationAccent(place)}">
        <div class="gallery-media">
          <img src="${place.image}" alt="${escapeHtml(nameFor(place))}" loading="lazy">
        </div>
        <div class="gallery-content">
          <p class="gallery-category">${escapeHtml(place.category)}</p>
          <h3>${escapeHtml(nameFor(place))}<span lang="${isArabic() ? "en" : "ar"}" dir="${isArabic() ? "ltr" : "rtl"}">${escapeHtml(oppositeNameFor(place))}</span></h3>
          <button class="gallery-link" type="button" data-explore-destination="${place.id}" aria-label="${escapeHtml(`${text("exploreDestination")}: ${nameFor(place)}`)}">${escapeHtml(text("exploreDestination"))} <span aria-hidden="true">→</span></button>
        </div>
      </article>`).join("");
    observeReveals();
  }

  function homeCardPosition(cardIndex) {
    return (cardIndex - state.homeCardIndex + homeCardImages.length) % homeCardImages.length;
  }

  function updateHomePhotoCards() {
    all("[data-home-card-index]").forEach((card) => {
      const position = homeCardPosition(Number(card.dataset.homeCardIndex));
      card.className = `home-card-stack-card home-card-stack-card--${position}`;
    });
    el("#home-card-stack-status").textContent = text("homeCardsStatus").replace("{number}", state.homeCardIndex + 1);
  }

  function updateHomePhotoCardLabels() {
    const control = el("[data-cycle-home-cards]");
    if (control) control.setAttribute("aria-label", text("homeCardsLabel"));
    el("#home-card-stack-status").textContent = text("homeCardsStatus").replace("{number}", state.homeCardIndex + 1);
  }

  function renderHomePhotoCards() {
    const stack = el("#home-card-stack");
    if (!stack) return;
    stack.innerHTML = `<button class="home-card-stack-control" type="button" data-cycle-home-cards aria-label="${escapeHtml(text("homeCardsLabel"))}">
      ${homeCardImages.map((image, index) => `
        <span class="home-card-stack-card home-card-stack-card--${homeCardPosition(index)}" data-home-card-index="${index}" aria-hidden="true">
          <img src="${image}" alt="" loading="${index === state.homeCardIndex ? "eager" : "lazy"}" ${index === state.homeCardIndex ? "fetchpriority=\"high\"" : ""} decoding="async">
        </span>`).join("")}
    </button>`;
    updateHomePhotoCards();
  }

  function cycleHomePhotoCards() {
    state.homeCardIndex = (state.homeCardIndex + 1) % homeCardImages.length;
    updateHomePhotoCards();
  }

  const monthLabelKeys = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

  function monthLabel(month) {
    return text(monthLabelKeys[Number(month) - 1] || "");
  }

  function visitMonthLabels(months) {
    const validMonths = [...new Set((Array.isArray(months) ? months : []).filter((month) => Number.isInteger(month) && month >= 1 && month <= 12))].sort((a, b) => a - b);
    if (validMonths.join(",") === "1,2,3,4,5,6,7,8,9,10,11,12") return text("enjoyableYearRound");
    if (validMonths.join(",") === "4,5,6,7,8,9,10,11") return text("aprilToNovember");
    return new Intl.ListFormat(isArabic() ? "ar-SA" : "en", { style: "long", type: "conjunction" }).format(validMonths.map(monthLabel));
  }

  function monthMatches(place, month) {
    return !Number.isInteger(month) || (Array.isArray(place.visitMonths) && place.visitMonths.includes(month));
  }

  function filterMatches(place, filter) {
    if (filter === "All") return true;
    if (filter === "Photography" || filter === "Adventures") return place.approvedTags.includes(filter);
    if (filter === "Nature") return /Nature/i.test(place.category);
    if (filter === "Cafés") return /Caf[eé]|Coffee/i.test(place.category);
    if (filter === "Food") return /Food|Restaurant|Pizza|Italian|Caf[eé]|Coffee|Bakery|Desserts/i.test(place.category);
    if (filter === "Heritage") return /Heritage/i.test(place.category);
    if (filter === "Family") return /Family|Families/i.test(place.category) || /Family/i.test(place.suitableFor);
    return false;
  }

  function placeCard(place) {
    const image = place.image
      ? `<img src="${place.image}" alt="${escapeHtml(nameFor(place))}" loading="lazy">`
      : `<div class="placeholder-art" role="img" aria-label="${escapeHtml(text("imageUnavailable"))}"><strong>${escapeHtml(text("imageUnavailable"))}</strong></div>`;
    const map = isGoogleMapsUrl(place.mapUrl)
      ? `<a class="map-link" href="${escapeHtml(place.mapUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text("map"))} <span aria-hidden="true">↗</span></a>`
      : `<p class="map-unavailable">${escapeHtml(text("mapUnavailable"))}</p>`;
    return `<article class="place-card reveal-item ${destinationAccent(place)}" data-place-card="${place.id}" tabindex="-1">
      <div class="place-media">${image}</div>
      <div class="place-content">
        <div class="place-title"><h2>${escapeHtml(nameFor(place))}<span class="place-name-ar" lang="ar" dir="rtl">${escapeHtml(place.nameAr)}</span></h2></div>
        <p class="category">${escapeHtml(place.category)}</p>
        <p class="description">${escapeHtml(descriptionFor(place))}</p>
        <ul class="details">
          <li><strong>${escapeHtml(text("cost"))}</strong>${escapeHtml(place.cost)}</li>
          <li><strong>${escapeHtml(text("walking"))}</strong>${escapeHtml(place.walking)}</li>
          <li><strong>${escapeHtml(text("setting"))}</strong>${escapeHtml(place.environment)}</li>
          <li><strong>${escapeHtml(text("duration"))}</strong>${escapeHtml(place.duration)}</li>
          <li class="best-months"><strong>${escapeHtml(text("bestMonths"))}</strong>${escapeHtml(visitMonthLabels(place.visitMonths))}</li>
        </ul>
        ${map}
      </div>
    </article>`;
  }

  function hiddenNameFor(stop) { return isArabic() ? stop.nameAr : stop.nameEn; }
  function hiddenDescriptionFor(stop) { return isArabic() ? stop.descriptionAr : stop.descriptionEn; }
  function hiddenCategoryFor(stop) { return isArabic() ? stop.categoryAr : stop.category; }

  function isGoogleMapsUrl(value) {
    if (!value) return false;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && ["www.google.com", "maps.google.com", "maps.app.goo.gl"].includes(url.hostname);
    } catch {
      return false;
    }
  }

  function chooseRandomHiddenAbhaDay(days = hiddenAbhaDays, random = Math.random) {
    return days.length ? days[Math.floor(random() * days.length)] : null;
  }

  function moodLabel(mood, language = state.language) {
    const definition = moodOptions.find((item) => item.id === mood);
    return definition ? (labels[language][definition.labelKey] || "") : "";
  }

  function matchesMood(place, mood) {
    const category = place.category || "";
    const source = `${category} ${place.descriptionEn || ""}`;
    const isCafe = /\b(caf[eé]s?|coffee)\b/i.test(category);
    const isRestaurant = /\brestaurants?\b/i.test(category);

    if (mood === "coffee-calm") {
      const isCalmOrScenic = /\b(calm|quiet|peaceful|relaxing|park|nature|scenic|views?)\b/i.test(source);
      return isCafe || (!isRestaurant && isCalmOrScenic);
    }
    if (mood === "nature-views") return /\b(nature|mountain|clouds?|park|walkway|viewpoint|views?)\b/i.test(source);
    if (mood === "culture-heritage") return /\b(heritage|culture|history|art|village|palaces?)\b/i.test(source);
    if (mood === "food-discovery") return /\b(restaurants?|food|bakery|pizza|italian)\b/i.test(category);
    return false;
  }

  function renderMoodPage() {
    const content = el("#moods-content");
    const count = el("#moods-count");
    const grid = el("#moods-grid");
    if (!content || !count || !grid) return;

    const moodChoices = moodOptions.map((mood) => {
      const alternateLanguage = isArabic() ? "en" : "ar";
      const active = state.mood === mood.id;
      return `<button class="mood-button ${active ? "active" : ""}" type="button" data-mood="${mood.id}" aria-pressed="${active}">
        <span>${escapeHtml(moodLabel(mood.id))}</span>
        <small lang="${alternateLanguage}" dir="${isArabic() ? "ltr" : "rtl"}">${escapeHtml(moodLabel(mood.id, alternateLanguage))}</small>
      </button>`;
    }).join("");

    if (!state.mood && !state.showAllMoods) {
      content.innerHTML = `<section class="mood-picker reveal-section is-visible" aria-labelledby="mood-picker-title">
        <h2 id="mood-picker-title">${escapeHtml(text("moodPrompt"))}</h2>
        <div class="mood-grid">${moodChoices}</div>
        <button class="mood-show-all" type="button" data-show-all-moods>${escapeHtml(text("showAllMoods"))}</button>
      </section>`;
      count.textContent = "";
      grid.innerHTML = "";
      return;
    }

    const matching = state.showAllMoods ? places : places.filter((place) => matchesMood(place, state.mood));
    const selectedLabel = moodLabel(state.mood);
    content.innerHTML = `<div class="mood-results-header reveal-section is-visible">
      <div>
        <p class="eyebrow">${escapeHtml(text("moodsEyebrow"))}</p>
        <h2 id="moods-results-title" tabindex="-1">${escapeHtml(state.showAllMoods ? text("showAllMoods") : text("moodSelected").replace("{mood}", selectedLabel))}</h2>
      </div>
      <div class="mood-actions">
        <button class="button button-secondary" type="button" data-choose-another-mood>${escapeHtml(text("chooseAnotherMood"))}</button>
        ${state.showAllMoods ? "" : `<button class="mood-show-all" type="button" data-show-all-moods>${escapeHtml(text("showAllMoods"))}</button>`}
      </div>
    </div>`;
    count.textContent = state.showAllMoods
      ? text("moodAllShowing").replace("{count}", matching.length)
      : text("moodShowing").replace("{count}", matching.length).replace("{mood}", selectedLabel);
    const alternateLanguage = isArabic() ? "en" : "ar";
    grid.innerHTML = matching.length
      ? matching.map(placeCard).join("")
      : `<div class="empty-state mood-empty-state"><p>${escapeHtml(text("noMoodPlaces"))}<span lang="${alternateLanguage}" dir="${isArabic() ? "ltr" : "rtl"}">${escapeHtml(labels[alternateLanguage].noMoodPlaces)}</span></p></div>`;
    observeReveals();
  }

  function renderHiddenAbhaStop(stop, index) {
    const name = hiddenNameFor(stop);
    const alternateName = isArabic() ? stop.nameEn : stop.nameAr;
    const alternateLang = isArabic() ? "en" : "ar";
    const alternateDir = isArabic() ? "ltr" : "rtl";
    const map = isGoogleMapsUrl(stop.mapUrl)
      ? `<a class="map-link hidden-map-link" href="${escapeHtml(stop.mapUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${text("hiddenMap")}: ${name}`)}">${escapeHtml(text("hiddenMap"))} <span aria-hidden="true">↗</span></a>`
      : "";
    return `<li class="hidden-stop reveal-item">
      <div class="hidden-stop-image"><img src="${escapeHtml(stop.image)}" alt="${escapeHtml(name)}" loading="lazy"></div>
      <div class="hidden-stop-content">
        <div class="hidden-stop-meta"><time datetime="${escapeHtml(stop.time)}" dir="ltr">${escapeHtml(stop.time)}</time><span>${escapeHtml(hiddenCategoryFor(stop))}</span></div>
        <p class="hidden-stop-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
        <h2>${escapeHtml(name)}<span lang="${alternateLang}" dir="${alternateDir}">${escapeHtml(alternateName)}</span></h2>
        <p>${escapeHtml(hiddenDescriptionFor(stop))}</p>
        ${map}
      </div>
    </li>`;
  }

  function renderHiddenAbha() {
    const container = el("#hidden-abha-content");
    const status = el("#hidden-abha-status");
    if (!container || !status) return;
    const day = state.hiddenAbhaDay;
    if (!day) {
      status.textContent = "";
      container.innerHTML = `<div class="hidden-welcome reveal-section is-visible">
        <div class="hidden-welcome-art" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="hidden-welcome-copy">
          <p class="eyebrow">${escapeHtml(text("hiddenEyebrow"))}</p>
          <h1 id="hidden-abha-title">${escapeHtml(text("hiddenTitle"))}</h1>
          <p class="hidden-welcome-ar" lang="ar" dir="rtl">هل أنت مستعد لخوض تجربة العيش مثل أهل أبها؟</p>
          <p class="hidden-welcome-en">ARE YOU READY TO EXPERIENCE LIFE LIKE A LOCAL IN ABHA?</p>
          <button class="button button-primary" type="button" data-start-hidden-abha>${escapeHtml(text("hiddenStart"))} <span aria-hidden="true">→</span></button>
        </div>
      </div>`;
      return;
    }
    const sortedStops = [...day.stops].sort((a, b) => a.time.localeCompare(b.time));
    status.textContent = text("hiddenStatus").replace("{day}", day.number);
    container.innerHTML = `<div class="hidden-itinerary-heading">
        <p class="eyebrow">${escapeHtml(text("hiddenEyebrow"))} · ${escapeHtml(text("day"))} ${day.number}</p>
        <h1 id="hidden-abha-title" tabindex="-1">${escapeHtml(text("hiddenDay"))}</h1>
        <p>${escapeHtml(isArabic() ? "خمس محطات مرتبة لتعيش أبها بطريقتها المحلية." : "Five timed stops for a day experienced the local way.")}</p>
      </div>
      <ol class="hidden-stops">${sortedStops.map(renderHiddenAbhaStop).join("")}</ol>`;
    observeReveals();
  }

  function renderExplore() {
    const filters = ["All", ...interests];
    const featured = state.featuredPlaceId ? places.find((place) => place.id === state.featuredPlaceId) : null;
    el("#filter-bar").innerHTML = filters.map((filter) => `<button class="filter-button ${state.filter === filter && !featured ? "active" : ""}" type="button" data-filter="${filter}" aria-pressed="${state.filter === filter && !featured}">${escapeHtml(filter === "All" ? text("all") : valueLabel(filter))}</button>`).join("");
    const monthSelect = el("#month-filter");
    const monthLabelElement = el("#month-filter-label");
    if (monthLabelElement) monthLabelElement.textContent = text("monthFilter");
    if (monthSelect) {
      monthSelect.innerHTML = `<option value="">${escapeHtml(text("allMonths"))}</option>${monthLabelKeys.map((key, index) => `<option value="${index + 1}" ${state.visitMonth === index + 1 ? "selected" : ""}>${escapeHtml(text(key))}</option>`).join("")}`;
      monthSelect.disabled = Boolean(featured);
    }
    const matching = featured ? [featured] : places.filter((place) => filterMatches(place, state.filter) && monthMatches(place, state.visitMonth));
    el("#place-count").textContent = featured ? text("showingDestination").replace("{place}", nameFor(featured)) : text("showing").replace("{count}", matching.length);
    el("#places-grid").innerHTML = matching.length ? matching.map(placeCard).join("") : `<div class="empty-state">${escapeHtml(text("noPlaces"))}</div>`;
    observeReveals();
  }

  function renderChoices() {
    Object.entries(choiceOptions).forEach(([key, options]) => {
      const container = document.querySelector(`[data-choice-group="${key}"]`);
      const multiple = key === "interest";
      container.innerHTML = options.map((option, index) => {
        const id = `${key}-${index}`;
        const checked = multiple ? state.preferences.interest.includes(option) : state.preferences[key] === option;
        const accentClass = key === "interest" && option === "Nature" ? "choice-nature" : "";
        return `<input class="choice-input ${accentClass}" type="${multiple ? "checkbox" : "radio"}" name="${key}" id="${id}" value="${escapeHtml(option)}" ${checked ? "checked" : ""}>
          <label class="choice-label ${accentClass}" for="${id}">${escapeHtml(valueLabel(option))}</label>`;
      }).join("");
    });
  }

  function minCost(place) {
    const values = (place.cost.match(/\d+/g) || []).map(Number);
    return values.length ? Math.min(...values) : 0;
  }
  function averageHours(place) {
    const values = (place.duration.match(/\d+/g) || []).map(Number);
    return values.length === 1 ? values[0] : (values[0] + values[1]) / 2;
  }
  function targetHours(time) { return { "2 hours": 2, "Half day": 4, "1 day": 8, "2 days": 16 }[time] || 4; }
  function budgetRange(budget) {
    return { "Under 100 SAR": [0, 99], "100–300 SAR": [100, 300], "300–500 SAR": [300, 500], "500+ SAR": [500, Infinity] }[budget] || [0, Infinity];
  }
  function matchesInterest(place, interest) {
    if (interest === "Photography" || interest === "Adventures") return place.approvedTags.includes(interest);
    if (interest === "Nature") return /Nature/i.test(place.category);
    if (interest === "Cafés") return /Caf[eé]|Coffee/i.test(place.category);
    if (interest === "Food") return /Food|Restaurant|Pizza|Italian|Caf[eé]|Coffee|Bakery|Desserts/i.test(place.category);
    if (interest === "Heritage") return /Heritage/i.test(place.category);
    return false;
  }
  function matchingInterests(place, selectedInterests) { return selectedInterests.filter((interest) => matchesInterest(place, interest)); }
  function travelerMatches(place, traveler) {
    if (traveler === "Solo") return true;
    const pattern = traveler === "Family" ? /Family|Families/i : new RegExp(traveler, "i");
    return pattern.test(place.suitableFor);
  }
  function walkingMatches(place, walking) {
    if (walking === "I don’t mind") return true;
    if (walking === "Moderate") return place.walking !== "High";
    return place.walking === "Minimal";
  }
  function scorePlace(place, preferences, allowOverBudget) {
    let score = 0;
    const budget = budgetRange(preferences.budget);
    const cost = minCost(place);
    score += matchingInterests(place, preferences.interest).length * 9;
    if (travelerMatches(place, preferences.traveler)) score += preferences.traveler === "Solo" ? 0 : 3;
    if (walkingMatches(place, preferences.walking)) score += 3;
    if (cost >= budget[0] && cost <= budget[1]) score += 4;
    else if (allowOverBudget) score -= Math.min(5, Math.abs(cost - budget[1]) / 100);
    else score -= 20;
    return score;
  }

  function rankedPlanCandidates(preferences, allowOverBudget = true) {
    return places
      .filter((place) => isGoogleMapsUrl(place.mapUrl))
      .map((place) => ({ place, score: scorePlace(place, preferences, allowOverBudget) }))
      .sort((a, b) => b.score - a.score || a.place.nameEn.localeCompare(b.place.nameEn));
  }

  function lunchMatches(place) {
    return /Food|Restaurant|Pizza|Italian|Neapolitan/i.test(place.category);
  }

  function chooseScheduledPlace(candidates, usedIds, predicate) {
    const preferred = candidates.find(({ place }) => !usedIds.has(place.id) && predicate(place));
    const fallback = candidates.find(({ place }) => !usedIds.has(place.id));
    return (preferred || fallback || null)?.place || null;
  }

  function buildSchedule(preferences, dayCount) {
    const candidates = rankedPlanCandidates(preferences);
    return Array.from({ length: dayCount }, () => {
      const usedIds = new Set();
      const morning = chooseScheduledPlace(candidates, usedIds, (place) => place.bestTime === "MORNING");
      if (morning) usedIds.add(morning.id);
      const lunch = chooseScheduledPlace(candidates, usedIds, lunchMatches);
      if (lunch) usedIds.add(lunch.id);
      const evening = chooseScheduledPlace(candidates, usedIds, (place) => place.bestTime === "EVENING");
      if (evening) usedIds.add(evening.id);
      return [
        { period: "morning", place: morning },
        { period: "lunch", place: lunch },
        { period: "evening", place: evening }
      ];
    });
  }

  function buildPlan(rawPreferences) {
    const preferences = normalizePreferences(rawPreferences);
    const target = targetHours(preferences.time);
    const [, maxBudget] = budgetRange(preferences.budget);
    const dayCount = preferences.time === "2 days" ? 2 : 1;
    const schedule = buildSchedule(preferences, dayCount);
    const scheduledPlaces = schedule.flat().map((slot) => slot.place).filter(Boolean);
    const hours = scheduledPlaces.reduce((total, place) => total + averageHours(place), 0);
    const cost = scheduledPlaces.reduce((total, place) => total + minCost(place), 0);
    const matched = new Set(scheduledPlaces.flatMap((place) => matchingInterests(place, preferences.interest)));
    const exact = scheduledPlaces.length === dayCount * 3 && matched.size === preferences.interest.length && (preferences.traveler === "Solo" || scheduledPlaces.some((place) => travelerMatches(place, preferences.traveler))) && scheduledPlaces.some((place) => walkingMatches(place, preferences.walking));
    return { preferences, schedule, places: scheduledPlaces, hours, cost, target, dayCount, aboveBudget: cost > maxBudget, exact };
  }

  function renderScheduleStop(slot) {
    const place = slot.place;
    if (!place) return `<article class="trip-stop daypart-slot"><h3>${escapeHtml(text(slot.period))}</h3><p>${escapeHtml(text("noMatch"))}</p></article>`;
    const weather = place.weatherAlternative && place.weatherAlternative !== "No change needed" ? `<div class="weather-alternative">${escapeHtml(text("weather").replace("{place}", place.weatherAlternative))}</div>` : "";
    const lunchNote = slot.period === "lunch" ? `<p class="slot-note">${escapeHtml(text("lunchNote"))}</p>` : "";
    const bestTime = slot.period === "lunch" ? text("lunch") : place.bestTime;
    return `<article class="trip-stop daypart-slot reveal-item"><span class="stop-time">${escapeHtml(text(slot.period))} · ${escapeHtml(bestTime)} · ${escapeHtml(place.duration)}</span><h3>${escapeHtml(nameFor(place))}</h3><p>${escapeHtml(descriptionFor(place))}</p><p><strong>${escapeHtml(text("cost"))}:</strong> ${escapeHtml(place.cost)}</p>${lunchNote}${weather}<a class="map-link" href="${escapeHtml(place.mapUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text("map"))} <span aria-hidden="true">↗</span></a></article>`;
  }

  function renderPlan() {
    const plan = state.plan;
    if (!plan) return;
    plan.preferences = normalizePreferences(plan.preferences);
    if (!Array.isArray(plan.schedule)) {
      const regenerated = buildPlan(plan.preferences);
      Object.assign(plan, regenerated);
    }
    const notices = [];
    if (plan.preferences.traveler === "Solo") notices.push(`<p class="notice">${escapeHtml(text("solo"))}</p>`);
    if (!plan.exact) notices.push(`<p class="notice">${escapeHtml(text("noMatch"))}</p>`);
    if (plan.aboveBudget) notices.push(`<p class="notice warning">${escapeHtml(text("aboveBudget"))}</p>`);
    if (plan.hours > plan.target) notices.push(`<p class="notice warning">${escapeHtml(text("timeAdvisory"))}</p>`);
    el("#planner-notices").innerHTML = notices.join("");
    el("#results-summary").textContent = text("resultSummary").replace("{time}", valueLabel(plan.preferences.time)).replace("{interest}", interestsLabel(plan.preferences.interest));
    el("#trip-overview").innerHTML = `
      <div class="overview-item"><span>${escapeHtml(text("selected"))}</span><strong>${escapeHtml(interestsLabel(plan.preferences.interest))}</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("estimate"))}</span><strong>${escapeHtml(plan.cost)} SAR</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("totalTime"))}</span><strong>${escapeHtml(plan.hours % 1 ? plan.hours.toFixed(1) : plan.hours)} ${escapeHtml(text("hours"))}</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("budget"))}</span><strong>${escapeHtml(valueLabel(plan.preferences.budget))}</strong></div>`;
    el("#itinerary").innerHTML = plan.schedule.map((daySlots, index) => {
      const hourTotal = daySlots.reduce((total, slot) => total + (slot.place ? averageHours(slot.place) : 0), 0);
      const formattedHours = hourTotal % 1 ? hourTotal.toFixed(1) : hourTotal;
      return `<section class="day-section"><div class="day-title"><h2>${escapeHtml(text("day"))} ${index + 1}</h2><span>${formattedHours} ${escapeHtml(text("hours"))}</span></div>${daySlots.map(renderScheduleStop).join("")}</section>`;
    }).join("");
    observeReveals();
  }

  function changeView(view) {
    const target = el(`#${view}`);
    if (!target) return;
    all(".view").forEach((section) => {
      const active = section.id === view;
      section.hidden = !active;
      section.classList.toggle("active", active);
    });
    all("[data-view-link]").forEach((link) => {
      const active = link.dataset.viewLink === view;
      link.classList.toggle("active", active);
      link.toggleAttribute("aria-current", active);
    });
    el("#site-nav").classList.remove("open");
    el("#menu-toggle").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    observeReveals();
  }

  function renderSaved() {
    let saved;
    try { saved = localStorage.getItem(storageKey); } catch { saved = null; }
    if (!saved) {
      el("#saved-trip-content").innerHTML = `<div class="empty-state"><p>${escapeHtml(text("noSaved"))}</p></div>`;
      return;
    }
    try {
      const plan = JSON.parse(saved);
      plan.preferences = normalizePreferences(plan.preferences);
      el("#saved-trip-content").innerHTML = `<div class="saved-card"><h2>${escapeHtml(text("savedTitle"))}</h2><p>${escapeHtml(text("resultSummary").replace("{time}", valueLabel(plan.preferences.time)).replace("{interest}", interestsLabel(plan.preferences.interest)))}</p><button class="button button-primary" type="button" id="open-saved-plan">${escapeHtml(text("saved"))}</button></div>`;
      el("#open-saved-plan")?.addEventListener("click", () => { state.plan = plan; renderPlan(); changeView("results"); });
    } catch {
      try { localStorage.removeItem(storageKey); } catch { /* Ignore unavailable storage. */ }
      el("#saved-trip-content").innerHTML = `<div class="empty-state"><p>${escapeHtml(text("noSaved"))}</p></div>`;
    }
  }

  function captureCurrentPreferences() {
    const form = el("#planner-form");
    if (!form) return;
    const checkedInterest = form.querySelector("input[name='interest']:checked");
    if (!checkedInterest) return;
    const formData = new FormData(form);
    state.preferences = normalizePreferences({ traveler: formData.get("traveler"), interest: formData.getAll("interest"), time: formData.get("time"), budget: formData.get("budget"), walking: formData.get("walking") });
  }

  function updateLanguage() {
    captureCurrentPreferences();
    const root = document.documentElement;
    root.lang = state.language;
    root.dir = isArabic() ? "rtl" : "ltr";
    document.title = isArabic() ? "دليل زائر أبها | Abha Visitor Guide" : "Abha Visitor Guide | دليل زائر أبها";
    el("#language-toggle").textContent = text("language");
    el("#language-toggle").setAttribute("aria-label", text("language"));
    el("#menu-toggle").setAttribute("aria-label", el("#site-nav").classList.contains("open") ? text("closeNav") : text("openNav"));
    all("[data-view-link]").forEach((link) => { link.textContent = text(link.dataset.viewLink === "hidden-abha" ? "hiddenAbha" : link.dataset.viewLink); });
    el(".brand").setAttribute("aria-label", `${text("footerTitle")} ${text("home")}`);
    el("#hero-eyebrow").textContent = text("heroEyebrow");
    el("#hero-kicker").textContent = text("heroKicker");
    el("#home-title").textContent = text("heroTitle");
    el(".hero-text").textContent = text("heroText");
    el("#hero-badge-text").textContent = text("heroBadge");
    el("[data-hero-action='plan']").innerHTML = `${escapeHtml(text("plan"))} <span aria-hidden="true">→</span>`;
    el("[data-hero-action='explore']").innerHTML = `${escapeHtml(text("exploreHero"))} <span aria-hidden="true">→</span>`;
    el("#interests-eyebrow").textContent = text("start");
    el("#interests-title").textContent = text("interestsTitle");
    el("#explore-all-link").innerHTML = `${escapeHtml(text("exploreAll"))} <span aria-hidden="true">→</span>`;
    el("#gallery-eyebrow").textContent = text("galleryEyebrow");
    el("#gallery-title").textContent = text("galleryTitle");
    el("#gallery-copy").textContent = text("galleryCopy");
    el("#gallery-all-link").innerHTML = `${escapeHtml(text("viewAll"))} <span aria-hidden="true">→</span>`;
    el(".home-card-stack-section").setAttribute("aria-label", text("homeCardsSection"));
    el("#callout-eyebrow").textContent = text("callout");
    el("#callout-title").textContent = text("calloutTitle");
    el("#callout-button").innerHTML = `${escapeHtml(text("build"))} <span aria-hidden="true">→</span>`;
    el("#moods-eyebrow").textContent = text("moodsEyebrow");
    el("#moods-title").textContent = text("moodsTitle");
    el("#moods-text").textContent = text("moodsText");
    el("#explore .eyebrow").textContent = text("exploreEyebrow");
    el("#explore-title").textContent = text("exploreTitle");
    el("#explore-title").nextElementSibling.textContent = text("exploreText");
    el("#planner .eyebrow").textContent = text("plannerEyebrow");
    el("#planner-title").textContent = text("plannerTitle");
    el("#planner-title").nextElementSibling.textContent = text("plannerText");
    Object.entries({ traveler: "qTraveler", interest: "qInterest", time: "qTime", budget: "qBudget", walking: "qWalking" }).forEach(([key, label]) => { document.querySelector(`[data-question="${key}"]`).textContent = text(label); });
    el("#planner-form button[type='submit']").innerHTML = `${escapeHtml(text("create"))} <span aria-hidden="true">→</span>`;
    el("#results .eyebrow").textContent = text("resultEyebrow");
    el("#results-title").textContent = text("resultTitle");
    el("#change-preference").textContent = text("change");
    el("#save-trip").textContent = text("save");
    el("#saved .eyebrow").textContent = text("savedEyebrow");
    el("#saved-title").textContent = text("savedTitle");
    el("#saved-title").nextElementSibling.textContent = text("savedText");
    el("#load-example").textContent = text("loadExample");
    el(".site-footer p:first-child").textContent = text("footerTitle");
    el(".site-footer p:last-child").textContent = text("footerText");
    renderHomeInterests();
    renderHomeGallery();
    updateHomePhotoCardLabels();
    renderHiddenAbha();
    renderMoodPage();
    renderExplore();
    renderChoices();
    if (state.plan) renderPlan();
    renderSaved();
    updateThemeControl();
  }

  let revealObserver;
  function observeReveals() {
    const targets = all(".reveal-section, .reveal-item");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .08 });
    }
    targets.forEach((target) => {
      if (!target.classList.contains("is-visible")) revealObserver.observe(target);
    });
  }

  function bindEvents() {
    window.addEventListener("hashchange", () => {
      const view = window.location.hash.slice(1) || "home";
      if (["home", "hidden-abha", "moods", "explore", "planner", "results", "saved"].includes(view)) changeView(view);
    });
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-go-to], [data-view-link]");
      if (link) {
        event.preventDefault();
        const view = link.dataset.goTo || link.dataset.viewLink;
        if (view === "explore") state.featuredPlaceId = null;
        history.replaceState(null, "", `#${view}`);
        changeView(view);
      }
      const homeCardStack = event.target.closest("[data-cycle-home-cards]");
      if (homeCardStack) {
        cycleHomePhotoCards();
        requestAnimationFrame(() => el("[data-cycle-home-cards]")?.focus());
      }
      const filter = event.target.closest("[data-filter]");
      if (filter) { state.filter = filter.dataset.filter; state.featuredPlaceId = null; renderExplore(); }
      const interest = event.target.closest("[data-interest]");
      if (interest) {
        state.filter = interest.dataset.interest; state.featuredPlaceId = null;
        history.replaceState(null, "", "#explore"); renderExplore(); changeView("explore");
      }
      const destination = event.target.closest("[data-explore-destination]");
      if (destination) {
        state.featuredPlaceId = destination.dataset.exploreDestination; state.filter = "All"; state.visitMonth = null;
        history.replaceState(null, "", "#explore"); renderExplore(); changeView("explore");
        requestAnimationFrame(() => el(`[data-place-card="${state.featuredPlaceId}"]`)?.focus());
      }
      const mood = event.target.closest("[data-mood]");
      if (mood) {
        state.mood = mood.dataset.mood;
        state.showAllMoods = false;
        renderMoodPage();
        requestAnimationFrame(() => el("#moods-results-title")?.focus());
      }
      const chooseAnotherMood = event.target.closest("[data-choose-another-mood]");
      if (chooseAnotherMood) {
        state.mood = null;
        state.showAllMoods = false;
        renderMoodPage();
        requestAnimationFrame(() => el("[data-mood]")?.focus());
      }
      const showAllMoods = event.target.closest("[data-show-all-moods]");
      if (showAllMoods) {
        state.mood = null;
        state.showAllMoods = true;
        renderMoodPage();
        requestAnimationFrame(() => el("#moods-results-title")?.focus());
      }
      const startHiddenAbha = event.target.closest("[data-start-hidden-abha]");
      if (startHiddenAbha) {
        state.hiddenAbhaDay = chooseRandomHiddenAbhaDay();
        renderHiddenAbha();
        requestAnimationFrame(() => el("#hidden-abha-title")?.focus());
      }
    });
    el("#menu-toggle").addEventListener("click", () => {
      const nav = el("#site-nav"); const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open); el("#menu-toggle").setAttribute("aria-expanded", String(open)); el("#menu-toggle").setAttribute("aria-label", open ? text("closeNav") : text("openNav"));
    });
    el("#month-filter").addEventListener("change", (event) => {
      const value = Number(event.currentTarget.value);
      state.visitMonth = Number.isInteger(value) && value >= 1 && value <= 12 ? value : null;
      state.featuredPlaceId = null;
      renderExplore();
    });
    el("#language-toggle").addEventListener("click", () => { state.language = isArabic() ? "en" : "ar"; updateLanguage(); });
    el("#theme-toggle").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark", true));
    el("#planner-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const preferences = normalizePreferences({ traveler: formData.get("traveler"), interest: formData.getAll("interest"), time: formData.get("time"), budget: formData.get("budget"), walking: formData.get("walking") });
      if (!preferences.interest.length) {
        const group = document.querySelector('[data-choice-group="interest"]'); group.setAttribute("aria-invalid", "true");
        const existingError = el("#interest-error");
        if (existingError) existingError.textContent = text("chooseInterest");
        else group.insertAdjacentHTML("afterend", `<p class="form-error" id="interest-error" role="alert">${escapeHtml(text("chooseInterest"))}</p>`);
        return;
      }
      document.querySelector('[data-choice-group="interest"]').removeAttribute("aria-invalid");
      el("#interest-error")?.remove();
      state.preferences = preferences; state.plan = buildPlan(state.preferences); renderPlan();
      history.replaceState(null, "", "#results"); changeView("results");
    });
    el("#change-preference").addEventListener("click", () => { history.replaceState(null, "", "#planner"); changeView("planner"); });
    el("#save-trip").addEventListener("click", () => {
      if (!state.plan) return;
      try { localStorage.setItem(storageKey, JSON.stringify(state.plan)); el("#save-status").textContent = text("savedSuccess"); } catch { el("#save-status").textContent = text("noSaved"); }
      renderSaved();
    });
    el("#load-example").addEventListener("click", () => {
      state.preferences = normalizePreferences(window.ABHA_EXAMPLE_PREFERENCES); state.plan = buildPlan(state.preferences);
      try { localStorage.setItem(storageKey, JSON.stringify(state.plan)); } catch { /* The guide still works without persistence. */ }
      renderChoices(); renderSaved();
    });
  }

  function init() {
    applyTheme(state.theme);
    renderHomeInterests(); renderHomeGallery(); renderHomePhotoCards(); renderHiddenAbha(); renderMoodPage(); renderExplore(); renderChoices(); renderSaved(); bindEvents(); observeReveals();
    const initialView = window.location.hash.slice(1);
    if (["home", "hidden-abha", "moods", "explore", "planner", "results", "saved"].includes(initialView)) changeView(initialView);
  }

  init();
})();
