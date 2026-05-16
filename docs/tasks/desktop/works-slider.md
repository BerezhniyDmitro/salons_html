# Works Slider — Desktop

Файл: `components/works-slider/works-slider.css`, `index.html:100-218`.

## D-WORKS-01. Track карток горизонтальний
- `.works-slider__track { flex-direction: row; gap: 32px; }` у десктоп-медіа.

## D-WORKS-02. Картки круглі
- `.works-card__image-wrap { border-radius: 50%; aspect-ratio: 1/1; max-width: 240px; }`.

## D-WORKS-03. Pills як текст-фільтр з розділювачами
- `.works-slider__pills { background: transparent; gap: 24px; overflow: visible; }`.
- Кожна pill стає текстовою кнопкою, активна — підкреслена champagne.

## D-WORKS-04. Стрілки навігації по бокам каруселі
- `.nav-arrow--outlined { width: 40px; height: 40px; border: 1px solid var(--champagne); border-radius: 50%; }`.
- Розташування ліворуч/праворуч від track.

## D-WORKS-05. SVG-handle у `.works-card__handle`
- `index.html:122,133,144,155` — додати той самий 6-крапковий SVG, що і в `.comparison-card__handle` (рядки 187-190).

## D-WORKS-06. Caption центрований під круглою карткою
- `.works-card__caption { text-align: center; margin-top: 16px; }`.
