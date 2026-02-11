import React from 'react';

interface BadgeProps {
  label: string;
  color?: string;
  icon?: string;
  earned?: boolean;
}

export function Badge({ label, color = '#3b82f6', icon = '🏆', earned = false }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        fontSize: '0.8125rem',
        fontWeight: 600,
        backgroundColor: earned ? color : 'var(--ifm-color-emphasis-200)',
        color: earned ? '#fff' : 'var(--ifm-color-emphasis-500)',
        opacity: earned ? 1 : 0.6,
        transition: 'all 0.3s',
      }}
      role="status"
      aria-label={`${label}${earned ? ' (erreicht)' : ' (noch nicht erreicht)'}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
