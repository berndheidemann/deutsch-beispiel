import React, { useState, useCallback } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface HighlightTarget {
  id: string;
  start: number;
  end: number;
  category: string;
  explanation: string;
}

interface Category {
  id: string;
  label: string;
  color: string;
}

interface TextHighlightingProps {
  text: string;
  targets: HighlightTarget[];
  categories: Category[];
  title?: string;
  onComplete?: () => void;
}

function TextHighlightingInner({ text, targets, categories, title, onComplete }: TextHighlightingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.id || '');
  const [found, setFound] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);
  const [wrong, setWrong] = useState<Set<number>>(new Set());

  const handleTextClick = useCallback((charIndex: number) => {
    if (checked) return;
    const target = targets.find(
      t => charIndex >= t.start && charIndex < t.end && t.category === selectedCategory
    );
    if (target && !found.has(target.id)) {
      const newFound = new Set([...found, target.id]);
      setFound(newFound);
      if (newFound.size === targets.length) onComplete?.();
    } else if (!target) {
      setWrong(prev => new Set([...prev, charIndex]));
      setTimeout(() => setWrong(prev => { const n = new Set(prev); n.delete(charIndex); return n; }), 1000);
    }
  }, [checked, found, selectedCategory, targets, onComplete]);

  const handleCheck = () => setChecked(true);
  const handleReset = () => { setFound(new Set()); setChecked(false); setWrong(new Set()); };

  const getCharStyle = (i: number): React.CSSProperties | undefined => {
    if (wrong.has(i)) return { backgroundColor: '#fee2e2', transition: 'background-color 0.3s' };

    const foundTarget = targets.find(t => found.has(t.id) && i >= t.start && i < t.end);
    if (foundTarget) {
      const cat = categories.find(c => c.id === foundTarget.category);
      return { backgroundColor: `${cat?.color || '#3b82f6'}30`, borderBottom: `2px solid ${cat?.color || '#3b82f6'}` };
    }

    if (checked) {
      const missedTarget = targets.find(t => !found.has(t.id) && i >= t.start && i < t.end);
      if (missedTarget) {
        return { backgroundColor: '#dbeafe', borderBottom: '2px dashed #3b82f6' };
      }
    }
    return undefined;
  };

  const currentCat = categories.find(c => c.id === selectedCategory);

  return (
    <div className="interactive-container">
      {title && <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</div>}

      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
          Markiere im Text: <strong style={{ color: currentCat?.color }}>{currentCat?.label}</strong>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                border: `2px solid ${cat.color}`,
                backgroundColor: selectedCategory === cat.id ? cat.color : 'transparent',
                color: selectedCategory === cat.id ? '#fff' : cat.color,
                fontWeight: 600,
                fontSize: '0.8125rem',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="textauszug"
        style={{ cursor: checked ? 'default' : 'text', userSelect: 'none' }}
        role="application"
        aria-label="Text zum Markieren"
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            onClick={() => handleTextClick(i)}
            style={getCharStyle(i)}
          >
            {char}
          </span>
        ))}
      </div>

      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>
        Gefunden: {found.size} / {targets.length}
      </div>

      {checked && (
        <div style={{ marginTop: '1rem' }}>
          {targets.filter(t => !found.has(t.id)).length > 0 && (
            <div style={{ padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1e40af' }}>Übersehene Stellen:</div>
              {targets.filter(t => !found.has(t.id)).map(t => (
                <div key={t.id} style={{ marginBottom: '0.5rem', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  <strong>„{text.slice(t.start, t.end)}"</strong> — {t.explanation}
                </div>
              ))}
            </div>
          )}
          {found.size > 0 && (
            <div style={{ padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#065f46' }}>Korrekt erkannt:</div>
              {targets.filter(t => found.has(t.id)).map(t => (
                <div key={t.id} style={{ marginBottom: '0.5rem', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  <strong>„{text.slice(t.start, t.end)}"</strong> — {t.explanation}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        {!checked ? (
          <button onClick={handleCheck} className="button button--primary">Prüfen</button>
        ) : (
          <button onClick={handleReset} className="button button--secondary">Nochmal versuchen</button>
        )}
      </div>
    </div>
  );
}

export const TextHighlighting = withErrorBoundary(TextHighlightingInner, 'TextHighlighting');
