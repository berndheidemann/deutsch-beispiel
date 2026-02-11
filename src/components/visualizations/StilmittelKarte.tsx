import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface StilmittelMarkierung {
  start: number;
  end: number;
  stilmittelName: string;
  definition: string;
  wirkung: string;
  color: string;
}

interface StilmittelKarteProps {
  text: string;
  markierungen: StilmittelMarkierung[];
  quelle?: string;
  title?: string;
}

function StilmittelKarteInner({ text, markierungen, quelle, title = 'Stilmittel im Text' }: StilmittelKarteProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Build segments
  const sorted = [...markierungen].sort((a, b) => a.start - b.start);
  const segments: { text: string; markierung: StilmittelMarkierung | null; index: number }[] = [];
  let pos = 0;
  sorted.forEach((m, i) => {
    if (m.start > pos) segments.push({ text: text.slice(pos, m.start), markierung: null, index: -1 });
    segments.push({ text: text.slice(m.start, m.end), markierung: m, index: i });
    pos = m.end;
  });
  if (pos < text.length) segments.push({ text: text.slice(pos), markierung: null, index: -1 });

  const active = activeIndex !== null ? markierungen[activeIndex] : null;

  return (
    <div className="interactive-container">
      {title && <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        {/* Text with markings */}
        <div>
          <div className="textauszug">
            {segments.map((seg, i) => {
              if (!seg.markierung) return <span key={i}>{seg.text}</span>;
              const isActive = activeIndex === seg.index;
              return (
                <span
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(isActive ? null : seg.index)}
                  onKeyDown={e => { if (e.key === 'Enter') setActiveIndex(isActive ? null : seg.index); }}
                  aria-label={`${seg.markierung.stilmittelName}: ${seg.text}`}
                  style={{
                    backgroundColor: `${seg.markierung.color}${isActive ? '40' : '25'}`,
                    borderBottom: `2px solid ${seg.markierung.color}`,
                    cursor: 'pointer',
                    padding: '0.125rem 0',
                    transition: 'background-color 0.2s',
                  }}
                >
                  {seg.text}
                </span>
              );
            })}
            {quelle && <cite>{quelle}</cite>}
          </div>
        </div>

        {/* Stilmittel cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ifm-color-emphasis-500)' }}>
            Gefundene Stilmittel:
          </div>
          {markierungen.map((m, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              style={{
                padding: '0.5rem 0.75rem',
                border: `2px solid ${activeIndex === i ? m.color : 'var(--ifm-color-emphasis-200)'}`,
                borderRadius: '0.375rem',
                backgroundColor: activeIndex === i ? `${m.color}10` : 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.8125rem',
              }}
            >
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: m.color, display: 'inline-block', marginRight: '0.375rem' }} />
              <strong>{m.stilmittelName}</strong>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          border: `2px solid ${active.color}`,
          borderRadius: '0.5rem',
          backgroundColor: `${active.color}10`,
        }}>
          <div style={{ fontWeight: 700, color: active.color, marginBottom: '0.25rem' }}>{active.stilmittelName}</div>
          <div style={{ fontSize: '0.875rem', marginBottom: '0.375rem' }}><strong>Definition:</strong> {active.definition}</div>
          <div style={{ fontSize: '0.875rem' }}><strong>Wirkung hier:</strong> {active.wirkung}</div>
        </div>
      )}
    </div>
  );
}

export const StilmittelKarte = withErrorBoundary(StilmittelKarteInner, 'StilmittelKarte');
