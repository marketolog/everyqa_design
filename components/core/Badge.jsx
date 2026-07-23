import React from 'react';

const TONES = {
  accent:  { bg: 'var(--accent-soft)', fg: 'var(--accent-soft-text)' },
  success: { bg: 'var(--success-soft)', fg: 'var(--success)' },
  danger:  { bg: 'var(--danger-soft)', fg: 'var(--danger)' },
  warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)' },
  neutral: { bg: 'var(--surface-3)', fg: 'var(--text-2)' },
  gradient:{ bg: 'var(--brand-gradient)', fg: '#FFFFFF' },
};

export function Badge({ tone = 'accent', caps = true, children, style }) {
  const t = TONES[tone] || TONES.accent;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: t.bg, color: t.fg, borderRadius: 0,
      clipPath: tone === 'gradient' ? 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' : undefined,
      padding: '4px 10px',
      font: '700 11px/1.2 var(--font-sans)',
      letterSpacing: caps ? 'var(--tracking-caps)' : 0,
      textTransform: caps ? 'uppercase' : 'none', ...style,
    }}>{children}</span>
  );
}
