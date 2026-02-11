import React, { useState, useRef } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export function Tooltip({ text, children, position = 'top' }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    ...(position === 'top' ? { bottom: '100%', marginBottom: '0.5rem' } : { top: '100%', marginTop: '0.5rem' }),
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: 'var(--ifm-color-emphasis-900)',
    color: '#fff',
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    maxWidth: '300px',
    zIndex: 100,
    pointerEvents: 'none',
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.15s',
  };

  return (
    <span
      ref={ref}
      style={{ position: 'relative', display: 'inline' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span
        className="fachbegriff"
        tabIndex={0}
        role="button"
        aria-describedby={visible ? 'tooltip' : undefined}
      >
        {children}
      </span>
      <span role="tooltip" id="tooltip" style={tooltipStyle} aria-hidden={!visible}>
        {text}
      </span>
    </span>
  );
}
