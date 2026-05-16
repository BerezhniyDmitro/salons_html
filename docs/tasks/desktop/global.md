# Global — Desktop / Cleanup

## D-GLOB-01. Видалити утилітарні класи `.desktop-only` / `.mobile-only`
- `css/base.css:49-54` — прибрати після того, як усі компоненти переведені на mobile-first з component-level media queries.
- Перевірити `index.html` на наявність цих класів — має бути 0.

## D-GLOB-02. Додати favicon
- `index.html:11` — `<link rel="icon" type="image/png" href="images/favicon.png">`.

## D-GLOB-03. Уніфікувати брейкпоінт
- Усі media queries у компонентах мають використовувати `@media (min-width: 1200px)`. Не вводити нові кастомні брейкпоінти без причини.

## D-GLOB-04. Перевірити що `body { max-width: none }` у base.css актуальний
- `css/base.css:56-58` — переоцінити, чи потрібно після рефактору.
