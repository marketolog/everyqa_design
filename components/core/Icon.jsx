import React from 'react';

/* Lucide icon rendered as inline SVG from the lucide UMD bundle (icon data ships as JS —
   works in sandboxed previews where external image loads are blocked). */
function ensureLucide() {
  if (window.lucide && window.lucide.icons) return Promise.resolve();
  if (!window.__lucideLoading) {
    window.__lucideLoading = new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
  }
  return window.__lucideLoading;
}

export function Icon({ name, size = 18, color = 'currentColor', style }) {
  const [, tick] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    if (!(window.lucide && window.lucide.icons)) ensureLucide().then(tick);
  }, []);
  const pascal = String(name).split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  const lib = window.lucide && window.lucide.icons;
  const node = lib && lib[pascal];
  const box = { display: 'inline-block', width: size, height: size, flex: 'none', ...style };
  if (!node || !Array.isArray(node)) return <span aria-hidden="true" style={box} />;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: 'none', display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      {node.map((item, i) => {
        const tag = Array.isArray(item) ? item[0] : item.tag;
        const attrs = Array.isArray(item) ? item[1] : item.attrs;
        return React.createElement(tag, { ...attrs, key: i });
      })}
    </svg>
  );
}
