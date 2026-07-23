import React from 'react';
import { Icon } from '../../components/core/Icon.jsx';
import { Switch } from '../../components/forms/Switch.jsx';
import { Streak } from '../../components/learning/Streak.jsx';
import { XPBadge } from '../../components/learning/XPBadge.jsx';

const NAV = [
  { id: 'dashboard', label: 'Дашборд', icon: 'layout-dashboard' },
  { id: 'lesson', label: 'Обучение', icon: 'book-open' },
  { id: 'practice', label: 'Тренажёр', icon: 'flask-conical' },
  { id: 'chat', label: 'Архимед', icon: 'message-circle' },
  { id: 'pricing', label: 'Тарифы', icon: 'credit-card' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

export function AppShell({ nav, onNav, dark, onDark, children }) {
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--bg)', fontFamily: 'var(--font-sans)' }}>
      <aside style={{ width: 240, flex: 'none', background: 'var(--surface)', borderRight: '1.5px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
        <img src={dark ? '../../assets/logo-white.svg' : '../../assets/logo-main.svg'} alt="EVERYQA" style={{ width: 128, margin: '2px 10px 22px' }} />
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map((it) => {
            const on = nav === it.id;
            return (
              <a key={it.id} onClick={() => onNav(it.id)} style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '10px 14px',
                borderRadius: 'var(--radius-full)', cursor: 'pointer',
                background: on ? 'var(--accent-soft)' : 'transparent',
                color: on ? 'var(--accent-soft-text)' : 'var(--text-2)',
                font: `${on ? 700 : 600} 13.5px/1 var(--font-sans)`, transition: 'var(--transition-fast)',
              }}>
                <Icon name={it.icon} size={17} />{it.label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14, padding: '0 10px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Streak days={6} /><XPBadge xp={1240} />
          </div>
          <Switch label="Тёмная тема" checked={dark} onChange={onDark} />
          <a onClick={() => onNav('onboarding')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', font: '600 12.5px/1 var(--font-sans)', color: 'var(--text-3)' }}>
            <Icon name="log-out" size={14} />Выйти
          </a>
        </div>
      </aside>
      <main style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '36px 40px 56px' }}>{children}</div>
      </main>
    </div>
  );
}
