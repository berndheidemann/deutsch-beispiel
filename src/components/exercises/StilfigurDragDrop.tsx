import React from 'react';
import { DragDropExercise } from './DragDropExercise';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface StilfigurExercise {
  stilmittel: { id: string; name: string; definition: string };
  beispiel: { id: string; text: string; quelle?: string };
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

interface StilfigurDragDropProps {
  exercises: StilfigurExercise[];
  title?: string;
  onComplete?: () => void;
}

function StilfigurDragDropInner({ exercises, title = 'Stilmittel zuordnen', onComplete }: StilfigurDragDropProps) {
  const items = exercises.map(e => ({
    id: e.stilmittel.id,
    content: e.stilmittel.name,
    description: e.stilmittel.definition,
  }));

  const zones = exercises.map(e => ({
    id: e.beispiel.id,
    label: `„${e.beispiel.text}"${e.beispiel.quelle ? ` (${e.beispiel.quelle})` : ''}`,
    correctItemIds: [e.stilmittel.id],
    feedback: {
      correct: e.feedbackCorrect,
      incorrect: e.feedbackIncorrect,
    },
  }));

  return <DragDropExercise items={items} zones={zones} title={title} onComplete={onComplete} />;
}

export const StilfigurDragDrop = withErrorBoundary(StilfigurDragDropInner, 'StilfigurDragDrop');
