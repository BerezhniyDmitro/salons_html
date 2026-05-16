# Testimonials — Mobile

Файл: `components/testimonials/testimonials.css`, `index.html:468-556`.

## M-TEST-01. Прибрати дубль `.testimonial-card.mobile-only`
- `index.html:534-549` — використати ті самі картки з `.reviews__grid`.

## M-TEST-02. `.reviews__grid` — один контейнер, базово показує одну картку
- `.reviews__grid { display: block; padding: 0 16px; }`.
- Решта карток ховаються або через `display: none` (для статики), або через JS-карусель з opacity/transform.

## M-TEST-03. Сховати `.reviews__rating-row` на мобілці
- `.reviews__rating-row { display: none; }` базово.

## M-TEST-04. `.testimonial-card` — фон, padding
- `.testimonial-card { background: var(--cream); padding: 24px; border-radius: 4px; display: flex; flex-direction: column; gap: 16px; }`.

## M-TEST-05. Inline background-image або ініціали для всіх mobile avatars
- Перевірити що `index.html:492,508,524` — мають `.testimonial-card__avatar--initials` або фото. Без цього аватарка буде порожньою.

## M-TEST-06. Quote типографіка
- `.testimonial-card__quote { font-family: var(--font-display); font-size: 18px; line-height: 1.5; font-style: italic; color: var(--ink); }`.

## M-TEST-07. Client row layout
- `.testimonial-card__client { display: flex; align-items: center; gap: 12px; }`.
- `.testimonial-card__avatar { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; }`.

## M-TEST-08. Stars champagne
- `.testimonial-card__star { color: var(--champagne); font-size: 14px; }`.

## M-TEST-09. Dots центровані під каруселлю
- `.testimonials__dots { display: flex; justify-content: center; gap: 8px; margin-top: 24px; }`.
- `.testimonials__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--pearl); border: none; }`.
- `.testimonials__dot--active { background: var(--champagne); }`.

## M-TEST-10. Header центрований
- `.testimonials__header { text-align: center; padding: 48px 16px 32px; }`.
