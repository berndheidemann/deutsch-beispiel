import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Vers {
  id: string;
  text: string;
  reimBuchstabe: string;
}

interface ReimschemaQuizProps {
  strophe: Vers[];
  reimschemaName: string;
  erklaerung: string;
  title?: string;
  onComplete?: () => void;
}

const COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'];
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];

function ReimschemaQuizInner({ strophe, reimschemaName, erklaerung, title = 'Reimschema bestimmen', onComplete }: ReimschemaQuizProps) {
  const [assignments, setAssignments] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  const maxGroups = strophe.length;

  const assignVers = (versId: string) => {
    if (checked) return;
    const current = assignments[versId];
    if (current !== undefined) {
      // Cycle through groups 0..maxGroups-1
      const next = (current + 1) % maxGroups;
      setAssignments(prev => ({ ...prev, [versId]: next }));
    } else {
      // First click: assign to group 0
      setAssignments(prev => ({ ...prev, [versId]: 0 }));
    }
  };

  const check = () => {
    setChecked(true);
    // Check if the pattern matches
    const correctPattern = strophe.map(v => v.reimBuchstabe).join('');
    const userGroups: Record<number, string> = {};
    let nextLetter = 0;
    const userPattern = strophe.map(v => {
      const group = assignments[v.id];
      if (group === undefined) return '?';
      if (!(group in userGroups)) {
        userGroups[group] = LETTERS[nextLetter++] || '?';
      }
      return userGroups[group];
    }).join('');

    if (userPattern === correctPattern) onComplete?.();
  };

  const reset = () => {
    setAssignments({});
    setChecked(false);
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Klicke auf die Verse, um ihnen Reim-Buchstaben zuzuweisen. Klicke mehrfach, um den Buchstaben zu wechseln. Verse mit dem gleichen Buchstaben reimen sich.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {strophe.map((vers) => {
          const group = assignments[vers.id];
          const color = group !== undefined ? COLORS[group % COLORS.length] : 'var(--ifm-color-emphasis-300)';
          const letter = group !== undefined ? LETTERS[group % LETTERS.length] : '?';

          let correctColor = '';
          if (checked) {
            const correctGroup = strophe.filter(v => v.reimBuchstabe === vers.reimBuchstabe).map(v => assignments[v.id]);
            const allSame = correctGroup.every(g => g === correctGroup[0]) && correctGroup[0] !== undefined;
            correctColor = allSame ? '#059669' : '#ef4444';
          }

          return (
            <div key={vers.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ flex: 1, fontFamily: 'Georgia, serif', fontSize: '1rem', lineHeight: 1.8 }}>{vers.text}</div>
              <button
                onClick={() => assignVers(vers.id)}
                disabled={checked}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  border: `2px solid ${checked ? correctColor : color}`,
                  backgroundColor: group !== undefined ? (checked ? correctColor : color) : 'transparent',
                  color: group !== undefined ? '#fff' : 'var(--ifm-color-emphasis-400)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: checked ? 'default' : 'pointer',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label={`Vers "${vers.text}" — Reimgruppe ${letter}`}
              >
                {letter}
              </button>
              {checked && (
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#059669', width: '1rem' }}>
                  {vers.reimBuchstabe}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {checked && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          borderRadius: '0.5rem',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          lineHeight: 1.6,
        }}>
          <strong>Reimschema:</strong> {reimschemaName} ({strophe.map(v => v.reimBuchstabe).join('')})<br />
          {erklaerung}
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={Object.keys(assignments).length < strophe.length}>Prüfen</button>
        ) : (
          <button onClick={reset} className="button button--secondary">Nochmal</button>
        )}
      </div>
    </div>
  );
}

export const ReimschemaQuiz = withErrorBoundary(ReimschemaQuizInner, 'ReimschemaQuiz');
