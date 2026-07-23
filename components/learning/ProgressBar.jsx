import React from 'react';

export function ProgressBar({ value = 0, max = 100, size = 'md', showLabel, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const h = size === 'sm' ? 6 : size === 'lg' ? 14 : 10;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      <div style={{ flex: 1, height: h, background: 'var(--indigo-100)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: 'var(--brand-gradient)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 100%, 0 100%)', transition: 'width 400ms ease' }}></div>
      </div>
      {showLabel ? <span style={{ font: '700 13px/1 var(--font-sans)', color: 'var(--text)', flex: 'none' }}>{Math.round(pct)}%</span> : null}
    </div>
  );
}
