import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Fehler {
  id: string;
  start: number;
  end: number;
  fehlerTyp: string;
  erklaerung: string;
  korrektur: string;
}

interface FehlerSucheProps {
  text: string;
  fehler: Fehler[];
  title?: string;
  onComplete?: () => void;
}

function FehlerSucheInner({ text, fehler, title = 'Fehlersuche', onComplete }: FehlerSucheProps) {
  const [found, setFound] = useState<Set<string>>(new Set());
  const [wrongClicks, setWrongClicks] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);

  const handleClick = (charIndex: number) => {
    if (checked) return;
    const matchedFehler = fehler.find(f => charIndex >= f.start && charIndex < f.end);
    if (matchedFehler && !found.has(matchedFehler.id)) {
      const newFound = new Set([...found, matchedFehler.id]);
      setFound(newFound);
      if (newFound.size === fehler.length) onComplete?.();
    } else if (!matchedFehler) {
      setWrongClicks(prev => new Set([...prev, charIndex]));
      setTimeout(() => setWrongClicks(prev => { const n = new Set(prev); n.delete(charIndex); return n; }), 1500);
    }
  };

  const getCharStyle = (i: number): React.CSSProperties => {
    if (wrongClicks.has(i)) return { backgroundColor: '#dbeafe', transition: 'background-color 0.3s' };

    const foundFehler = fehler.find(f => found.has(f.id) && i >= f.start && i < f.end);
    if (foundFehler) return { backgroundColor: '#fecaca', borderBottom: '2px solid #ef4444', cursor: 'pointer' };

    if (checked) {
      const missed = fehler.find(f => !found.has(f.id) && i >= f.start && i < f.end);
      if (missed) return { backgroundColor: '#fef3c7', borderBottom: '2px dashed #f59e0b' };
    }

    const isFehlerArea = fehler.some(f => i >= f.start && i < f.end);
    return { cursor: isFehlerArea ? 'pointer' : 'text' };
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Die folgende Analyse enthält <strong>{fehler.length} Fehler</strong>. Klicke auf die fehlerhaften Stellen.
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        Gefunden: {found.size} / {fehler.length}
      </div>

      <div style={{
        padding: '1rem 1.25rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        borderRadius: '0.5rem',
        lineHeight: 1.8,
        userSelect: 'none',
        cursor: checked ? 'default' : 'text',
      }}>
        {text.split('').map((char, i) => (
          <span key={i} onClick={() => handleClick(i)} style={getCharStyle(i)}>{char}</span>
        ))}
      </div>

      {found.size > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#059669' }}>Erkannte Fehler:</div>
          {fehler.filter(f => found.has(f.id)).map(f => (
            <div key={f.id} style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: '#ecfdf5',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: 1.6,
            }}>
              <div><strong>Fehlertyp:</strong> {f.fehlerTyp}</div>
              <div><strong>Im Text:</strong> „{text.slice(f.start, f.end)}"</div>
              <div><strong>Korrektur:</strong> {f.korrektur}</div>
              <div>{f.erklaerung}</div>
            </div>
          ))}
        </div>
      )}

      {checked && fehler.filter(f => !found.has(f.id)).length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#f59e0b' }}>Übersehene Fehler:</div>
          {fehler.filter(f => !found.has(f.id)).map(f => (
            <div key={f.id} style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: '#fffbeb',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: 1.6,
            }}>
              <div><strong>Fehlertyp:</strong> {f.fehlerTyp}</div>
              <div><strong>Im Text:</strong> „{text.slice(f.start, f.end)}"</div>
              <div><strong>Korrektur:</strong> {f.korrektur}</div>
              <div>{f.erklaerung}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={() => setChecked(true)} className="button button--primary">Auflösen</button>
        ) : (
          <button onClick={() => { setFound(new Set()); setChecked(false); }} className="button button--secondary">Nochmal</button>
        )}
      </div>
    </div>
  );
}

export const FehlerSuche = withErrorBoundary(FehlerSucheInner, 'FehlerSuche');
