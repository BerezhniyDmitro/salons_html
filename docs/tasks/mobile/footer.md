# Footer — Mobile

Файл: `components/footer/footer.css`, `index.html:603-679`.

## M-FOOT-01. Базовий layout — вертикальний стек
- `.footer { background: var(--charcoal); color: var(--cream); padding: 48px 16px 24px; display: flex; flex-direction: column; gap: 32px; }`.

## M-FOOT-02. Прибрати DOM-дублі `.footer__nav.mobile-only` і `.footer__contact.mobile-only`
- `index.html:649-659` — використати ту саму структуру `.footer__main` для обох розкладок. Дублі видалити.

## M-FOOT-03. `.footer__main` стек на мобілці
- `.footer__main { display: flex; flex-direction: column; gap: 32px; }`.

## M-FOOT-04. Brand центрований
- `.footer__brand { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; }`.
- `.footer__logo { font-family: var(--font-display); font-size: 24px; letter-spacing: 0.15em; }`.

## M-FOOT-05. Tagline під лого
- `.footer__tagline { font-size: 13px; line-height: 1.5; color: rgba(243,237,228,0.7); max-width: 280px; }`.

## M-FOOT-06. Socials центровані
- `.footer__socials { display: flex; justify-content: center; gap: 16px; }`.
- `.footer__social-link svg { width: 18px; height: 18px; color: var(--cream); }`.

## M-FOOT-07. Колонки footer (на мобілці) — стек з заголовком
- `.footer__col { display: flex; flex-direction: column; gap: 8px; text-align: center; }`.
- `.footer__col-title { font-size: 11px; letter-spacing: 0.15em; color: var(--champagne); margin-bottom: 8px; }`.

## M-FOOT-08. Сховати newsletter базово (або переверстати під мобілку)
- `.footer__newsletter { display: none; }` базово (показ — через медіа на десктопі).
- АБО: `.footer__newsletter { display: flex; flex-direction: column; gap: 12px; text-align: center; }` з `.footer__newsletter-form { flex-direction: column; gap: 8px; }`.

## M-FOOT-09. `.footer__bottom` стек центрований
- `.footer__bottom { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }`.

## M-FOOT-10. Divider тонка champagne лінія
- `.footer__divider { border: none; height: 1px; background: rgba(200,169,110,0.2); margin: 16px 0; }`.

## M-FOOT-11. Legal links центровані
- `.footer__legal { display: flex; gap: 16px; }`.
- `.footer__legal-link { font-size: 12px; color: rgba(243,237,228,0.5); }`.
