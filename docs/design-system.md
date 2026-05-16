# LUMINA — Дизайн-система

> Орієнтир для розробки подальших сторінок (детальна послуга, профіль майстра, форма бронювання, блог тощо).
> Все, що описано тут, виведено з існуючого landing page. Будь-яка нова сторінка має бути впізнавана як LUMINA вже після першого скрола.

**Бренд:** преміальний beauty-salon (Київ). Естетика: appartment-like, тепла темна палітра + champagne gold accent, типографіка serif italic + clean sans.

---

## 1. Дизайн-токени

Усі візуальні рішення мають посилатися на токени з `css/variables.css`. Хардкод кольорів та шрифтів у компонентах — заборонений.

### 1.1 Кольори (вже визначені)

```css
/* Брендові */
--champagne:  #C8A96E;   /* основний акцент: CTA, eyebrow, лінк, fokus */
--gold-light: #E6D5A8;
--gold-muted: #B89A5E;
--gold-soft:  #D4B87A;
--gold-wash:  #F0E8D2;   /* фон секції FAQ */
--gradient-gold: linear-gradient(180deg, var(--champagne), var(--gold-soft));

/* Темні поверхні */
--ink:       #1E1B18;    /* найтемніша: navbar, hero overlay, dark CTA */
--charcoal:  #2C2825;    /* dark sections: services, stats, footer, map info */
--graphite:  #3D3832;    /* dark elevated surfaces: service-card */

/* Світлі поверхні */
--ivory:     #FAF7F2;    /* основний фон body, portfolio */
--cream:     #F3EDE4;    /* secondary light: specialists, testimonials */
--pearl:     #E8E0D4;    /* light borders, inactive dots */

/* Нейтральні / текст */
--sand:      #D9CFC2;    /* text on dark (secondary) */
--stone:     #544D45;    /* muted text on light, subtle borders */
```

### 1.2 Семантичні правила застосування

| Поверхня | Заголовки | Body | Eyebrow / акцент | Muted |
|---|---|---|---|---|
| Темна (`ink`/`charcoal`/`graphite`) | `ivory` | `cream`, `sand` | `champagne` | `stone` |
| Світла (`ivory`/`cream`/`gold-wash`) | `ink` | `stone` | `champagne` | `stone` (alpha) |

**Не змішуй:** `gold-*` не використовуй для тексту довшого за 2 слова — лише для акцентів, ліній, фонів.

### 1.3 Типографіка

```css
--font-display: 'Cormorant Garamond', Georgia, serif;  /* всі заголовки, ціни, числа stats */
--font-body:    'Outfit', system-ui, sans-serif;       /* все інше */
```

**Display завжди italic + weight 300-500.** Roman/non-italic — не використовуємо для заголовків.

**Шкала розмірів (mobile → desktop):**

| Роль | Mobile | Desktop | Family / Style |
|---|---|---|---|
| Hero title | 28px | 60px | display italic 400 |
| Section title | 28-32px | 44px | display italic 400, letter-spacing -0.01em |
| Subsection / map title | 28px | 36px | display italic |
| Stat number | 36px | 64px | display italic 300 |
| Card name (service) | 22px | 26px | display 500 |
| Card name (specialist) | 20px | 22px | display 500 |
| Quote | 18px | 13px (body!) | див. примітку |
| FAQ question | 15px | 18px | body 500 |
| Nav link | 15px (mobile) | 14px | body 400 |
| Body / subtitle | 14px | 15-16px | body 400 |
| Card desc | 13px | 13px | body 400 |
| Small label | 11-12px | 11-13px | body 400-500 |
| Eyebrow | 10-11px | 11px | body 500 uppercase |
| Copyright / micro | 11px | 11px | body 400 |

**Примітка по quote:** на mobile використовуємо display italic 18px (романтично), на desktop переходимо на body 13px (бо в reviews grid три колонки і display виглядав би переобтяженим). Це свідоме рішення — повторюй його у новому контенті типу reviews.

**Letter-spacing:**

| Use case | Value |
|---|---|
| Display headings | -0.01em |
| Eyebrow (mobile) | 0.15em |
| Eyebrow (desktop) | 0.12em |
| Button label small | 0.06em |
| Button label CTA | 0.1em |
| Small label | 0.04em |

**Line-height:**

| Тип | Value |
|---|---|
| Display headings | 1.15-1.2 |
| Body subtitle | 1.5 |
| Body довгий (опис, відповідь FAQ) | 1.6-1.7 |
| Stat number | 1 |

### 1.4 Spacing — пропонована шкала (потребує додати у `variables.css`)

Зараз spacing хардкоджений. Витягнута з компонентів шкала (в реальному використанні):

```
4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120
```

**Пропоную додати:**

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;   /* mobile gutter */
--space-5:  20px;
--space-6:  24px;
--space-7:  32px;
--space-8:  40px;
--space-9:  48px;   /* mobile section vertical */
--space-10: 64px;
--space-11: 80px;
--space-12: 96px;   /* desktop section vertical */
--space-13: 120px;  /* desktop gutter */
```

**Ритм застосування:**

| Контекст | Mobile | Desktop |
|---|---|---|
| Section vertical padding | 32-48px | 96px |
| Section horizontal padding | 16px | 120px |
| Gap між header і content секції | 24-32px | 40-48px |
| Card internal padding | 20-24px | 28-40px |
| Gap між елементами в card | 8-16px | 12-16px |
| Eyebrow → title gap | 8-12px | 12px |
| Title → CTA gap | 24px | 32px |

### 1.5 Border-radius — пропонована шкала

```css
--radius-sm:    4px;    /* mobile cards, image plates, small CTA */
--radius-md:    8px;    /* labels, pins */
--radius-lg:    12px;   /* image wrap, dark elevated cards */
--radius-xl:    20px;   /* desktop cards (specialist, testimonial) */
--radius-full:  999px;  /* pills, buttons, badges */
--radius-circle: 50%;   /* avatars, nav arrows, float btn */
```

**Правило:** mobile cards мають `4px` (майже square, мінімалістично), desktop отримує `16-20px` (м'якший, преміальний). CTA-кнопки **завжди** `999px` (pill).

### 1.6 Shadows — пропонована шкала

В існуючому коді тіней майже немає (це навмисно — стиль flat-luxury). Використовуй стримано:

```css
--shadow-elevated: 0 4px 24px color-mix(in srgb, var(--ink) 40%, transparent);
                   /* sticky navbar при скролі */
--shadow-float:    0 4px 16px color-mix(in srgb, var(--ink) 20%, transparent);
                   /* floating action button */
```

**Не використовуй тіні для:** cards, sections, badges, modals (для модалок — backdrop blur замість тіні).

### 1.7 Motion — durations & easing

```css
--ease-default: ease;
--ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);  /* пропоную для нових анімацій */

--motion-fast:    0.2s;  /* hover color/opacity, micro-interactions */
--motion-default: 0.3s;  /* accordion, max-height, opacity reveal */
--motion-slide:   0.35s; /* mobile drawer transform */
```

**Правила:**
- Hover на link / button: `color 0.2s` або `opacity 0.2s`.
- Accordion (FAQ-style): `max-height 0.3s ease, padding 0.3s ease`.
- Drawer / overlay: `transform 0.35s ease`.
- Завжди поважай `prefers-reduced-motion` (зараз не покрито — додати при першому новому компоненті з анімацією).

---

## 2. Grid та брейкпоінти

### 2.1 Брейкпоінт

**Єдиний:** `@media (min-width: 1200px)`. Все, що нижче — mobile-first base. Все, що вище — desktop override.

**Заборонено:**
- Tablet-specific брейкпоінти (768px тощо).
- Парні HTML-блоки `.mobile-only` / `.desktop-only` — одна DOM, CSS переключає layout.

### 2.2 Контейнер

| Контекст | Max-width | Horizontal padding |
|---|---|---|
| Mobile section | 100% | 16px |
| Desktop section | до 1200px (контент) | 120px |
| Desktop wide section (footer, stats) | full-width (контент 1200px) | 120px |

Стандартний шаблон секції:

```css
.section {
  padding: 48px 16px;          /* mobile */
}
@media (min-width: 1200px) {
  .section { padding: 96px 120px; }
}
```

### 2.3 Mobile sub-breakpoint policy

Якщо контент ламається на 320-360px — фікси через `min()`, `clamp()`, `flex-wrap`, **не** через додатковий media-query.

---

## 3. Компоненти

### 3.1 Структура секції (canonical pattern)

Кожна секція має передбачуваний skeleton:

```html
<section class="block">
  <header class="block__header">
    <span class="block__eyebrow">CATEGORY</span>
    <h2 class="block__title">Заголовок italic</h2>
    <p class="block__subtitle">Опційний підзаголовок (часто desktop-only).</p>
  </header>
  <div class="block__content"><!-- grid / carousel / list --></div>
  <a class="block__cta">…</a>           <!-- опційно -->
</section>
```

**Eyebrow** — завжди uppercase, champagne, малий розмір (10-11px), letter-spacing 0.12-0.15em. Це "пасок" над заголовком.
**Title** — Cormorant italic. На mobile центрований, на desktop частіше теж центрований (але див. винятки: hero, map-info — текст по лівому краю).
**Subtitle** — body 14-16px, color stone (на світлому) / sand (на темному), max-width 520px, центрований.

### 3.2 Кнопки

| Variant | Background | Color | Border | Use case |
|---|---|---|---|---|
| `primary-gold` | `champagne` (mobile) / `gradient-gold` (desktop) | `ink` | none | Головний CTA hero, services, map |
| `primary-dark` | `charcoal` / `ink` | `cream` / `ivory` | none | Specialist card, portfolio btn |
| `outline-gold` | transparent | `champagne` | `1px champagne` | Service card desktop, secondary actions |
| `outline-dark` | `gold-wash` | `ink` | `1.5px ink` | Portfolio "see all" desktop |
| `pill` | див. `.pill--active/inactive` | — | — | Фільтри (категорії) |

**Загальні правила:**
- Радіус: `999px` (завжди) для primary/secondary CTA. Виняток — map mobile CTA (`4px`, бо square aesthetic секції контактів).
- Padding: mobile `14-18px` vertical full-width; desktop `12-16px` vertical `24-40px` horizontal.
- Font: `body` 11-13px, weight 500-600, letter-spacing 0.06-0.1em, **БЕЗ** `text-transform: uppercase` через CSS — uppercase набирається **вручну в HTML** або через letter-spacing імітує "small caps".
- Hover: `opacity 0.85-0.9` для золотих, `background` swap для outline.

**Touch target:** будь-яка інтерактивна кнопка / link на mobile ≥ 44×44px.

### 3.3 Pills (категорії / фільтри)

Описані у `components.css` як шарений компонент. Mobile-first design: horizontal scroll коли pills не вміщуються в ряд.

**Правила:**
- Не використовуй pills для primary navigation — лише як фільтр контенту.
- Mobile: `flex-wrap: nowrap` + horizontal scroll (без scrollbar).
- Desktop: `flex-wrap: wrap`, центрування.
- Перший pill — за замовчуванням `--active`.

### 3.4 Cards

**Загальні принципи:**
- Mobile: `border-radius: 4px`, padding 20-24px.
- Desktop: `border-radius: 12-20px`, padding 28-40px.
- Vertical layout на mobile, часто horizontal layout на desktop (наприклад, `service-card` стає row).
- Image-карти: aspect-ratio задається явно (`4/3`, `1/1`, `3/4`), ніколи фіксована висота для image-контейнера.

**Card sub-elements (canonical):**
- `__image` / `__avatar` — медіа.
- `__name` — display 500, ink/cream.
- `__role` / `__desc` — body 13px, stone/sand.
- `__meta` — divider + flex space-between (ціна+тривалість, ім'я+роль).
- `__cta` — button за правилами 3.2.

**Service card:** dark variant (`graphite`), для розгорнутих карток із картинкою + опис + ціна + кнопка.
**Specialist card:** light variant (`ivory`/`cream`), avatar-centric, мінімум тексту.
**Testimonial card:** light з border `1px pearl`, цитата domінантна.

### 3.5 Carousel

Pattern уніфікований:

```
[ ←arrow ]  [ ──── track (overflow-x: auto) ──── ]  [ arrow→ ]
                          [● ○ ○ ○]      <- dots
```

**Mobile:**
- Стрілки приховані або компактні під track-ом (`.works-slider__nav`).
- Track scroll-snap horizontal, `scrollbar-width: none`.
- Dots видимі.

**Desktop:**
- Стрілки `.nav-arrow--outlined` зліва/справа від track-у.
- Track horizontal scroll, gap 20-32px.
- Dots часто приховані (якщо є стрілки).

**Завжди:** `-webkit-overflow-scrolling: touch`, ховаємо scrollbar.

### 3.6 Форми (input / textarea / select)

Зараз єдиний живий приклад — newsletter у footer. Канонічний підхід:

```css
.form__input {
  background: transparent;
  border: 1px solid var(--graphite); /* на темному */
                                     /* або var(--sand) на світлому */
  border-radius: 999px;              /* для inline; 8px для multi-line */
  padding: 12px 20px;
  font-family: var(--font-body);
  font-size: 14px;
  color: inherit;
  outline: none;
}
.form__input:focus-visible {
  outline: 2px solid var(--champagne);
  outline-offset: 2px;
}
.form__input::placeholder {
  color: color-mix(in srgb, currentColor 50%, transparent);
}
```

**Для booking-форми (майбутньої сторінки):**
- Лейбл **над** input (не floating). Body 12px, weight 500, color stone.
- Error: червоний-теплий (запропонувати `--rose: #B85450` як новий токен при першій потребі), 12px під input.
- Date / time picker — нативний на mobile, кастомний на desktop за необхідності.
- Submit-кнопка — `primary-gold`, full-width на mobile.

### 3.7 Accordion (FAQ)

Pattern з `faq-item`:
- Кнопка-question з `aria-expanded` toggle.
- Іконка chevron, `transform: rotate(180deg)` коли open.
- Відповідь: `max-height: 0 → 300px` + `padding 0 → 20px` через `transition 0.3s`.
- Розділювач: `border-bottom: 1px solid var(--sand)`.

Використовуй FAQ-pattern для будь-яких expandable секцій (поліcies, опис послуги, before/after).

### 3.8 Badges / labels

| Тип | Pattern |
|---|---|
| Service badge ("ПОПУЛЯРНЕ") | абсолют у card, `champagne` bg, `charcoal` text, 11px, letter-spacing 0.1em, padding 4px 10px, square (mobile) / pill (desktop) |
| Pin label (на мапі) | `ink` bg, `champagne` text, 11px, padding 6px 12px, radius 8px |

Не зловживай — макс. 1 badge на card.

### 3.9 Floating action button

`float-btn` — фіксований CTA для бронювання/чату:
- Mobile: коло 56px з іконкою.
- Desktop: pill з іконкою + текстом, padding 14px 24px.
- Видимий після певного скролу (`.float-btn--visible`, керується через JS).
- Shadow `--shadow-float`.
- z-index 100 (нижче за navbar drawer 200).

### 3.10 Modals — ще не існують

Канонічна заготовка для майбутніх модалок (booking confirmation, photo lightbox):

```css
.modal-backdrop {
  position: fixed; inset: 0;
  background: color-mix(in srgb, var(--ink) 60%, transparent);
  backdrop-filter: blur(12px);
  z-index: 300;  /* > navbar drawer */
}
.modal {
  background: var(--ivory);
  border-radius: 20px;     /* radius-xl */
  padding: 32px;           /* mobile */
  max-width: 480px;
}
@media (min-width: 1200px) {
  .modal { padding: 40px; max-width: 560px; }
}
```

Закриття: ESC, click on backdrop, X-button (top-right, 44×44 touch target).

---

## 4. Стани (states)

### 4.1 Hover

| Елемент | Hover behavior |
|---|---|
| Gold button | `opacity: 0.85-0.9` |
| Dark button | `background swap` або `opacity` |
| Outline button | swap background / border color |
| Link на темному | `color: champagne` |
| Link на світлому | `color: champagne` |
| Inactive pill | `border + color: champagne` |
| Card | **БЕЗ default hover-lift** (свідоме рішення — flat aesthetic) |
| Social icon | `color: champagne` |

### 4.2 Focus

**Глобально:** `:focus-visible { outline: 2px solid var(--champagne); outline-offset: 3px; }` (визначено у `base.css`).

**Не видаляй focus** на кастомних компонентах. Якщо outline псує дизайн — використовуй `box-shadow: 0 0 0 2px var(--champagne)` як альтернативу.

### 4.3 Active

Pill: `--active` має `champagne` bg + `ink` text + weight 500.
Dot: `--active` має `champagne` bg.
Nav-link: `--active` має champagne underline (на desktop).

### 4.4 Disabled

Поки не використовується. Канонічно:
```css
[disabled], .is-disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
```

### 4.5 Loading

Не визначено. Для майбутньої форми бронювання запропонуй inline-spinner у CTA + замінити label на "ВІДПРАВЛЯЄМО…".

---

## 5. Iконки

- Inline SVG, `width/height: 16-24px`, `currentColor` для fill/stroke.
- Розмір залежить від контексту: inline у тексті — 16px, у CTA — 18px, у carousel arrow — 20px, у floating btn — 24px.
- Stroke-style (line icons), не filled. Виключення — соцмережі (фірмові гліфи).
- Не використовуй emoji в UI. Замість 🔥/✨ — SVG-іконка з champagne color.

---

## 6. Доступність (a11y)

### 6.1 Контраст

| Текст / фон | Перевірити |
|---|---|
| `ivory` на `ink` | OK (WCAG AAA) |
| `cream` на `charcoal` | OK |
| `sand` на `charcoal` | OK |
| `stone` на `ivory` | Body 14+ OK; small text — обережно |
| `champagne` на `ink` | Body 14+ OK; для CTA bg `champagne`+`ink` text — OK |
| `champagne` text на `ivory` | **Borderline** — не використовуй для довгих body, лише eyebrow/links |

При нових кольорах — перевіряй у contrast checker, ціль WCAG AA (4.5:1 для body, 3:1 для large 18+px).

### 6.2 Touch targets

- Min 44×44px для кнопок, link-ів, дотс-навігації на mobile.
- `nav-arrow` mobile 40px → **збільшити до 44px** при наступному оновленні (поточний борг).

### 6.3 Semantic HTML

- `<section>` для кожного блоку.
- `<h1>` тільки в hero, `<h2>` у section-title, `<h3>` для card-name.
- Carousel-track має мати `role="region"` + `aria-label`.
- Кожна кнопка-icon має `aria-label`.
- `<button>` для дій, `<a>` для навігації — не міняй.

### 6.4 Keyboard

- Focus order = visual order (не ламай tabindex без причини).
- Закриття мобільного drawer-у — ESC.
- Carousel-стрілки — Tab-доступні, активуються Enter/Space.

### 6.5 Motion

`@media (prefers-reduced-motion: reduce)` — додай у `base.css` при першому новому анімованому компоненті:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Voice & Tone (UX-копірайтинг)

**Голос бренду:** теплий, неквапливий, експертний. Без вигуків, без CAPS LOCK, без хайпу.

**Загальні правила:**
- Eyebrow — англійська або українська uppercase (`OUR SERVICES`, `ВІДГУКИ`). Узгоджуй у межах сторінки — або всі англ, або всі укр.
- Заголовки — українська, italic, без крапки.
- CTA — дієслово в наказовому способі, до 3 слів: `Записатись`, `Дізнатись більше`, `Подивитись усі`.
- Subtitle / body — повні речення, з крапкою.
- Цифри — арабські (`5+ років`, `200+ клієнтів`).
- Ціна — формат `1 200 ₴` (нерозривний пробіл, символ після числа).
- Час послуги — `90 хв`, `1 год 30 хв` (не "1.5 год").

**Що НЕ робимо:**
- "Найкращий", "номер 1", "елітний" — порожні слова.
- "Натисни тут" — CTA має описувати дію.
- Заклики ALL CAPS у body — лише через letter-spacing і малий розмір.

---

## 8. Do's & Don'ts (швидкий чек-ліст для нової сторінки)

### Do
- Починай з mobile (390px) і додавай `@media (min-width: 1200px)` лише для override.
- Використовуй canonical section skeleton (eyebrow → title → subtitle → content → CTA).
- Витягуй усі кольори/шрифти з `variables.css`.
- Виноси спільне у `components/` або `css/components.css`.
- Перевіряй кожен компонент у Playwright на 390px і 1440px (`/verify`).
- Запитуй себе: "Чи виглядає це як та сама дизайн-мова, що landing?" — italic title? champagne accent? gold-wash/charcoal surface?
- Touch target ≥ 44px на mobile.
- Один DOM, CSS вирішує layout.

### Don't
- Не додавай **жодних** проміжних брейкпоінтів між base і 1200px.
- Не дублюй DOM під mobile/desktop (`.mobile-only` / `.desktop-only` блоки).
- Не використовуй системний шрифт або інший serif — лише `Cormorant Garamond` + `Outfit`.
- Не використовуй важкі тіні — бренд flat-luxury.
- Не використовуй фотостоки з людьми у "корпоративних" ракурсах — стиль editorial / lifestyle.
- Не використовуй pure black (`#000`) — завжди `ink` (`#1E1B18`).
- Не використовуй чистий white (`#FFF`) як фон — `ivory` (`#FAF7F2`).
- Не пиши коментарі у CSS типу `/* mobile */ /* desktop */` — структура файлу вже самоочевидна (mobile-first до `@media`, desktop у `@media`).
- Не зловживай `!important` (зараз 1 виправдане — `.navbar__mobile-nav { display: none !important }` для desktop).
- Не вводь нові токени локально в компоненті — додавай у `variables.css` з обґрунтуванням.

---

## 9. Чек-ліст перед мерджем нової сторінки

1. [ ] Усі кольори і шрифти через токени `variables.css`.
2. [ ] Mobile (390px) і desktop (1440px) скріни через Playwright.
3. [ ] Touch targets ≥ 44px на mobile.
4. [ ] `:focus-visible` працює на всіх інтерактивах.
5. [ ] Контраст тексту перевірено (WCAG AA).
6. [ ] Жодного дублювання DOM під breakpoint.
7. [ ] Жодного брейкпоінта окрім `min-width: 1200px`.
8. [ ] Semantic tags (`section`, `h1-h3`, `button` vs `a`).
9. [ ] Усі іконки мають `aria-label` або контекстний текст.
10. [ ] Voice & tone дотриманий (CTA = дієслово, цифри формат, без CAPS у body).
11. [ ] Шрифти Outfit/Cormorant Garamond завантажені (`base.css` `@import`).
12. [ ] Перевірено на `prefers-reduced-motion` (якщо є анімації).

---

## 10. Що додати у `variables.css` (TODO)

Запропоновані доповнення, які зараз хардкоджені в компонентах:

```css
:root {
  /* … існуючі токени … */

  /* Spacing scale */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 20px;  --space-6: 24px;  --space-7: 32px;  --space-8: 40px;
  --space-9: 48px;  --space-10: 64px; --space-11: 80px; --space-12: 96px;
  --space-13: 120px;

  /* Radii */
  --radius-sm: 4px;   --radius-md: 8px;   --radius-lg: 12px;
  --radius-xl: 20px;  --radius-full: 999px;

  /* Shadows */
  --shadow-elevated: 0 4px 24px color-mix(in srgb, var(--ink) 40%, transparent);
  --shadow-float:    0 4px 16px color-mix(in srgb, var(--ink) 20%, transparent);

  /* Motion */
  --motion-fast: 0.2s;
  --motion-default: 0.3s;
  --motion-slide: 0.35s;
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

  /* Breakpoint (для довідки — у медіа-правилах усе ще писати число) */
  --bp-desktop: 1200px;
}
```

Додавати поступово, при першій ж новій сторінці — і одразу мігрувати landing на ці токени, щоб уникнути двох систем.

---

**Версія документа:** 1.0 (2026-05-16).
**Джерела:** `index.html`, `css/variables.css`, `css/base.css`, `css/components.css`, всі 12 компонентів у `components/`, `docs/review/ux-ui_review.md`.
