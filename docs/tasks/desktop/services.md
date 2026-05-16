# Services — Desktop

Файл: `components/services/services.css`, `index.html:324-369`.

## D-SERV-01. Service-card горизонтальна компоновка
- `.service-card { flex-direction: row; }` у десктоп-медіа.
- Фото 45% ліворуч, контент 55% праворуч.

## D-SERV-02. Services grid — одна колонка з вертикальним стеком
- `.services__grid { display: flex; flex-direction: column; gap: 32px; max-width: 1100px; margin: 0 auto; }`.

## D-SERV-03. `.service-card__image` — фіксована ширина 45%, висота auto
- `.service-card__image { width: 45%; height: auto; min-height: 280px; }`.

## D-SERV-04. Badge "ПОПУЛЯРНЕ" у правому верхньому куті
- `.service-card { position: relative; }`, `.service-card__badge { position: absolute; top: 16px; right: 16px; }`.

## D-SERV-05. CTA filled dark
- `.service-card__cta { background: var(--charcoal); color: var(--cream); width: auto; padding: 12px 28px; }`.

## D-SERV-06. `.services__price-link` центрований
- `display: block; text-align: center; margin-top: 32px;`.
