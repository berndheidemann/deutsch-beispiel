import React, { useState } from 'react';
import type { Epoche } from '../../types';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface EpochenZeitstrahlProps {
  epochen: Epoche[];
}

function EpochenZeitstrahlInner({ epochen }: EpochenZeitstrahlProps) {
  const [activeEpoche, setActiveEpoche] = useState<string | null>(null);

  const minYear = Math.min(...epochen.map(e => e.zeitraum.von));
  const maxYear = Math.max(...epochen.map(e => e.zeitraum.bis));
  const range = maxYear - minYear;

  const getX = (year: number) => ((year - minYear) / range) * 100;

  const active = epochen.find(e => e.id === activeEpoche);

  const svgHeight = epochen.length * 32 + 60;

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>Epochen-Zeitstrahl</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Klicke auf eine Epoche, um ihre Merkmale zu sehen.
      </p>

      <div style={{ overflowX: 'auto', padding: '0.5rem 0' }}>
        <svg viewBox={`0 0 800 ${svgHeight}`} style={{ width: '100%', minWidth: '600px', height: 'auto' }} role="img" aria-label="Epochen-Zeitstrahl">
          {/* Timeline axis */}
          <line x1="40" y1={svgHeight - 30} x2="770" y2={svgHeight - 30} stroke="var(--ifm-color-emphasis-300)" strokeWidth="2" />

          {/* Year markers */}
          {Array.from({ length: Math.floor(range / 25) + 1 }, (_, i) => {
            const year = minYear + i * 25;
            const x = 40 + getX(year) * 7.3;
            return (
              <g key={year}>
                <line x1={x} y1={svgHeight - 35} x2={x} y2={svgHeight - 25} stroke="var(--ifm-color-emphasis-400)" strokeWidth="1" />
                <text x={x} y={svgHeight - 12} textAnchor="middle" fontSize="10" fill="var(--ifm-color-emphasis-500)">{year}</text>
              </g>
            );
          })}

          {/* Epoch bars */}
          {epochen.map((epoche, i) => {
            const x1 = 40 + getX(epoche.zeitraum.von) * 7.3;
            const x2 = 40 + getX(epoche.zeitraum.bis) * 7.3;
            const y = 15 + i * 32;
            const isActive = activeEpoche === epoche.id;

            return (
              <g
                key={epoche.id}
                onClick={() => setActiveEpoche(isActive ? null : epoche.id)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`${epoche.name} (${epoche.zeitraum.von}–${epoche.zeitraum.bis})`}
                onKeyDown={e => { if (e.key === 'Enter') setActiveEpoche(isActive ? null : epoche.id); }}
              >
                <rect
                  x={x1}
                  y={y}
                  width={Math.max(x2 - x1, 20)}
                  height="24"
                  rx="4"
                  fill={epoche.farbe}
                  opacity={isActive ? 1 : 0.7}
                  stroke={isActive ? '#000' : 'none'}
                  strokeWidth={isActive ? 2 : 0}
                />
                <text
                  x={x1 + (x2 - x1) / 2}
                  y={y + 16}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="#fff"
                >
                  {epoche.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {active && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: `2px solid ${active.farbe}`,
          backgroundColor: `${active.farbe}10`,
        }}>
          <div style={{ fontWeight: 700, fontSize: '1.125rem', color: active.farbe, marginBottom: '0.5rem' }}>
            {active.name} ({active.zeitraum.von}–{active.zeitraum.bis})
          </div>
          <p style={{ lineHeight: 1.6, marginBottom: '0.75rem' }}>{active.beschreibung}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem' }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Merkmale:</div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {active.merkmale.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Autoren & Werke:</div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {active.autoren.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.25rem', listStyleType: 'circle' }}>
                {active.schluesselwerke.map((w, i) => <li key={i} style={{ fontStyle: 'italic' }}>{w}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const EpochenZeitstrahl = withErrorBoundary(EpochenZeitstrahlInner, 'EpochenZeitstrahl');
