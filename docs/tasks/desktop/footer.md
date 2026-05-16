# Footer — Desktop

Файл: `components/footer/footer.css`, `index.html:603-679`.

## D-FOOT-01. `.footer__main` — 4 колонки
- `display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px;` у десктоп-медіа.

## D-FOOT-02. Прибрати дублі `.footer__nav.mobile-only` і `.footer__contact.mobile-only`
- `index.html:649-659` — використати ту саму колонкову структуру з footer__main, лише змінити розкладку медіа-запитом.

## D-FOOT-03. Newsletter — горизонтальний layout
- `.footer__newsletter { flex-direction: row; justify-content: space-between; align-items: center; }`.
- `.footer__newsletter-form { flex-direction: row; gap: 12px; }`.

## D-FOOT-04. Newsletter input — прозорий з нижнім border
- `.footer__newsletter-input { background: transparent; border: none; border-bottom: 1px solid var(--champagne); color: var(--cream); padding: 12px 0; }`.

## D-FOOT-05. `.footer__bottom` двоколонковий
- `display: flex; justify-content: space-between; align-items: center;`.

## D-FOOT-06. Колонкові посилання з підвищеним контрастом
- `.footer__col-link { color: rgba(243,237,228,0.7); }` базово, `:hover { color: var(--cream); }`.
