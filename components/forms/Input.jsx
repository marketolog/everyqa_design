import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, icon, type = 'text', style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-strong)';
  return (
    <label style={{ display: 'block', font: 'var(--text-small)', color: 'var(--text-2)', ...style }}>
      {label ? <span style={{ display: 'block', font: '600 13px/1.2 var(--font-sans)', color: 'var(--text)', marginBottom: 6 }}>{label}</span> : null}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 8, height: 'var(--control-h-md)',
        background: 'var(--surface)', border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)', padding: '0 14px',
        boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none', transition: 'var(--transition-fast)',
      }}>
        {icon ? <Icon name={icon} size={16} color="var(--text-3)" /> : null}
        <input
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            font: '500 14px/1.4 var(--font-sans)', color: 'var(--text)', ...inputStyle,
          }}
          {...rest}
        />
      </span>
      {error ? <span style={{ display: 'block', marginTop: 6, font: '500 12px/1.4 var(--font-sans)', color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ display: 'block', marginTop: 6, font: '500 12px/1.4 var(--font-sans)', color: 'var(--text-3)' }}>{hint}</span> : null}
    </label>
  );
}
