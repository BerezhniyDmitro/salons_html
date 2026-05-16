# Float Button — Mobile

Файл: створити `components/float-btn/float-btn.css`, `index.html:684-689`.

## M-FLOAT-01. Створити окремий компонент
- Створити `components/float-btn/float-btn.css`.
- Підключити в `<head>` `index.html`: `<link rel="stylesheet" href="components/float-btn/float-btn.css">`.

## M-FLOAT-02. Базовий стан — кругла іконка 56px
- `.float-btn { position: fixed; bottom: 24px; right: 16px; width: 56px; height: 56px; border-radius: 50%; background: var(--champagne); display: flex; align-items: center; justify-content: center; z-index: 100; box-shadow: 0 4px 16px rgba(0,0,0,0.2); }`.

## M-FLOAT-03. SVG-іконка
- `.float-btn svg { width: 24px; height: 24px; color: var(--charcoal); }`.

## M-FLOAT-04. Сховати текст-span на мобілці
- `.float-btn span { display: none; }`.

## M-FLOAT-05. Padding-bottom body для уникнення перекриття
- `body { padding-bottom: 80px; }` АБО footer має враховувати fixed-кнопку. Альтернатива — приховувати кнопку коли видно footer.

## M-FLOAT-06. На десктопі — кнопка з текстом (pill)
- У `@media (min-width: 1200px)`: `.float-btn { width: auto; padding: 14px 24px; border-radius: 999px; gap: 8px; }`.
- `.float-btn span { display: inline; font-size: 13px; color: var(--charcoal); letter-spacing: 0.1em; }`.
