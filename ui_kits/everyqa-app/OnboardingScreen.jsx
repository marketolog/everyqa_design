import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Radio } from '../../components/forms/Radio.jsx';
import { Input } from '../../components/forms/Input.jsx';
import { ArchiBubble } from '../../components/learning/ArchiBubble.jsx';

export function OnboardingScreen({ onStart, dark }) {
  return (
    <div style={{ minHeight: '100%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, fontFamily: 'var(--font-sans)' }}>
      <div style={{ width: 480, maxWidth: '100%' }}>
        <img src={dark ? '../../assets/logo-white.svg' : '../../assets/logo-main.svg'} alt="EVERYQA" style={{ width: 180, display: 'block', margin: '0 auto 28px' }} />
        <Card padding="var(--space-8)">
          <div style={{ font: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', marginBottom: 8 }}>Стань тестировщиком</div>
          <div style={{ font: 'var(--text-body)', color: 'var(--text-2)', marginBottom: 22 }}>Пройди тест — соберём персональную карту развития от твоей точки до первого оффера.</div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ font: '600 13px/1.2 var(--font-sans)', color: 'var(--text)', marginBottom: 10 }}>Твой уровень сейчас</div>
            <Radio defaultValue="zero" options={[
              { value: 'zero', label: 'С нуля', hint: 'Никогда не тестировал' },
              { value: 'some', label: 'Что-то знаю', hint: 'Читал статьи, пробовал сам' },
              { value: 'it', label: 'Работаю в IT', hint: 'Хочу перейти в QA' },
            ]} />
          </div>
          <Input label="Email" icon="mail" placeholder="you@example.com" hint="Пришлём код входа — без паролей" style={{ marginBottom: 22 }} />
          <Button size="lg" fullWidth icon="rocket" onClick={onStart}>Начать бесплатно</Button>
          <div style={{ textAlign: 'center', marginTop: 14 }}>
            <Badge tone="neutral" caps={false}>Гарантий не обещаем. Обещаем практику.</Badge>
          </div>
        </Card>
        <ArchiBubble variant="eureka" showAvatar avatarSrc="../../assets/mascot-hello.webp" style={{ marginTop: 18 }}>
          Привет! Я Архимед. Доведу тебя до «Эврики!» — и до оффера.
        </ArchiBubble>
      </div>
    </div>
  );
}
