import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Option {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
}

interface MultipleChoiceProps {
  question: string;
  options: Option[];
  multiSelect?: boolean;
  onComplete?: (correct: boolean) => void;
}

function MultipleChoiceInner({ question, options, multiSelect = false, onComplete }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id: string) => {
    if (submitted) return;
    setSelected(prev => {
      const next = new Set(multiSelect ? prev : []);
      if (prev.has(id) && multiSelect) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSubmit = () => {
    if (selected.size === 0) return;
    setSubmitted(true);
    const isCorrect = options.every(o =>
      o.correct ? selected.has(o.id) : !selected.has(o.id)
    );
    onComplete?.(isCorrect);
  };

  const handleReset = () => {
    setSelected(new Set());
    setSubmitted(false);
  };

  const getOptionStyle = (option: Option): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '2px solid',
      cursor: submitted ? 'default' : 'pointer',
      transition: 'all 0.2s',
      marginBottom: '0.5rem',
      width: '100%',
      background: 'none',
      fontFamily: 'inherit',
      fontSize: 'inherit',
    };

    if (!submitted) {
      return {
        ...base,
        borderColor: selected.has(option.id) ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-200)',
        backgroundColor: selected.has(option.id) ? 'var(--ifm-color-primary-lightest)' : 'transparent',
      };
    }

    if (option.correct) {
      return { ...base, borderColor: '#059669', backgroundColor: '#ecfdf5' };
    }
    if (selected.has(option.id) && !option.correct) {
      return { ...base, borderColor: '#ef4444', backgroundColor: '#fef2f2' };
    }
    return { ...base, borderColor: 'var(--ifm-color-emphasis-200)', backgroundColor: 'transparent', opacity: 0.7 };
  };

  return (
    <div className="exercise-card" role="group" aria-label={question}>
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>{question}</div>

      <div role={multiSelect ? 'group' : 'radiogroup'} aria-label="Antwortmöglichkeiten">
        {options.map(option => (
          <div key={option.id}>
            <button
              onClick={() => handleSelect(option.id)}
              disabled={submitted}
              role={multiSelect ? 'checkbox' : 'radio'}
              aria-checked={selected.has(option.id)}
              style={getOptionStyle(option)}
            >
              <span style={{
                width: '1.25rem',
                height: '1.25rem',
                borderRadius: multiSelect ? '0.25rem' : '50%',
                border: '2px solid',
                borderColor: selected.has(option.id) ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '0.125rem',
                backgroundColor: selected.has(option.id) ? 'var(--ifm-color-primary)' : 'transparent',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}>
                {selected.has(option.id) && '✓'}
              </span>
              <span style={{ textAlign: 'left' }}>{option.text}</span>
            </button>
            {submitted && (
              <div style={{
                marginLeft: '2rem',
                marginBottom: '0.75rem',
                padding: '0.5rem 0.75rem',
                fontSize: '0.875rem',
                color: option.correct ? '#065f46' : '#991b1b',
                backgroundColor: option.correct ? '#ecfdf5' : '#fef2f2',
                borderRadius: '0.375rem',
                lineHeight: 1.5,
              }}>
                {option.correct ? '✓ Richtig' : '✗ Falsch'}: {option.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected.size === 0}
            className="button button--primary"
            style={{ opacity: selected.size === 0 ? 0.5 : 1 }}
          >
            Prüfen
          </button>
        ) : (
          <button onClick={handleReset} className="button button--secondary">
            Nochmal versuchen
          </button>
        )}
      </div>
    </div>
  );
}

export const MultipleChoice = withErrorBoundary(MultipleChoiceInner, 'MultipleChoice');
