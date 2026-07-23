import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

/* The signature EveryQA metric: how far until the first job offer. */
export function OfferProgress({ value = 0, sublabel, style }) {
  return (
    <div style={{ ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <span style={{ font: '700 11px/1.3 var(--font-sans)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-2)' }}>До первого оффера</span>
        <span style={{ font: '800 18px/1 var(--font-sans)', color: 'var(--accent)' }}>{Math.round(value)}%</span>
      </div>
      <ProgressBar value={value} size="lg" />
      {sublabel ? <div style={{ marginTop: 8, font: '500 12.5px/1.5 var(--font-sans)', color: 'var(--text-3)' }}>{sublabel}</div> : null}
    </div>
  );
}
