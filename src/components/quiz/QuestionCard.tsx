import { QuizQuestion, MbtiLetter } from "@/types/mbti";

interface QuestionCardProps {
  question: QuizQuestion;
  isLeaving: boolean;
  onSelect: (letter: MbtiLetter) => void;
}

export default function QuestionCard({
  question,
  isLeaving,
  onSelect,
}: QuestionCardProps) {
  return (
    <div
      className={`flex flex-col gap-8 transition-all duration-300 ease-out ${
        isLeaving
          ? "-translate-y-3 opacity-0"
          : "animate-fade-in-up opacity-100"
      }`}
    >
      <div className="text-center">
        <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
          {question.dimensionLabel}
        </span>
        <h2 className="mt-5 text-xl font-bold leading-relaxed text-white sm:text-2xl">
          {question.question}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            disabled={isLeaving}
            onClick={() => onSelect(option.letter)}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left text-sm leading-relaxed text-slate-200 shadow-xl transition-all duration-300 hover:scale-105 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white active:scale-95 disabled:pointer-events-none sm:text-base"
          >
            <span className="mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
              {option.id}
            </span>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
