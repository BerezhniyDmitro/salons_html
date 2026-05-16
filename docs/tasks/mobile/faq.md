# FAQ — Mobile

Файл: `components/faq/faq.css`, `index.html:430-463`.

## M-FAQ-01. Базовий фон і padding
- `.faq { background: var(--gold-wash); padding: 48px 16px; }`.

## M-FAQ-02. Header центрований
- `.faq__header { text-align: center; margin-bottom: 32px; }`.

## M-FAQ-03. Question — flex з chevron справа
- `.faq-item__question { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 20px 0; font-size: 15px; text-align: left; background: transparent; }`.

## M-FAQ-04. Item border-bottom
- `.faq-item { border-bottom: 1px solid var(--sand); }`.

## M-FAQ-05. Answer прихований базово
- `.faq-item__answer { display: none; padding: 0 0 20px; color: var(--stone); font-size: 14px; line-height: 1.6; }`.
- При `aria-expanded="true"` на `.faq-item__question` — показати answer.

## M-FAQ-06. Toggle логіка у `js/main.js`
- Click на `.faq-item__question` → переключити `aria-expanded` та показати/сховати наступний `.faq-item__answer`.

## M-FAQ-07. Chevron transition
- `.faq-item__icon { width: 16px; height: 16px; transition: transform .3s ease; }`.
- При відкритому стані: `transform: rotate(180deg)`.
