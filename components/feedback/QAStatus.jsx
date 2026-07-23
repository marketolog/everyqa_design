import React from 'react';

const MAP = {
  passed:   { label: 'Пройден', color: 'var(--success)', bg: 'var(--success-soft)' },
  failed:   { label: 'Провален', color: 'var(--danger)', bg: 'var(--danger-soft)' },
  progress: { label: 'В работе', color: 'var(--warning)', bg: 'var(--warning-soft)' },
  locked:   { label: 'Закрыт', color: 'var(--text-3)', bg: 'var(--surface-3)' },
};

/* QA-status pill with dot: the brand's test-result language. */
export function QAStatus({ status = 'progress', label, style }) {
  const s = MAP[status] || MAP.progress;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: s.bg, color: s.color, borderRadius: 'var(--radius-full)',
      padding: '5px 12px', font: '700 12px/1.2 var(--font-sans)', whiteSpace: 'nowrap', ...style,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, flex: 'none' }}></span>
      {label || s.label}
    </span>
  );
}
