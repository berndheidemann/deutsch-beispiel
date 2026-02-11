import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface EnjambementVers {
  text: string;
  enjambementNachZeile: boolean;
}

interface EnjambementFinderProps {
  titel: string;
  autor: string;
  verse: EnjambementVers[];
  erklaerung: string;
  title?: string;
  onComplete?: () => void;
}

function EnjambementFinderInner({
  titel: gedichtTitel,
  autor,
  verse,
  erklaerung,
  title = 'Enjambement erkennen',
  onComplete,
}: EnjambementFinderProps) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);

  // Only lines that have a next line can have an enjambement
  const clickableBreaks = verse.slice(0, -1);
  const correctBreaks = new Set(
    verse.map((v, i) => (v.enjambementNachZeile ? i : -1)).filter(i => i >= 0)
  );

  const toggleBreak = (index: number) => {
    if (checked) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const check = () => {
    setChecked(true);
    // Check if user found all enjambements and marked no wrong ones
    const allCorrect =
      correctBreaks.size === selected.size &&
      [...correctBreaks].every(i => selected.has(i));
    if (allCorrect) onComplete?.();
  };

  const reset = () => {
    setSelected(new Set());
    setChecked(false);
  };

  const getBreakStatus = (index: number): 'correct' | 'missed' | 'wrong' | 'neutral' => {
    if (!checked) return 'neutral';
    const isEnjambement = correctBreaks.has(index);
    const isSelected = selected.has(index);
    if (isEnjambement && isSelected) return 'correct';
    if (isEnjambement && !isSelected) return 'missed';
    if (!isEnjambement && isSelected) return 'wrong';
    return 'neutral';
  };

  const BREAK_STYLES: Record<string, React.CSSProperties> = {
    correct: { backgroundColor: '#dcfce7', borderColor: '#059669' },
    missed: { backgroundColor: '#dbeafe', borderColor: '#3b82f6' },
    wrong: { backgroundColor: '#fef2f2', borderColor: '#ef4444' },
    neutral: { backgroundColor: 'transparent', borderColor: 'transparent' },
  };

  const foundCount = checked
    ? [...correctBreaks].filter(i => selected.has(i)).length
    : 0;

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.5rem' }}>
        Klicke auf die <strong>Zeilenumbrüche</strong> (die Markierungsflächen zwischen den Versen), an denen ein <strong>Enjambement</strong> (Zeilensprung) vorliegt — also dort, wo ein Satz oder eine Sinneinheit über das Versende hinaus in den nächsten Vers weitergeführt wird.
      </p>

      <div style={{
        fontSize: '0.8125rem',
        color: 'var(--ifm-color-emphasis-500)',
        marginBottom: '1rem',
        fontStyle: 'italic',
      }}>
        {autor}: „{gedichtTitel}"
      </div>

      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.05rem',
        lineHeight: 1.3,
      }}>
        {verse.map((vers, i) => {
          const isLastVers = i === verse.length - 1;
          const breakStatus = !isLastVers ? getBreakStatus(i) : 'neutral';
          const isSelected = selected.has(i);

          return (
            <React.Fragment key={i}>
              {/* Verse line */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0',
              }}>
                <span style={{
                  width: '1.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--ifm-color-emphasis-400)',
                  textAlign: 'right',
                  flexShrink: 0,
                  fontFamily: 'monospace',
                }}>
                  {i + 1}
                </span>
                <span>{vers.text}</span>
              </div>

              {/* Clickable break between lines */}
              {!isLastVers && (
                <button
                  onClick={() => toggleBreak(i)}
                  disabled={checked}
                  aria-label={`Zeilenumbruch nach Vers ${i + 1}${isSelected ? ' (als Enjambement markiert)' : ''}`}
                  aria-pressed={isSelected}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '1.5rem',
                    marginLeft: '2rem',
                    border: `2px dashed ${isSelected && !checked ? 'var(--ifm-color-primary)' : (BREAK_STYLES[breakStatus]?.borderColor || 'var(--ifm-color-emphasis-200)')}`,
                    borderRadius: '0.25rem',
                    backgroundColor: isSelected && !checked
                      ? 'var(--ifm-color-primary-lightest, #eff6ff)'
                      : (BREAK_STYLES[breakStatus]?.backgroundColor || 'transparent'),
                    cursor: checked ? 'default' : 'pointer',
                    transition: 'all 0.15s',
                    position: 'relative',
                    outline: 'none',
                  }}
                >
                  {(isSelected || checked) && (
                    <span style={{
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      fontFamily: 'system-ui, sans-serif',
                      color: breakStatus === 'correct' ? '#059669'
                        : breakStatus === 'wrong' ? '#ef4444'
                        : breakStatus === 'missed' ? '#3b82f6'
                        : 'var(--ifm-color-primary)',
                    }}>
                      {checked
                        ? (breakStatus === 'correct' ? 'Enjambement'
                          : breakStatus === 'wrong' ? 'Kein Enjambement'
                          : breakStatus === 'missed' ? 'Enjambement (übersehen)'
                          : '')
                        : 'Enjambement'
                      }
                    </span>
                  )}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {checked && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          lineHeight: 1.6,
        }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1e40af' }}>
            Ergebnis: {foundCount} von {correctBreaks.size} Enjambements erkannt
          </div>
          <div style={{ fontSize: '0.875rem' }}>{erklaerung}</div>
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary">Prüfen</button>
        ) : (
          <button onClick={reset} className="button button--secondary">Nochmal versuchen</button>
        )}
      </div>
    </div>
  );
}

export const EnjambementFinder = withErrorBoundary(EnjambementFinderInner, 'EnjambementFinder');
