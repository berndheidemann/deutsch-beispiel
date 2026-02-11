import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface TextItem {
  id: string;
  text: string;
  quelle?: string;
  correctEpocheId: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

interface EpocheOption {
  id: string;
  name: string;
  zeitraum: string;
  color: string;
}

interface EpochenZuordnungProps {
  texte: TextItem[];
  epochen: EpocheOption[];
  title?: string;
  onComplete?: () => void;
}

function EpochenZuordnungInner({ texte, epochen, title = 'Epochen-Zuordnung', onComplete }: EpochenZuordnungProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<string, { selected: string; correct: boolean }>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const currentText = texte[currentIndex];
  const currentResult = results[currentText?.id];
  const allDone = Object.keys(results).length === texte.length;

  const selectEpoche = (epocheId: string) => {
    if (currentResult) return;
    const correct = epocheId === currentText.correctEpocheId;
    setResults(prev => ({ ...prev, [currentText.id]: { selected: epocheId, correct } }));
    setShowFeedback(true);

    if (Object.keys(results).length + 1 === texte.length) {
      setTimeout(() => onComplete?.(), 1500);
    }
  };

  const next = () => {
    setShowFeedback(false);
    if (currentIndex < texte.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setResults({});
    setShowFeedback(false);
  };

  const correctCount = Object.values(results).filter(r => r.correct).length;

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Ordne den Textauszug der passenden Epoche zu.
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        Text {currentIndex + 1} von {texte.length} | Richtig: {correctCount}
      </div>

      {currentText && (
        <>
          <blockquote className="textauszug">
            {currentText.text}
            {currentText.quelle && <cite>{currentText.quelle}</cite>}
          </blockquote>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem', marginTop: '1rem' }}>
            {epochen.map(epoche => {
              const isSelected = currentResult?.selected === epoche.id;
              const isCorrectAnswer = currentResult && epoche.id === currentText.correctEpocheId;
              let borderColor = epoche.color;
              let bg = 'transparent';

              if (currentResult) {
                if (isCorrectAnswer) { borderColor = '#059669'; bg = '#ecfdf5'; }
                else if (isSelected && !currentResult.correct) { borderColor = '#ef4444'; bg = '#fef2f2'; }
                else { bg = 'transparent'; }
              }

              return (
                <button
                  key={epoche.id}
                  onClick={() => selectEpoche(epoche.id)}
                  disabled={!!currentResult}
                  style={{
                    padding: '0.75rem',
                    border: `2px solid ${borderColor}`,
                    borderRadius: '0.5rem',
                    backgroundColor: bg,
                    cursor: currentResult ? 'default' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{epoche.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-500)' }}>{epoche.zeitraum}</div>
                </button>
              );
            })}
          </div>

          {showFeedback && currentResult && (
            <div
              role="alert"
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: currentResult.correct ? '#ecfdf5' : '#fef2f2',
                border: `1px solid ${currentResult.correct ? '#a7f3d0' : '#fecaca'}`,
                lineHeight: 1.6,
                fontSize: '0.9375rem',
              }}
            >
              {currentResult.correct
                ? `✓ Richtig! ${currentText.feedbackCorrect}`
                : `✗ Nicht ganz. ${currentText.feedbackIncorrect}`}
            </div>
          )}

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            {currentResult && currentIndex < texte.length - 1 && (
              <button onClick={next} className="button button--primary">Nächster Text</button>
            )}
            {allDone && (
              <button onClick={reset} className="button button--secondary">Nochmal</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export const EpochenZuordnung = withErrorBoundary(EpochenZuordnungInner, 'EpochenZuordnung');
