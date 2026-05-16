# Tasks

Атомарні задачі переробки верстки на основі компонентного підходу + mobile-first.

## Структура

- [`progress.md`](progress.md) — чекліст усіх задач з статусом виконання
- `desktop/` — задачі для шару `@media (min-width: 1200px)` кожного компонента
- `mobile/` — задачі для базових (mobile-first) стилів компонентів

Один файл = один компонент. Всередині файлу — список атомарних задач з ID.

## Принципи

1. **Mobile-first**: базові стилі без media query = мобільні. Десктоп — через `@media (min-width: 1200px)`.
2. **Single source of truth**: один HTML-блок на компонент. НЕ використовуємо паралельні `.desktop-only` / `.mobile-only` DOM-дублі.
3. Усі правки — у `components/<name>/<name>.css` + відповідній розмітці в `index.html`.
4. Брейкпоінт десктопу: `@media (min-width: 1200px)` (вже в `css/base.css`).

## Порядок виконання компонента

Для кожного компонента рекомендується:
1. Спершу mobile (базові стилі) — з `mobile/<component>.md`
2. Потім desktop (медіа-запит) — з `desktop/<component>.md`

## Список компонентів

| Компонент | Mobile | Desktop |
|---|---|---|
| navbar | [mobile/navbar.md](mobile/navbar.md) | [desktop/navbar.md](desktop/navbar.md) |
| hero | [mobile/hero.md](mobile/hero.md) | [desktop/hero.md](desktop/hero.md) |
| works-slider | [mobile/works-slider.md](mobile/works-slider.md) | [desktop/works-slider.md](desktop/works-slider.md) |
| stats | [mobile/stats.md](mobile/stats.md) | [desktop/stats.md](desktop/stats.md) |
| specialists | [mobile/specialists.md](mobile/specialists.md) | [desktop/specialists.md](desktop/specialists.md) |
| services | [mobile/services.md](mobile/services.md) | [desktop/services.md](desktop/services.md) |
| portfolio | [mobile/portfolio.md](mobile/portfolio.md) | [desktop/portfolio.md](desktop/portfolio.md) |
| faq | [mobile/faq.md](mobile/faq.md) | [desktop/faq.md](desktop/faq.md) |
| testimonials | [mobile/testimonials.md](mobile/testimonials.md) | [desktop/testimonials.md](desktop/testimonials.md) |
| map | [mobile/map.md](mobile/map.md) | [desktop/map.md](desktop/map.md) |
| footer | [mobile/footer.md](mobile/footer.md) | [desktop/footer.md](desktop/footer.md) |
| float-btn | [mobile/float-btn.md](mobile/float-btn.md) | — |
| global | — | [desktop/global.md](desktop/global.md) |
