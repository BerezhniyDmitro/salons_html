# FAQ — Desktop

Файл: `components/faq/faq.css`, `index.html:430-463`.

## D-FAQ-01. Збільшити padding секції та обмежити ширину контенту
- `.faq { padding: 96px 64px; }`, `.faq-item` всередині контейнера з `max-width: 800px; margin: 0 auto;`.

## D-FAQ-02. Заголовок центрований
- `.faq__header { text-align: center; max-width: 600px; margin: 0 auto 48px; }`.

## D-FAQ-03. Question font-size більший
- `.faq-item__question { font-size: 18px; padding: 28px 0; }`.

## D-FAQ-04. Chevron з transition при відкритті
- `.faq-item__icon { transition: transform .3s; }`, `.faq-item[aria-expanded="true"] .faq-item__icon { transform: rotate(180deg); }`.
