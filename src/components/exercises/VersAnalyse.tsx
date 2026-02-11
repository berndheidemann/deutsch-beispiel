import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface VersZeile {
  text: string;
  kadenz: 'männlich' | 'weiblich';
  reimBuchstabe: string;
}

interface VersAnalyseProps {
  strophe: VersZeile[];
  gedichtTitel: string;
  autor: string;
  correctMetrum: string;
  metrumOptionen: string[];
  correctStrophenform: string;
  strophenformOptionen: string[];
  erklaerung: string;
  title?: string;
  onComplete?: () => void;
}

const REIM_COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'];
const REIM_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];

function VersAnalyseInner({
  strophe,
  gedichtTitel,
  autor,
  correctMetrum,
  metrumOptionen,
  correctStrophenform,
  strophenformOptionen,
  erklaerung,
  title = 'Formale Gesamtanalyse',
  onComplete,
}: VersAnalyseProps) {
  const [kadenzAnswers, setKadenzAnswers] = useState<Record<number, 'männlich' | 'weiblich'>>({});
  const [reimAnswers, setReimAnswers] = useState<Record<number, number>>({});
  const [nextReimGroup, setNextReimGroup] = useState(0);
  const [selectedMetrum, setSelectedMetrum] = useState('');
  const [selectedStrophenform, setSelectedStrophenform] = useState('');
  const [checked, setChecked] = useState(false);

  const toggleKadenz = (lineIndex: number) => {
    if (checked) return;
    setKadenzAnswers(prev => {
      const current = prev[lineIndex];
      if (!current) return { ...prev, [lineIndex]: 'männlich' };
      if (current === 'männlich') return { ...prev, [lineIndex]: 'weiblich' };
      const next = { ...prev };
      delete next[lineIndex];
      return next;
    });
  };

  const cycleReim = (lineIndex: number) => {
    if (checked) return;
    const current = reimAnswers[lineIndex];
    if (current === undefined) {
      setReimAnswers(prev => ({ ...prev, [lineIndex]: nextReimGroup }));
      setNextReimGroup(prev => prev + 1);
    } else {
      const nextGroup = (current + 1) % (nextReimGroup + 1);
      if (nextGroup === nextReimGroup) {
        setReimAnswers(prev => ({ ...prev, [lineIndex]: nextGroup }));
        setNextReimGroup(prev => prev + 1);
      } else {
        setReimAnswers(prev => ({ ...prev, [lineIndex]: nextGroup }));
      }
    }
  };

  const allFilled =
    Object.keys(kadenzAnswers).length === strophe.length &&
    Object.keys(reimAnswers).length === strophe.length &&
    selectedMetrum !== '' &&
    selectedStrophenform !== '';

  const check = () => {
    setChecked(true);

    // Check all answers
    const kadenzCorrect = strophe.every((z, i) => kadenzAnswers[i] === z.kadenz);
    const metrumCorrect = selectedMetrum === correctMetrum;
    const strophenformCorrect = selectedStrophenform === correctStrophenform;

    // Check reimschema pattern
    const correctPattern = strophe.map(z => z.reimBuchstabe).join('');
    const userGroups: Record<number, string> = {};
    let nextLetter = 0;
    const userPattern = strophe.map((_, i) => {
      const group = reimAnswers[i];
      if (group === undefined) return '?';
      if (!(group in userGroups)) {
        userGroups[group] = REIM_LETTERS[nextLetter++] || '?';
      }
      return userGroups[group];
    }).join('');
    const reimCorrect = userPattern === correctPattern;

    if (kadenzCorrect && metrumCorrect && strophenformCorrect && reimCorrect) {
      onComplete?.();
    }
  };

  const reset = () => {
    setKadenzAnswers({});
    setReimAnswers({});
    setNextReimGroup(0);
    setSelectedMetrum('');
    setSelectedStrophenform('');
    setChecked(false);
  };

  const isKadenzCorrect = (i: number) => kadenzAnswers[i] === strophe[i].kadenz;
  const isMetrumCorrect = selectedMetrum === correctMetrum;
  const isStrophenformCorrect = selectedStrophenform === correctStrophenform;

  // Check reimschema
  const correctReimPattern = strophe.map(z => z.reimBuchstabe).join('');
  const getUserReimPattern = () => {
    const groups: Record<number, string> = {};
    let next = 0;
    return strophe.map((_, i) => {
      const g = reimAnswers[i];
      if (g === undefined) return '?';
      if (!(g in groups)) groups[g] = REIM_LETTERS[next++] || '?';
      return groups[g];
    }).join('');
  };
  const isReimCorrect = checked && getUserReimPattern() === correctReimPattern;

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.5rem' }}>
        Bestimme alle formalen Aspekte der folgenden Strophe: <strong>Kadenz</strong> jeder Zeile, <strong>Reimschema</strong>, <strong>Metrum</strong> und <strong>Strophenform</strong>.
      </p>
      <div style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '1rem', fontStyle: 'italic' }}>
        {autor}: „{gedichtTitel}"
      </div>

      {/* Stanza with interactive annotations */}
      <div style={{
        padding: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        marginBottom: '1.25rem',
      }}>
        {strophe.map((zeile, i) => {
          const kadenz = kadenzAnswers[i];
          const reimGroup = reimAnswers[i];
          const reimColor = reimGroup !== undefined ? REIM_COLORS[reimGroup % REIM_COLORS.length] : 'var(--ifm-color-emphasis-300)';
          const reimLetter = reimGroup !== undefined ? REIM_LETTERS[reimGroup % REIM_LETTERS.length] : '?';

          return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0',
            }}>
              {/* Line number */}
              <span style={{
                width: '1.25rem',
                fontSize: '0.75rem',
                color: 'var(--ifm-color-emphasis-400)',
                textAlign: 'right',
                flexShrink: 0,
                fontFamily: 'monospace',
              }}>
                {i + 1}
              </span>

              {/* Verse text */}
              <span style={{
                flex: 1,
                fontFamily: 'Georgia, serif',
                fontSize: '1.05rem',
                lineHeight: 1.6,
              }}>
                {zeile.text}
              </span>

              {/* Kadenz toggle */}
              <button
                onClick={() => toggleKadenz(i)}
                disabled={checked}
                title={kadenz ? `Kadenz: ${kadenz}` : 'Kadenz bestimmen (klicken)'}
                aria-label={`Kadenz Vers ${i + 1}: ${kadenz || 'nicht gesetzt'}`}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.375rem',
                  border: `2px solid ${checked
                    ? (isKadenzCorrect(i) ? '#059669' : '#ef4444')
                    : (kadenz ? '#8b5cf6' : 'var(--ifm-color-emphasis-300)')}`,
                  backgroundColor: checked
                    ? (isKadenzCorrect(i) ? '#ecfdf5' : '#fef2f2')
                    : (kadenz ? '#f5f3ff' : 'transparent'),
                  cursor: checked ? 'default' : 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.15s',
                }}
              >
                {kadenz === 'männlich' ? '♂' : kadenz === 'weiblich' ? '♀' : '·'}
              </button>

              {/* Reimschema circle */}
              <button
                onClick={() => cycleReim(i)}
                disabled={checked}
                title={`Reimgruppe: ${reimLetter}`}
                aria-label={`Reimgruppe Vers ${i + 1}: ${reimLetter}`}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  border: `2px solid ${checked
                    ? (isReimCorrect ? '#059669' : '#6b7280')
                    : reimColor}`,
                  backgroundColor: reimGroup !== undefined
                    ? (checked ? (isReimCorrect ? '#059669' : '#6b7280') : reimColor)
                    : 'transparent',
                  color: reimGroup !== undefined ? '#fff' : 'var(--ifm-color-emphasis-400)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: checked ? 'default' : 'pointer',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.15s',
                }}
              >
                {reimLetter}
              </button>

              {/* Show correct values after check */}
              {checked && (
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#059669',
                  width: '2.5rem',
                  textAlign: 'center',
                  flexShrink: 0,
                }}>
                  {strophe[i].kadenz === 'männlich' ? '♂' : '♀'} {strophe[i].reimBuchstabe}
                </span>
              )}
            </div>
          );
        })}

        {/* Legend */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.75rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--ifm-color-emphasis-200)',
          fontSize: '0.75rem',
          color: 'var(--ifm-color-emphasis-500)',
        }}>
          <span>♂ = männlich (stumpf) | ♀ = weiblich (klingend)</span>
          <span>Kreise = Reimgruppen</span>
        </div>
      </div>

      {/* Metrum selection */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontWeight: 600, fontSize: '0.9375rem', display: 'block', marginBottom: '0.5rem' }}>
          Metrum:
        </label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {metrumOptionen.map(opt => {
            const isSelected = selectedMetrum === opt;
            let borderColor = isSelected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)';
            let bg = isSelected ? 'var(--ifm-color-primary-lightest, #eff6ff)' : 'transparent';

            if (checked) {
              if (opt === correctMetrum) { borderColor = '#059669'; bg = '#ecfdf5'; }
              else if (isSelected) { borderColor = '#ef4444'; bg = '#fef2f2'; }
            }

            return (
              <button
                key={opt}
                onClick={() => !checked && setSelectedMetrum(opt)}
                disabled={checked}
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '1rem',
                  border: `2px solid ${borderColor}`,
                  backgroundColor: bg,
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: '0.875rem',
                  cursor: checked ? 'default' : 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Strophenform selection */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ fontWeight: 600, fontSize: '0.9375rem', display: 'block', marginBottom: '0.5rem' }}>
          Strophenform:
        </label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {strophenformOptionen.map(opt => {
            const isSelected = selectedStrophenform === opt;
            let borderColor = isSelected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)';
            let bg = isSelected ? 'var(--ifm-color-primary-lightest, #eff6ff)' : 'transparent';

            if (checked) {
              if (opt === correctStrophenform) { borderColor = '#059669'; bg = '#ecfdf5'; }
              else if (isSelected) { borderColor = '#ef4444'; bg = '#fef2f2'; }
            }

            return (
              <button
                key={opt}
                onClick={() => !checked && setSelectedStrophenform(opt)}
                disabled={checked}
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '1rem',
                  border: `2px solid ${borderColor}`,
                  backgroundColor: bg,
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: '0.875rem',
                  cursor: checked ? 'default' : 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback after check */}
      {checked && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          marginBottom: '1rem',
          lineHeight: 1.6,
        }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1e40af' }}>Auswertung</div>
          <div style={{ fontSize: '0.875rem' }}>
            <div style={{ marginBottom: '0.25rem' }}>
              Metrum: {isMetrumCorrect
                ? <span style={{ color: '#059669', fontWeight: 600 }}>{correctMetrum} — richtig!</span>
                : <span style={{ color: '#ef4444' }}>Richtig wäre: <strong>{correctMetrum}</strong></span>
              }
            </div>
            <div style={{ marginBottom: '0.25rem' }}>
              Reimschema: {isReimCorrect
                ? <span style={{ color: '#059669', fontWeight: 600 }}>{correctReimPattern} — richtig!</span>
                : <span style={{ color: '#ef4444' }}>Richtig wäre: <strong>{correctReimPattern}</strong></span>
              }
            </div>
            <div style={{ marginBottom: '0.25rem' }}>
              Kadenzen: {strophe.every((_, i) => isKadenzCorrect(i))
                ? <span style={{ color: '#059669', fontWeight: 600 }}>Alle richtig!</span>
                : <span style={{ color: '#ef4444' }}>
                    Richtig: {strophe.map((z, i) => `V${i + 1}: ${z.kadenz === 'männlich' ? '♂' : '♀'}`).join(', ')}
                  </span>
              }
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              Strophenform: {isStrophenformCorrect
                ? <span style={{ color: '#059669', fontWeight: 600 }}>{correctStrophenform} — richtig!</span>
                : <span style={{ color: '#ef4444' }}>Richtig wäre: <strong>{correctStrophenform}</strong></span>
              }
            </div>
            <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #bfdbfe' }}>
              {erklaerung}
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={!allFilled}>
            Analyse prüfen
          </button>
        ) : (
          <button onClick={reset} className="button button--secondary">Nochmal versuchen</button>
        )}
      </div>
    </div>
  );
}

export const VersAnalyse = withErrorBoundary(VersAnalyseInner, 'VersAnalyse');
