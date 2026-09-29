# Abha Visitor Guide

## What it does

Abha Visitor Guide is a bilingual Arabic and English guide for planning a visit to Abha. It includes an all-local-image destination gallery, lets visitors explore 16 destinations, filter places by interest, select one or more trip interests, build a trip from five preferences, see only Excel-provided weather alternatives, and save a trip locally in their browser.

## Who it is for

Visitors to Abha who want a simple mobile-friendly guide for nature, cafés, food, heritage, photography, family outings, and approved adventure destinations.

## Needs

- A modern web browser.
- No account, internet service, database, or API key is needed for the guide itself.
- Internet is only needed if a visitor opens one of the supplied Google Maps links.

## How to run it

1. Open `index.html` in a web browser by double-clicking it.
2. Use the Arabic / English button in the top bar to change language and page direction.
3. Use the **Light / Dark** control in the top bar to choose a visual mode. Light mode is the default and the choice stays in that browser.
4. Use **Explore / استكشف** to combine an interest filter with a **Best month / أفضل شهر** picker; **All months / كل الأشهر** resets only the month choice.
5. Use **Plan My Trip / خطط رحلتك** to answer five questions and create a Morning, Lunch, and Evening itinerary.
6. Select **Save My Trip / احفظ رحلتي** to save it only in that browser.

## Try it with the sample data

The built-in destination data is in `sample-data/data.js`, copied from `abha-places-data.xlsx` with the project-approved Photography and Adventures tags.

To see a ready-made example:

1. Open **Saved trip / الرحلة المحفوظة**.
2. Select **Load example / تحميل مثال**.
3. The example plan uses Family, Nature, Half day, 100–300 SAR, and Moderate walking.

## Data notes

- The guide displays only destinations, descriptions, map links, categories, costs, suitability, walking levels, indoor/outdoor labels, durations, best times, and weather alternatives from the supplied Excel file.
- Each Explore card also has curated Gregorian `visitMonths` guidance for the Best month picker. Food and café-led venues are available all year, while all other Explore destinations are recommended from April through November. This editorial seasonal guidance is separate from the supplied spreadsheet fields, just as the approved Photography and Adventures tags are.
- Lunch recommendations are selected from restaurant and food venue categories because the supplied data does not provide a Lunch best-time field.
- Curo appears in Explore with its supplied map link and can be included in automatic trips when it matches the selected source-based preferences.
- All 16 supplied destinations use matching bundled local images from `assets/images/`; no external images are used. The Home page presents an editorial gallery and a curated six-image card gallery, and **Explore** always provides access to every destination.
- The visual light/dark preference is stored only with browser `localStorage`; light is the default. The Jacaranda, cloud, and mountain details are CSS-only.
- Multiple planner interests can be selected at once.
- Trips are saved with browser `localStorage`; nothing a visitor types is sent to GitHub or any server.
- The app has no timers or levels.

Built with Claude Code during the KKU Claude Code hackathon

Started on 2026-09-27
