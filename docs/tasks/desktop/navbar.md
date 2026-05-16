# Navbar — Desktop

Файл: `components/navbar/navbar.css` (медіа `@media (min-width: 1200px)`), `index.html:33-69`.

## D-NAV-01. Зменшити висоту navbar до ~64px
- `.navbar` → `padding: 16px 0;` у десктоп-медіа.

## D-NAV-02. Active nav-link — підкреслення champagne
- `.navbar__nav-link--active { border-bottom: 1px solid var(--champagne); padding-bottom: 4px; }`.

## D-NAV-03. Показати desktop nav та right-блок
- `.navbar__desktop-nav { display: flex; }`, `.navbar__right { display: flex; }`.
- Сховати hamburger: `.navbar__menu { display: none; }`.

## D-NAV-04. Прибрати дубль `.navbar__mobile-nav` з DOM
- `index.html:63-69` — після рефактору drawer у js/main.js, drawer розгортається з тієї ж розмітки. Видалити паралельний блок.
