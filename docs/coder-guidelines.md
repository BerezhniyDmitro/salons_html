# Рекомендації для верстальщика — LUMINA

> Практичний гайд для розробника, який буде верстати нові сторінки на базі [design-system.md](./design-system.md).
> Версія 1.0 · 2026-05-16 · мова — українська.

Цей документ — про **як саме реалізовувати**. Що саме реалізовувати (токени, патерни, стани) — дивись `design-system.md`.

---

## 1. Стек і обмеження

**Що використовуємо:**
- Чистий HTML + CSS + ванільний JS (`js/main.js`).
- Шрифти — Google Fonts (Cormorant Garamond + Outfit), уже під'єднані в `index.html`.
- SVG — інлайн в HTML (без іконкових бібліотек).
- Локальний сервер: `python3 -m http.server 8765`.
- Фреймворк Alpine допускається для використання

**Чого НЕ використовуємо:**
- Жодних бандлерів (Vite, webpack, Parcel).
- Жодних препроцесорів (Sass, Less, PostCSS).
- Жодних фреймворків (React, Vue).
- Жодних CSS-фреймворків (Tailwind, Bootstrap).
- Жодних package.json / node_modules — їх немає і не повинно з'явитися.

**Якщо здається, що задача потребує JS-бібліотеки** — спочатку перевір, чи це не вирішується нативним CSS (`scroll-snap`, `:has()`, `aspect-ratio`, `color-mix()`, `backdrop-filter`).

---

## 2. Структура файлів нового компонента

Створюючи новий компонент `gallery`:

```
components/
  gallery/
    gallery.css        ← всі стилі компонента
```

HTML іде в `index.html` між коментарями-роздільниками (див. існуючий патерн):

```html
<!-- ╔══════════════════════════════╗ -->
<!-- ║  GALLERY                      ║ -->
<!-- ╚══════════════════════════════╝ -->
<section class="gallery" id="gallery">
  ...
</section>
```

CSS-файл підключається в `<head>` `index.html` поруч з іншими компонентами:

```html
<link rel="stylesheet" href="components/gallery/gallery.css">
```

**Не створюй:**
- `components/gallery/gallery.html` (всі компоненти інлайн у `index.html`).
- `components/gallery/gallery.js` (JS — лише в `js/main.js`).
- `components/gallery/index.css` (ім'я файлу = ім'я папки).

---

## 3. CSS: куди що класти

| Що додаємо | Куди |
|---|---|
| Новий колір / шрифт / градієнт | `css/variables.css` (і одночасно — в design-system.md) |
| Глобальний reset, base font-size, focus-visible | `css/base.css` |
| Патерн, що використовується ≥ 2 компонентами (наприклад `.pill`, `.nav-arrow`) | `css/components.css` |
| Стилі конкретного компонента | `components/<name>/<name>.css` |

**Правило:** якщо ти три рази копіюєш ті самі правила в різні `components/*/*.css` — винось у `css/components.css` як shared-патерн і документуй у design-system.md.

---

## 4. Mobile-first workflow

**Послідовність роботи:**
1. Спочатку верстаєш мобільну версію (390px) — це базові стилі компонента.
2. Перевіряєш на 390px у Playwright.
3. Додаєш `@media (min-width: 1200px) { ... }` з overrides для десктопу.
4. Перевіряєш на 1440px у Playwright.

**ЄДИНИЙ брейкпоїнт — 1200px.** Не вводь `768px`, `1024px`, `1440px` й інші — це політика проекту.

**Базовий шаблон CSS-файлу:**

```css
/* ── component-name ─────────────────────────────────── */

.component-name {
  /* мобільні стилі — за замовчуванням */
}

.component-name__element {
  /* ... */
}

/* ── Desktop @media (min-width: 1200px) ───────────── */

@media (min-width: 1200px) {
  .component-name {
    /* лише overrides для десктопу */
  }
}
```

**Антипатерн:** не пиши `@media (max-width: 1199px)` для мобільних — мобільне і так базове.

---

## 5. Single DOM правило

Один і той самий HTML обслуговує мобілку і десктоп. CSS вирішує, як це виглядає.

**❌ Так не робимо:**
```html
<div class="services-mobile">...</div>
<div class="services-desktop">...</div>
```

**✅ Так робимо:**
```html
<div class="services">
  <div class="services__card">...</div>
</div>
```

```css
.services { display: flex; flex-direction: column; }      /* mobile */
@media (min-width: 1200px) {
  .services { display: grid; grid-template-columns: repeat(3, 1fr); }
}
```

**Виняток для display:** ховати елемент через `display: none` на одному з viewport — ОК (так робить navbar: hamburger ховається на десктопі, desktop-nav ховається на мобілці). Але **сам DOM-вузол має існувати один раз**.

---

## 6. BEM-нейминг — суворо

**Формат:** `block__element--modifier`

```html
<article class="works-card works-card--featured">
  <div class="works-card__image-wrap">
    <img class="works-card__image" />
  </div>
  <p class="works-card__caption works-card__caption--muted">...</p>
</article>
```

**Правила:**
- Блок — це компонент або підкомпонент (`works-card`, `service-card`).
- Елемент — частина блока, не існує окремо (`works-card__caption`).
- Модифікатор — варіація стану/вигляду (`--featured`, `--active`, `--muted`).
- **Один клас = один рівень.** Не пиши `.works-card .image` — пиши `.works-card__image`.
- **Не вкладуй селектори глибше 2 рівнів.** `.works-card__image-wrap` краще, ніж `.works-card .wrap .img`.
- **Не використовуй tag-селектори в компонентному CSS** (`.works-card div` — погано). Винятки: `.faq summary`, `.footer a` — лише коли семантика однозначна і не потребує модифікатора.

---

## 7. Робота з токенами

**Жодних хардкод-значень для:**
- Кольорів — лише `var(--champagne)`, `var(--ink)` тощо.
- Шрифтів — лише `var(--font-display)`, `var(--font-body)`.
- Градієнтів — лише `var(--gradient-gold)`.

**Можна (поки немає токенів):**
- Spacing — числові значення в px (`padding: 24px`, `gap: 16px`). Дотримуйся 4-px сітки: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120.
- Radii — `4px`, `8px`, `12px`, `16px`, `999px`.
- Font-size — px, відповідно до шкали з design-system.md розділ 1.2.

**Якщо нема токена, який тобі потрібен:**
1. Зупинись, не хардкодь магічний колір.
2. Перевір, чи можна виразити через existing колір + `color-mix()` (це наш патерн: `color-mix(in srgb, var(--ink) 40%, transparent)`).
3. Якщо ні — додай новий токен у `variables.css` + опиши в design-system.md + поясни замовнику в коментарі до PR.

---

## 8. Респонсивність — практичні прийоми

**Що використовуємо охоче:**
- `clamp()` для fluid-типографіки (рідко, поки що ми використовуємо дискретну зміну на 1200px).
- `aspect-ratio: 4 / 3` замість padding-bottom хаків.
- `gap` у flex і grid замість margin на дітях.
- `min-height: 100vh` — обережно на iOS (адресний бар). Краще `min-height: 100svh` де можливо, з фолбеком.
- `scroll-snap-type` для каруселей замість JS.
- `:has()` для контекстних стилів (наприклад, `.faq__item:has([open])`).
- `color-mix()` замість напівпрозорих rgba-копій кольорів.

**Що ламає:**
- `width: 100vw` у елементах усередині контейнера з padding — викликає горизонтальний скрол. Використовуй `width: 100%` або `calc(100vw - 2 * <padding>)`.
- Великі фіксовані `min-height` на мобілці без `overflow: hidden` на body.

---

## 9. Доступність — мінімальний обов'язковий набір

Перед мерджем компонент має:
- [ ] Семантичні теги (`<nav>`, `<section>`, `<article>`, `<button>`, `<h2>`).
- [ ] Заголовки в правильній ієрархії: h1 один на сторінку (зараз — у hero), h2 для секцій, h3 для карток.
- [ ] Усі `<button>` без видимого тексту мають `aria-label`.
- [ ] Усі `<img>` мають `alt` (порожній `alt=""` для декоративних).
- [ ] Form-елементи мають `<label>` (явний або через `aria-label`).
- [ ] Контраст тексту ≥ 4.5:1 (для < 18px), ≥ 3:1 (для ≥ 18px). Перевір у DevTools → Contrast.
- [ ] Touch-таргети ≥ 44×44 px на мобілці (наш `.nav-arrow` 40px — баг, не повторюй).
- [ ] Видимий `:focus-visible` (наш базовий стиль уже в `base.css`).
- [ ] Аккордеони/модалки керуються клавіатурою (Tab, Enter, Esc).
- [ ] `prefers-reduced-motion` зменшує анімації (поки не реалізовано глобально — додавай у нових анімаціях).

---

## 10. JS — мінімалізм

**Усе в одному файлі:** `js/main.js`.

**Принципи:**
- Делегування подій через `document.addEventListener('click', ...)` де можна, а не listener на кожен елемент.
- Жодних модулів, ES-імпортів, динамічного завантаження — все одним скриптом у кінці `<body>`.
- Жодного `innerHTML` з користувацьким контентом (XSS).
- Стан зберігаємо в DOM-атрибутах (`aria-expanded`, `data-active`), не в JS-змінних.

**Якщо для нового компонента потрібен JS:**
1. Спочатку перевір CSS-альтернативу (`scroll-snap`, `:has()`, `<details>` для accordion).
2. Якщо JS все одно потрібен — додай секцію в `main.js` з коментарем-роздільником:
   ```js
   // ── Gallery lightbox ──────────────────────────────
   ```
3. Загорни в IIFE або скоп-функцію, щоб не плодити глобалів.

---

## 11. Зображення

- Кладеш у `images/` (без вкладених папок поки не з'явиться 30+ файлів).
- Імена в kebab-case: `service-facial-1.jpg`, `hero-bg.png`.
- Mobile-версія сайту мусить отримувати ≤ 300 KB на зображення. Якщо більше — оптимізуй (Squoosh, ImageOptim).
- Для фото профілів і портфоліо — `loading="lazy"` обов'язково.
- Для hero — `loading="eager"` (або без атрибуту — це default eager).
- Альт-текст — українською, описує що зображено для незрячого користувача, не «фото 1».

```html
<img src="images/specialist-anna.jpg" alt="Майстриня Анна — портрет у студії" loading="lazy">
```

---

## 12. Verification workflow

**Перед тим, як кликати компонент готовим:**

1. Запусти dev-сервер: `python3 -m http.server 8765`.
2. Відкрий через Playwright MCP `http://localhost:8765` (або викликай скіл `/verify`).
3. Зроби скріншот на `390px` (мобілка) і `1440px` (десктоп).
4. Порівняй з:
   - `design/mobile-lumina.png` для мобілки.
   - `design/landing-page-beauty-salon.png` для десктопу.
5. Зафіксуй відхилення → виправ → повтори.

**Cache-busting:** Playwright може показувати застарілі стилі. Перед скріншотом — bust href у `<link rel="stylesheet">` (`?v=2`) або в `Network` вимикай кеш.

**Перевір на одному з пристроїв (real device):** iOS Safari часто ламає `min-height: 100vh`, `position: sticky`, `backdrop-filter`. Для production-готовності — обов'язково.

---

## 13. Робота з .pen файлом

`irina.pen` — зашифрований дизайн Pencil. **Ніколи** не відкривай через `Read`, `cat`, `grep`.

Використовуй виключно Pencil MCP tools:
- `batch_get` — отримати ноди / варіанти.
- `batch_design` — створити / змінити дизайн.
- `get_screenshot` — отримати рендер.
- `search_all_unique_properties` — знайти всі унікальні значення (наприклад, всі кольори, що використовуються).

Перед роботою з дизайном — `get_editor_state` + `open_document`.

---

## 14. Pre-merge чеклист (короткий)

Перед PR в `main`:

- [ ] Усе виглядає згідно з мокапом на 390px і 1440px (скріншоти в PR).
- [ ] Усі кольори/шрифти через CSS-змінні.
- [ ] Жодного `!important` без коментаря-обґрунтування.
- [ ] Жодних дублікатів DOM для мобілки/десктопу.
- [ ] BEM-нейминг дотриманий.
- [ ] A11y-чеклист з розділу 9 пройдено.
- [ ] Перевірив у Safari (хоча б через Responsive Mode у Firefox / DevTools mobile emulation).
- [ ] Console чистий: жодних 404, помилок JS, warnings про CSP.
- [ ] Лінк додано в `index.html` у правильному порядку (компоненти йдуть після core CSS).
- [ ] Якщо є нові токени — оновив `variables.css` + `design-system.md`.
- [ ] Якщо змінив shared патерн — переглянув усіх споживачів цього патерна.

Повний 12-пунктовий чеклист — у `design-system.md` розділ 9.

---

## 15. Типові помилки і як їх уникати

| Помилка | Чим погано | Як правильно |
|---|---|---|
| `color: #C8A96E` хардкодом | Зміна бренду → шукати по всьому коду | `color: var(--champagne)` |
| `<div class="mobile-only">` + `<div class="desktop-only">` | Дублікат DOM, два джерела правди | Один DOM + CSS медіа-запити |
| `.works-card .image { ... }` | Каскад, важко override | `.works-card__image { ... }` |
| `@media (max-width: 1199px)` для мобільних | Mobile-first → базові стилі = мобільні, без media | Базові правила без media |
| `<button onclick="...">` | XSS-ризик, CSP-проблеми | `addEventListener` у `main.js` |
| `<div onclick="...">` замість `<button>` | Не keyboard-accessible, не screen-reader-accessible | `<button class="...">` |
| Picture без `alt` | Screen reader пропускає важливий контент | Завжди `alt`, для декору — `alt=""` |
| `min-height: 100vh` в hero на iOS | Адресний бар «з'їдає» висоту | `min-height: 100svh` з фолбеком `100vh` |
| Імпорт шрифту дублюється в компоненті | Подвійне завантаження | Імпорт лише в `base.css` / `<head>` |
| Іконки як `<img src="icon.svg">` | Не можна перефарбувати через `currentColor` | Інлайн `<svg>` з `stroke="currentColor"` |
| Свій breakpoint `@media (min-width: 768px)` | Розсинхрон з єдиним 1200px | Тільки 1200px (узгодь зміну з командою) |

---

## 16. Локальний dev і дебаг

**Запуск:**
```bash
python3 -m http.server 8765
```
Відкрити: `http://localhost:8765`.

**Деплой:** статика розгорнута на `http://158.220.87.233:8081/`. Деталі — у `deploy/` (не чіпай без узгодження).

**Debug-прийоми:**
- `outline: 1px solid red` на проблемному селекторі — швидко виявляє layout-issues.
- DevTools → Rendering → Emulate CSS media → `prefers-color-scheme`, `prefers-reduced-motion` для тестування.
- DevTools → Device Toolbar → Throttling → Slow 3G для перевірки сприйманої швидкості.

---

## 17. Коли сумніваєшся

1. Подивись, як зроблено в існуючих компонентах — найімовірніше, патерн уже є.
2. Перевір `design-system.md` — токени, спейсинги, шкали.
3. Перевір `css/components.css` — можливо, є shared-патерн.
4. Якщо нема нічого і доводиться вводити щось нове — **спочатку домовся в команді**, потім задокументуй у `design-system.md`, потім код.

> **Принцип:** код, який не відповідає design-system, але працює — гірший, ніж відсутній код. Один виняток = початок розсинхрону.

---

**Документ підтримується разом з [design-system.md](./design-system.md). Оновлюй обидва, коли змінюєш патерни.**
