# Works Slider — Mobile

Файл: `components/works-slider/works-slider.css`, `index.html:100-218`.

## M-WORKS-01. Об'єднати DOM-дублі у єдиний track
- Прибрати `.works-slider__slider-row.desktop-only` і `.works-slider__mobile-cards.mobile-only`.
- Залишити один `<div class="works-slider__track">` зі списком `<div class="works-card">`.

## M-WORKS-02. Pills горизонтальний скрол в одну лінію
- `.works-slider__pills { display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding: 0 16px 16px; scrollbar-width: none; }`.
- `.works-slider__pills::-webkit-scrollbar { display: none; }`.
- Видалити DOM-розбиття на `.works-slider__pills-row`.

## M-WORKS-03. Track вертикальний стек
- `.works-slider__track { display: flex; flex-direction: column; gap: 24px; padding: 0 16px; }`.

## M-WORKS-04. Картки aspect-ratio 4/3
- `.works-card__image-wrap { aspect-ratio: 4/3; min-height: 240px; border-radius: 12px; overflow: hidden; position: relative; }`.

## M-WORKS-05. Caption центрований
- `.works-card__caption, .works-slider__caption { text-align: center; font-size: 13px; color: var(--stone); margin-top: 12px; }`.

## M-WORKS-06. Стрілки навігації центровані під track
- `.works-slider__nav { display: flex; justify-content: center; gap: 12px; margin-top: 24px; }`.
- `.nav-arrow { width: 40px; height: 40px; background: var(--charcoal); border-radius: 50%; display: flex; align-items: center; justify-content: center; }`.

## M-WORKS-07. Сховати десктоп `.nav-arrow--outlined` базово
- `.works-slider__slider-row .nav-arrow--outlined { display: none; }` (або після рефактору M-WORKS-01 цей блок зникне).
