import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled, style }) {
  const [own, setOwn] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : own;
  const toggle = () => { if (disabled) return; if (checked === undefined) setOwn(!on); if (onChange) onChange(!on); };
  return (
    <span onClick={toggle} role="checkbox" aria-checked={on} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        width: 22, height: 22, borderRadius: 2, flex: 'none',
        border: on ? 'none' : '2px solid var(--border-strong)',
        background: on ? 'var(--brand-gradient)' : 'var(--surface)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-fast)',
      }}>
        {on ? <Icon name="check" size={14} color="#FFFFFF" /> : null}
      </span>
      {label ? <span style={{ font: '500 14px/1.4 var(--font-sans)', color: 'var(--text)' }}>{label}</span> : null}
    </span>
  );
}
