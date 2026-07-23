import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open, onClose, title, children, footer, width = 440 }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'var(--overlay)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div role="dialog" aria-label={title} onClick={(e) => e.stopPropagation()} style={{
        width, maxWidth: '100%', background: 'var(--surface)', borderRadius: 0,
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
        filter: 'drop-shadow(0 12px 32px rgba(0, 0, 0, 0.25))', padding: 'var(--space-8)', position: 'relative',
      }}>
        <IconButton name="x" label="Закрыть" size="sm" onClick={onClose} style={{ position: 'absolute', top: 20, right: 24 }} />
        {title ? <div style={{ font: 'var(--text-h2)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', marginBottom: 12, paddingRight: 36 }}>{title}</div> : null}
        <div style={{ font: 'var(--text-body)', color: 'var(--text-2)' }}>{children}</div>
        {footer ? <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 'var(--space-6)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
