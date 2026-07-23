import React from 'react';

/* Radio group: options [{value, label, hint?}] */
export function Radio({ options = [], value, defaultValue, onChange, name, direction = 'column', style }) {
  const [own, setOwn] = React.useState(defaultValue);
  const current = value !== undefined ? value : own;
  const pick = (v) => { if (value === undefined) setOwn(v); if (onChange) onChange(v); };
  return (
    <span role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'column' ? 10 : 18, ...style }}>
      {options.map((o) => {
        const on = current === o.value;
        return (
          <span key={o.value} onClick={() => pick(o.value)} role="radio" aria-checked={on} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
            <span style={{
              width: 16, height: 16, flex: 'none', margin: '3px 3px 0',
              transform: 'rotate(45deg)',
              border: on ? '5px solid var(--accent)' : '2px solid var(--border-strong)',
              background: 'var(--surface)', transition: 'var(--transition-fast)', boxSizing: 'border-box',
            }}></span>
            <span>
              <span style={{ display: 'block', font: '500 14px/1.4 var(--font-sans)', color: 'var(--text)' }}>{o.label}</span>
              {o.hint ? <span style={{ display: 'block', font: '500 12px/1.4 var(--font-sans)', color: 'var(--text-3)' }}>{o.hint}</span> : null}
            </span>
          </span>
        );
      })}
    </span>
  );
}
