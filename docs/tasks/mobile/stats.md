# Stats — Mobile

Файл: `components/stats/stats.css`.

## M-STATS-01. Сітка 2×2 на темному фоні
- `.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 48px 16px; background: var(--charcoal); color: var(--cream); }`.

## M-STATS-02. Текст по центру кожної комірки
- `.stat-cell { text-align: center; display: flex; flex-direction: column; gap: 8px; }`.

## M-STATS-03. Number mobile-first
- `.stat-cell__number { font-family: var(--font-display); font-size: 36px; font-weight: 300; color: var(--champagne); }`.

## M-STATS-04. Label і subtitle
- `.stat-cell__label { font-size: 11px; letter-spacing: 0.15em; color: var(--cream); }`.
- `.stat-cell__subtitle { font-size: 12px; color: rgba(243,237,228,0.6); }`.
