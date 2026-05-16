# Specialists — Desktop

Файл: `components/specialists/specialists.css`, `index.html:249-319`.

## D-SPEC-01. Track горизонтальний — 3 картки в ряд
- `.specialists__track { flex-direction: row; gap: 32px; }` у десктоп-медіа.

## D-SPEC-02. Показати carousel arrows і dots
- `.carousel-arrow { display: flex; }`, `.specialists__dots { display: flex; }`.

## D-SPEC-03. CTA filled dark pill
- `.specialist-card__btn { background: var(--charcoal); color: var(--cream); border-radius: 999px; padding: 12px 28px; border: none; }`.

## D-SPEC-04. Аватарка 140px
- `.specialist-card__avatar { width: 140px; height: 140px; }`.

## D-SPEC-05. Прибрати `.specialists__counter` з DOM
- `index.html:294` — видалити, у дизайні відсутній.

## D-SPEC-06. Прибрати дубль `.specialists__mobile-cards`
- `index.html:299-318` — після об'єднання у єдиний track (mobile/specialists.md → M-SPEC-01).

## D-SPEC-07. Кнопка "УСЯ КОМАНДА →" — outlined, центрована під каруселлю
- `.specialists__all-btn { display: block; margin: 32px auto 0; border: 1px solid var(--charcoal); padding: 12px 32px; background: transparent; }`.
