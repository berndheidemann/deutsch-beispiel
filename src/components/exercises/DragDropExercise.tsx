import React, { useState, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import type { DragDropItem, DragDropZone } from '@site/src/types';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface DragDropExerciseProps {
  items: DragDropItem[];
  zones: DragDropZone[];
  title?: string;
  instruction?: string;
  onComplete?: () => void;
}

/**
 * Einzelnes ziehbares Element.
 * Nutzt useDraggable aus @dnd-kit/core fuer native Keyboard + Pointer-Unterstuetzung.
 */
function DraggableItem({
  item,
  isPlaced,
}: {
  item: DragDropItem;
  isPlaced: boolean;
}) {
  // Dynamischer Import wird im BrowserOnly-Kontext aufgeloest
  const { useDraggable } = require('@dnd-kit/core');
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: item.id });

  if (isPlaced) return null;

  const style: React.CSSProperties = {
    padding: '0.625rem 1rem',
    border: '2px solid var(--ifm-color-emphasis-300)',
    borderRadius: '0.5rem',
    backgroundColor: 'var(--ifm-background-color)',
    cursor: isDragging ? 'grabbing' : 'grab',
    opacity: isDragging ? 0.4 : 1,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    touchAction: 'none',
    userSelect: 'none',
    transition: isDragging ? undefined : 'opacity 0.2s',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      role="button"
      aria-roledescription="Ziehbares Element"
      aria-label={`${item.content} – zum Ziehen Leertaste drücken`}
      tabIndex={0}
    >
      <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>
        {item.content}
      </div>
      {item.description && (
        <div
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ifm-color-emphasis-600)',
            marginTop: '0.25rem',
          }}
        >
          {item.description}
        </div>
      )}
    </div>
  );
}

/**
 * Einzelne Ablagezone.
 * Zeigt den Zustand (leer / korrekt / inkorrekt) visuell an.
 */
function DroppableZone({
  zone,
  placedItem,
  feedbackState,
}: {
  zone: DragDropZone;
  placedItem: DragDropItem | null;
  feedbackState: 'correct' | 'incorrect' | null;
}) {
  const { useDroppable } = require('@dnd-kit/core');
  const { isOver, setNodeRef } = useDroppable({ id: zone.id });

  const borderColor =
    feedbackState === 'correct'
      ? '#059669'
      : feedbackState === 'incorrect'
        ? '#ef4444'
        : isOver
          ? 'var(--ifm-color-primary)'
          : 'var(--ifm-color-emphasis-300)';

  const bgColor =
    feedbackState === 'correct'
      ? '#ecfdf5'
      : feedbackState === 'incorrect'
        ? '#fef2f2'
        : isOver
          ? 'var(--ifm-color-primary-lightest)'
          : 'transparent';

  return (
    <div
      ref={setNodeRef}
      style={{
        border: `2px dashed ${borderColor}`,
        borderRadius: '0.5rem',
        padding: '0.75rem',
        minHeight: '4rem',
        backgroundColor: bgColor,
        transition: 'all 0.2s',
      }}
      role="region"
      aria-label={`Ablagezone: ${zone.label}`}
      aria-live="polite"
    >
      <div
        style={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--ifm-color-emphasis-600)',
          marginBottom: '0.5rem',
        }}
      >
        {zone.label}
      </div>

      {placedItem && (
        <div
          style={{
            padding: '0.5rem 0.75rem',
            border: `2px solid ${borderColor}`,
            borderRadius: '0.375rem',
            backgroundColor: 'var(--ifm-background-color)',
            fontWeight: 500,
          }}
        >
          {placedItem.content}
        </div>
      )}

      {!placedItem && !feedbackState && (
        <div
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ifm-color-emphasis-400)',
            fontStyle: 'italic',
          }}
        >
          Element hierher ziehen…
        </div>
      )}

      {feedbackState && zone.feedback && (
        <div
          style={{
            marginTop: '0.5rem',
            padding: '0.5rem',
            fontSize: '0.8125rem',
            borderRadius: '0.375rem',
            backgroundColor:
              feedbackState === 'correct' ? '#d1fae5' : '#fee2e2',
            color: feedbackState === 'correct' ? '#065f46' : '#991b1b',
            lineHeight: 1.5,
          }}
        >
          {feedbackState === 'correct'
            ? `✓ ${zone.feedback.correct}`
            : `✗ ${zone.feedback.incorrect}`}
        </div>
      )}
    </div>
  );
}

/**
 * Innere Logik der Drag-and-Drop-Uebung.
 * Wird nur im Browser gerendert (kein SSR).
 */
function DragDropExerciseInner({
  items,
  zones,
  title,
  instruction,
  onComplete,
}: DragDropExerciseProps) {
  const {
    DndContext,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } = require('@dnd-kit/core');

  /** zoneId -> itemId */
  const [placements, setPlacements] = useState<Record<string, string>>({});
  /** zoneId -> 'correct' | 'incorrect' */
  const [feedbacks, setFeedbacks] = useState<
    Record<string, 'correct' | 'incorrect'>
  >({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = useCallback(
    (event: { active: { id: string }; over: { id: string } | null }) => {
      setActiveId(null);
      const { active, over } = event;
      if (!over) return;

      const itemId = active.id as string;
      const zoneId = over.id as string;
      const zone = zones.find((z) => z.id === zoneId);
      if (!zone) return;

      // Pruefen, ob Zone bereits korrekt belegt ist
      if (feedbacks[zoneId] === 'correct') return;

      const isCorrect = zone.correctItemIds.includes(itemId);

      if (isCorrect) {
        const newPlacements = { ...placements, [zoneId]: itemId };
        setPlacements(newPlacements);
        setFeedbacks((prev) => ({ ...prev, [zoneId]: 'correct' }));

        // Pruefen, ob alle Zonen korrekt belegt sind
        const allPlaced = zones.every(
          (z) =>
            newPlacements[z.id] &&
            z.correctItemIds.includes(newPlacements[z.id]),
        );
        if (allPlaced) {
          setCompleted(true);
          onComplete?.();
        }
      } else {
        // Falsche Zuordnung: kurzes visuelles Feedback, dann zuruecksetzen
        setFeedbacks((prev) => ({ ...prev, [zoneId]: 'incorrect' }));
        setTimeout(() => {
          setFeedbacks((prev) => {
            const next = { ...prev };
            if (next[zoneId] === 'incorrect') {
              delete next[zoneId];
            }
            return next;
          });
        }, 2000);
      }
    },
    [zones, placements, feedbacks, onComplete],
  );

  const handleReset = () => {
    setPlacements({});
    setFeedbacks({});
    setCompleted(false);
  };

  const placedItemIds = new Set(Object.values(placements));
  const activeItem = items.find((i) => i.id === activeId);
  const remainingItems = items.filter((i) => !placedItemIds.has(i.id));

  return (
    <div
      className="exercise-card"
      role="group"
      aria-label={title ?? 'Drag-and-Drop-Übung'}
    >
      {title && (
        <div
          style={{
            fontWeight: 600,
            fontSize: '1.05rem',
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </div>
      )}
      {instruction && (
        <div
          style={{
            fontSize: '0.9rem',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '1rem',
            lineHeight: 1.5,
          }}
        >
          {instruction}
        </div>
      )}

      <DndContext
        sensors={sensors}
        onDragStart={(e: { active: { id: string } }) =>
          setActiveId(e.active.id as string)
        }
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '1.5rem',
          }}
        >
          {/* Linke Spalte: ziehbare Elemente */}
          <div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--ifm-color-emphasis-600)',
              }}
            >
              Elemente
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {items.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  isPlaced={placedItemIds.has(item.id)}
                />
              ))}
              {remainingItems.length === 0 && !completed && (
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--ifm-color-emphasis-400)',
                    fontStyle: 'italic',
                    padding: '0.5rem',
                  }}
                >
                  Alle Elemente wurden zugeordnet.
                </div>
              )}
            </div>
          </div>

          {/* Rechte Spalte: Ablagezonen */}
          <div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--ifm-color-emphasis-600)',
              }}
            >
              Zuordnung
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {zones.map((zone) => (
                <DroppableZone
                  key={zone.id}
                  zone={zone}
                  placedItem={
                    placements[zone.id]
                      ? items.find((i) => i.id === placements[zone.id]) ?? null
                      : null
                  }
                  feedbackState={feedbacks[zone.id] ?? null}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Drag-Overlay: folgt dem Cursor beim Ziehen */}
        <DragOverlay dropAnimation={null}>
          {activeItem ? (
            <div
              style={{
                padding: '0.625rem 1rem',
                border: '2px solid var(--ifm-color-primary)',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--ifm-background-color)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                cursor: 'grabbing',
              }}
            >
              {activeItem.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Abschluss-Feedback & Reset */}
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        {completed && (
          <div
            style={{
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              color: '#065f46',
              backgroundColor: '#d1fae5',
              borderRadius: '0.375rem',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
            role="alert"
          >
            ✓ Alle Zuordnungen sind korrekt!
          </div>
        )}
        <button
          onClick={handleReset}
          className="button button--secondary"
          style={{ marginLeft: completed ? '0.5rem' : 0 }}
        >
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}

/**
 * Generische Drag-and-Drop-Uebung fuer Zuordnungsaufgaben.
 *
 * Eingebettet in BrowserOnly, damit Docusaurus SSR nicht
 * auf Browser-APIs (@dnd-kit) zugreift.
 *
 * @example
 * ```mdx
 * import { DragDropExercise } from '@site/src/components/exercises/DragDropExercise';
 *
 * <DragDropExercise
 *   title="Stilmittel zuordnen"
 *   items={[
 *     { id: 'a', content: 'Die Sonne lacht' },
 *     { id: 'b', content: 'Milch und Honig' },
 *   ]}
 *   zones={[
 *     { id: 'z1', label: 'Personifikation', correctItemIds: ['a'],
 *       feedback: { correct: 'Richtig!', incorrect: 'Nicht ganz.' } },
 *     { id: 'z2', label: 'Hendiadyoin', correctItemIds: ['b'],
 *       feedback: { correct: 'Genau!', incorrect: 'Versuche es nochmal.' } },
 *   ]}
 * />
 * ```
 */
function DragDropExerciseBrowser(props: DragDropExerciseProps) {
  return (
    <BrowserOnly
      fallback={
        <div className="exercise-card">Übung wird geladen…</div>
      }
    >
      {() => <DragDropExerciseInner {...props} />}
    </BrowserOnly>
  );
}

export const DragDropExercise = withErrorBoundary(DragDropExerciseBrowser, 'DragDropExercise');
