import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TYPE = {
  video:    { icon: 'play', label: 'Видео' },
  text:     { icon: 'book-open', label: 'Теория' },
  practice: { icon: 'flask-conical', label: 'Практика' },
  test:     { icon: 'list-checks', label: 'Тест' },
};

/* Lesson row-card: status done | current | locked */
export function LessonCard({ type = 'text', title, duration, xp, status = 'locked', onClick, style }) {
  const t = TYPE[type] || TYPE.text;
  const locked = status === 'locked';
  const current = status === 'current';
  return (
    <div onClick={locked ? undefined : onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14,
      background: 'var(--surface)',
      border: `1.5px solid ${current ? 'var(--accent)' : 'var(--border)'}`,
      boxShadow: current ? '0 0 0 3px var(--focus-ring)' : 'var(--shadow-sm)',
      borderRadius: 'var(--radius-lg)', padding: '14px 18px',
      opacity: locked ? 0.55 : 1, cursor: locked ? 'default' : 'pointer', transition: 'var(--transition-base)', ...style,
    }}>
      <span style={{
        width: 42, height: 42, borderRadius: 0, flex: 'none',
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        background: status === 'done' ? 'var(--success-soft)' : current ? 'var(--brand-gradient)' : 'var(--surface-3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={status === 'done' ? 'check' : t.icon} size={19}
          color={status === 'done' ? 'var(--success)' : current ? '#FFFFFF' : 'var(--text-3)'} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', font: '700 14px/1.35 var(--font-sans)', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
        <span style={{ display: 'flex', gap: 12, marginTop: 3, font: '500 12px/1.3 var(--font-sans)', color: 'var(--text-3)' }}>
          <span>{t.label}</span>
          {duration ? <span>{duration}</span> : null}
          {xp ? <span style={{ color: 'var(--xp)', fontWeight: 700 }}>+{xp} XP</span> : null}
        </span>
      </span>
      <Icon name={locked ? 'lock' : 'chevron-right'} size={17} color="var(--text-3)" />
    </div>
  );
}
