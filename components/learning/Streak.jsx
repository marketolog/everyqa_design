import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Streak({ days = 0, active = true, style }) {
  return (
    <span title={`Стрик: ${days} дн. подряд`} style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: active ? 'var(--warning-soft)' : 'var(--surface-3)',
      borderRadius: 'var(--radius-full)', padding: '6px 14px', ...style,
    }}>
      <Icon name="flame" size={16} color={active ? 'var(--streak)' : 'var(--text-3)'} />
      <span style={{ font: '800 14px/1 var(--font-sans)', color: active ? 'var(--streak)' : 'var(--text-3)' }}>{days}</span>
      <span style={{ font: '600 12px/1 var(--font-sans)', color: 'var(--text-2)' }}>дн. подряд</span>
    </span>
  );
}
