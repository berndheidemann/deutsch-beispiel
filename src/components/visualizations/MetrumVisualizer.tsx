import React from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Silbe {
  text: string;
  betont: boolean;
}

interface MetrumVisualizerProps {
  vers: string;
  silben: Silbe[];
  versfuss: string;
  kadenz?: string;
}

function MetrumVisualizerInner({ vers, silben, versfuss, kadenz }: MetrumVisualizerProps) {
  return (
    <div style={{ padding: '1rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '0.5rem', margin: '0.75rem 0' }}>
      {/* Vers text */}
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.0625rem', marginBottom: '0.75rem', lineHeight: 1.8 }}>
        {vers}
      </div>

      {/* Metrum visualization */}
      <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '0.5rem' }}>
        {silben.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: '2rem' }}>
            <div style={{
              fontSize: '1.25rem',
              fontFamily: 'monospace',
              color: s.betont ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-400)',
              fontWeight: s.betont ? 700 : 400,
            }}>
              {s.betont ? '▬' : '◡'}
            </div>
            <div style={{
              fontSize: '0.875rem',
              fontWeight: s.betont ? 600 : 400,
              color: s.betont ? 'var(--ifm-font-color-base)' : 'var(--ifm-color-emphasis-500)',
            }}>
              {s.text}
            </div>
          </div>
        ))}
      </div>

      {/* Info line */}
      <div style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-600)', display: 'flex', gap: '1rem' }}>
        <span><strong>Versfuß:</strong> {versfuss}</span>
        {kadenz && <span><strong>Kadenz:</strong> {kadenz}</span>}
      </div>
    </div>
  );
}

export const MetrumVisualizer = withErrorBoundary(MetrumVisualizerInner, 'MetrumVisualizer');
