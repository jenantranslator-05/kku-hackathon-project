(() => {
  "use strict";

  const places = window.ABHA_PLACES;
  const storageKey = "abhaVisitorGuideSavedTrip";
  const labels = {
    en: {
      home: "Home", explore: "Explore", planner: "Plan my trip", saved: "Saved trip",
      language: "العربية", openNav: "Open navigation", closeNav: "Close navigation",
      plan: "Plan My Trip", exploreAll: "Explore all places", start: "START HERE",
      interestsTitle: "What are you looking for?", interestHint: "Explore places", approvedTag: "Approved tag",
      galleryEyebrow: "DESTINATION GALLERY", galleryTitle: "A closer look at Abha.", galleryCopy: "From misty peaks to warm café corners, find the place that fits your day.", exploreDestination: "Explore this place",
      callout: "YOUR DAY, YOUR WAY", calloutTitle: "Five quick choices. A plan made for you.", build: "Build my plan",
      exploreEyebrow: "EXPLORE ABHA", exploreTitle: "Places for every kind of day.",
      exploreText: "Filter places using the guide’s categories and approved interest tags.",
      showing: "Showing {count} places", showingDestination: "Showing {place}", noPlaces: "No places match this filter.",
      plannerEyebrow: "TRIP PLANNER", plannerTitle: "Build a day that feels like you.",
      plannerText: "Answer five quick questions. Recommendations use only the places and details in this guide.",
      qTraveler: "Who are you traveling with?", qInterest: "What do you love? Select all that apply.", qTime: "How much time do you have?",
      qBudget: "What is your budget?", qWalking: "What walking level works for you?", create: "Create My Trip", chooseInterest: "Choose at least one interest to create your trip.",
      resultEyebrow: "YOUR ABHA PLAN", resultTitle: "Your route is ready.",
      resultSummary: "A {time} plan shaped around {interest}.",
      change: "Change Something", save: "Save My Trip", savedSuccess: "Your trip has been saved in this browser.",
      savedEyebrow: "SAVED IN THIS BROWSER", savedTitle: "Your saved trip.",
      savedText: "Your choices stay on this device only. They are never sent anywhere.",
      loadExample: "Load example", noSaved: "No trip has been saved yet. Build a plan or load the built-in example.",
      map: "Open map", mapUnavailable: "Map link not available", imageUnavailable: "Image not available",
      category: "Category", cost: "Cost", walking: "Walking", setting: "Setting", duration: "Duration", bestTime: "Best time",
      selected: "Selected interests", estimate: "Estimated minimum", totalTime: "Planned time", day: "Day", hours: "hours",
      weather: "Weather alternative: {place}", aboveBudget: "This is the closest matching plan, but its estimated minimum cost is above your selected budget.",
      solo: "Solo suitability is not specifically listed in the source data.", noMatch: "No exact match was found for every choice. This plan uses the closest places from the guide.",
      all: "All", nature: "Nature", cafes: "Cafés", food: "Food", heritage: "Heritage", photography: "Photography", family: "Family", adventures: "Adventures",
      traveler: "Travelers", interest: "Interest", time: "Time", budget: "Budget", walkingLabel: "Walking",
      family: "Family", friends: "Friends", couple: "Couple", soloOption: "Solo",
      twoHours: "2 hours", halfDay: "Half day", oneDay: "1 day", twoDays: "2 days",
      under100: "Under 100 SAR", b100to300: "100–300 SAR", b300to500: "300–500 SAR", b500plus: "500+ SAR",
      dontMind: "I don’t mind", moderate: "Moderate", minimal: "Minimal walking",
      footerTitle: "Abha Visitor Guide", footerText: "Local guide data • Browser-only trip saving",
      heroTitle: "Find your Abha moment.", heroText: "Choose what calls you—mountain views, heritage, cafés, food, or a family day out—and create a plan from the places in this guide.", heroBadge: "16 places to discover"
    },
    ar: {
      home: "الرئيسية", explore: "استكشف", planner: "خطط رحلتك", saved: "الرحلة المحفوظة",
      language: "English", openNav: "فتح القائمة", closeNav: "إغلاق القائمة",
      plan: "خطط رحلتك", exploreAll: "استكشف كل الأماكن", start: "ابدأ من هنا",
      interestsTitle: "ما الذي تبحث عنه؟", interestHint: "استكشف الأماكن", approvedTag: "وسم معتمد",
      galleryEyebrow: "معرض الوجهات", galleryTitle: "نظرة أقرب إلى أبها.", galleryCopy: "من القمم الضبابية إلى زوايا المقاهي الدافئة، اعثر على المكان المناسب ليومك.", exploreDestination: "استكشف هذا المكان",
      callout: "يومك بطريقتك", calloutTitle: "خمسة اختيارات سريعة. وخطة تناسبك.", build: "أنشئ خطتي",
      exploreEyebrow: "استكشف أبها", exploreTitle: "أماكن لكل نوع من الأيام.",
      exploreText: "صفِّ الأماكن باستخدام فئات الدليل ووسوم الاهتمامات المعتمدة.",
      showing: "عرض {count} أماكن", showingDestination: "عرض {place}", noPlaces: "لا توجد أماكن تطابق هذا الفلتر.",
      plannerEyebrow: "مخطط الرحلة", plannerTitle: "اصنع يوماً يشبهك.",
      plannerText: "أجب عن خمسة أسئلة سريعة. تستخدم الاقتراحات الأماكن والتفاصيل الموجودة في هذا الدليل فقط.",
      qTraveler: "مع من تسافر؟", qInterest: "ما الذي تحبه؟ اختر كل ما ينطبق.", qTime: "كم من الوقت لديك؟",
      qBudget: "ما ميزانيتك؟", qWalking: "ما مستوى المشي المناسب لك؟", create: "أنشئ رحلتي", chooseInterest: "اختر اهتمامًا واحدًا على الأقل لإنشاء رحلتك.",
      resultEyebrow: "خطتك في أبها", resultTitle: "مسارك جاهز.",
      resultSummary: "خطة لمدة {time} مبنية حول {interest}.",
      change: "غيّر شيئًا", save: "احفظ رحلتي", savedSuccess: "تم حفظ رحلتك في هذا المتصفح.",
      savedEyebrow: "محفوظة في هذا المتصفح", savedTitle: "رحلتك المحفوظة.",
      savedText: "تبقى اختياراتك على هذا الجهاز فقط، ولا تُرسل إلى أي مكان.",
      loadExample: "تحميل مثال", noSaved: "لم تُحفظ أي رحلة بعد. أنشئ خطة أو حمّل المثال المدمج.",
      map: "فتح الخريطة", mapUnavailable: "رابط الخريطة غير متوفر", imageUnavailable: "الصورة غير متوفرة",
      category: "الفئة", cost: "التكلفة", walking: "المشي", setting: "المكان", duration: "المدة", bestTime: "أفضل وقت",
      selected: "الاهتمامات المختارة", estimate: "الحد الأدنى التقديري", totalTime: "الوقت المخطط", day: "اليوم", hours: "ساعات",
      weather: "بديل الطقس: {place}", aboveBudget: "هذه أقرب خطة مطابقة، لكن الحد الأدنى التقديري لتكلفتها أعلى من ميزانيتك المحددة.",
      solo: "لا تُذكر ملاءمة المسافر المنفرد تحديدًا في بيانات المصدر.", noMatch: "لم يُعثر على تطابق دقيق لكل الاختيارات. تستخدم هذه الخطة أقرب الأماكن من الدليل.",
      all: "الكل", nature: "طبيعة", cafes: "مقاهي", food: "طعام", heritage: "تراث", photography: "تصوير", family: "عائلات", adventures: "مغامرات",
      traveler: "المسافرون", interest: "الاهتمام", time: "الوقت", budget: "الميزانية", walkingLabel: "المشي",
      family: "عائلة", friends: "أصدقاء", couple: "زوجان", soloOption: "منفرد",
      twoHours: "ساعتان", halfDay: "نصف يوم", oneDay: "يوم واحد", twoDays: "يومان",
      under100: "أقل من 100 ريال", b100to300: "100–300 ريال", b300to500: "300–500 ريال", b500plus: "500+ ريال",
      dontMind: "لا أمانع", moderate: "متوسط", minimal: "مشي قليل",
      footerTitle: "دليل زائر أبها", footerText: "بيانات دليل محلية • حفظ الرحلة في المتصفح فقط",
      heroTitle: "اعثر على لحظتك في أبها.", heroText: "اختر ما يجذبك—إطلالات جبلية أو تراث أو مقاهٍ أو طعام أو يوم عائلي—وأنشئ خطة من الأماكن في هذا الدليل.", heroBadge: "16 مكانًا لاكتشافها"
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
  const state = {
    language: "en",
    filter: "All",
    featuredPlaceId: null,
    preferences: normalizePreferences(window.ABHA_EXAMPLE_PREFERENCES),
    plan: null
  };

  const el = (selector) => document.querySelector(selector);
  const all = (selector) => [...document.querySelectorAll(selector)];
  const text = (key) => labels[state.language][key] || key;
  const isArabic = () => state.language === "ar";

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

  function renderHomeInterests() {
    el("#home-interests").innerHTML = interests.map((interest) => `
      <button class="interest-button" type="button" data-interest="${interest}">
        ${escapeHtml(valueLabel(interest))}
        <span>${escapeHtml(interest === "Photography" || interest === "Adventures" ? text("approvedTag") : text("interestHint"))}</span>
      </button>`).join("");
  }

  function renderHomeGallery() {
    el("#home-gallery").innerHTML = places.map((place) => `
      <article class="gallery-card">
        <div class="gallery-media">
          <img src="${place.image}" alt="${escapeHtml(nameFor(place))}" loading="lazy">
        </div>
        <div class="gallery-content">
          <p class="gallery-category">${escapeHtml(place.category)}</p>
          <h3>${escapeHtml(nameFor(place))}<span lang="${isArabic() ? "en" : "ar"}" dir="${isArabic() ? "ltr" : "rtl"}">${escapeHtml(oppositeNameFor(place))}</span></h3>
          <button class="gallery-link" type="button" data-explore-destination="${place.id}" aria-label="${escapeHtml(`${text("exploreDestination")}: ${nameFor(place)}`)}">${escapeHtml(text("exploreDestination"))} <span aria-hidden="true">→</span></button>
        </div>
      </article>`).join("");
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
    const map = place.mapUrl
      ? `<a class="map-link" href="${place.mapUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(text("map"))} <span aria-hidden="true">↗</span></a>`
      : `<p class="map-unavailable">${escapeHtml(text("mapUnavailable"))}</p>`;
    return `<article class="place-card" data-place-card="${place.id}" tabindex="-1">
      <div class="place-media">${image}</div>
      <div class="place-content">
        <div class="place-title">
          <h2>${escapeHtml(nameFor(place))}<span class="place-name-ar" lang="ar" dir="rtl">${escapeHtml(place.nameAr)}</span></h2>
        </div>
        <p class="category">${escapeHtml(place.category)}</p>
        <p class="description">${escapeHtml(descriptionFor(place))}</p>
        <ul class="details">
          <li><strong>${escapeHtml(text("cost"))}</strong>${escapeHtml(place.cost)}</li>
          <li><strong>${escapeHtml(text("walking"))}</strong>${escapeHtml(place.walking)}</li>
          <li><strong>${escapeHtml(text("setting"))}</strong>${escapeHtml(place.environment)}</li>
          <li><strong>${escapeHtml(text("duration"))}</strong>${escapeHtml(place.duration)}</li>
        </ul>
        ${map}
      </div>
    </article>`;
  }

  function renderExplore() {
    const filters = ["All", ...interests];
    el("#filter-bar").innerHTML = filters.map((filter) => `<button class="filter-button ${state.filter === filter && !state.featuredPlaceId ? "active" : ""}" type="button" data-filter="${filter}" aria-pressed="${state.filter === filter && !state.featuredPlaceId}">${escapeHtml(filter === "All" ? text("all") : valueLabel(filter))}</button>`).join("");
    const featured = state.featuredPlaceId ? places.find((place) => place.id === state.featuredPlaceId) : null;
    const matching = featured ? [featured] : places.filter((place) => filterMatches(place, state.filter));
    el("#place-count").textContent = featured
      ? text("showingDestination").replace("{place}", nameFor(featured))
      : text("showing").replace("{count}", matching.length);
    el("#places-grid").innerHTML = matching.length ? matching.map(placeCard).join("") : `<div class="empty-state">${escapeHtml(text("noPlaces"))}</div>`;
  }

  function renderChoices() {
    Object.entries(choiceOptions).forEach(([key, options]) => {
      const container = document.querySelector(`[data-choice-group="${key}"]`);
      const multiple = key === "interest";
      container.innerHTML = options.map((option, index) => {
        const id = `${key}-${index}`;
        const checked = multiple ? state.preferences.interest.includes(option) : state.preferences[key] === option;
        return `<input class="choice-input" type="${multiple ? "checkbox" : "radio"}" name="${key}" id="${id}" value="${escapeHtml(option)}" ${checked ? "checked" : ""}>
          <label class="choice-label" for="${id}">${escapeHtml(valueLabel(option))}</label>`;
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

  function targetHours(time) {
    return { "2 hours": 2, "Half day": 4, "1 day": 8, "2 days": 16 }[time] || 4;
  }

  function budgetRange(budget) {
    return {
      "Under 100 SAR": [0, 99],
      "100–300 SAR": [100, 300],
      "300–500 SAR": [300, 500],
      "500+ SAR": [500, Infinity]
    }[budget] || [0, Infinity];
  }

  function matchesInterest(place, interest) {
    if (interest === "Photography" || interest === "Adventures") return place.approvedTags.includes(interest);
    if (interest === "Nature") return /Nature/i.test(place.category);
    if (interest === "Cafés") return /Caf[eé]|Coffee/i.test(place.category);
    if (interest === "Food") return /Food|Restaurant|Pizza|Italian|Caf[eé]|Coffee|Bakery|Desserts/i.test(place.category);
    if (interest === "Heritage") return /Heritage/i.test(place.category);
    return false;
  }

  function matchingInterests(place, selectedInterests) {
    return selectedInterests.filter((interest) => matchesInterest(place, interest));
  }

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
    if (place.id === "curo") score -= 1000;
    return score;
  }

  function buildPlan(rawPreferences) {
    const preferences = normalizePreferences(rawPreferences);
    const target = targetHours(preferences.time);
    const [, maxBudget] = budgetRange(preferences.budget);
    const candidates = places
      .filter((place) => place.mapUrl)
      .map((place) => ({ place, score: scorePlace(place, preferences, false) }))
      .sort((a, b) => b.score - a.score);

    const choose = (list, canExceed) => {
      const selected = [];
      let hours = 0;
      let cost = 0;
      for (const item of list) {
        const place = item.place;
        const placeHours = averageHours(place);
        const placeCost = minCost(place);
        const hasInterest = matchingInterests(place, preferences.interest).length > 0;
        const canFitTime = selected.length === 0 || hours + placeHours <= target;
        const canFitBudget = cost + placeCost <= maxBudget;
        if (canFitTime && (canFitBudget || canExceed) && (item.score > -10 || hasInterest)) {
          selected.push(place);
          hours += placeHours;
          cost += placeCost;
        }
        if (hours >= target * .78) break;
      }
      return { selected, hours, cost };
    };

    let chosen = choose(candidates, false);
    let aboveBudget = chosen.cost > maxBudget;
    const chosenInterestCount = new Set(chosen.selected.flatMap((place) => matchingInterests(place, preferences.interest))).size;
    if (!chosen.selected.length || !chosenInterestCount) {
      const fallbackCandidates = places
        .filter((place) => place.mapUrl)
        .map((place) => ({ place, score: scorePlace(place, preferences, true) }))
        .sort((a, b) => b.score - a.score);
      chosen = choose(fallbackCandidates, true);
      aboveBudget = chosen.cost > maxBudget;
    }

    if (!chosen.selected.length) {
      chosen = { selected: [places.find((place) => place.mapUrl && place.id !== "curo")], hours: 2, cost: 50 };
      aboveBudget = chosen.cost > maxBudget;
    }

    const matched = new Set(chosen.selected.flatMap((place) => matchingInterests(place, preferences.interest)));
    const exact = matched.size === preferences.interest.length &&
      (preferences.traveler === "Solo" || chosen.selected.some((place) => travelerMatches(place, preferences.traveler))) &&
      chosen.selected.some((place) => walkingMatches(place, preferences.walking));

    return {
      preferences,
      places: chosen.selected,
      hours: chosen.hours,
      cost: chosen.cost,
      target,
      dayCount: preferences.time === "2 days" ? 2 : 1,
      aboveBudget,
      exact
    };
  }

  function renderPlan() {
    const plan = state.plan;
    if (!plan) return;
    plan.preferences = normalizePreferences(plan.preferences);
    const notices = [];
    if (plan.preferences.traveler === "Solo") notices.push(`<p class="notice">${escapeHtml(text("solo"))}</p>`);
    if (!plan.exact) notices.push(`<p class="notice">${escapeHtml(text("noMatch"))}</p>`);
    if (plan.aboveBudget) notices.push(`<p class="notice warning">${escapeHtml(text("aboveBudget"))}</p>`);
    el("#planner-notices").innerHTML = notices.join("");

    el("#results-summary").textContent = text("resultSummary")
      .replace("{time}", valueLabel(plan.preferences.time))
      .replace("{interest}", interestsLabel(plan.preferences.interest));

    el("#trip-overview").innerHTML = `
      <div class="overview-item"><span>${escapeHtml(text("selected"))}</span><strong>${escapeHtml(interestsLabel(plan.preferences.interest))}</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("estimate"))}</span><strong>${escapeHtml(plan.cost)} SAR</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("totalTime"))}</span><strong>${escapeHtml(plan.hours % 1 ? plan.hours.toFixed(1) : plan.hours)} ${escapeHtml(text("hours"))}</strong></div>
      <div class="overview-item"><span>${escapeHtml(text("budget"))}</span><strong>${escapeHtml(valueLabel(plan.preferences.budget))}</strong></div>`;

    const perDay = plan.dayCount === 2 ? [[], []] : [[]];
    const dayHours = new Array(plan.dayCount).fill(0);
    plan.places.forEach((place) => {
      const placement = plan.dayCount === 2 && dayHours[0] + averageHours(place) > 8 ? 1 : 0;
      perDay[placement].push(place);
      dayHours[placement] += averageHours(place);
    });

    el("#itinerary").innerHTML = perDay.map((dayPlaces, index) => {
      const hourTotal = dayHours[index] % 1 ? dayHours[index].toFixed(1) : dayHours[index];
      const stops = dayPlaces.map((place) => {
        const weather = place.weatherAlternative && place.weatherAlternative !== "No change needed"
          ? `<div class="weather-alternative">${escapeHtml(text("weather").replace("{place}", place.weatherAlternative))}</div>` : "";
        return `<article class="trip-stop">
          <span class="stop-time">${escapeHtml(place.bestTime)} · ${escapeHtml(place.duration)}</span>
          <h3>${escapeHtml(nameFor(place))}</h3>
          <p>${escapeHtml(descriptionFor(place))}</p>
          <p><strong>${escapeHtml(text("cost"))}:</strong> ${escapeHtml(place.cost)}</p>
          ${weather}
          <a class="map-link" href="${place.mapUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(text("map"))} <span aria-hidden="true">↗</span></a>
        </article>`;
      }).join("") || `<p class="empty-state">${escapeHtml(text("noMatch"))}</p>`;
      return `<section class="day-section"><div class="day-title"><h2>${escapeHtml(text("day"))} ${index + 1}</h2><span>${hourTotal} ${escapeHtml(text("hours"))}</span></div>${stops}</section>`;
    }).join("");
  }

  function changeView(view) {
    const target = el(`#${view}`);
    if (!target) return;
    all(".view").forEach((section) => {
      const active = section.id === view;
      section.hidden = !active;
      section.classList.toggle("active", active);
    });
    all("[data-view-link]").forEach((link) => link.classList.toggle("active", link.dataset.viewLink === view));
    el("#site-nav").classList.remove("open");
    el("#menu-toggle").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSaved() {
    const saved = localStorage.getItem(storageKey);
    if (!saved) {
      el("#saved-trip-content").innerHTML = `<div class="empty-state"><p>${escapeHtml(text("noSaved"))}</p></div>`;
      return;
    }
    try {
      const plan = JSON.parse(saved);
      plan.preferences = normalizePreferences(plan.preferences);
      el("#saved-trip-content").innerHTML = `<div class="saved-card"><h2>${escapeHtml(text("savedTitle"))}</h2><p>${escapeHtml(text("resultSummary").replace("{time}", valueLabel(plan.preferences.time)).replace("{interest}", interestsLabel(plan.preferences.interest)))}</p><button class="button button-primary" type="button" id="open-saved-plan">${escapeHtml(text("saved"))}</button></div>`;
      el("#open-saved-plan")?.addEventListener("click", () => {
        state.plan = plan;
        renderPlan();
        changeView("results");
      });
    } catch {
      localStorage.removeItem(storageKey);
      renderSaved();
    }
  }

  function updateLanguage() {
    const root = document.documentElement;
    root.lang = state.language;
    root.dir = isArabic() ? "rtl" : "ltr";
    document.title = isArabic() ? "دليل زائر أبها | Abha Visitor Guide" : "Abha Visitor Guide | دليل زائر أبها";
    el("#language-toggle").textContent = text("language");
    el("#language-toggle").setAttribute("aria-label", text("language"));
    el("#menu-toggle").setAttribute("aria-label", el("#site-nav").classList.contains("open") ? text("closeNav") : text("openNav"));
    const navigation = ["home", "explore", "planner", "saved"];
    all("[data-view-link]").forEach((link, index) => { link.textContent = text(navigation[index]); });
    el(".brand").setAttribute("aria-label", `${text("footerTitle")} ${text("home")}`);
    el("#home-title").textContent = text("heroTitle");
    el(".hero-text").textContent = text("heroText");
    el(".hero-badge").innerHTML = `<span aria-hidden="true">✦</span> ${escapeHtml(text("heroBadge"))}`;
    const plannerLinks = all("[data-go-to='planner']");
    if (plannerLinks[0]) plannerLinks[0].innerHTML = `${escapeHtml(text("plan"))} <span aria-hidden="true">→</span>`;
    if (plannerLinks[1]) plannerLinks[1].innerHTML = `${escapeHtml(text("build"))} <span aria-hidden="true">→</span>`;
    el(".section-heading .eyebrow").textContent = text("start");
    el("#interests-title").textContent = text("interestsTitle");
    el(".text-link").innerHTML = `${escapeHtml(text("exploreAll"))} <span aria-hidden="true">→</span>`;
    el("#gallery-eyebrow").textContent = text("galleryEyebrow");
    el("#gallery-title").textContent = text("galleryTitle");
    el("#gallery-copy").textContent = text("galleryCopy");
    el(".home-callout .eyebrow").textContent = text("callout");
    el(".home-callout h2").textContent = text("calloutTitle");
    el(".home-callout .button").innerHTML = `${escapeHtml(text("build"))} <span aria-hidden="true">→</span>`;
    el("#explore .eyebrow").textContent = text("exploreEyebrow");
    el("#explore-title").textContent = text("exploreTitle");
    el("#explore-title").nextElementSibling.textContent = text("exploreText");
    el("#planner .eyebrow").textContent = text("plannerEyebrow");
    el("#planner-title").textContent = text("plannerTitle");
    el("#planner-title").nextElementSibling.textContent = text("plannerText");
    Object.entries({ traveler: "qTraveler", interest: "qInterest", time: "qTime", budget: "qBudget", walking: "qWalking" }).forEach(([key, label]) => {
      document.querySelector(`[data-question="${key}"]`).textContent = text(label);
    });
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
    renderExplore();
    renderChoices();
    if (state.plan) renderPlan();
    renderSaved();
  }

  function bindEvents() {
    window.addEventListener("hashchange", () => {
      const view = window.location.hash.slice(1) || "home";
      if (["home", "explore", "planner", "results", "saved"].includes(view)) changeView(view);
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
      const filter = event.target.closest("[data-filter]");
      if (filter) {
        state.filter = filter.dataset.filter;
        state.featuredPlaceId = null;
        renderExplore();
      }
      const interest = event.target.closest("[data-interest]");
      if (interest) {
        state.filter = interest.dataset.interest;
        state.featuredPlaceId = null;
        history.replaceState(null, "", "#explore");
        renderExplore();
        changeView("explore");
      }
      const destination = event.target.closest("[data-explore-destination]");
      if (destination) {
        state.featuredPlaceId = destination.dataset.exploreDestination;
        state.filter = "All";
        history.replaceState(null, "", "#explore");
        renderExplore();
        changeView("explore");
        requestAnimationFrame(() => el(`[data-place-card="${state.featuredPlaceId}"]`)?.focus());
      }
    });

    el("#menu-toggle").addEventListener("click", () => {
      const nav = el("#site-nav");
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      el("#menu-toggle").setAttribute("aria-expanded", String(open));
      el("#menu-toggle").setAttribute("aria-label", open ? text("closeNav") : text("openNav"));
    });

    el("#language-toggle").addEventListener("click", () => {
      state.language = isArabic() ? "en" : "ar";
      updateLanguage();
    });

    el("#planner-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const preferences = normalizePreferences({
        traveler: formData.get("traveler"),
        interest: formData.getAll("interest"),
        time: formData.get("time"),
        budget: formData.get("budget"),
        walking: formData.get("walking")
      });
      if (!preferences.interest.length) {
        const group = document.querySelector('[data-choice-group="interest"]');
        group.setAttribute("aria-invalid", "true");
        const existingError = el("#interest-error");
        if (existingError) existingError.textContent = text("chooseInterest");
        else group.insertAdjacentHTML("afterend", `<p class="form-error" id="interest-error" role="alert">${escapeHtml(text("chooseInterest"))}</p>`);
        return;
      }
      document.querySelector('[data-choice-group="interest"]').removeAttribute("aria-invalid");
      el("#interest-error")?.remove();
      state.preferences = preferences;
      state.plan = buildPlan(state.preferences);
      renderPlan();
      history.replaceState(null, "", "#results");
      changeView("results");
    });

    el("#change-preference").addEventListener("click", () => {
      history.replaceState(null, "", "#planner");
      changeView("planner");
    });

    el("#save-trip").addEventListener("click", () => {
      if (!state.plan) return;
      localStorage.setItem(storageKey, JSON.stringify(state.plan));
      el("#save-status").textContent = text("savedSuccess");
      renderSaved();
    });

    el("#load-example").addEventListener("click", () => {
      state.preferences = normalizePreferences(window.ABHA_EXAMPLE_PREFERENCES);
      state.plan = buildPlan(state.preferences);
      localStorage.setItem(storageKey, JSON.stringify(state.plan));
      renderChoices();
      renderSaved();
    });
  }

  function init() {
    renderHomeInterests();
    renderHomeGallery();
    renderExplore();
    renderChoices();
    renderSaved();
    bindEvents();
    const initialView = window.location.hash.slice(1);
    if (["home", "explore", "planner", "results", "saved"].includes(initialView)) changeView(initialView);
  }

  init();
})();
