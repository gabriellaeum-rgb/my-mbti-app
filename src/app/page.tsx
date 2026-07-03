import Link from "next/link";
import ParticipantBanner from "@/components/home/ParticipantBanner";

const DIMENSION_BADGES = [
  { pair: "E · I", label: "에너지의 방향" },
  { pair: "S · N", label: "정보 인식 방식" },
  { pair: "T · F", label: "판단과 결정" },
  { pair: "J · P", label: "이행 양식" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:py-24">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="glass-card flex flex-col items-center gap-6 rounded-2xl p-8 text-center shadow-glow sm:p-10">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            MY IT ALTER-EGO
          </span>

          <h1 className="text-2xl font-black leading-snug text-white sm:text-3xl">
            출근길 내 모습으로 알아보는
            <br />
            <span className="text-gradient">&apos;IT 부캐&apos;</span> 테스트
          </h1>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는
            <br className="hidden sm:block" />
            IT 직무 페르소나는?
          </p>

          <ParticipantBanner />

          <div className="grid w-full grid-cols-4 gap-2 pt-2">
            {DIMENSION_BADGES.map((badge) => (
              <div
                key={badge.pair}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-1.5 py-3 text-center"
              >
                <p className="text-sm font-bold text-indigo-300">{badge.pair}</p>
                <p className="mt-1 text-[10px] leading-tight text-slate-400">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/quiz"
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-indigo-900/40 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 active:scale-95"
          >
            내 IT 부캐 확인하러 가기
            <span className="inline-block animate-bounce-x transition-transform group-hover:translate-x-1">
              ➔
            </span>
          </Link>

          <p className="text-xs text-slate-500">
            8개의 질문 · 약 1분 소요 · 16가지 IT 직장인 페르소나
          </p>
        </div>
      </div>
    </main>
  );
}
