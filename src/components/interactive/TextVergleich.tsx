import React, { useState } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface TextVergleichProps {
  textA: { titel: string; autor: string; text: string; quelle: string };
  textB: { titel: string; autor: string; text: string; quelle: string };
  vergleichsaspekte?: string[];
  title?: string;
}

function TextVergleichInner({ textA, textB, vergleichsaspekte, title = 'Textvergleich' }: TextVergleichProps) {
  const [notes, setNotes] = useState({ a: '', b: '', vergleich: '' });
  const [showAspekte, setShowAspekte] = useState(false);

  return (
    <div className="interactive-container">
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>{title}</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        {/* Text A */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>
            {textA.autor}: {textA.titel}
          </div>
          <blockquote className="textauszug" style={{ fontSize: '0.9375rem' }}>
            {textA.text}
            <cite>{textA.quelle}</cite>
          </blockquote>
          <textarea
            value={notes.a}
            onChange={e => setNotes(prev => ({ ...prev, a: e.target.value }))}
            placeholder="Notizen zu Text A…"
            style={{
              width: '100%',
              minHeight: '4rem',
              padding: '0.5rem',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </div>

        {/* Text B */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#8b5cf6' }}>
            {textB.autor}: {textB.titel}
          </div>
          <blockquote className="textauszug" style={{ fontSize: '0.9375rem' }}>
            {textB.text}
            <cite>{textB.quelle}</cite>
          </blockquote>
          <textarea
            value={notes.b}
            onChange={e => setNotes(prev => ({ ...prev, b: e.target.value }))}
            placeholder="Notizen zu Text B…"
            style={{
              width: '100%',
              minHeight: '4rem',
              padding: '0.5rem',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </div>
      </div>

      {vergleichsaspekte && (
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setShowAspekte(!showAspekte)}
            className="button button--secondary button--sm"
          >
            {showAspekte ? 'Vergleichsaspekte ausblenden' : 'Vergleichsaspekte anzeigen'}
          </button>
          {showAspekte && (
            <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '0.5rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.875rem' }}>Mögliche Vergleichsaspekte:</div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
                {vergleichsaspekte.map((aspekt, i) => (
                  <li key={i}>{aspekt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div>
        <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Vergleichendes Fazit:</div>
        <textarea
          value={notes.vergleich}
          onChange={e => setNotes(prev => ({ ...prev, vergleich: e.target.value }))}
          placeholder="Formuliere hier deinen Vergleich: Gemeinsamkeiten, Unterschiede, Epochenbezug…"
          style={{
            width: '100%',
            minHeight: '6rem',
            padding: '0.75rem',
            border: '2px solid var(--ifm-color-emphasis-300)',
            borderRadius: '0.5rem',
            fontSize: '0.9375rem',
            fontFamily: 'inherit',
            lineHeight: 1.6,
            resize: 'vertical',
          }}
        />
      </div>
    </div>
  );
}

export const TextVergleich = withErrorBoundary(TextVergleichInner, 'TextVergleich');
