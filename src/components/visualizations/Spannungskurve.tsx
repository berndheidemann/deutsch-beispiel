import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Phase {
  id: string;
  name: string;
  beschreibung: string;
  szenen?: string;
}

interface SpannungskurveProps {
  phasen: Phase[];
  title?: string;
  werk?: string;
}

const defaultPhasen: Phase[] = [
  { id: 'exposition', name: 'Exposition', beschreibung: 'Einführung in Ort, Zeit, Figuren und Ausgangssituation.' },
  { id: 'steigende-handlung', name: 'Steigende Handlung', beschreibung: 'Konfliktverschärfung und erregendes Moment.' },
  { id: 'klimax', name: 'Klimax / Peripetie', beschreibung: 'Höhepunkt und Wendepunkt der Handlung.' },
  { id: 'fallende-handlung', name: 'Fallende Handlung', beschreibung: 'Retardierendes Moment, Verzögerung.' },
  { id: 'katastrophe', name: 'Katastrophe / Lösung', beschreibung: 'Tragischer Ausgang (Tragödie) oder Auflösung (Komödie).' },
];

function SpannungskurveInner({ phasen = defaultPhasen, title = 'Freytags Pyramide', werk }: SpannungskurveProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const points = [
    { x: 80, y: 260 },
    { x: 230, y: 160 },
    { x: 380, y: 60 },
    { x: 530, y: 160 },
    { x: 680, y: 260 },
  ];

  const active = phasen.find(p => p.id === activePhase);

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      {werk && <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.75rem' }}>{werk}</div>}

      <div style={{ overflowX: 'auto' }}>
        <svg viewBox="0 0 760 310" style={{ width: '100%', maxWidth: '700px', height: 'auto', margin: '0 auto', display: 'block' }} role="img" aria-label="Spannungskurve">
          {/* Baseline */}
          <line x1="40" y1="280" x2="720" y2="280" stroke="var(--ifm-color-emphasis-200)" strokeWidth="1" />

          {/* Curve */}
          <polyline
            points={points.map(p => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="var(--ifm-color-primary)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Phase dots and labels */}
          {phasen.slice(0, 5).map((phase, i) => {
            const p = points[i];
            if (!p) return null;
            const isActive = activePhase === phase.id;
            return (
              <g
                key={phase.id}
                onClick={() => setActivePhase(isActive ? null : phase.id)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`${phase.name}: ${phase.beschreibung}`}
                onKeyDown={e => { if (e.key === 'Enter') setActivePhase(isActive ? null : phase.id); }}
              >
                <circle cx={p.x} cy={p.y} r={isActive ? 10 : 7} fill={isActive ? 'var(--ifm-color-primary)' : '#fff'} stroke="var(--ifm-color-primary)" strokeWidth="2" />
                <text
                  x={p.x}
                  y={p.y - 18}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight={isActive ? '700' : '500'}
                  fill="var(--ifm-font-color-base)"
                >
                  {phase.name}
                </text>
                <text x={p.x} y={p.y + 28} textAnchor="middle" fontSize="9" fill="var(--ifm-color-emphasis-400)">
                  {i + 1}. Akt
                </text>
              </g>
            );
          })}

          {/* Labels */}
          <text x="40" y="295" fontSize="10" fill="var(--ifm-color-emphasis-400)">Anfang</text>
          <text x="700" y="295" fontSize="10" fill="var(--ifm-color-emphasis-400)" textAnchor="end">Ende</text>
          <text x="20" y="60" fontSize="10" fill="var(--ifm-color-emphasis-400)" transform="rotate(-90, 20, 60)">Spannung</text>
        </svg>
      </div>

      {active && (
        <div style={{
          marginTop: '0.75rem',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          border: '2px solid var(--ifm-color-primary)',
          backgroundColor: 'var(--ifm-color-primary-lightest)',
        }}>
          <div style={{ fontWeight: 700, marginBottom: '0.375rem' }}>{active.name}</div>
          <div style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{active.beschreibung}</div>
          {active.szenen && <div style={{ marginTop: '0.375rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>{active.szenen}</div>}
        </div>
      )}
    </div>
  );
}

export const Spannungskurve = withErrorBoundary(SpannungskurveInner, 'Spannungskurve');
