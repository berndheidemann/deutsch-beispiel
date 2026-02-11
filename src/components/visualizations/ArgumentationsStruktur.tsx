import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

type ModellTyp = 'linear' | 'dialektisch' | 'sanduhr';

interface ArgumentationsStrukturProps {
  modell?: ModellTyp;
  title?: string;
}

const modelle: Record<ModellTyp, { name: string; beschreibung: string; schritte: { label: string; color: string; width: string }[] }> = {
  linear: {
    name: 'Linearer Aufbau',
    beschreibung: 'Argumente werden nacheinander aufgebaut, vom schwächsten zum stärksten.',
    schritte: [
      { label: 'Einleitung / These', color: '#3b82f6', width: '60%' },
      { label: 'Argument 1 (schwach)', color: '#22c55e', width: '70%' },
      { label: 'Argument 2 (mittel)', color: '#22c55e', width: '80%' },
      { label: 'Argument 3 (stark)', color: '#22c55e', width: '90%' },
      { label: 'Fazit', color: '#ef4444', width: '60%' },
    ],
  },
  dialektisch: {
    name: 'Dialektischer Aufbau (Pingpong)',
    beschreibung: 'Pro- und Contra-Argumente wechseln sich ab, bevor ein Fazit gezogen wird.',
    schritte: [
      { label: 'Einleitung / Fragestellung', color: '#3b82f6', width: '70%' },
      { label: 'Pro-Argument 1', color: '#22c55e', width: '80%' },
      { label: 'Contra-Argument 1', color: '#f59e0b', width: '80%' },
      { label: 'Pro-Argument 2', color: '#22c55e', width: '80%' },
      { label: 'Contra-Argument 2', color: '#f59e0b', width: '80%' },
      { label: 'Synthese / Fazit', color: '#ef4444', width: '70%' },
    ],
  },
  sanduhr: {
    name: 'Sanduhr-Modell',
    beschreibung: 'Vom Allgemeinen zum Spezifischen (Trichter) und wieder zurück zum Allgemeinen.',
    schritte: [
      { label: 'Allgemeiner Einstieg', color: '#3b82f6', width: '95%' },
      { label: 'Eingrenzung des Themas', color: '#3b82f6', width: '80%' },
      { label: 'Konkrete These', color: '#22c55e', width: '60%' },
      { label: 'Argumentation', color: '#22c55e', width: '60%' },
      { label: 'Ausweitung / Bezug', color: '#8b5cf6', width: '80%' },
      { label: 'Allgemeines Fazit', color: '#ef4444', width: '95%' },
    ],
  },
};

function ArgumentationsStrukturInner({ modell: initialModell = 'linear', title = 'Argumentationsstruktur' }: ArgumentationsStrukturProps) {
  const [modell, setModell] = useState<ModellTyp>(initialModell);
  const current = modelle[modell];

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {(Object.keys(modelle) as ModellTyp[]).map(key => (
          <button
            key={key}
            onClick={() => setModell(key)}
            style={{
              padding: '0.375rem 0.75rem',
              border: `2px solid ${modell === key ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)'}`,
              borderRadius: '0.375rem',
              backgroundColor: modell === key ? 'var(--ifm-color-primary)' : 'transparent',
              color: modell === key ? '#fff' : 'var(--ifm-font-color-base)',
              fontWeight: 600,
              fontSize: '0.8125rem',
              cursor: 'pointer',
            }}
          >
            {modelle[key].name}
          </button>
        ))}
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>{current.beschreibung}</p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
        {current.schritte.map((schritt, i) => (
          <div
            key={i}
            style={{
              width: schritt.width,
              padding: '0.625rem 1rem',
              backgroundColor: `${schritt.color}15`,
              border: `2px solid ${schritt.color}`,
              borderRadius: '0.375rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'width 0.3s ease',
            }}
          >
            {schritt.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export const ArgumentationsStruktur = withErrorBoundary(ArgumentationsStrukturInner, 'ArgumentationsStruktur');
