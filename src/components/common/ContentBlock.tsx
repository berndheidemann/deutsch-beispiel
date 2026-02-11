import React from 'react';

type ContentBlockType = 'info' | 'tip' | 'warning' | 'example' | 'definition';

const typeStyles: Record<ContentBlockType, { borderColor: string; bgColor: string; icon: string; label: string }> = {
  info: { borderColor: '#3b82f6', bgColor: '#eff6ff', icon: 'ℹ️', label: 'Info' },
  tip: { borderColor: '#22c55e', bgColor: '#f0fdf4', icon: '💡', label: 'Tipp' },
  warning: { borderColor: '#ef4444', bgColor: '#fef2f2', icon: '⚠️', label: 'Achtung' },
  example: { borderColor: '#8b5cf6', bgColor: '#f5f3ff', icon: '📖', label: 'Beispiel' },
  definition: { borderColor: '#06b6d4', bgColor: '#ecfeff', icon: '📝', label: 'Definition' },
};

interface ContentBlockProps {
  type?: ContentBlockType;
  title?: string;
  children: React.ReactNode;
}

export function ContentBlock({ type = 'info', title, children }: ContentBlockProps) {
  const style = typeStyles[type];

  return (
    <div
      style={{
        borderLeft: `4px solid ${style.borderColor}`,
        backgroundColor: style.bgColor,
        padding: '1rem 1.25rem',
        borderRadius: '0 0.5rem 0.5rem 0',
        margin: '1rem 0',
      }}
      role="note"
    >
      <div style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span aria-hidden="true">{style.icon}</span>
        {title || style.label}
      </div>
      <div style={{ lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
