import React from 'react';
import { Icon } from './Icon.jsx';

const CUT = 'polygon(0 0, calc(100% - var(--chamfer-sm)) 0, 100% var(--chamfer-sm), 100% 100%, var(--chamfer-sm) 100%, 0 calc(100% - var(--chamfer-sm)))';
const V = {
  primary:  { background: 'var(--brand-gradient)', color: '#FFFFFF', border: 'none' },
  secondary:{ background: 'var(--accent-soft)', color: 'var(--accent-soft-text)', border: 'none' },
  outline:  { background: 'transparent', color: 'var(--text)', border: '1.5px solid var(--border-strong)' },
  ghost:    { background: 'transparent', color: 'var(--text-2)', border: 'none' },
  danger:   { background: 'var(--danger-soft)', color: 'var(--danger)', border: 'none' },
};
const S = {
  sm: { height: 'var(--control-h-sm)', padding: '0 14px', fontSize: 13, gap: 6, iconSize: 15 },
  md: { height: 'var(--control-h-md)', padding: '0 20px', fontSize: 14, gap: 8, iconSize: 17 },
  lg: { height: 'var(--control-h-lg)', padding: '0 26px', fontSize: 15, gap: 8, iconSize: 18 },
};

export function Button({ variant = 'primary', size = 'md', icon, children, disabled, fullWidth, style, ...rest }) {
  const v = V[variant] || V.primary, s = S[size] || S.md;
  const filled = variant !== 'outline' && variant !== 'ghost';
  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, width: fullWidth ? '100%' : undefined,
        border: v.border, borderRadius: 0, clipPath: filled ? CUT : undefined,
        background: v.background, color: v.color,
        font: `700 ${s.fontSize}px/1 var(--font-sans)`,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'var(--transition-fast)', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.iconSize} /> : null}
      {children}
    </button>
  );
}
