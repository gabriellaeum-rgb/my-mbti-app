const STEPS = [
  "응답을 분석하고 있어요",
  "MBTI 유형을 계산하고 있어요",
  "딱 맞는 IT 부캐를 찾고 있어요",
];

export default function LoadingScreen() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center animate-fade-in-up">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/30" />
        <span className="absolute inset-2 animate-pulse-slow rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-70 blur-md" />
        <span className="relative text-4xl">🧬</span>
      </div>
      <div>
        <p className="text-lg font-bold text-white">
          당신의 IT 부캐를 분석하고 있어요...
        </p>
        <ul className="mt-3 space-y-1 text-sm text-slate-400">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.25}s`, animationFillMode: "both" }}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
