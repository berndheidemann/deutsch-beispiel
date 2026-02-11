import React, { useState, useMemo } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Annotation {
  id: string;
  start: number;
  end: number;
  label: string;
  color: string;
  explanation: string;
}

interface TextAnnotationProps {
  text: string;
  annotations: Annotation[];
  title?: string;
  quelle?: string;
}

interface TextSegment {
  text: string;
  annotation: Annotation | null;
}

function buildSegments(text: string, annotations: Annotation[]): TextSegment[] {
  if (annotations.length === 0) return [{ text, annotation: null }];

  const sorted = [...annotations].sort((a, b) => a.start - b.start);
  const segments: TextSegment[] = [];
  let pos = 0;

  for (const ann of sorted) {
    if (ann.start > pos) {
      segments.push({ text: text.slice(pos, ann.start), annotation: null });
    }
    segments.push({ text: text.slice(ann.start, ann.end), annotation: ann });
    pos = ann.end;
  }
  if (pos < text.length) {
    segments.push({ text: text.slice(pos), annotation: null });
  }

  return segments;
}

function TextAnnotationInner({ text, annotations, title, quelle }: TextAnnotationProps) {
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);
  const segments = useMemo(() => buildSegments(text, annotations), [text, annotations]);
  const active = annotations.find(a => a.id === activeAnnotation);

  return (
    <div className="interactive-container">
      {title && <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{title}</div>}
      <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.75rem' }}>
        Klicke auf die farbig markierten Stellen, um die Analyse zu sehen.
      </p>

      <div className="textauszug" style={{ position: 'relative' }}>
        {segments.map((seg, i) => {
          if (!seg.annotation) {
            return <span key={i}>{seg.text}</span>;
          }
          const ann = seg.annotation;
          const isActive = activeAnnotation === ann.id;
          return (
            <span
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`${ann.label}: ${seg.text}`}
              aria-expanded={isActive}
              onClick={() => setActiveAnnotation(isActive ? null : ann.id)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveAnnotation(isActive ? null : ann.id); }}}
              style={{
                backgroundColor: `${ann.color}25`,
                borderBottom: `2px solid ${ann.color}`,
                cursor: 'pointer',
                padding: '0.125rem 0',
                borderRadius: '0.125rem',
                transition: 'background-color 0.2s',
                ...(isActive && { backgroundColor: `${ann.color}40` }),
              }}
            >
              {seg.text}
            </span>
          );
        })}
        {quelle && <cite>{quelle}</cite>}
      </div>

      {active && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: `2px solid ${active.color}`,
            backgroundColor: `${active.color}10`,
          }}
          role="complementary"
          aria-label={`Analyse: ${active.label}`}
        >
          <div style={{ fontWeight: 700, color: active.color, marginBottom: '0.375rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: active.color, display: 'inline-block' }} />
            {active.label}
          </div>
          <div style={{ lineHeight: 1.6, fontSize: '0.9375rem' }}>{active.explanation}</div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
        {annotations.map(ann => (
          <button
            key={ann.id}
            onClick={() => setActiveAnnotation(activeAnnotation === ann.id ? null : ann.id)}
            style={{
              padding: '0.25rem 0.625rem',
              borderRadius: '1rem',
              border: `1px solid ${ann.color}`,
              backgroundColor: activeAnnotation === ann.id ? ann.color : 'transparent',
              color: activeAnnotation === ann.id ? '#fff' : ann.color,
              fontSize: '0.8125rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {ann.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export const TextAnnotation = withErrorBoundary(TextAnnotationInner, 'TextAnnotation');
