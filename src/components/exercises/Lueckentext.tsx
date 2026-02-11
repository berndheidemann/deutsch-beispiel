import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Luecke {
  id: string;
  correctAnswers: string[];
  hint?: string;
}

interface LueckentextProps {
  textParts: string[];
  luecken: Luecke[];
  title?: string;
  onComplete?: () => void;
}

function LueckentextInner({ textParts, luecken, title, onComplete }: LueckentextProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, 'correct' | 'incorrect'>>({});
  const [attempts, setAttempts] = useState<Record<string, number>>({});
  const [showHints, setShowHints] = useState<Set<string>>(new Set());

  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,;:!?]/g, '');

  const checkAnswer = (luecke: Luecke, value: string) => {
    const isCorrect = luecke.correctAnswers.some(
      a => normalize(a) === normalize(value)
    );
    setChecked(prev => ({ ...prev, [luecke.id]: isCorrect ? 'correct' : 'incorrect' }));
    setAttempts(prev => ({ ...prev, [luecke.id]: (prev[luecke.id] || 0) + 1 }));

    if (isCorrect) {
      const newChecked = { ...checked, [luecke.id]: 'correct' as const };
      if (luecken.every(l => newChecked[l.id] === 'correct')) {
        onComplete?.();
      }
    } else if ((attempts[luecke.id] || 0) >= 1 && luecke.hint) {
      setShowHints(prev => new Set([...prev, luecke.id]));
    }
  };

  return (
    <div className="exercise-card">
      {title && <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>{title}</div>}

      <div style={{ lineHeight: 2, fontSize: '1rem' }}>
        {textParts.map((part, i) => (
          <React.Fragment key={i}>
            <span>{part}</span>
            {i < luecken.length && (() => {
              const luecke = luecken[i];
              const state = checked[luecke.id];
              const borderColor = state === 'correct' ? '#059669' : state === 'incorrect' ? '#ef4444' : 'var(--ifm-color-emphasis-400)';

              return (
                <span style={{ display: 'inline-block', verticalAlign: 'bottom' }}>
                  <input
                    type="text"
                    value={answers[luecke.id] || ''}
                    onChange={e => {
                      setAnswers(prev => ({ ...prev, [luecke.id]: e.target.value }));
                      if (state) setChecked(prev => { const n = { ...prev }; delete n[luecke.id]; return n; });
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && answers[luecke.id]) {
                        checkAnswer(luecke, answers[luecke.id]);
                      }
                    }}
                    onBlur={() => {
                      if (answers[luecke.id]) checkAnswer(luecke, answers[luecke.id]);
                    }}
                    disabled={state === 'correct'}
                    aria-label={`Lücke ${i + 1}`}
                    style={{
                      width: `${Math.max(8, (luecke.correctAnswers[0]?.length || 8) + 2)}ch`,
                      padding: '0.25rem 0.5rem',
                      border: `2px solid ${borderColor}`,
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      backgroundColor: state === 'correct' ? '#ecfdf5' : state === 'incorrect' ? '#fef2f2' : 'var(--ifm-background-color)',
                      outline: 'none',
                      textAlign: 'center',
                    }}
                    placeholder="..."
                  />
                  {state === 'correct' && <span style={{ color: '#059669', marginLeft: '0.25rem' }} aria-label="Richtig">✓</span>}
                  {state === 'incorrect' && <span style={{ color: '#ef4444', marginLeft: '0.25rem' }} aria-label="Falsch">✗</span>}
                  {showHints.has(luecke.id) && luecke.hint && (
                    <div style={{ fontSize: '0.8125rem', color: '#2563eb', marginTop: '0.25rem' }}>
                      Tipp: {luecke.hint}
                    </div>
                  )}
                </span>
              );
            })()}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export const Lueckentext = withErrorBoundary(LueckentextInner, 'Lueckentext');
