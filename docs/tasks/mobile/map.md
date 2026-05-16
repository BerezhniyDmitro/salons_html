# Map — Mobile

Файл: `components/map/map.css`, `index.html:561-598`.

## M-MAP-01. Базовий layout — вертикальний стек
- `.map-section { display: flex; flex-direction: column; gap: 24px; padding: 48px 16px; background: var(--charcoal); color: var(--cream); }`.

## M-MAP-02. Прибрати дубль `.map-section__image.mobile-only`
- `index.html:597` — один контейнер мапи з обгорткою `.map-section__map-wrapper`. Видалити `.desktop-only` з нього.

## M-MAP-03. Map image — повна ширина, висота 240px
- `.map-section__image { background-image: url('images/<map>.png'); background-size: cover; background-position: center; height: 240px; border-radius: 4px; width: 100%; }`.
- Файл з мапою/фасадом має існувати в `images/`.

## M-MAP-04. Header типографіка
- `.map-section__title { font-family: var(--font-display); font-size: 28px; line-height: 1.2; font-weight: 400; }`.
- `.map-section__eyebrow { font-size: 11px; letter-spacing: 0.15em; color: var(--champagne); }`.

## M-MAP-05. Details rows — flex з іконками
- `.map-section__details { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }`.
- `.map-section__detail-row { display: flex; align-items: flex-start; gap: 12px; }`.
- `.map-section__detail-icon { width: 18px; height: 18px; flex-shrink: 0; color: var(--champagne); }`.

## M-MAP-06. Divider champagne
- `.map-section__divider { width: 48px; height: 1px; background: var(--champagne); border: none; margin: 16px 0; }`.

## M-MAP-07. CTA "ЗАПИСАТИСЬ ОНЛАЙН" — повна ширина filled
- `.map-section__cta { display: block; width: 100%; padding: 16px; background: var(--champagne); color: var(--charcoal); text-align: center; border-radius: 4px; font-size: 12px; letter-spacing: 0.1em; margin-top: 24px; }`.

## M-MAP-08. Route link з іконкою
- `.map-section__route { display: inline-flex; align-items: center; gap: 6px; color: var(--champagne); font-size: 12px; letter-spacing: 0.1em; margin-top: 16px; }`.

## M-MAP-09. Pin "LUMINA" базово приховано або спрощено
- На мобілці pin може бути менш помітним або відсутнім. `.map-section__pin { display: none; }` базово, показ через `@media (min-width: 1200px)`.
