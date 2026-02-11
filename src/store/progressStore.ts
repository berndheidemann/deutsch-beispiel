import { create } from 'zustand';
import type { Progress, ExerciseResult } from '../types';

const STORAGE_KEY = 'deutsch-lk-progress';
const STORAGE_VERSION = 1;

interface StorageData {
  version: number;
  progress: Progress;
}

const defaultProgress: Progress = {
  modulesCompleted: [],
  exerciseResults: {},
  badges: [],
  lastVisited: '',
  streak: 0,
};

function loadProgress(): Progress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const data: StorageData = JSON.parse(raw);
    if (data.version !== STORAGE_VERSION) return defaultProgress;
    return data.progress;
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;
  try {
    const data: StorageData = { version: STORAGE_VERSION, progress };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // LocalStorage full or unavailable
  }
}

interface ProgressStore {
  progress: Progress;
  completeModule: (moduleId: string) => void;
  saveExerciseResult: (result: ExerciseResult) => void;
  addBadge: (badgeId: string) => void;
  setLastVisited: (path: string) => void;
  resetProgress: () => void;
  initializeFromStorage: () => void;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: defaultProgress,

  initializeFromStorage: () => {
    const progress = loadProgress();
    set({ progress });
  },

  completeModule: (moduleId: string) => {
    const { progress } = get();
    if (progress.modulesCompleted.includes(moduleId)) return;
    const updated = {
      ...progress,
      modulesCompleted: [...progress.modulesCompleted, moduleId],
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  saveExerciseResult: (result: ExerciseResult) => {
    const { progress } = get();
    const existing = progress.exerciseResults[result.exerciseId];
    // Only update if version matches or is newer
    if (existing && existing.version > result.version) return;
    const updated = {
      ...progress,
      exerciseResults: {
        ...progress.exerciseResults,
        [result.exerciseId]: result,
      },
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  addBadge: (badgeId: string) => {
    const { progress } = get();
    if (progress.badges.includes(badgeId)) return;
    const updated = {
      ...progress,
      badges: [...progress.badges, badgeId],
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  setLastVisited: (path: string) => {
    const { progress } = get();
    const updated = { ...progress, lastVisited: path };
    set({ progress: updated });
    saveProgress(updated);
  },

  resetProgress: () => {
    set({ progress: defaultProgress });
    saveProgress(defaultProgress);
  },
}));
