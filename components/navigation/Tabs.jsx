import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Segmented tabs: items [{id, label, icon?}] */
export function Tabs({ items = [], value, defaultValue, onChange, fullWidth, style }) {
  const [own, setOwn] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const current = value !== undefined ? value : own;
  const pick = (id) => { if (value === undefined) setOwn(id); if (onChange) onChange(id); };
  return (
    <div role="tablist" style={{
      display: 'inline-flex', gap: 4, padding: 4, background: 'var(--surface-3)',
      borderRadius: 'var(--radius-full)', width: fullWidth ? '100%' : undefined, ...style,
    }}>
      {items.map((it) => {
        const on = current === it.id;
        return (
          <button key={it.id} role="tab" aria-selected={on} onClick={() => pick(it.id)} style={{
            flex: fullWidth ? 1 : undefined, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            height: 34, padding: '0 16px', border: 'none', borderRadius: 'var(--radius-full)',
            background: on ? 'var(--surface)' : 'transparent',
            color: on ? 'var(--accent)' : 'var(--text-2)',
            font: `${on ? 700 : 600} 13px/1 var(--font-sans)`,
            boxShadow: on ? 'var(--shadow-sm)' : 'none',
            cursor: 'pointer', transition: 'var(--transition-fast)', whiteSpace: 'nowrap',
          }}>
            {it.icon ? <Icon name={it.icon} size={15} /> : null}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
