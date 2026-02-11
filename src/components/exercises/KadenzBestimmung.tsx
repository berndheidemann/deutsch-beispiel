import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface KadenzVers {
  id: string;
  text: string;
  kadenz: 'männlich' | 'weiblich';
  endsilben: { text: string; betont: boolean }[];
  erklaerung: string;
}

interface KadenzBestimmungProps {
  verse: KadenzVers[];
  title?: string;
  onComplete?: () => void;
}

const KADENZ_INFO = {
  'männlich': { label: 'männlich (stumpf)', symbol: '♂', desc: 'Vers endet auf betonter Silbe' },
  'weiblich': { label: 'weiblich (klingend)', symbol: '♀', desc: 'Vers endet auf unbetonter Silbe' },
} as const;

function KadenzBestimmungInner({ verse, title = 'Kadenz bestimmen', onComplete }: KadenzBestimmungProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<'männlich' | 'weiblich' | null>(null);
  const [checked, setChecked] = useState(false);
  const [completedVerse, setCompletedVerse] = useState<Set<number>>(new Set());

  const current = verse[currentIndex];
  const isCorrect = checked && selected === current.kadenz;

  const check = () => {
    if (!selected) return;
    setChecked(true);
    if (selected === current.kadenz) {
      const next = new Set([...completedVerse, currentIndex]);
      setCompletedVerse(next);
      if (next.size === verse.length) onComplete?.();
    }
  };

  const next = () => {
    setSelected(null);
    setChecked(false);
    setCurrentIndex(prev => Math.min(prev + 1, verse.length - 1));
  };

  const prev = () => {
    setSelected(null);
    setChecked(false);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="exercise-card">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Bestimme, ob der Vers mit einer <strong>betonten</strong> (männlich/stumpf) oder <strong>unbetonten</strong> (weiblich/klingend) Silbe endet.
      </p>

      <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)', marginBottom: '0.75rem' }}>
        Vers {currentIndex + 1} von {verse.length}
      </div>

      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.25rem',
        lineHeight: 1.8,
        padding: '1rem 1.25rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        borderRadius: '0.5rem',
        borderLeft: '4px solid var(--ifm-color-primary)',
        marginBottom: '1.25rem',
      }}>
        {current.text}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        {(['männlich', 'weiblich'] as const).map(kadenz => {
          const info = KADENZ_INFO[kadenz];
          const isSelected = selected === kadenz;
          let borderColor = isSelected ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)';
          let bg = isSelected ? 'var(--ifm-color-primary-lightest, #eff6ff)' : 'transparent';

          if (checked) {
            if (kadenz === current.kadenz) {
              borderColor = '#059669';
              bg = '#ecfdf5';
            } else if (isSelected) {
              borderColor = '#ef4444';
              bg = '#fef2f2';
            }
          }

          return (
            <button
              key={kadenz}
              onClick={() => !checked && setSelected(kadenz)}
              disabled={checked}
              aria-pressed={isSelected}
              style={{
                flex: 1,
                padding: '1rem',
                border: `2px solid ${borderColor}`,
                borderRadius: '0.75rem',
                backgroundColor: bg,
                cursor: checked ? 'default' : 'pointer',
                textAlign: 'center',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{info.symbol}</div>
              <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{info.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.25rem' }}>
                {info.desc}
              </div>
            </button>
          );
        })}
      </div>

      {checked && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: isCorrect ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${isCorrect ? '#a7f3d0' : '#fecaca'}`,
          marginBottom: '1rem',
        }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: isCorrect ? '#065f46' : '#991b1b' }}>
            {isCorrect ? 'Richtig!' : 'Nicht ganz.'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Versende:</span>
            {current.endsilben.map((s, i) => (
              <span
                key={i}
                style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  backgroundColor: s.betont ? '#dbeafe' : '#f3f4f6',
                  border: `2px solid ${s.betont ? '#3b82f6' : '#d1d5db'}`,
                  fontWeight: s.betont ? 700 : 400,
                  fontSize: '1.05rem',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {s.text}
                <span style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem', marginTop: '0.125rem' }}>
                  {s.betont ? '▬' : '◡'}
                </span>
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--ifm-font-color-base)' }}>
            {current.erklaerung}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {currentIndex > 0 && (
          <button onClick={prev} className="button button--secondary">Vorheriger Vers</button>
        )}
        {!checked ? (
          <button onClick={check} className="button button--primary" disabled={!selected}>Prüfen</button>
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

export const KadenzBestimmung = withErrorBoundary(KadenzBestimmungInner, 'KadenzBestimmung');
