// Virtus · ServiceFinder.tsx
// Componente interattivo di orientamento ai servizi.
// NON fa diagnosi — funzione puramente orientativa.
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  finderSteps,
  finderResults,
  FINDER_DISCLAIMER,
} from "@/data/serviceFinder";

type HistoryEntry = { stepId: string; choiceId: string };

export default function ServiceFinder() {
  const [history, setHistory]         = useState<HistoryEntry[]>([]);
  const [currentStepId, setStep]      = useState("start");
  const [resultId, setResult]         = useState<string | null>(null);

  const step   = finderSteps[currentStepId];
  const result = resultId ? finderResults[resultId] : null;

  const choose = (choiceId: string, next: string) => {
    setHistory(h => [...h, { stepId: currentStepId, choiceId }]);
    if (next.startsWith("result:")) {
      setResult(next.replace("result:", ""));
    } else {
      setStep(next);
    }
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setStep(prev.stepId);
    setResult(null);
  };

  const reset = () => {
    setHistory([]);
    setStep("start");
    setResult(null);
  };

  // ── RESULT ────────────────────────────────────────────
  if (result) {
    return (
      <div className="finder-card">
        <div className="finder-disclaimer-box">{FINDER_DISCLAIMER}</div>
        <span className="finder-result-badge">{result.title}</span>
        <h3 className="finder-result-title">{result.subtitle}</h3>
        <p className="finder-result-desc">{result.description}</p>
        <div className="finder-ctas">
          {result.ctas.map((cta, i) =>
            cta.href.startsWith("http") ? (
              <a
                key={i}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${cta.primary ? "btn-red" : "btn-ghost-d"}`}
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={i}
                href={cta.href}
                className={`btn ${cta.primary ? "btn-red" : "btn-ghost-d"}`}
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
        <button className="finder-back" onClick={reset}>
          ← Ricomincia dall&apos;inizio
        </button>
      </div>
    );
  }

  // ── QUESTION ──────────────────────────────────────────
  const questionNum = history.length + 1;

  return (
    <div className="finder-card">
      <div className="finder-step-badge">Domanda {questionNum}</div>
      <h3 className="finder-question">{step.question}</h3>
      <div className="finder-choices">
        {step.choices.map((choice) => (
          <button
            key={choice.id}
            className="finder-choice"
            onClick={() => choose(choice.id, choice.next)}
          >
            {choice.label}
          </button>
        ))}
      </div>
      {history.length > 0 && (
        <button className="finder-back" onClick={goBack}>
          ← Domanda precedente
        </button>
      )}
      <p className="finder-note">{FINDER_DISCLAIMER}</p>
    </div>
  );
}
