import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Achievement chip: icon = lucide name (e.g. 'bug', 'trophy', 'target') */
export function Achievement({ icon = 'trophy', title, hint, unlocked = true, style }) {
  return (
    <div title={hint} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 96, textAlign: 'center',
      opacity: unlocked ? 1 : 0.45, filter: unlocked ? 'none' : 'grayscale(1)', ...style,
    }}>
      <span style={{
        width: 56, height: 56,
        clipPath: 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)',
        background: unlocked ? 'var(--brand-gradient)' : 'var(--surface-3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={icon} size={24} color={unlocked ? '#FFFFFF' : 'var(--text-3)'} />
      </span>
      <span style={{ font: '600 11.5px/1.35 var(--font-sans)', color: unlocked ? 'var(--text)' : 'var(--text-3)' }}>{title}</span>
    </div>
  );
}
