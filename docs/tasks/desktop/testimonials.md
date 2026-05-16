# Testimonials — Desktop

Файл: `components/testimonials/testimonials.css`, `index.html:468-556`.

## D-TEST-01. Reviews grid — 3 колонки
- `.reviews__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }` у десктоп-медіа.

## D-TEST-02. Показати `.reviews__rating-row`
- `display: flex; justify-content: center; gap: 12px; margin-bottom: 48px;`.

## D-TEST-03. Прибрати дубль `.testimonial-card.mobile-only`
- `index.html:534-549` — після рефактору карусель/одна-картка робиться на тих самих 3 картках з desktop варіанту.

## D-TEST-04. Збільшити padding у `.testimonial-card`
- `padding: 40px 32px;` на десктопі.

## D-TEST-05. Сховати dots на десктопі (показ — лише grid)
- `.testimonials__dots { display: none; }` у десктоп-медіа.
