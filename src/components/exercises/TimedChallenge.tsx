import React, { useState, useEffect, useCallback, useRef } from 'react';
import { withErrorBoundary } from '../common/withErrorBoundary';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface TimedChallengeProps {
  questions: Question[];
  timeLimit: number;
  title?: string;
  onComplete?: (score: number, total: number) => void;
}

function TimedChallengeInner({ questions, timeLimit, title = 'Schnelltrainer', onComplete }: TimedChallengeProps) {
  const [state, setState] = useState<'ready' | 'running' | 'finished'>('ready');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number; correct: boolean }[]>([]);
  const [lastFeedback, setLastFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (state !== 'running') return;
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [state]);

  useEffect(() => {
    if (state === 'finished') {
      if (timerRef.current) clearInterval(timerRef.current);
      onComplete?.(score, questions.length);
    }
  }, [state, score, questions.length, onComplete]);

  const start = () => {
    setState('running');
    setCurrentIndex(0);
    setTimeLeft(timeLimit);
    setScore(0);
    setAnswers([]);
    setLastFeedback(null);
  };

  const selectAnswer = useCallback((index: number) => {
    if (state !== 'running' || lastFeedback) return;
    const q = questions[currentIndex];
    const correct = index === q.correctIndex;
    if (correct) setScore(prev => prev + 1);

    setAnswers(prev => [...prev, { questionId: q.id, selectedIndex: index, correct }]);
    setLastFeedback({ correct, explanation: q.explanation });

    setTimeout(() => {
      setLastFeedback(null);
      if (currentIndex + 1 >= questions.length) {
        setState('finished');
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 1200);
  }, [state, currentIndex, questions, lastFeedback]);

  const q = questions[currentIndex];
  const percent = timeLimit > 0 ? (timeLeft / timeLimit) * 100 : 0;
  const timerColor = timeLeft > timeLimit * 0.3 ? '#059669' : timeLeft > timeLimit * 0.1 ? '#f59e0b' : '#ef4444';

  if (state === 'ready') {
    return (
      <div className="exercise-card" style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</div>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>{questions.length} Fragen in {timeLimit} Sekunden</p>
        <button onClick={start} className="button button--primary button--lg">Start</button>
      </div>
    );
  }

  if (state === 'finished') {
    const wrong = answers.filter(a => !a.correct);
    return (
      <div className="exercise-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: score >= questions.length * 0.7 ? '#059669' : '#f59e0b' }}>
            {score} / {questions.length}
          </div>
          <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
            {score === questions.length ? 'Perfekt!' : score >= questions.length * 0.7 ? 'Gut gemacht!' : 'Weiter üben!'}
          </p>
        </div>
        {wrong.length > 0 && (
          <div>
            <div style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Fehler im Detail:</div>
            {wrong.map((a, i) => {
              const question = questions.find(q => q.id === a.questionId)!;
              return (
                <div key={i} style={{ padding: '0.75rem', backgroundColor: '#fef2f2', borderRadius: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <div style={{ fontWeight: 600 }}>{question.question}</div>
                  <div style={{ color: '#ef4444' }}>Deine Antwort: {question.options[a.selectedIndex]}</div>
                  <div style={{ color: '#059669' }}>Richtig: {question.options[question.correctIndex]}</div>
                  <div style={{ marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)' }}>{question.explanation}</div>
                </div>
              );
            })}
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={start} className="button button--primary">Nochmal spielen</button>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>Frage {currentIndex + 1}/{questions.length}</span>
        <span style={{ fontWeight: 700, color: timerColor, fontSize: '1.125rem' }}>{timeLeft}s</span>
      </div>

      <div style={{ height: '0.375rem', borderRadius: '0.1875rem', backgroundColor: 'var(--ifm-color-emphasis-200)', marginBottom: '1rem', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${percent}%`, backgroundColor: timerColor, transition: 'width 1s linear, background-color 0.3s' }} />
      </div>

      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1rem' }}>{q.question}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {q.options.map((opt, i) => {
          let bg = 'transparent';
          let border = 'var(--ifm-color-emphasis-300)';
          if (lastFeedback) {
            if (i === q.correctIndex) { bg = '#ecfdf5'; border = '#059669'; }
            else if (answers[answers.length - 1]?.selectedIndex === i && !answers[answers.length - 1]?.correct) { bg = '#fef2f2'; border = '#ef4444'; }
          }
          return (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              disabled={!!lastFeedback}
              style={{
                padding: '0.625rem 1rem',
                border: `2px solid ${border}`,
                borderRadius: '0.5rem',
                backgroundColor: bg,
                textAlign: 'left',
                cursor: lastFeedback ? 'default' : 'pointer',
                fontSize: '0.9375rem',
                transition: 'all 0.15s',
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {lastFeedback && (
        <div
          role="alert"
          style={{
            marginTop: '0.75rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.375rem',
            backgroundColor: lastFeedback.correct ? '#ecfdf5' : '#fef2f2',
            color: lastFeedback.correct ? '#065f46' : '#991b1b',
            fontSize: '0.875rem',
          }}
        >
          {lastFeedback.correct ? '✓ Richtig!' : '✗ Falsch.'} {lastFeedback.explanation}
        </div>
      )}

      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-500)' }}>
        Punkte: {score}
      </div>
    </div>
  );
}

export const TimedChallenge = withErrorBoundary(TimedChallengeInner, 'TimedChallenge');
