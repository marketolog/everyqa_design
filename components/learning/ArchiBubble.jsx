import React from 'react';

/* Archimedes speech bubble. variant: 'eureka' (gradient) | 'hint' (soft indigo).
   showAvatar renders the mascot next to the bubble (needs assets/ relative to page — pass avatarSrc). */
export function ArchiBubble({ variant = 'hint', children, showAvatar, avatarSrc, style }) {
  const eureka = variant === 'eureka';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, ...style }}>
      {showAvatar ? (
        <img src={avatarSrc || 'assets/mascot-hello.webp'} alt="Архимед" style={{ width: 40, height: 37, objectFit: 'contain', flex: 'none' }} />
      ) : null}
      <div style={{
        background: eureka ? 'var(--brand-gradient)' : 'var(--accent-soft)',
        color: eureka ? '#FFFFFF' : 'var(--accent-soft-text)',
        font: '600 14px/1.5 var(--font-sans)',
        padding: '12px 18px', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))', maxWidth: 420,
      }}>{children}</div>
    </div>
  );
}
