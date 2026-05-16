# Map — Desktop

Файл: `components/map/map.css`, `index.html:561-598`.

## D-MAP-01. Двоколонковий layout
- `.map-section { display: grid; grid-template-columns: 1fr 1.5fr; gap: 64px; padding: 80px 64px; }` у десктоп-медіа.

## D-MAP-02. Прибрати дубль `.map-section__image.mobile-only`
- `index.html:597` — один контейнер мапи для обох розкладок.

## D-MAP-03. Pin "LUMINA" — золотий маркер
- `.map-section__pin { position: absolute; background: var(--champagne); padding: 8px; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }`.
- `.map-section__pin-label { background: var(--charcoal); color: var(--cream); padding: 4px 10px; }` нижче маркера.

## D-MAP-04. CTA "ЗАПИСАТИСЬ ОНЛАЙН" — auto-width filled
- `.map-section__cta { width: auto; padding: 14px 32px; background: var(--charcoal); color: var(--cream); display: inline-block; }`.

## D-MAP-05. Заголовок з divider
- `.map-section__divider { width: 80px; height: 1px; background: var(--champagne); margin: 24px 0; }`.
