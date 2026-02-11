import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface SilbenCounterVers {
  id: string;
  text: string;
  silbenAnzahl: number;
  silbenAufteilung: string[];
  quelle?: string;
}

interface SilbenCounterProps {
  verse: SilbenCounterVers[];
  title?: string;
  onComplete?: () => void;
}

function SilbenCounterInner({ verse, title = 'Silben zählen', onComplete }: SilbenCounterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [completedVerse, setCompletedVerse] = useState<Set<number>>(new Set());

  const current = verse[currentIndex];
  const userAnswer = parseInt(input, 10);
  const isCorrect = checked && userAnswer === current.silbenAnzahl;

  const check = () => {
    if (isNaN(userAnswer)) return;
    setChecked(true);
    if (userAnswer === current.silbenAnzahl) {
      const next = new Set([...completedVerse, currentIndex]);
      setCompletedVerse(next);
      if (next.size === verse.length) onComplete?.();
    }
  };

  const next = () => {
    setInput('');
    setChecked(false);
    setCurrentIndex(prev => Math.min(prev + 1, verse.length - 1));
  };

  const reset = () => {
    setInput('');
    setChecked(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !checked && input) check();
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Zähle die <strong>Silben</strong> im folgenden Vers.
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        Vers {currentIndex + 1} von {verse.length}
        {completedVerse.size > 0 && (
          <span style={{ marginLeft: '0.75rem', color: '#059669' }}>
            ({completedVerse.size} richtig)
          </span>
        )}
      </div>

      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.25rem',
        lineHeight: 1.8,
        padding: '1rem 1.25rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        borderRadius: '0.5rem',
        borderLeft: '4px solid var(--ifm-color-primary)',
        marginBottom: '1rem',
      }}>
        {current.text}
      </div>

      {current.quelle && (
        <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '1rem', fontStyle: 'italic' }}>
          {current.quelle}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <label htmlFor={`silben-input-${current.id}`} style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
          Anzahl der Silben:
        </label>
        <input
          id={`silben-input-${current.id}`}
          type="number"
          min={1}
          max={30}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={checked}
          style={{
            width: '4rem',
            padding: '0.5rem',
            fontSize: '1.125rem',
            fontWeight: 700,
            textAlign: 'center',
            border: `2px solid ${checked ? (isCorrect ? '#059669' : '#ef4444') : 'var(--ifm-color-emphasis-300)'}`,
            borderRadius: '0.375rem',
            backgroundColor: checked ? (isCorrect ? '#ecfdf5' : '#fef2f2') : 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            outline: 'none',
          }}
          aria-label="Silbenanzahl eingeben"
        />
        {checked && (
          <span style={{
            fontWeight: 700,
            fontSize: '1.125rem',
            color: isCorrect ? '#059669' : '#ef4444',
          }}>
            {isCorrect ? 'Richtig!' : `Falsch — es sind ${current.silbenAnzahl} Silben.`}
          </span>
        )}
      </div>

      {checked && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          marginBottom: '1rem',
        }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1e40af', fontSize: '0.875rem' }}>
            Silbenaufteilung:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', alignItems: 'center' }}>
            {current.silbenAufteilung.map((silbe, i) => (
              <React.Fragment key={i}>
                <span style={{
                  padding: '0.375rem 0.625rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '0.25rem',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  fontFamily: 'Georgia, serif',
                }}>
                  {silbe}
                </span>
                {i < current.silbenAufteilung.length - 1 && (
                  <span style={{ color: '#93c5fd', fontSize: '0.75rem', fontWeight: 700 }}>|</span>
                )}
              </React.Fragment>
            ))}
            <span style={{
              marginLeft: '0.5rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: '#059669',
              color: '#fff',
              borderRadius: '1rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
            }}>
              = {current.silbenAnzahl} Silben
            </span>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={!input}>
            Prüfen
          </button>
        ) : (
          <>
            <button onClick={reset} className="button button--secondary">Nochmal</button>
            {currentIndex < verse.length - 1 && (
              <button onClick={next} className="button button--primary">Nächster Vers</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export const SilbenCounter = withErrorBoundary(SilbenCounterInner, 'SilbenCounter');
