import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: string;
  showText?: boolean;
}

export function ProgressBar({
  value,
  max,
  label,
  color = 'var(--ifm-color-primary)',
  showText = true,
}: ProgressBarProps) {
  const percent = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div style={{ margin: '0.5rem 0' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
          <span>{label}</span>
          {showText && <span>{value}/{max}</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `${percent}% abgeschlossen`}
        style={{
          height: '0.5rem',
          borderRadius: '0.25rem',
          backgroundColor: 'var(--ifm-color-emphasis-200)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            backgroundColor: color,
            borderRadius: '0.25rem',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
