import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Figur {
  id: string;
  name: string;
  beschreibung: string;
  x: number;
  y: number;
  color: string;
}

interface Beziehung {
  von: string;
  zu: string;
  typ: 'liebe' | 'konflikt' | 'familie' | 'intrige' | 'abhaengigkeit';
  label: string;
}

interface FigurenkonstellationProps {
  figuren: Figur[];
  beziehungen: Beziehung[];
  title?: string;
  werk?: string;
}

const beziehungStyles: Record<string, { color: string; dash?: string }> = {
  liebe: { color: '#22c55e' },
  konflikt: { color: '#ef4444' },
  familie: { color: '#3b82f6' },
  intrige: { color: '#f59e0b', dash: '6,3' },
  abhaengigkeit: { color: '#8b5cf6', dash: '4,4' },
};

function FigurenkonstellationInner({ figuren, beziehungen, title = 'Figurenkonstellation', werk }: FigurenkonstellationProps) {
  const [activeFigur, setActiveFigur] = useState<string | null>(null);

  const activeBeziehungen = activeFigur
    ? beziehungen.filter(b => b.von === activeFigur || b.zu === activeFigur)
    : beziehungen;

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</div>
      {werk && <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>{werk}</div>}

      <div style={{ overflowX: 'auto' }}>
        <svg viewBox="0 0 600 400" style={{ width: '100%', maxWidth: '600px', height: 'auto', margin: '0 auto', display: 'block' }} role="img" aria-label={`Figurenkonstellation ${werk || ''}`}>
          {/* Beziehungslinien */}
          {activeBeziehungen.map((bz, i) => {
            const von = figuren.find(f => f.id === bz.von);
            const zu = figuren.find(f => f.id === bz.zu);
            if (!von || !zu) return null;
            const style = beziehungStyles[bz.typ] || { color: '#94a3b8' };
            const mx = (von.x + zu.x) / 2;
            const my = (von.y + zu.y) / 2;
            const dimmed = activeFigur && bz.von !== activeFigur && bz.zu !== activeFigur;

            return (
              <g key={i} opacity={dimmed ? 0.2 : 1}>
                <line
                  x1={von.x} y1={von.y} x2={zu.x} y2={zu.y}
                  stroke={style.color}
                  strokeWidth="2"
                  strokeDasharray={style.dash}
                />
                <rect x={mx - 40} y={my - 10} width="80" height="20" rx="4" fill="white" stroke={style.color} strokeWidth="1" />
                <text x={mx} y={my + 4} textAnchor="middle" fontSize="9" fill={style.color} fontWeight="500">{bz.label}</text>
              </g>
            );
          })}

          {/* Figurenknoten */}
          {figuren.map(figur => {
            const isActive = activeFigur === figur.id;
            const dimmed = activeFigur && !isActive && !activeBeziehungen.some(b => b.von === figur.id || b.zu === figur.id);

            return (
              <g
                key={figur.id}
                onClick={() => setActiveFigur(isActive ? null : figur.id)}
                style={{ cursor: 'pointer' }}
                opacity={dimmed ? 0.3 : 1}
                role="button"
                tabIndex={0}
                aria-label={`${figur.name}: ${figur.beschreibung}`}
                onKeyDown={e => { if (e.key === 'Enter') setActiveFigur(isActive ? null : figur.id); }}
              >
                <circle cx={figur.x} cy={figur.y} r={isActive ? 32 : 28} fill={figur.color} opacity={0.9} stroke={isActive ? '#000' : '#fff'} strokeWidth={isActive ? 3 : 2} />
                <text x={figur.x} y={figur.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">{figur.name}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legende */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem', fontSize: '0.8125rem' }}>
        {Object.entries(beziehungStyles).map(([typ, style]) => (
          <div key={typ} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke={style.color} strokeWidth="2" strokeDasharray={style.dash} /></svg>
            <span style={{ textTransform: 'capitalize' }}>{typ === 'abhaengigkeit' ? 'Abhängigkeit' : typ}</span>
          </div>
        ))}
      </div>

      {activeFigur && (() => {
        const figur = figuren.find(f => f.id === activeFigur);
        if (!figur) return null;
        return (
          <div style={{ marginTop: '0.75rem', padding: '0.75rem', borderRadius: '0.5rem', border: `2px solid ${figur.color}`, backgroundColor: `${figur.color}10` }}>
            <div style={{ fontWeight: 700, color: figur.color }}>{figur.name}</div>
            <div style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{figur.beschreibung}</div>
          </div>
        );
      })()}
    </div>
  );
}

export const Figurenkonstellation = withErrorBoundary(FigurenkonstellationInner, 'Figurenkonstellation');
