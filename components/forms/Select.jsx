import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', ...style }}>
      {label ? <span style={{ display: 'block', font: '600 13px/1.2 var(--font-sans)', color: 'var(--text)', marginBottom: 6 }}>{label}</span> : null}
      <span style={{
        position: 'relative', display: 'flex', alignItems: 'center', height: 'var(--control-h-md)',
        background: 'var(--surface)', border: `1.5px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none', transition: 'var(--transition-fast)',
      }}>
        <select
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', height: '100%',
            border: 'none', outline: 'none', background: 'transparent',
            font: '500 14px/1.4 var(--font-sans)', color: 'var(--text)', padding: '0 36px 0 14px', cursor: 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 12, pointerEvents: 'none', display: 'flex' }}>
          <Icon name="chevron-down" size={16} color="var(--text-3)" />
        </span>
      </span>
    </label>
  );
}
