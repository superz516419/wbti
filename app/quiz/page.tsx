"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { questions } from "@/lib/questions";
import { calculateResult } from "@/lib/scoring";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const total = questions.length;
  const progressPct = (currentQuestionIndex / total) * 100;

  function handleOptionClick(optionIndex: number) {
    if (selectedIndex !== null) return;

    setSelectedIndex(optionIndex);
    const newAnswers = [...answers, optionIndex];

    setTimeout(() => {
      if (currentQuestionIndex < total - 1) {
        setAnswers(newAnswers);
        setCurrentQuestionIndex((i) => i + 1);
        setSelectedIndex(null);
      } else {
        const resultId = calculateResult(newAnswers);
        router.push("/result?type=" + resultId);
      }
    }, 300);
  }

  return (
    <Layout>
      {/* Progress indicator */}
      <div className="pt-6 pb-4 shrink-0">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase">
            Question
          </span>
          <span className="text-sm font-black text-slate-700 tabular-nums">
            {currentQuestionIndex + 1}
            <span className="text-slate-400 font-normal"> / {total}</span>
          </span>
        </div>
        <div className="h-[3px] w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question + options — keyed by index so animation replays on change */}
      <div
        key={currentQuestionIndex}
        className="flex-1 flex flex-col justify-center gap-8 animate-[fadeUp_0.35s_ease-out_both]"
      >
        {/* Question label + text */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold text-red-500 tracking-[0.25em] uppercase">
            Q{String(currentQuestionIndex + 1).padStart(2, "0")}
          </p>
          <h2 className="text-[22px] font-black text-slate-800 leading-tight">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Option cards */}
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleOptionClick(idx)}
                disabled={selectedIndex !== null}
                className={[
                  "w-full text-left px-5 py-4 rounded-2xl border-2",
                  "flex items-start gap-3 cursor-pointer",
                  "transition-all duration-200",
                  isSelected
                    ? "border-red-500 bg-red-50 shadow-md shadow-red-500/10 scale-[0.98]"
                    : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md active:scale-[0.97] active:bg-slate-100",
                ].join(" ")}
              >
                {/* Radio indicator */}
                <span
                  className={[
                    "mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0",
                    "flex items-center justify-center",
                    "transition-all duration-200",
                    isSelected
                      ? "border-red-500 bg-red-500"
                      : "border-slate-300 bg-white",
                  ].join(" ")}
                >
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </span>

                {/* Option text */}
                <span
                  className={[
                    "text-[15px] font-semibold leading-snug",
                    isSelected ? "text-red-700" : "text-slate-700",
                  ].join(" ")}
                >
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-8 shrink-0" />
    </Layout>
  );
}
