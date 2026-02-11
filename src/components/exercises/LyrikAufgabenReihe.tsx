import React, { useState, useEffect, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { withErrorBoundary } from '../common/withErrorBoundary';

// Exercise components
import { SilbenCounter } from './SilbenCounter';
import { MetrumKlopfer } from './MetrumKlopfer';
import { KadenzBestimmung } from './KadenzBestimmung';
import { ReimschemaQuiz } from './ReimschemaQuiz';
import { EnjambementFinder } from './EnjambementFinder';
import { StilfigurDragDrop } from './StilfigurDragDrop';
import { TextHighlighting } from './TextHighlighting';
import { VersAnalyse } from './VersAnalyse';
import { TimedChallenge } from './TimedChallenge';
import { SchrittweiseAnalyse } from '../interactive/SchrittweiseAnalyse';

// Exercise data
import {
  silbenCounterVerse,
  metrumKlopferVerseReihe,
  kadenzVerse,
  reimschemaStrophen,
  enjambementDaten,
  strophenformExercises,
  klangfigurenDaten,
  bildspracheDaten,
  versAnalyseDaten,
  lyrikSchnelltrainerFragen,
  gedichtAnalyseWillkommen,
  gedichtVergleichSchritte,
} from '@site/src/data/exercises/lyrikAufgabenreihe';

// ============================================================
// Aufgaben-Definition
// ============================================================

interface Aufgabe {
  id: string;
  nummer: number;
  titel: string;
  beschreibung: string;
  afb: 1 | 2 | 3;
  kategorie: 'formal' | 'inhaltlich' | 'übergreifend';
}

const AUFGABEN: Aufgabe[] = [
  {
    id: 'silben-zaehlen',
    nummer: 1,
    titel: 'Silben zählen',
    beschreibung: 'Zähle die Silben in berühmten Versen — die Grundlage jeder metrischen Analyse.',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'versfuesse',
    nummer: 2,
    titel: 'Versfüße bestimmen',
    beschreibung: 'Markiere betonte und unbetonte Silben und erkenne das Metrum.',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'kadenz',
    nummer: 3,
    titel: 'Kadenz bestimmen',
    beschreibung: 'Endet der Vers männlich (stumpf) oder weiblich (klingend)?',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'reimschema',
    nummer: 4,
    titel: 'Reimschema erkennen',
    beschreibung: 'Ordne reimende Verse zu und bestimme das Reimschema der Strophe.',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'enjambement',
    nummer: 5,
    titel: 'Enjambement erkennen',
    beschreibung: 'Finde die Zeilensprünge, an denen ein Satz über das Versende hinausgeht.',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'strophenform',
    nummer: 6,
    titel: 'Strophenformen zuordnen',
    beschreibung: 'Ordne Strophenformen (Sonett, Ode, Volkslied …) ihren Merkmalen zu.',
    afb: 1,
    kategorie: 'formal',
  },
  {
    id: 'klangfiguren',
    nummer: 7,
    titel: 'Klangfiguren erkennen',
    beschreibung: 'Markiere Alliterationen, Assonanzen und Onomatopoesie im Text.',
    afb: 2,
    kategorie: 'formal',
  },
  {
    id: 'bildsprache',
    nummer: 8,
    titel: 'Bildsprache markieren',
    beschreibung: 'Finde Metaphern und Personifikationen in einer Strophe.',
    afb: 2,
    kategorie: 'inhaltlich',
  },
  {
    id: 'vers-analyse',
    nummer: 9,
    titel: 'Formale Gesamtanalyse',
    beschreibung: 'Analysiere eine Strophe vollständig: Metrum, Kadenz, Reimschema, Strophenform.',
    afb: 2,
    kategorie: 'formal',
  },
  {
    id: 'schnelltrainer',
    nummer: 10,
    titel: 'Lyrik-Schnelltrainer',
    beschreibung: '15 Fragen zu formalen Begriffen — gegen die Uhr!',
    afb: 1,
    kategorie: 'übergreifend',
  },
  {
    id: 'gedichtanalyse',
    nummer: 11,
    titel: 'Schrittweise Gedichtanalyse',
    beschreibung: 'Geführte Analyse von Goethes „Willkommen und Abschied" in 5 Schritten.',
    afb: 2,
    kategorie: 'übergreifend',
  },
  {
    id: 'gedichtvergleich',
    nummer: 12,
    titel: 'Gedichtvergleich',
    beschreibung: 'Vergleiche Goethe (Sturm und Drang) mit Eichendorff (Romantik) — die Königsdisziplin.',
    afb: 3,
    kategorie: 'übergreifend',
  },
];

// ============================================================
// Storage
// ============================================================

const STORAGE_KEY = 'lyrik-aufgabenreihe-v1';

function loadCompleted(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCompleted(ids: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore
  }
}

// ============================================================
// AFB Badge
// ============================================================

function AfbBadge({ afb }: { afb: 1 | 2 | 3 }) {
  const colors = {
    1: { bg: '#dbeafe', color: '#1e40af', border: '#93c5fd' },
    2: { bg: '#fef3c7', color: '#92400e', border: '#fcd34d' },
    3: { bg: '#fce7f3', color: '#9d174d', border: '#f9a8d4' },
  };
  const c = colors[afb];
  return (
    <span style={{
      padding: '0.125rem 0.5rem',
      borderRadius: '1rem',
      fontSize: '0.6875rem',
      fontWeight: 700,
      backgroundColor: c.bg,
      color: c.color,
      border: `1px solid ${c.border}`,
      whiteSpace: 'nowrap',
    }}>
      AFB {afb === 1 ? 'I' : afb === 2 ? 'II' : 'III'}
    </span>
  );
}

// ============================================================
// Category Badge
// ============================================================

function KategorieBadge({ kategorie }: { kategorie: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    formal: { bg: '#ede9fe', color: '#5b21b6' },
    inhaltlich: { bg: '#ecfdf5', color: '#065f46' },
    übergreifend: { bg: '#fff7ed', color: '#9a3412' },
  };
  const c = colors[kategorie] || colors.formal;
  return (
    <span style={{
      padding: '0.125rem 0.5rem',
      borderRadius: '1rem',
      fontSize: '0.6875rem',
      fontWeight: 600,
      backgroundColor: c.bg,
      color: c.color,
      whiteSpace: 'nowrap',
    }}>
      {kategorie}
    </span>
  );
}

// ============================================================
// Exercise Renderer
// ============================================================

function renderExercise(aufgabe: Aufgabe, onComplete: () => void): React.ReactNode {
  switch (aufgabe.id) {
    case 'silben-zaehlen':
      return <SilbenCounter verse={silbenCounterVerse} onComplete={onComplete} />;

    case 'versfuesse':
      return <MetrumKlopfer verse={metrumKlopferVerseReihe} title="Versfüße bestimmen" onComplete={onComplete} />;

    case 'kadenz':
      return <KadenzBestimmung verse={kadenzVerse} onComplete={onComplete} />;

    case 'reimschema':
      return (
        <ReimschemaQuizSeries
          strophen={reimschemaStrophen}
          onComplete={onComplete}
        />
      );

    case 'enjambement':
      return (
        <EnjambementFinder
          titel={enjambementDaten.titel}
          autor={enjambementDaten.autor}
          verse={enjambementDaten.verse}
          erklaerung={enjambementDaten.erklaerung}
          onComplete={onComplete}
        />
      );

    case 'strophenform':
      return (
        <StilfigurDragDrop
          exercises={strophenformExercises.map(s => ({
            stilmittel: { id: `sf-${s.stilmittel.toLowerCase().replace(/\s+/g, '-')}`, name: s.stilmittel, definition: '' },
            beispiel: { id: `sf-b-${s.stilmittel.toLowerCase().replace(/\s+/g, '-')}`, text: s.beispiel },
            feedbackCorrect: `Richtig! ${s.stilmittel} erkannt.`,
            feedbackIncorrect: 'Diese Zuordnung stimmt nicht. Versuche es nochmal.',
          }))}
          title="Strophenformen zuordnen"
          onComplete={onComplete}
        />
      );

    case 'klangfiguren':
      return (
        <TextHighlighting
          text={klangfigurenDaten.text}
          targets={klangfigurenDaten.targets}
          categories={klangfigurenDaten.categories}
          title="Klangfiguren erkennen"
          onComplete={onComplete}
        />
      );

    case 'bildsprache':
      return (
        <TextHighlighting
          text={bildspracheDaten.text}
          targets={bildspracheDaten.targets}
          categories={bildspracheDaten.categories}
          title="Bildsprache markieren"
          onComplete={onComplete}
        />
      );

    case 'vers-analyse':
      return (
        <VersAnalyse
          strophe={versAnalyseDaten.strophe}
          gedichtTitel={versAnalyseDaten.gedichtTitel}
          autor={versAnalyseDaten.autor}
          correctMetrum={versAnalyseDaten.correctMetrum}
          metrumOptionen={versAnalyseDaten.metrumOptionen}
          correctStrophenform={versAnalyseDaten.correctStrophenform}
          strophenformOptionen={versAnalyseDaten.strophenformOptionen}
          erklaerung={versAnalyseDaten.erklaerung}
          onComplete={onComplete}
        />
      );

    case 'schnelltrainer':
      return (
        <TimedChallenge
          questions={lyrikSchnelltrainerFragen}
          timeLimit={120}
          title="Lyrik-Schnelltrainer"
          onComplete={(score, total) => {
            if (score >= Math.ceil(total * 0.7)) onComplete();
          }}
        />
      );

    case 'gedichtanalyse':
      return (
        <SchrittweiseAnalyse
          titel={'Gedichtanalyse: \u201EWillkommen und Abschied\u201C'}
          schritte={gedichtAnalyseWillkommen}
          onComplete={onComplete}
        />
      );

    case 'gedichtvergleich':
      return (
        <SchrittweiseAnalyse
          titel="Gedichtvergleich: Sturm und Drang vs. Romantik"
          schritte={gedichtVergleichSchritte}
          onComplete={onComplete}
        />
      );

    default:
      return <div>Aufgabe nicht gefunden.</div>;
  }
}

// ============================================================
// ReimschemaQuiz Series (multiple strophes)
// ============================================================

function ReimschemaQuizSeries({
  strophen,
  onComplete,
}: {
  strophen: typeof reimschemaStrophen;
  onComplete: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedStrophen, setCompletedStrophen] = useState<Set<number>>(new Set());

  const handleStropheComplete = useCallback(() => {
    const next = new Set([...completedStrophen, currentIndex]);
    setCompletedStrophen(next);
    if (next.size === strophen.length) {
      onComplete();
    }
  }, [currentIndex, completedStrophen, strophen.length, onComplete]);

  const current = strophen[currentIndex];

  return (
    <div>
      <div style={{
        fontSize: '0.875rem',
        color: 'var(--ifm-color-emphasis-500)',
        marginBottom: '0.5rem',
      }}>
        Strophe {currentIndex + 1} von {strophen.length}
        {completedStrophen.size > 0 && (
          <span style={{ marginLeft: '0.5rem', color: '#059669' }}>
            ({completedStrophen.size} geschafft)
          </span>
        )}
      </div>
      <ReimschemaQuiz
        key={currentIndex}
        strophe={current.strophe}
        reimschemaName={current.reimschemaName}
        erklaerung={current.erklaerung}
        title="Reimschema bestimmen"
        onComplete={handleStropheComplete}
      />
      {completedStrophen.has(currentIndex) && currentIndex < strophen.length - 1 && (
        <div style={{ marginTop: '0.75rem' }}>
          <button
            onClick={() => setCurrentIndex(prev => prev + 1)}
            className="button button--primary"
          >
            Nächste Strophe
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Main Component (inner — browser only)
// ============================================================

function LyrikAufgabenReiheInner() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [justCompleted, setJustCompleted] = useState<string | null>(null);

  useEffect(() => {
    setCompletedIds(loadCompleted());
  }, []);

  const markCompleted = useCallback((id: string) => {
    setCompletedIds(prev => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      saveCompleted(next);
      return next;
    });
    setJustCompleted(id);
  }, []);

  const isCompleted = (id: string) => completedIds.includes(id);
  const isUnlocked = (index: number) => index === 0 || isCompleted(AUFGABEN[index - 1].id);

  const completedCount = completedIds.length;
  const totalCount = AUFGABEN.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setCompletedIds([]);
    setActiveId(null);
    setJustCompleted(null);
  };

  return (
    <div>
      {/* Progress Header */}
      <div style={{
        padding: '1.25rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        marginBottom: '2rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Lyrik-Aufgabenreihe
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>
              {completedCount} von {totalCount} Aufgaben abgeschlossen
            </div>
          </div>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: completedCount === totalCount ? '#059669' : 'var(--ifm-color-primary)',
          }}>
            {Math.round(progressPercent)}%
          </div>
        </div>
        <div style={{
          height: '0.5rem',
          borderRadius: '0.25rem',
          backgroundColor: 'var(--ifm-color-emphasis-200)',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: completedCount === totalCount ? '#059669' : 'var(--ifm-color-primary)',
            borderRadius: '0.25rem',
            transition: 'width 0.5s ease',
          }} />
        </div>
        {completedCount === totalCount && (
          <div style={{
            marginTop: '0.75rem',
            padding: '0.625rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            fontWeight: 600,
            fontSize: '0.9375rem',
            textAlign: 'center',
          }}>
            Alle Aufgaben abgeschlossen! Du hast die Lyrik-Aufgabenreihe gemeistert.
          </div>
        )}
        {completedCount > 0 && completedCount < totalCount && (
          <div style={{ marginTop: '0.5rem', textAlign: 'right' }}>
            <button
              onClick={handleReset}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--ifm-color-emphasis-500)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Fortschritt zurücksetzen
            </button>
          </div>
        )}
      </div>

      {/* Station List */}
      <div style={{ position: 'relative' }}>
        {/* Vertical connector line */}
        <div style={{
          position: 'absolute',
          left: '1.4375rem',
          top: '1.5rem',
          bottom: '1.5rem',
          width: '3px',
          backgroundColor: 'var(--ifm-color-emphasis-200)',
          zIndex: 0,
        }} />

        {AUFGABEN.map((aufgabe, index) => {
          const completed = isCompleted(aufgabe.id);
          const unlocked = isUnlocked(index);
          const isActive = activeId === aufgabe.id;
          const wasJustCompleted = justCompleted === aufgabe.id;

          return (
            <div key={aufgabe.id} style={{ position: 'relative', marginBottom: '0.5rem' }}>
              {/* Station Header */}
              <button
                onClick={() => {
                  if (!unlocked) return;
                  setActiveId(isActive ? null : aufgabe.id);
                  setJustCompleted(null);
                }}
                disabled={!unlocked}
                aria-expanded={isActive}
                aria-label={`Aufgabe ${aufgabe.nummer}: ${aufgabe.titel}${completed ? ' (abgeschlossen)' : !unlocked ? ' (gesperrt)' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: `2px solid ${
                    isActive ? 'var(--ifm-color-primary)'
                    : completed ? '#059669'
                    : unlocked ? 'var(--ifm-color-emphasis-300)'
                    : 'var(--ifm-color-emphasis-200)'
                  }`,
                  borderRadius: '0.75rem',
                  backgroundColor: isActive
                    ? 'var(--ifm-color-primary-lightest, #eff6ff)'
                    : completed ? '#f0fdf4'
                    : 'var(--ifm-background-color)',
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  opacity: unlocked ? 1 : 0.55,
                  textAlign: 'left',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.2s',
                }}
              >
                {/* Circle indicator */}
                <div style={{
                  width: '2.875rem',
                  height: '2.875rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: completed ? '1.25rem' : '1rem',
                  backgroundColor: completed ? '#059669' : unlocked ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)',
                  color: '#fff',
                  transition: 'all 0.3s',
                }}>
                  {completed ? '\u2713' : !unlocked ? '\uD83D\uDD12' : aufgabe.nummer}
                </div>

                {/* Text content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>
                      {aufgabe.titel}
                    </span>
                    <AfbBadge afb={aufgabe.afb} />
                    <KategorieBadge kategorie={aufgabe.kategorie} />
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: 'var(--ifm-color-emphasis-600)',
                    marginTop: '0.125rem',
                  }}>
                    {aufgabe.beschreibung}
                  </div>
                </div>

                {/* Expand arrow */}
                {unlocked && (
                  <span style={{
                    fontSize: '1.25rem',
                    color: 'var(--ifm-color-emphasis-400)',
                    flexShrink: 0,
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}>
                    &#9662;
                  </span>
                )}
              </button>

              {/* Exercise content (expanded) */}
              {isActive && unlocked && (
                <div style={{
                  marginTop: '0.5rem',
                  marginLeft: '1.5rem',
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  backgroundColor: 'var(--ifm-background-color)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {/* Success message for just-completed */}
                  {wasJustCompleted && (
                    <div style={{
                      marginBottom: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      color: '#065f46',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                    role="alert"
                    >
                      Aufgabe {aufgabe.nummer} abgeschlossen!
                      {index < AUFGABEN.length - 1 && ' Die nächste Aufgabe ist jetzt freigeschaltet.'}
                    </div>
                  )}

                  {!completed ? (
                    renderExercise(aufgabe, () => markCompleted(aufgabe.id))
                  ) : (
                    <div>
                      <div style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        color: '#065f46',
                        marginBottom: '1rem',
                        fontWeight: 500,
                      }}>
                        Du hast diese Aufgabe bereits abgeschlossen. Du kannst sie erneut bearbeiten:
                      </div>
                      {renderExercise(aufgabe, () => {})}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// Browser-Only Wrapper
// ============================================================

function LyrikAufgabenReiheBrowser() {
  return (
    <BrowserOnly fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Aufgabenreihe wird geladen…</div>}>
      {() => <LyrikAufgabenReiheInner />}
    </BrowserOnly>
  );
}

export const LyrikAufgabenReihe = withErrorBoundary(LyrikAufgabenReiheBrowser, 'LyrikAufgabenReihe');
