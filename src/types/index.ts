// === Stilmittel ===
export interface Stilmittel {
  id: string;
  name: string;
  definition: string;
  kategorie: 'wortfigur' | 'bildliches_mittel' | 'klangfigur' | 'satzfigur';
  beispiele: string[];
  wirkung: string;
  etymologie?: string;
}

// === Epochen ===
export interface Epoche {
  id: string;
  name: string;
  zeitraum: { von: number; bis: number };
  merkmale: string[];
  autoren: string[];
  schluesselwerke: string[];
  beschreibung: string;
  farbe: string;
}

// === Textauszüge ===
export interface Textauszug {
  id: string;
  titel: string;
  autor: string;
  erscheinungsjahr: number;
  gattung: 'epik' | 'lyrik' | 'dramatik' | 'sachtext';
  epoche: string;
  text: string;
  quelle: string;
  worterklarungen?: Record<string, string>;
}

// === Übungen ===
export type ExerciseType =
  | 'drag-drop'
  | 'multiple-choice'
  | 'lueckentext'
  | 'text-highlighting'
  | 'metrum-klopfer'
  | 'reimschema-quiz'
  | 'epochen-zuordnung'
  | 'figuren-zuordnung'
  | 'fehlersuche'
  | 'argument-builder'
  | 'timed-challenge'
  | 'schrittweise-analyse'
  | 'text-vergleich';

export interface Exercise<T extends ExerciseData = ExerciseData> {
  id: string;
  version: number;
  kapitel: string;
  type: ExerciseType;
  afb: 1 | 2 | 3;
  title: string;
  description: string;
  data: T;
}

// === Exercise Data Types ===
export type ExerciseData =
  | DragDropData
  | MultipleChoiceData
  | LueckentextData
  | TextHighlightingData
  | TimedChallengeData
  | MetrumKlopferData
  | ReimschemaQuizData
  | FehlerSucheData;

export interface DragDropItem {
  id: string;
  content: string;
  description?: string;
}

export interface DragDropZone {
  id: string;
  label: string;
  correctItemIds: string[];
  feedback?: {
    correct: string;
    incorrect: string;
  };
}

export interface DragDropData {
  items: DragDropItem[];
  zones: DragDropZone[];
  mode: 'zuordnung' | 'sortierung' | 'luecken';
}

export interface MultipleChoiceOption {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
}

export interface MultipleChoiceData {
  question: string;
  options: MultipleChoiceOption[];
  multiSelect: boolean;
}

export interface LueckentextLuecke {
  id: string;
  position: number;
  correctAnswers: string[];
  hint?: string;
}

export interface LueckentextData {
  text: string;
  luecken: LueckentextLuecke[];
}

export interface TextHighlightingAnnotation {
  start: number;
  end: number;
  label: string;
  category: string;
  explanation: string;
  color: string;
}

export interface TextHighlightingData {
  text: string;
  annotations: TextHighlightingAnnotation[];
  categories: { id: string; label: string; color: string }[];
}

export interface TimedChallengeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TimedChallengeData {
  questions: TimedChallengeQuestion[];
  timeLimit: number;
}

export interface MetrumSilbe {
  text: string;
  betont: boolean;
}

export interface MetrumKlopferData {
  verse: {
    id: string;
    text: string;
    silben: MetrumSilbe[];
    versfuss: string;
    wirkung: string;
  }[];
}

export interface ReimschemaVers {
  id: string;
  text: string;
  reimBuchstabe: string;
}

export interface ReimschemaQuizData {
  strophe: ReimschemaVers[];
  reimschemaName: string;
  erklaerung: string;
}

export interface FehlerSucheStelle {
  id: string;
  start: number;
  end: number;
  fehlerTyp: string;
  erklaerung: string;
  korrektur: string;
}

export interface FehlerSucheData {
  text: string;
  fehler: FehlerSucheStelle[];
}

// === Lernfortschritt ===
export interface Progress {
  modulesCompleted: string[];
  exerciseResults: Record<string, ExerciseResult>;
  badges: string[];
  lastVisited: string;
  streak: number;
}

export interface ExerciseResult {
  exerciseId: string;
  version: number;
  completed: boolean;
  score: number;
  maxScore: number;
  attempts: number;
  lastAttempt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (progress: Progress) => boolean;
}

// === Component Props ===
export interface FeedbackState {
  type: 'correct' | 'incorrect' | 'hint' | 'neutral';
  message: string;
}
