import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '0.5rem', overflow: 'hidden' }}>
      {items.map((item, i) => {
        const isOpen = openIndices.has(i);
        return (
          <div key={i} style={{ borderBottom: i < items.length - 1 ? '1px solid var(--ifm-color-emphasis-200)' : 'none' }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0.75rem 1rem',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--ifm-font-color-base)',
                textAlign: 'left',
              }}
            >
              {item.title}
              <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
