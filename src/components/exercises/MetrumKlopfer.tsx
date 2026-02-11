import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Silbe {
  text: string;
  betont: boolean;
}

interface Vers {
  id: string;
  silben: Silbe[];
  versfuss: string;
  wirkung: string;
  quelle?: string;
}

interface MetrumKlopferProps {
  verse: Vers[];
  title?: string;
  onComplete?: () => void;
}

function MetrumKlopferInner({ verse, title = 'Metrum-Klopfer', onComplete }: MetrumKlopferProps) {
  const [currentVersIndex, setCurrentVersIndex] = useState(0);
  const [selections, setSelections] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const [completedVerse, setCompletedVerse] = useState<Set<number>>(new Set());

  const currentVers = verse[currentVersIndex];

  const toggleSilbe = (index: number) => {
    if (checked) return;
    setSelections(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const check = () => {
    setChecked(true);
    const allCorrect = currentVers.silben.every(
      (s, i) => s.betont === selections.has(i)
    );
    if (allCorrect) {
      const newCompleted = new Set([...completedVerse, currentVersIndex]);
      setCompletedVerse(newCompleted);
      if (newCompleted.size === verse.length) onComplete?.();
    }
  };

  const next = () => {
    setSelections(new Set());
    setChecked(false);
    setCurrentVersIndex(prev => Math.min(prev + 1, verse.length - 1));
  };

  const reset = () => {
    setSelections(new Set());
    setChecked(false);
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Klicke auf die <strong>betonten</strong> Silben (Hebungen).
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        Vers {currentVersIndex + 1} von {verse.length}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
        {currentVers.silben.map((silbe, i) => {
          const selected = selections.has(i);
          let bg = selected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-100)';
          let color = selected ? '#fff' : 'var(--ifm-font-color-base)';
          let border = selected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)';

          if (checked) {
            const isCorrectlyBetont = silbe.betont && selected;
            const isCorrectlyUnbetont = !silbe.betont && !selected;
            const isWrong = (silbe.betont && !selected) || (!silbe.betont && selected);

            if (isCorrectlyBetont) { bg = '#059669'; color = '#fff'; border = '#059669'; }
            else if (isCorrectlyUnbetont) { bg = 'var(--ifm-color-emphasis-100)'; border = '#059669'; }
            else if (isWrong && silbe.betont) { bg = '#dbeafe'; border = '#3b82f6'; color = '#1e40af'; }
            else if (isWrong && !silbe.betont) { bg = '#fef2f2'; border = '#ef4444'; color = '#991b1b'; }
          }

          return (
            <button
              key={i}
              onClick={() => toggleSilbe(i)}
              disabled={checked}
              aria-label={`Silbe "${silbe.text}"${selected ? ' (betont markiert)' : ''}`}
              aria-pressed={selected}
              style={{
                padding: '0.5rem 0.75rem',
                border: `2px solid ${border}`,
                borderRadius: '0.375rem',
                backgroundColor: bg,
                color,
                fontSize: '1.125rem',
                fontWeight: selected || (checked && silbe.betont) ? 700 : 400,
                cursor: checked ? 'default' : 'pointer',
                transition: 'all 0.15s',
                minWidth: '2.5rem',
                textAlign: 'center',
              }}
            >
              {silbe.text}
            </button>
          );
        })}
      </div>

      {checked && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem', fontSize: '1.5rem', fontFamily: 'monospace' }}>
            {currentVers.silben.map((s, i) => (
              <span key={i} style={{ textAlign: 'center', width: '2.5rem' }}>{s.betont ? '▬' : '◡'}</span>
            ))}
          </div>
          <div style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
          }}>
            <strong>Versfuß:</strong> {currentVers.versfuss}<br />
            <strong>Wirkung:</strong> {currentVers.wirkung}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={selections.size === 0}>Prüfen</button>
        ) : (
          <>
            <button onClick={reset} className="button button--secondary">Nochmal</button>
            {currentVersIndex < verse.length - 1 && (
              <button onClick={next} className="button button--primary">Nächster Vers</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export const MetrumKlopfer = withErrorBoundary(MetrumKlopferInner, 'MetrumKlopfer');
