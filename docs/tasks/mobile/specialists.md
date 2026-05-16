# Specialists — Mobile

Файл: `components/specialists/specialists.css`, `index.html:249-319`.

## M-SPEC-01. Об'єднати DOM-дублі у єдиний track
- Прибрати `.specialists__mobile-cards.mobile-only` (`index.html:299-318`).
- Залишити один `.specialists__track` з 3 картками `.specialist-card`.

## M-SPEC-02. Track вертикальний стек
- `.specialists__track { display: flex; flex-direction: column; gap: 24px; padding: 0 16px; }`.

## M-SPEC-03. Inline background-image для аватарок
- `index.html` — для кожного `.specialist-card__avatar` додати `style="background-image: url('images/...')"` (поки немає JS-генерації).

## M-SPEC-04. Аватарка кругла 96px, центрована
- `.specialist-card__avatar { width: 96px; height: 96px; border-radius: 50%; background-size: cover; background-position: center; margin: 0 auto; }`.

## M-SPEC-05. Card layout
- `.specialist-card { text-align: center; padding: 24px; background: var(--cream); border-radius: 4px; display: flex; flex-direction: column; gap: 8px; align-items: center; }`.

## M-SPEC-06. CTA filled pill, повна ширина
- `.specialist-card__btn, .specialist-card__cta { display: block; width: 100%; padding: 12px 24px; background: var(--charcoal); color: var(--cream); border-radius: 999px; text-align: center; font-size: 12px; letter-spacing: 0.1em; margin-top: 12px; }`.

## M-SPEC-07. Сховати desktop-контролі базово
- `.carousel-arrow { display: none; }`, `.specialists__dots { display: none; }`, `.specialists__all-btn { display: none; }`, `.specialists__counter { display: none; }`.

## M-SPEC-08. Eyebrow та title центровані
- `.specialists__header { text-align: center; padding: 48px 16px 32px; }`.
