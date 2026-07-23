import React from 'react';

/* Карточка-поверхность: прямые углы + фирменный срез 45° верхнего правого угла.
   Двухслойная сборка сохраняет рамку вдоль диагонали; тень — через drop-shadow (следует за срезом). */
const POLY = 'polygon(0 0, calc(100% - var(--chamfer)) 0, 100% var(--chamfer), 100% 100%, 0 100%)';

export function Card({ padding = 'var(--space-6)', interactive, selected, chamfer = true, children, style, ...rest }) {
  const clip = chamfer ? POLY : undefined;
  return (
    <div
      style={{
        background: selected ? 'var(--accent)' : 'var(--border)',
        clipPath: clip, padding: selected ? 2 : 1.5,
        filter: 'drop-shadow(0 1px 2px rgba(38, 38, 74, 0.06))',
        cursor: interactive ? 'pointer' : undefined,
        transition: 'var(--transition-base)', ...style,
      }}
      {...rest}
    >
      <div style={{ background: 'var(--surface)', clipPath: clip, padding, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
