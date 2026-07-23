import React from 'react';
import { Icon } from './Icon.jsx';

const CUT = 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))';
const V = {
  soft:    { background: 'var(--accent-soft)', color: 'var(--accent-soft-text)' },
  ghost:   { background: 'transparent', color: 'var(--text-2)' },
  primary: { background: 'var(--brand-gradient)', color: '#FFFFFF' },
  outline: { background: 'var(--surface)', color: 'var(--text-2)', border: '1.5px solid var(--border)' },
};
const S = { sm: 32, md: 40, lg: 48 };

export function IconButton({ name, variant = 'ghost', size = 'md', label, disabled, style, ...rest }) {
  const v = V[variant] || V.ghost, px = S[size] || S.md;
  const filled = variant === 'primary' || variant === 'soft';
  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: px, height: px, border: v.border || 'none', borderRadius: 0, clipPath: filled ? CUT : undefined,
        background: v.background, color: v.color,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'var(--transition-fast)', ...style,
      }}
      {...rest}
    >
      <Icon name={name} size={Math.round(px * 0.45)} />
    </button>
  );
}
