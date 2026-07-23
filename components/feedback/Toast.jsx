import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = {
  success: { icon: 'check-circle-2', color: 'var(--success)' },
  danger:  { icon: 'alert-circle', color: 'var(--danger)' },
  warning: { icon: 'alert-triangle', color: 'var(--warning)' },
  info:    { icon: 'info', color: 'var(--accent)' },
  eureka:  { icon: 'lightbulb', color: 'var(--brand-violet)' },
};

/* Presentational toast card; consumer positions it (usually fixed bottom-right stack). */
export function Toast({ tone = 'info', title, description, onClose, style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{
      display: 'flex', gap: 12, alignItems: 'flex-start', width: 340, maxWidth: '100%',
      background: 'var(--surface)', border: '1.5px solid var(--border)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 16px', ...style,
    }}>
      <Icon name={t.icon} size={20} color={t.color} style={{ marginTop: 1 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: '700 14px/1.35 var(--font-sans)', color: 'var(--text)' }}>{title}</div>
        {description ? <div style={{ font: '500 13px/1.5 var(--font-sans)', color: 'var(--text-2)', marginTop: 3 }}>{description}</div> : null}
      </div>
      {onClose ? <IconButton name="x" label="Закрыть" size="sm" onClick={onClose} style={{ margin: '-4px -6px 0 0' }} /> : null}
    </div>
  );
}
