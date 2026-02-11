import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

type BausteinTyp = 'these' | 'argument' | 'beleg' | 'beispiel' | 'gegenargument' | 'entkraeftung' | 'fazit';

interface Baustein {
  id: string;
  typ: BausteinTyp;
  text: string;
}

interface ArgumentBuilderProps {
  bausteine: Baustein[];
  correctOrder: string[];
  title?: string;
  onComplete?: () => void;
}

const typLabels: Record<BausteinTyp, { label: string; color: string }> = {
  these: { label: 'These', color: '#3b82f6' },
  argument: { label: 'Argument', color: '#22c55e' },
  beleg: { label: 'Beleg', color: '#14b8a6' },
  beispiel: { label: 'Beispiel', color: '#8b5cf6' },
  gegenargument: { label: 'Gegenargument', color: '#f59e0b' },
  entkraeftung: { label: 'Entkräftung', color: '#ec4899' },
  fazit: { label: 'Fazit', color: '#ef4444' },
};

function ArgumentBuilderInner({ bausteine, correctOrder, title = 'Argumentations-Builder', onComplete }: ArgumentBuilderProps) {
  const [order, setOrder] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const available = bausteine.filter(b => !order.includes(b.id));

  const addToOrder = (id: string) => {
    if (checked) return;
    setOrder(prev => [...prev, id]);
  };

  const removeFromOrder = (index: number) => {
    if (checked) return;
    setOrder(prev => prev.filter((_, i) => i !== index));
  };

  const check = () => {
    setChecked(true);
    const isCorrect = order.length === correctOrder.length &&
      order.every((id, i) => id === correctOrder[i]);
    if (isCorrect) onComplete?.();
  };

  const reset = () => {
    setOrder([]);
    setChecked(false);
  };

  const getValidation = (index: number): 'correct' | 'incorrect' | null => {
    if (!checked) return null;
    return order[index] === correctOrder[index] ? 'correct' : 'incorrect';
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Baue eine Erörterungsstruktur auf, indem du die Bausteine in die richtige Reihenfolge bringst.
      </p>

      {/* Available bausteine */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.5rem' }}>Verfügbare Bausteine:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {available.map(b => {
            const t = typLabels[b.typ];
            return (
              <button
                key={b.id}
                onClick={() => addToOrder(b.id)}
                disabled={checked}
                style={{
                  padding: '0.5rem 0.75rem',
                  border: `2px solid ${t.color}`,
                  borderRadius: '0.5rem',
                  backgroundColor: 'transparent',
                  cursor: checked ? 'default' : 'pointer',
                  textAlign: 'left',
                  maxWidth: '300px',
                }}
              >
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: t.color, textTransform: 'uppercase' }}>{t.label}</span>
                <div style={{ fontSize: '0.8125rem', marginTop: '0.125rem' }}>{b.text}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Built structure */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.5rem' }}>Deine Struktur:</div>
        <div style={{ minHeight: '3rem', border: '2px dashed var(--ifm-color-emphasis-300)', borderRadius: '0.5rem', padding: '0.75rem' }}>
          {order.length === 0 && (
            <div style={{ color: 'var(--ifm-color-emphasis-400)', fontSize: '0.875rem', textAlign: 'center', padding: '0.5rem' }}>
              Klicke oben auf Bausteine, um sie hier einzufügen.
            </div>
          )}
          {order.map((id, i) => {
            const b = bausteine.find(b => b.id === id)!;
            const t = typLabels[b.typ];
            const validation = getValidation(i);
            let borderColor = t.color;
            if (validation === 'correct') borderColor = '#059669';
            if (validation === 'incorrect') borderColor = '#ef4444';

            return (
              <div
                key={`${id}-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '0.375rem',
                  marginBottom: '0.375rem',
                  backgroundColor: validation === 'correct' ? '#ecfdf5' : validation === 'incorrect' ? '#fef2f2' : 'transparent',
                }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ifm-color-emphasis-400)', width: '1.25rem' }}>{i + 1}.</span>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: t.color, textTransform: 'uppercase', minWidth: '5rem' }}>{t.label}</span>
                <span style={{ flex: 1, fontSize: '0.8125rem' }}>{b.text}</span>
                {!checked && (
                  <button onClick={() => removeFromOrder(i)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--ifm-color-emphasis-400)', fontSize: '1rem' }} aria-label="Entfernen">✕</button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={order.length !== bausteine.length}>Prüfen</button>
        ) : (
          <button onClick={reset} className="button button--secondary">Nochmal</button>
        )}
      </div>
    </div>
  );
}

export const ArgumentBuilder = withErrorBoundary(ArgumentBuilderInner, 'ArgumentBuilder');
