import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface VierSeitenExample {
  nachricht: string;
  sachinhalt: string;
  selbstoffenbarung: string;
  beziehung: string;
  appell: string;
}

interface KommunikationsModellProps {
  beispiel: VierSeitenExample;
  title?: string;
}

const seiten = [
  { key: 'sachinhalt', label: 'Sachinhalt', color: '#3b82f6', desc: 'Worüber informiert wird' },
  { key: 'selbstoffenbarung', label: 'Selbstoffenbarung', color: '#22c55e', desc: 'Was der Sender über sich preisgibt' },
  { key: 'beziehung', label: 'Beziehung', color: '#f59e0b', desc: 'Wie der Sender zum Empfänger steht' },
  { key: 'appell', label: 'Appell', color: '#ef4444', desc: 'Wozu der Empfänger veranlasst werden soll' },
] as const;

function KommunikationsModellInner({ beispiel, title = 'Vier-Ohren-Modell (Schulz von Thun)' }: KommunikationsModellProps) {
  const [activeSeite, setActiveSeite] = useState<string | null>(null);

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>{title}</div>

      {/* Nachricht */}
      <div style={{
        textAlign: 'center',
        padding: '0.75rem 1.5rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        fontSize: '1.0625rem',
        fontStyle: 'italic',
        fontWeight: 500,
      }}>
        „{beispiel.nachricht}"
      </div>

      {/* Four sides */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {seiten.map(seite => {
          const isActive = activeSeite === seite.key;
          const value = beispiel[seite.key];
          return (
            <button
              key={seite.key}
              onClick={() => setActiveSeite(isActive ? null : seite.key)}
              aria-expanded={isActive}
              style={{
                padding: '1rem',
                border: `2px solid ${seite.color}`,
                borderRadius: '0.5rem',
                backgroundColor: isActive ? `${seite.color}15` : 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontWeight: 700, color: seite.color, marginBottom: '0.25rem' }}>{seite.label}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-500)' }}>{seite.desc}</div>
              {isActive && (
                <div style={{
                  marginTop: '0.75rem',
                  paddingTop: '0.75rem',
                  borderTop: `1px solid ${seite.color}40`,
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'var(--ifm-font-color-base)',
                }}>
                  {value}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-500)', textAlign: 'center' }}>
        Klicke auf eine Seite, um die Analyse zu sehen.
      </div>
    </div>
  );
}

export const KommunikationsModell = withErrorBoundary(KommunikationsModellInner, 'KommunikationsModell');
