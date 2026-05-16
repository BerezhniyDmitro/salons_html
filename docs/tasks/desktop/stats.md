# Stats — Desktop

Файл: `components/stats/stats.css`.

## D-STATS-01. Сітка 4 колонки в один рядок
- `.stats { grid-template-columns: repeat(4, 1fr); padding: 80px 64px; }` у десктоп-медіа.

## D-STATS-02. Вертикальні розділювачі між cells
- `.stat-cell:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.12); }`.

## D-STATS-03. Збільшити `.stat-cell__number` до 64px
- `font-size: 64px; font-weight: 300; font-family: var(--font-display);`.

## D-STATS-04. Збільшити vertical spacing між number/label/subtitle
- `.stat-cell { gap: 12px; }`.
