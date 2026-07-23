import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Input } from '../../components/forms/Input.jsx';
import { Select } from '../../components/forms/Select.jsx';
import { DataTable } from '../../components/data/DataTable.jsx';
import { QAStatus } from '../../components/feedback/QAStatus.jsx';
import { ArchiBubble } from '../../components/learning/ArchiBubble.jsx';

const START_ROWS = [
  { id: 'BR-101', title: 'Кнопка «Оплатить» не реагирует на тап', sev: 'Critical', status: 'failed' },
  { id: 'BR-102', title: 'Опечатка в письме подтверждения', sev: 'Minor', status: 'passed' },
];

export function PracticeScreen({ pushToast }) {
  const [rows, setRows] = React.useState(START_ROWS);
  const [title, setTitle] = React.useState('');
  const submit = () => {
    if (!title.trim()) { pushToast({ tone: 'warning', title: 'Заголовок пустой', description: 'Начни с того, что именно сломалось.' }); return; }
    setRows([{ id: 'BR-' + (103 + rows.length - 2), title, sev: 'Major', status: 'progress' }, ...rows]);
    setTitle('');
    pushToast({ tone: 'eureka', title: 'Эврика! Отчёт принят', description: '+40 XP · Архимед уже проверяет' });
  };
  return (
    <div>
      <div style={{ font: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', marginBottom: 6 }}>Тренажёр: баг-репорты</div>
      <div style={{ font: 'var(--text-small)', color: 'var(--text-2)', marginBottom: 18 }}>Найди баг в макете и оформи отчёт так, чтобы разработчик воспроизвёл его без вопросов.</div>
      <ArchiBubble variant="hint" showAvatar avatarSrc="../../assets/mascot-think.webp" style={{ marginBottom: 20 }}>
        Подсказка: «не работает» — не заголовок. Что, где и при каком действии?
      </ArchiBubble>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) minmax(0, 1.3fr)', gap: 20, alignItems: 'start' }}>
        <Card>
          <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 14 }}>Новый баг-репорт</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label="Заголовок" placeholder="Что и где сломалось" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Select label="Критичность" options={['Critical', 'Major', 'Minor', 'Trivial']} />
            <Input label="Шаги воспроизведения" placeholder="1. Открыть корзину…" hint="Каждый шаг — с новой строки" />
            <Button icon="send" onClick={submit}>Отправить отчёт</Button>
          </div>
        </Card>
        <DataTable
          columns={[
            { key: 'id', label: 'ID', width: 76 },
            { key: 'title', label: 'Баг' },
            { key: 'status', label: 'Статус', width: 132 },
          ]}
          rows={rows}
          renderCell={(r, c) => c.key === 'status' ? <QAStatus status={r.status} />
            : c.key === 'id' ? <span style={{ font: 'var(--text-code)', color: 'var(--text-2)' }}>{r.id}</span> : r[c.key]}
        />
      </div>
    </div>
  );
}
