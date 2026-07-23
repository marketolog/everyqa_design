import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Tag } from '../../components/core/Tag.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Switch } from '../../components/forms/Switch.jsx';
import { Select } from '../../components/forms/Select.jsx';
import { Dialog } from '../../components/feedback/Dialog.jsx';

export function ProfileScreen({ pushToast }) {
  const [reset, setReset] = React.useState(false);
  return (
    <div>
      <div style={{ font: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', marginBottom: 22 }}>Профиль</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>
        <Card>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
            <span style={{ width: 64, height: 64, clipPath: 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)', background: 'var(--brand-gradient)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '800 22px/1 var(--font-sans)', flex: 'none' }}>МК</span>
            <div>
              <div style={{ font: 'var(--text-h3)', color: 'var(--text)' }}>Максим Королёв</div>
              <div style={{ font: 'var(--text-small)', color: 'var(--text-2)' }}>maxim@example.com</div>
              <Badge caps={false} style={{ marginTop: 6 }}>Акселератор · до 21 авг</Badge>
            </div>
          </div>
          <div style={{ font: '600 13px/1.2 var(--font-sans)', color: 'var(--text)', marginBottom: 10 }}>Освоенные навыки</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Tag icon="check">Теория тестирования</Tag>
            <Tag icon="bug">Баг-репорты</Tag>
            <Tag icon="lock">Тест-кейсы</Tag>
          </div>
        </Card>
        <Card>
          <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 16 }}>Настройки</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Switch label="Напоминания о занятиях" defaultChecked />
            <Switch label="Письма с разборами багов" defaultChecked />
            <Switch label="Звуки «Эврики»" />
            <Select label="Темп обучения" options={['Спокойный · 3 ч в неделю', 'Рабочий · 6 ч в неделю', 'Ускоренный · 10+ ч']} />
            <Button variant="danger" icon="rotate-ccw" onClick={() => setReset(true)} style={{ alignSelf: 'flex-start' }}>Сбросить прогресс</Button>
          </div>
        </Card>
      </div>
      <Dialog open={reset} onClose={() => setReset(false)} title="Сбросить весь прогресс?"
        footer={<React.Fragment>
          <Button variant="ghost" onClick={() => setReset(false)}>Отмена</Button>
          <Button variant="danger" onClick={() => { setReset(false); pushToast({ tone: 'danger', title: 'Прогресс сброшен', description: 'Начинаем с чистого листа' }); }}>Сбросить</Button>
        </React.Fragment>}>
        68% пути до оффера, 1240 XP и стрик 6 дней будут удалены. Это действие необратимо.
      </Dialog>
    </div>
  );
}
