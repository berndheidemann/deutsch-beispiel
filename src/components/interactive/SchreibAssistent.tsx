import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface FormulierungKategorie {
  id: string;
  label: string;
  formulierungen: string[];
}

interface SchreibAssistentProps {
  kategorien: FormulierungKategorie[];
  title?: string;
}

const defaultKategorien: FormulierungKategorie[] = [
  {
    id: 'einleitung',
    label: 'Einleitungssatz',
    formulierungen: [
      'Das Gedicht „[Titel]" von [Autor], veröffentlicht [Jahr], thematisiert…',
      'In dem vorliegenden Textauszug aus „[Titel]" von [Autor] ([Jahr]) wird… dargestellt.',
      'Der Romanauszug aus [Autors] „[Titel]" ([Jahr]) schildert…',
      'Die vorliegende Szene aus [Autors] Drama „[Titel]" ([Jahr]) zeigt…',
    ],
  },
  {
    id: 'stilmittel',
    label: 'Stilmittelanalyse',
    formulierungen: [
      'Die [Stilmittel] „[Textstelle]" (V./Z. X) verdeutlicht…',
      'Durch die Verwendung [eines/einer] [Stilmittel] in „[Textstelle]" (V./Z. X) wird… betont.',
      'Die [Stilmittel] (vgl. V./Z. X) erzeugt beim Leser den Eindruck von…',
      'Auffällig ist die [Stilmittel] „[Textstelle]" (V./Z. X), die… unterstreicht.',
    ],
  },
  {
    id: 'ueberleitung',
    label: 'Überleitungen',
    formulierungen: [
      'Darüber hinaus fällt auf, dass…',
      'In engem Zusammenhang damit steht…',
      'Dieser Aspekt wird verstärkt durch…',
      'Im Kontrast dazu steht…',
      'Besonders deutlich wird dies in…',
    ],
  },
  {
    id: 'vergleich',
    label: 'Vergleich',
    formulierungen: [
      'Im Vergleich zu [Text B] zeigt sich hier…',
      'Während in [Text A]… dargestellt wird, betont [Text B]…',
      'Beide Texte thematisieren…, unterscheiden sich jedoch in…',
      'Eine Gemeinsamkeit besteht in…, ein wesentlicher Unterschied liegt jedoch in…',
    ],
  },
  {
    id: 'schluss',
    label: 'Schlussteil',
    formulierungen: [
      'Zusammenfassend lässt sich festhalten, dass…',
      'Die Analyse zeigt, dass [Autor] durch den Einsatz von… die Wirkung von… erzielt.',
      'Abschließend kann festgestellt werden, dass…',
      'Im Gesamtkontext des Werks / der Epoche wird deutlich, dass…',
    ],
  },
];

function SchreibAssistentInner({ kategorien = defaultKategorien, title = 'Formulierungshilfen' }: SchreibAssistentProps) {
  const [activeKategorie, setActiveKategorie] = useState<string>(kategorien[0]?.id || '');
  const [copied, setCopied] = useState<string | null>(null);

  const current = kategorien.find(k => k.id === activeKategorie);

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem' }}>
        Wähle eine Kategorie und klicke auf eine Formulierung, um sie in die Zwischenablage zu kopieren.
      </p>

      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {kategorien.map(kat => (
          <button
            key={kat.id}
            onClick={() => setActiveKategorie(kat.id)}
            style={{
              padding: '0.375rem 0.75rem',
              border: `2px solid ${activeKategorie === kat.id ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)'}`,
              borderRadius: '1rem',
              backgroundColor: activeKategorie === kat.id ? 'var(--ifm-color-primary)' : 'transparent',
              color: activeKategorie === kat.id ? '#fff' : 'var(--ifm-font-color-base)',
              fontWeight: 500,
              fontSize: '0.8125rem',
              cursor: 'pointer',
            }}
          >
            {kat.label}
          </button>
        ))}
      </div>

      {current && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {current.formulierungen.map((f, i) => (
            <button
              key={i}
              onClick={() => copyToClipboard(f)}
              style={{
                padding: '0.625rem 0.75rem',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '0.375rem',
                backgroundColor: copied === f ? '#ecfdf5' : 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                fontFamily: 'Georgia, serif',
                transition: 'background-color 0.2s',
              }}
            >
              {f}
              {copied === f && <span style={{ marginLeft: '0.5rem', color: '#059669', fontSize: '0.8125rem' }}>Kopiert!</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const SchreibAssistent = withErrorBoundary(SchreibAssistentInner, 'SchreibAssistent');
