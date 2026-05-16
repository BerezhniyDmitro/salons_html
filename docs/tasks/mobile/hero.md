# Hero — Mobile

Файл: `components/hero/hero.css`, `index.html:74-95`.

## M-HERO-01. Hero займає 70vh, фото — фон
- `.hero { min-height: 70vh; background-size: cover; background-position: center; display: flex; align-items: flex-end; padding: 24px 16px; }`.

## M-HERO-02. Hero-card повної ширини
- `.hero__card { background: var(--cream); padding: 24px; border-radius: 4px; width: 100%; }`.

## M-HERO-03. Mobile-first типографіка
- `.hero__title { font-size: 28px; line-height: 1.2; font-family: var(--font-display); font-weight: 400; }`.
- `.hero__subtitle { font-size: 14px; line-height: 1.5; margin-top: 16px; }`.
- `.hero__eyebrow { font-size: 11px; letter-spacing: 0.15em; }`.

## M-HERO-04. CTA повної ширини
- `.hero__cta--primary { width: 100%; padding: 16px; background: var(--charcoal); color: var(--cream); font-size: 13px; letter-spacing: 0.1em; }`.

## M-HERO-05. Сховати scroll-indicator базово
- `.hero__scroll-indicator { display: none; }`.
- Видалити утилітарний клас `.desktop-only` з `index.html:90`.

## M-HERO-06. Divider як тонка champagne лінія
- `.hero__divider { width: 48px; height: 1px; background: var(--champagne); margin: 16px 0; }`.
