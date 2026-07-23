import React from 'react';

export function Tooltip({ text, side = 'top', children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = side === 'bottom'
    ? { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' }
    : { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' };
  return (
    <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      {show ? (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, zIndex: 50, whiteSpace: 'nowrap',
          background: 'var(--graphite)', color: '#FFFFFF',
          font: '600 12px/1.3 var(--font-sans)', padding: '7px 12px',
          borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)', pointerEvents: 'none',
        }}>{text}</span>
      ) : null}
    </span>
  );
}
