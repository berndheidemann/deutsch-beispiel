import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface AnalyseSchritt {
  id: string;
  title: string;
  aufgabe: string;
  type: 'freitext' | 'multiple-choice';
  options?: { text: string; correct: boolean; explanation: string }[];
  musterloesung?: string;
  checkliste?: string[];
  hint?: string;
}

interface SchrittweiseAnalyseProps {
  schritte: AnalyseSchritt[];
  title?: string;
  onComplete?: () => void;
}

function SchrittweiseAnalyseInner({ schritte, title = 'Schrittweise Analyse', onComplete }: SchrittweiseAnalyseProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [mcSelections, setMcSelections] = useState<Record<string, number>>({});
  const [checklistStates, setChecklistStates] = useState<Record<string, Set<number>>>({}); // eslint-disable-line

  const schritt = schritte[currentStep];
  const isSubmitted = submitted.has(schritt.id);
  const isLast = currentStep === schritte.length - 1;

  const submitStep = () => {
    setSubmitted(prev => new Set([...prev, schritt.id]));
    if (isLast) onComplete?.();
  };

  const nextStep = () => {
    if (currentStep < schritte.length - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</div>

      {/* Progress */}
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
        {schritte.map((s, i) => (
          <div
            key={s.id}
            style={{
              flex: 1,
              height: '0.375rem',
              borderRadius: '0.1875rem',
              backgroundColor: submitted.has(s.id) ? '#059669' : i === currentStep ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-200)',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </div>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.5rem' }}>
        Schritt {currentStep + 1} von {schritte.length}
      </div>

      <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{schritt.title}</div>
      <p style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem', lineHeight: 1.6 }}>{schritt.aufgabe}</p>

      {schritt.hint && !isSubmitted && (
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--ifm-color-primary)', fontWeight: 500, fontSize: '0.875rem' }}>Hinweis anzeigen</summary>
          <div style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>{schritt.hint}</div>
        </details>
      )}

      {schritt.type === 'freitext' && (
        <>
          <textarea
            value={answers[schritt.id] || ''}
            onChange={e => setAnswers(prev => ({ ...prev, [schritt.id]: e.target.value }))}
            disabled={isSubmitted}
            placeholder="Schreibe deine Antwort hier…"
            style={{
              width: '100%',
              minHeight: '8rem',
              padding: '0.75rem',
              border: '2px solid var(--ifm-color-emphasis-300)',
              borderRadius: '0.5rem',
              fontSize: '0.9375rem',
              fontFamily: 'inherit',
              lineHeight: 1.6,
              resize: 'vertical',
            }}
            aria-label={`Antwort für Schritt ${currentStep + 1}`}
          />
          {isSubmitted && schritt.musterloesung && (
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', border: '1px solid #bfdbfe' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1e40af' }}>Musterlösung:</div>
              <div style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{schritt.musterloesung}</div>
            </div>
          )}
          {isSubmitted && schritt.checkliste && (
            <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#166534' }}>Checkliste zur Selbsteinschätzung:</div>
              {schritt.checkliste.map((item, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setChecklistStates(prev => {
                        const set = new Set(prev[schritt.id] || []);
                        if (e.target.checked) set.add(i);
                        else set.delete(i);
                        return { ...prev, [schritt.id]: set };
                      });
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </>
      )}

      {schritt.type === 'multiple-choice' && schritt.options && (
        <div>
          {schritt.options.map((opt, i) => {
            const isSelected = mcSelections[schritt.id] === i;
            let border = isSelected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)';
            let bg = isSelected ? 'var(--ifm-color-primary-lightest)' : 'transparent';

            if (isSubmitted) {
              if (opt.correct) { border = '#059669'; bg = '#ecfdf5'; }
              else if (isSelected) { border = '#ef4444'; bg = '#fef2f2'; }
              else { bg = 'transparent'; border = 'var(--ifm-color-emphasis-200)'; }
            }

            return (
              <div key={i}>
                <button
                  onClick={() => !isSubmitted && setMcSelections(prev => ({ ...prev, [schritt.id]: i }))}
                  disabled={isSubmitted}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.625rem 1rem', border: `2px solid ${border}`, borderRadius: '0.5rem', backgroundColor: bg, marginBottom: '0.375rem', cursor: isSubmitted ? 'default' : 'pointer' }}
                >
                  {opt.text}
                </button>
                {isSubmitted && (
                  <div style={{ marginLeft: '1rem', marginBottom: '0.5rem', fontSize: '0.8125rem', color: opt.correct ? '#065f46' : '#991b1b' }}>
                    {opt.correct ? '✓' : '✗'} {opt.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {currentStep > 0 && <button onClick={prevStep} className="button button--secondary">Zurück</button>}
        {!isSubmitted ? (
          <button
            onClick={submitStep}
            className="button button--primary"
            disabled={schritt.type === 'freitext' ? !(answers[schritt.id]?.trim()) : mcSelections[schritt.id] === undefined}
          >
            {schritt.type === 'freitext' ? 'Abgeben' : 'Prüfen'}
          </button>
        ) : (
          !isLast && <button onClick={nextStep} className="button button--primary">Nächster Schritt</button>
        )}
      </div>
    </div>
  );
}

export const SchrittweiseAnalyse = withErrorBoundary(SchrittweiseAnalyseInner, 'SchrittweiseAnalyse');
