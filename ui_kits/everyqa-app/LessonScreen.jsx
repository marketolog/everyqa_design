import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { IconButton } from '../../components/core/IconButton.jsx';
import { Tabs } from '../../components/navigation/Tabs.jsx';
import { ProgressBar } from '../../components/learning/ProgressBar.jsx';

export function LessonScreen({ onNav }) {
  const [tab, setTab] = React.useState('theory');
  return (
    <div>
      <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 8 }}>Модуль 2 · Урок 3 из 8</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
        <div style={{ font: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)' }}>Анатомия баг-репорта</div>
        <Badge caps={false}>+40 XP</Badge>
      </div>
      <Tabs value={tab} onChange={setTab} items={[
        { id: 'theory', label: 'Теория', icon: 'book-open' },
        { id: 'practice', label: 'Практика', icon: 'flask-conical' },
        { id: 'test', label: 'Тест', icon: 'list-checks' },
      ]} style={{ marginBottom: 20 }} />
      {tab === 'theory' ? (
        <div>
          <div style={{ position: 'relative', background: 'var(--graphite)', borderRadius: 'var(--radius-lg)', aspectRatio: '16/7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, overflow: 'hidden' }}>
            <img src="../../assets/logo-white.svg" alt="" style={{ position: 'absolute', top: 20, left: 24, width: 96, opacity: 0.9 }} />
            <IconButton name="play" variant="primary" size="lg" label="Смотреть" style={{ width: 64, height: 64 }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 5, background: 'var(--brand-gradient)', width: '35%' }}></div>
          </div>
          <Card padding="var(--space-6)">
            <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 10 }}>Конспект</div>
            <div style={{ font: 'var(--text-body)', color: 'var(--text-2)' }}>
              Хороший баг-репорт отвечает на три вопроса: что сломалось, как это повторить и почему это важно.
              Разработчик должен воспроизвести баг, не задавая тебе ни одного вопроса.
            </div>
            <div style={{ background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', font: 'var(--text-code)', color: 'var(--text)', marginTop: 14 }}>
              <span style={{ color: 'var(--text-3)' }}>// структура</span><br />
              Заголовок → Шаги → Ожидаемо / Фактически → Окружение → Критичность
            </div>
          </Card>
        </div>
      ) : (
        <Card padding="var(--space-8)" style={{ textAlign: 'center' }}>
          <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 8 }}>{tab === 'practice' ? 'Практика — в тренажёре' : 'Тест откроется после практики'}</div>
          <div style={{ font: 'var(--text-small)', color: 'var(--text-2)', marginBottom: 18 }}>{tab === 'practice' ? 'Напишешь настоящий баг-репорт по макету.' : 'Сначала закрепи материал руками.'}</div>
          {tab === 'practice' ? <Button icon="flask-conical" onClick={() => onNav('practice')}>Открыть тренажёр</Button> : null}
        </Card>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 24 }}>
        <ProgressBar value={35} showLabel style={{ flex: 1 }} />
        <Button variant="secondary" icon="chevron-right" onClick={() => onNav('practice')}>Дальше</Button>
      </div>
    </div>
  );
}
