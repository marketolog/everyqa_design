import React from 'react';

/* Table for bug reports / test cases.
   columns: [{key, label, width?, align?}]; rows: array of objects; renderCell?(row, col) */
export function DataTable({ columns = [], rows = [], renderCell, onRowClick, style }) {
  const [hover, setHover] = React.useState(-1);
  return (
    <div style={{ background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-lg)', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || 'left', padding: '12px 12px', width: c.width,
                font: '700 11px/1.3 var(--font-sans)', letterSpacing: 'var(--tracking-caps)',
                textTransform: 'uppercase', color: 'var(--text-3)',
                borderBottom: '1.5px solid var(--border)', background: 'var(--surface-2)',
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              onClick={onRowClick ? () => onRowClick(r, i) : undefined}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
              style={{ background: hover === i ? 'var(--surface-2)' : 'transparent', cursor: onRowClick ? 'pointer' : 'default', transition: 'var(--transition-fast)' }}
            >
              {columns.map((c) => (
                <td key={c.key} style={{
                  padding: '13px 12px', textAlign: c.align || 'left',
                  font: '500 13.5px/1.45 var(--font-sans)', color: 'var(--text)',
                  borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)',
                }}>{renderCell ? renderCell(r, c) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
