# Navbar — Mobile

Файл: `components/navbar/navbar.css`, `index.html:33-69`.

## M-NAV-01. Базовий layout: hamburger ліворуч, logo по центру
- `.navbar__inner { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; }`.
- `.navbar__logo { flex: 1; text-align: center; }`.

## M-NAV-02. Сховати desktop-блоки базово
- `.navbar__desktop-nav { display: none; }`, `.navbar__right { display: none; }`.

## M-NAV-03. Hit-area hamburger ≥ 44×44
- `.navbar__menu { width: 44px; height: 44px; padding: 10px; display: flex; align-items: center; justify-content: center; }`.

## M-NAV-04. Drawer slide-in (right edge)
- `.navbar__mobile-nav { position: fixed; top: 0; right: -100%; height: 100vh; width: 80vw; background: var(--cream); transition: right .3s ease; display: flex; flex-direction: column; padding: 64px 24px; gap: 16px; z-index: 99; }`.
- `.navbar__mobile-nav[aria-hidden="false"] { right: 0; }`.

## M-NAV-05. Logic toggle drawer у `js/main.js`
- Click на `.navbar__menu` → переключити `aria-hidden` на `.navbar__mobile-nav`.
- Click на mobile-link → закрити drawer.
