import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, onRemove, icon, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'var(--surface)', border: '1.5px solid var(--border)',
      borderRadius: 'var(--radius-full)', padding: '5px 12px',
      font: '600 12.5px/1.2 var(--font-sans)', color: 'var(--text-2)', ...style,
    }}>
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
      {onRemove ? (
        <span onClick={onRemove} role="button" aria-label="Убрать" style={{ display: 'inline-flex', cursor: 'pointer', color: 'var(--text-3)' }}>
          <Icon name="x" size={13} />
        </span>
      ) : null}
    </span>
  );
}
