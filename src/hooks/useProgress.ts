import { useEffect } from 'react';
import { useProgressStore } from '../store/progressStore';

export function useProgress() {
  const store = useProgressStore();

  useEffect(() => {
    store.initializeFromStorage();
  }, []);

  const getExerciseResult = (exerciseId: string) => {
    return store.progress.exerciseResults[exerciseId] ?? null;
  };

  const isModuleCompleted = (moduleId: string) => {
    return store.progress.modulesCompleted.includes(moduleId);
  };

  const hasBadge = (badgeId: string) => {
    return store.progress.badges.includes(badgeId);
  };

  const getModuleProgress = (moduleId: string, exerciseIds: string[]) => {
    const completed = exerciseIds.filter(
      id => store.progress.exerciseResults[id]?.completed
    ).length;
    return { completed, total: exerciseIds.length };
  };

  return {
    progress: store.progress,
    completeModule: store.completeModule,
    saveExerciseResult: store.saveExerciseResult,
    addBadge: store.addBadge,
    setLastVisited: store.setLastVisited,
    resetProgress: store.resetProgress,
    getExerciseResult,
    isModuleCompleted,
    hasBadge,
    getModuleProgress,
  };
}
