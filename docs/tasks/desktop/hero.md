# Hero — Desktop

Файл: `components/hero/hero.css`, `index.html:74-95`.

## D-HERO-01. Hero-card як центрована кремова панель
- `.hero__card { background: var(--cream); padding: 56px 72px; max-width: 640px; margin: 0 auto; }` у десктоп-медіа.

## D-HERO-02. Видалити secondary CTA "ПЕРЕГЛЯНУТИ ПОСЛУГИ"
- `index.html:86` — прибрати `<button class="hero__cta hero__cta--secondary">`. У дизайні відсутня.

## D-HERO-03. Видалити блок `.hero__rating` з hero
- `index.html:80-83` — у дизайні рейтинг у hero не показано.

## D-HERO-04. Показати scroll-indicator через медіа
- `.hero__scroll-indicator { display: block; position: absolute; bottom: 32px; left: 50%; }` у десктоп-медіа.
- Видалити утилітарний клас `.desktop-only` з `index.html:90`.

## D-HERO-05. Збільшити hero до 100vh на десктопі
- `.hero { min-height: 100vh; }` у десктоп-медіа.
