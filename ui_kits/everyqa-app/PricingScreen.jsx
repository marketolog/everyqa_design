import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { Dialog } from '../../components/feedback/Dialog.jsx';

const PLANS = [
  { id: 'start', name: 'Старт', price: '0 ₽', period: 'навсегда', feats: ['Тест уровня и карта развития', 'Первый модуль целиком', 'Архимед: 10 вопросов в день'] },
  { id: 'accel', name: 'Акселератор', price: '4 990 ₽', period: 'в месяц', hot: true, feats: ['Вся теория и тренажёры', 'Архимед без лимитов', 'Проверка баг-репортов', 'Мок-собеседования'] },
  { id: 'mentor', name: 'Наставник+', price: '9 990 ₽', period: 'в месяц', feats: ['Всё из Акселератора', 'Живой ментор раз в неделю', 'Разбор резюме и портфолио'] },
];

export function PricingScreen({ pushToast }) {
  const [plan, setPlan] = React.useState('accel');
  const [confirm, setConfirm] = React.useState(false);
  return (
    <div>
      <div style={{ font: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', marginBottom: 6 }}>Тарифы</div>
      <div style={{ font: 'var(--text-small)', color: 'var(--text-2)', marginBottom: 22 }}>Гарантий трудоустройства не продаём — их не существует. Продаём практику и обратную связь.</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'stretch' }}>
        {PLANS.map((p) => (
          <Card key={p.id} interactive selected={plan === p.id} onClick={() => setPlan(p.id)} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {p.hot ? <Badge tone="gradient" style={{ position: 'absolute', top: 14, right: 14 }}>Выбор 80%</Badge> : null}
            <div style={{ font: 'var(--text-h3)', color: 'var(--text)' }}>{p.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '10px 0 16px' }}>
              <span style={{ font: '800 28px/1 var(--font-sans)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text)', whiteSpace: 'nowrap' }}>{p.price}</span>
              <span style={{ font: '500 12px/1 var(--font-sans)', color: 'var(--text-3)' }}>{p.period}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
              {p.feats.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, font: '500 13px/1.45 var(--font-sans)', color: 'var(--text-2)' }}>
                  <Icon name="check" size={15} color="var(--success)" style={{ marginTop: 2 }} />{f}
                </div>
              ))}
            </div>
            <Button variant={plan === p.id ? 'primary' : 'secondary'} fullWidth style={{ marginTop: 'auto' }} onClick={() => setConfirm(true)}>
              {p.id === 'start' ? 'Начать' : 'Выбрать'}
            </Button>
          </Card>
        ))}
      </div>
      <Dialog open={confirm} onClose={() => setConfirm(false)} title="Подтвердить тариф?"
        footer={<React.Fragment>
          <Button variant="ghost" onClick={() => setConfirm(false)}>Отмена</Button>
          <Button onClick={() => { setConfirm(false); pushToast({ tone: 'success', title: 'Тариф подключён', description: 'Чек отправили на почту' }); }}>Оплатить</Button>
        </React.Fragment>}>
        Спишем оплату за первый месяц. Отменить можно в любой момент — без квестов.
      </Dialog>
    </div>
  );
}
