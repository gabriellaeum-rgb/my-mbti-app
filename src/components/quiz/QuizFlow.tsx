"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateMbti } from "@/lib/mbti";
import { MBTI_RESULTS_TABLE, supabase } from "@/lib/supabaseClient";
import { MbtiLetter } from "@/types/mbti";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import LoadingScreen from "./LoadingScreen";

const TRANSITION_DELAY_MS = 300;
const MIN_LOADING_DELAY_MS = 1600;

export default function QuizFlow() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const answersRef = useRef<MbtiLetter[]>([]);

  const question = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const finishQuiz = useCallback(
    async (finalAnswers: MbtiLetter[]) => {
      const mbtiType = calculateMbti(finalAnswers);

      const savePromise = supabase.from(MBTI_RESULTS_TABLE).insert({
        mbti_type: mbtiType,
        answers: finalAnswers,
      });
      const minDelayPromise = new Promise((resolve) =>
        setTimeout(resolve, MIN_LOADING_DELAY_MS)
      );

      await Promise.all([savePromise, minDelayPromise]);
      router.push(`/result/${mbtiType}`);
    },
    [router]
  );

  const handleSelect = useCallback(
    (letter: MbtiLetter) => {
      if (isLeaving || isAnalyzing) return;
      setIsLeaving(true);

      setTimeout(() => {
        const nextAnswers = [...answersRef.current, letter];
        answersRef.current = nextAnswers;

        if (isLastQuestion) {
          setIsAnalyzing(true);
          finishQuiz(nextAnswers);
          return;
        }

        setQuestionIndex((prev) => prev + 1);
        setIsLeaving(false);
      }, TRANSITION_DELAY_MS);
    },
    [finishQuiz, isAnalyzing, isLastQuestion, isLeaving]
  );

  if (isAnalyzing) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col gap-10">
      <ProgressBar current={questionIndex + 1} total={questions.length} />
      <QuestionCard
        key={question.id}
        question={question}
        isLeaving={isLeaving}
        onSelect={handleSelect}
      />
    </div>
  );
}
