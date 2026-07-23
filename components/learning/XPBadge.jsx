import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function XPBadge({ xp = 0, level, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: 'var(--accent-soft)', borderRadius: 'var(--radius-full)', padding: '6px 14px', ...style,
    }}>
      <Icon name="zap" size={15} color="var(--xp)" />
      <span style={{ font: '800 14px/1 var(--font-sans)', color: 'var(--xp)' }}>{xp.toLocaleString('ru-RU')} XP</span>
      {level != null ? <span style={{ font: '600 12px/1 var(--font-sans)', color: 'var(--text-2)' }}>· {level} ур.</span> : null}
    </span>
  );
}
