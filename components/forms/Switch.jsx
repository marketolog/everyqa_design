import React from 'react';

export function Switch({ label, checked, defaultChecked = false, onChange, disabled, style }) {
  const [own, setOwn] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : own;
  const toggle = () => { if (disabled) return; if (checked === undefined) setOwn(!on); if (onChange) onChange(!on); };
  return (
    <span onClick={toggle} role="switch" aria-checked={on} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span style={{
        width: 42, height: 24, borderRadius: 'var(--radius-full)', flex: 'none', position: 'relative',
        background: on ? 'var(--brand-gradient)' : 'var(--border-strong)', transition: 'var(--transition-base)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: 2,
          background: '#FFFFFF', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-base)',
        }}></span>
      </span>
      {label ? <span style={{ font: '500 14px/1.4 var(--font-sans)', color: 'var(--text)' }}>{label}</span> : null}
    </span>
  );
}
