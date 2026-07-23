import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Vertical module checklist: steps [{title, meta?, status: 'done'|'current'|'todo'}] */
export function ModuleSteps({ steps = [], style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        const color = s.status === 'done' ? 'var(--success)' : s.status === 'current' ? 'var(--accent)' : 'var(--border-strong)';
        return (
          <div key={i} style={{ display: 'flex', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24, flex: 'none' }}>
              <span style={{
                width: 20, height: 20, flex: 'none', boxSizing: 'border-box', margin: 2,
                transform: 'rotate(45deg)',
                background: s.status === 'done' ? 'var(--success)' : s.status === 'current' ? 'var(--brand-gradient)' : 'var(--surface)',
                border: s.status === 'todo' ? '2px solid var(--border-strong)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.status === 'done' ? <span style={{ display: 'flex', transform: 'rotate(-45deg)' }}><Icon name="check" size={12} color="#FFFFFF" /></span> :
                 s.status === 'current' ? <span style={{ width: 7, height: 7, background: '#FFFFFF' }}></span> : null}
              </span>
              {!last ? <span style={{ width: 2, flex: 1, minHeight: 18, background: s.status === 'done' ? 'var(--success)' : 'var(--border)', margin: '4px 0' }}></span> : null}
            </div>
            <div style={{ paddingBottom: last ? 0 : 20, minWidth: 0 }}>
              <div style={{ font: `${s.status === 'current' ? 700 : 600} 14px/1.4 var(--font-sans)`, color: s.status === 'todo' ? 'var(--text-3)' : 'var(--text)' }}>{s.title}</div>
              {s.meta ? <div style={{ font: '500 12px/1.4 var(--font-sans)', color: 'var(--text-3)', marginTop: 2 }}>{s.meta}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
