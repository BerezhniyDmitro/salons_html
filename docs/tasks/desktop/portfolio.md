# Portfolio — Desktop

Файл: `components/portfolio/portfolio.css`, `index.html:374-425`.

## D-PORT-01. Grid masonry 3 колонки
- `.portfolio__grid { grid-template-columns: 1fr 1fr 1fr; gap: 16px; }` у десктоп-медіа.
- Використати `grid-template-areas` або grid-row span для masonry-ефекту (1 large + 2 tall + 3 short).

## D-PORT-02. Прибрати DOM-розбиття на `.portfolio__col`
- `index.html:391-410` — masonry робиться через CSS Grid, окремі колонки не потрібні.

## D-PORT-03. Прибрати дубль `.portfolio__grid.mobile-only`
- `index.html:412-422` — після об'єднання у єдиний grid (mobile/portfolio.md → M-PORT-02).

## D-PORT-04. Pills у один рядок
- `.portfolio__pills { flex-wrap: nowrap; justify-content: center; gap: 12px; overflow: visible; }`.

## D-PORT-05. Заголовок секції центрований
- `.portfolio__header { text-align: center; max-width: 600px; margin: 0 auto; }`.

## D-PORT-06. Кнопка outlined dark, центрована
- `.portfolio__btn { background: transparent; border: 1px solid var(--charcoal); width: auto; padding: 14px 32px; display: block; margin: 32px auto 0; }`.
