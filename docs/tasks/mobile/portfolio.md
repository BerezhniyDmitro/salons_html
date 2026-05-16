# Portfolio — Mobile

Файл: `components/portfolio/portfolio.css`, `index.html:374-425`.

## M-PORT-01. Прибрати DOM-розбиття `.portfolio__grid-row`
- `index.html:414,418` — окремі рядки не потрібні, CSS Grid сам розкладе.

## M-PORT-02. Об'єднати desktop masonry і mobile grid
- Прибрати `.portfolio__grid--masonry.desktop-only` (`index.html:391-410`) і `.portfolio__grid.mobile-only` (`index.html:412-422`).
- Один `.portfolio__grid` зі списком `.portfolio__item`. Розкладка — через CSS Grid (2×2 базово).

## M-PORT-03. Pills горизонтальний скрол
- `.portfolio__pills { display: flex; gap: 8px; overflow-x: auto; padding: 0 16px 16px; scrollbar-width: none; }`.
- Прибрати `.portfolio__pills-desktop` як окремий клас (`index.html:382-388`).

## M-PORT-04. Grid 2×2 з gap 8px
- `.portfolio__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 0 16px; }`.

## M-PORT-05. Items aspect-ratio 1/1
- `.portfolio__item { aspect-ratio: 1/1; background-size: cover; background-position: center; border-radius: 4px; }`.

## M-PORT-06. Header центрований
- `.portfolio__header { text-align: center; padding: 48px 16px 32px; }`.

## M-PORT-07. Кнопка повної ширини, filled dark
- `.portfolio__btn { display: block; width: calc(100% - 32px); margin: 24px 16px 0; padding: 14px; background: var(--charcoal); color: var(--cream); text-align: center; border-radius: 4px; font-size: 12px; letter-spacing: 0.1em; }`.
