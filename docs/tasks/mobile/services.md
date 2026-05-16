# Services — Mobile

Файл: `components/services/services.css`, `index.html:324-369`.

## M-SERV-01. Grid — одна колонка з вертикальним стеком
- `.services__grid { display: flex; flex-direction: column; gap: 24px; padding: 0 16px; }`.

## M-SERV-02. Service-card вертикальна (фото зверху)
- `.service-card { display: flex; flex-direction: column; background: var(--graphite); color: var(--cream); border-radius: 4px; overflow: hidden; position: relative; }`.

## M-SERV-03. Image висота 180px
- `.service-card__image { width: 100%; height: 180px; background-size: cover; background-position: center; }`.

## M-SERV-04. Body padding і spacing
- `.service-card__body { padding: 20px; display: flex; flex-direction: column; gap: 12px; }`.

## M-SERV-05. Badge "ПОПУЛЯРНЕ" у правому верхньому куті фото
- `.service-card__badge { position: absolute; top: 12px; right: 12px; background: var(--champagne); color: var(--charcoal); padding: 4px 10px; font-size: 11px; letter-spacing: 0.1em; }`.

## M-SERV-06. Meta-row з price і duration
- `.service-card__meta { display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid rgba(243,237,228,0.1); }`.

## M-SERV-07. CTA filled pill, повна ширина
- `.service-card__cta { width: 100%; padding: 14px; background: var(--champagne); color: var(--charcoal); text-align: center; border-radius: 999px; font-size: 12px; letter-spacing: 0.1em; }`.

## M-SERV-08. Секція з темним фоном
- `.services { background: var(--charcoal); padding: 64px 0; }`.

## M-SERV-09. `.services__price-link` центрований
- `text-align: center; display: block; margin-top: 32px; color: var(--champagne);`.
