import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { OfferProgress } from '../../components/learning/OfferProgress.jsx';
import { LessonCard } from '../../components/learning/LessonCard.jsx';
import { ModuleSteps } from '../../components/learning/ModuleSteps.jsx';
import { Achievement } from '../../components/learning/Achievement.jsx';
import { ArchiBubble } from '../../components/learning/ArchiBubble.jsx';

export function DashboardScreen({ onNav }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <div style={{ font: 'var(--text-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)' }}>Привет, Максим!</div>
          <div style={{ font: 'var(--text-small)', color: 'var(--text-2)', marginTop: 4 }}>Сегодня по плану — 25 минут практики.</div>
        </div>
        <Button icon="play" onClick={() => onNav('lesson')}>Продолжить</Button>
      </div>
      <Card style={{ marginBottom: 20 }}>
        <OfferProgress value={68} sublabel="Осталось: 4 модуля, 12 практик и мок-собеседование" />
      </Card>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 2 }}>Продолжить обучение</div>
          <LessonCard type="video" title="Что такое баг-репорт" duration="12 мин" status="done" />
          <LessonCard type="practice" title="Пишем первый баг-репорт" duration="20 мин" xp={40} status="current" onClick={() => onNav('practice')} />
          <LessonCard type="test" title="Проверка: баг-репорты" duration="10 мин" xp={60} status="locked" />
          <ArchiBubble variant="hint" showAvatar avatarSrc="../../assets/mascot-think.webp" style={{ marginTop: 8 }}>
            Вчера ты ошибся в приоритетах багов. Сегодня закрепим — это частый вопрос на собеседованиях.
          </ArchiBubble>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card>
            <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 14 }}>Карта развития</div>
            <ModuleSteps steps={[
              { title: 'Теория тестирования', meta: 'Модуль 1 · пройден', status: 'done' },
              { title: 'Баг-репорты', meta: 'Модуль 2 · ты здесь', status: 'current' },
              { title: 'Тест-кейсы и чек-листы', status: 'todo' },
              { title: 'Мок-собеседование', status: 'todo' },
            ]} />
          </Card>
          <Card>
            <div style={{ font: 'var(--text-h3)', color: 'var(--text)', marginBottom: 14 }}>Достижения</div>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'space-between' }}>
              <Achievement icon="bug" title="Первый баг" />
              <Achievement icon="flame" title="7 дней" hint="Занимайся 7 дней подряд" unlocked={false} />
              <Achievement icon="trophy" title="Оффер" unlocked={false} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
