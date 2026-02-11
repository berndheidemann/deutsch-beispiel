import { useState, useCallback } from 'react';
import { useProgressStore } from '../store/progressStore';
import type { ExerciseResult, FeedbackState } from '../types';

interface UseExerciseOptions {
  exerciseId: string;
  version: number;
  maxScore: number;
}

export function useExercise({ exerciseId, version, maxScore }: UseExerciseOptions) {
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const saveExerciseResult = useProgressStore(s => s.saveExerciseResult);

  const addScore = useCallback((points: number) => {
    setScore(prev => Math.min(prev + points, maxScore));
  }, [maxScore]);

  const showFeedback = useCallback((fb: FeedbackState) => {
    setFeedback(fb);
  }, []);

  const clearFeedback = useCallback(() => {
    setFeedback(null);
  }, []);

  const incrementAttempts = useCallback(() => {
    setAttempts(prev => prev + 1);
  }, []);

  const complete = useCallback(() => {
    setCompleted(true);
    const result: ExerciseResult = {
      exerciseId,
      version,
      completed: true,
      score,
      maxScore,
      attempts: attempts + 1,
      lastAttempt: new Date().toISOString(),
    };
    saveExerciseResult(result);
  }, [exerciseId, version, score, maxScore, attempts, saveExerciseResult]);

  const reset = useCallback(() => {
    setScore(0);
    setCompleted(false);
    setAttempts(0);
    setFeedback(null);
  }, []);

  return {
    score,
    completed,
    attempts,
    feedback,
    addScore,
    showFeedback,
    clearFeedback,
    incrementAttempts,
    complete,
    reset,
  };
}
