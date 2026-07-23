import React from 'react';
import { Input } from '../../components/forms/Input.jsx';
import { IconButton } from '../../components/core/IconButton.jsx';
import { Tag } from '../../components/core/Tag.jsx';
import { ArchiBubble } from '../../components/learning/ArchiBubble.jsx';

const REPLIES = [
  'Хороший вопрос. Смотри: критичность — это про ущерб, приоритет — про очередь. Падение оплаты = Critical и P1.',
  'Эврика! Именно так. Теперь попробуй в тренажёре — теория без практики выветривается за неделю.',
  'Не усложняй. Один баг — один репорт. Два бага в одном репорте — это уже баг твоего репорта.',
];

export function ChatScreen() {
  const [msgs, setMsgs] = React.useState([
    { who: 'archi', text: 'Привет! Я на связи. Спрашивай про уроки, баги и собеседования — отвечаю честно.' },
    { who: 'me', text: 'Чем критичность отличается от приоритета?' },
    { who: 'archi', text: REPLIES[0] },
  ]);
  const [draft, setDraft] = React.useState('');
  const send = () => {
    const t = draft.trim();
    if (!t) return;
    const reply = REPLIES[(msgs.length + 1) % REPLIES.length];
    setMsgs([...msgs, { who: 'me', text: t }, { who: 'archi', text: reply }]);
    setDraft('');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 92px)', maxHeight: 720 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
        <img src="../../assets/mascot-hello.webp" alt="Архимед" style={{ width: 52, height: 48, objectFit: 'contain' }} />
        <div>
          <div style={{ font: 'var(--text-h2)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)' }}>Архимед</div>
          <div style={{ font: 'var(--text-small)', color: 'var(--success)' }}>онлайн · отвечает сразу</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14, paddingRight: 6 }}>
        {msgs.map((m, i) => m.who === 'archi' ? (
          <ArchiBubble key={i} variant={m.text.startsWith('Эврика') ? 'eureka' : 'hint'} showAvatar avatarSrc="../../assets/mascot-think.webp">{m.text}</ArchiBubble>
        ) : (
          <div key={i} style={{ alignSelf: 'flex-end', maxWidth: 420, background: 'var(--accent-soft)', clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)', padding: '12px 18px', font: '500 14px/1.5 var(--font-sans)', color: 'var(--text)' }}>{m.text}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
        <Tag icon="bug" onRemove={undefined}>Разбери мой баг-репорт</Tag>
        <Tag icon="graduation-cap">Что спросят на собеседовании?</Tag>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 10, alignItems: 'center' }}>
        <Input placeholder="Спроси Архимеда…" value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }} style={{ flex: 1 }} />
        <IconButton name="send" variant="primary" size="lg" label="Отправить" onClick={send} />
      </div>
    </div>
  );
}
