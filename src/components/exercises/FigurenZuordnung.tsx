import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Figur {
  id: string;
  name: string;
  beschreibung?: string;
}

interface ZuordnungsItem {
  id: string;
  text: string;
  type: 'eigenschaft' | 'zitat' | 'handlung';
  correctFigurId: string;
  explanation: string;
}

interface FigurenZuordnungProps {
  figuren: Figur[];
  items: ZuordnungsItem[];
  title?: string;
  onComplete?: () => void;
}

function FigurenZuordnungInner({ figuren, items, title = 'Figuren-Zuordnung', onComplete }: FigurenZuordnungProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<string, { figurId: string; correct: boolean }>>({});

  const current = items[currentIndex];
  const currentResult = results[current?.id];
  const correctCount = Object.values(results).filter(r => r.correct).length;

  const selectFigur = (figurId: string) => {
    if (currentResult) return;
    const correct = figurId === current.correctFigurId;
    setResults(prev => ({ ...prev, [current.id]: { figurId, correct } }));
    if (correct && Object.keys(results).length + 1 === items.length) {
      setTimeout(() => onComplete?.(), 1000);
    }
  };

  const next = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const reset = () => {
    setCurrentIndex(0);
    setResults({});
  };

  const typeLabel = { eigenschaft: 'Eigenschaft', zitat: 'Zitat', handlung: 'Handlung' };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Ordne Zitate, Eigenschaften und Handlungen den passenden Figuren zu.
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        {currentIndex + 1} / {items.length} | Richtig: {correctCount}
      </div>

      {current && (
        <>
          <div style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            marginBottom: '1rem',
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--ifm-color-emphasis-500)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {typeLabel[current.type]}
            </span>
            <div style={{
              fontSize: current.type === 'zitat' ? '1.0625rem' : '1rem',
              fontStyle: current.type === 'zitat' ? 'italic' : 'normal',
              fontFamily: current.type === 'zitat' ? 'Georgia, serif' : 'inherit',
              marginTop: '0.25rem',
              lineHeight: 1.6,
            }}>
              {current.type === 'zitat' ? `„${current.text}"` : current.text}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(figuren.length, 3)}, 1fr)`, gap: '0.5rem' }}>
            {figuren.map(figur => {
              const isSelected = currentResult?.figurId === figur.id;
              const isCorrect = currentResult && figur.id === current.correctFigurId;
              let border = 'var(--ifm-color-emphasis-300)';
              let bg = 'transparent';

              if (currentResult) {
                if (isCorrect) { border = '#059669'; bg = '#ecfdf5'; }
                else if (isSelected && !currentResult.correct) { border = '#ef4444'; bg = '#fef2f2'; }
              }

              return (
                <button
                  key={figur.id}
                  onClick={() => selectFigur(figur.id)}
                  disabled={!!currentResult}
                  style={{
                    padding: '0.75rem',
                    border: `2px solid ${border}`,
                    borderRadius: '0.5rem',
                    backgroundColor: bg,
                    cursor: currentResult ? 'default' : 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{figur.name}</div>
                  {figur.beschreibung && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-500)', marginTop: '0.125rem' }}>
                      {figur.beschreibung}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {currentResult && (
            <div
              role="alert"
              style={{
                marginTop: '0.75rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: currentResult.correct ? '#ecfdf5' : '#fef2f2',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
              }}
            >
              {currentResult.correct ? '✓ Richtig!' : '✗ Falsch.'} {current.explanation}
            </div>
          )}

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            {currentResult && currentIndex < items.length - 1 && (
              <button onClick={next} className="button button--primary">Weiter</button>
            )}
            {Object.keys(results).length === items.length && (
              <button onClick={reset} className="button button--secondary">Nochmal</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export const FigurenZuordnung = withErrorBoundary(FigurenZuordnungInner, 'FigurenZuordnung');
