import { Persona } from "@/types/mbti";
import ShareButtons from "./ShareButtons";

interface ResultCardProps {
  persona: Persona;
}

export default function ResultCard({ persona }: ResultCardProps) {
  return (
    <div className="glass-card w-full max-w-md animate-fade-in-up overflow-hidden shadow-glow">
      <div
        className={`flex flex-col items-center gap-3 bg-gradient-to-br ${persona.gradient} px-8 py-10 text-center`}
      >
        <span className="text-6xl drop-shadow-lg">{persona.emoji}</span>
        <p className="text-xs font-semibold tracking-[0.3em] text-white/80">
          당신의 IT 부캐는
        </p>
        <h1 className="text-2xl font-black text-white sm:text-3xl">
          {persona.title}
        </h1>
        <span className="rounded-full bg-black/25 px-4 py-1 text-sm font-bold tracking-widest text-white">
          {persona.code}
        </span>
      </div>

      <div className="flex flex-col gap-7 px-6 py-8 sm:px-8">
        <p className="text-center text-sm font-medium italic leading-relaxed text-slate-300">
          &ldquo;{persona.tagline}&rdquo;
        </p>

        <section>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-300">
            일상 속 이런 모습이에요
          </h2>
          <ul className="space-y-2.5">
            {persona.traits.map((trait) => (
              <li
                key={trait}
                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm leading-relaxed text-slate-200"
              >
                <span className="mt-0.5 text-cyan-300">▸</span>
                {trait}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <p className="mb-1 text-xs font-bold text-emerald-300">
              💚 찰떡궁합 파트너
            </p>
            <p className="text-sm font-bold text-white">
              {persona.bestMatch.code} · {persona.bestMatch.title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
              {persona.bestMatch.reason}
            </p>
          </div>
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-4">
            <p className="mb-1 text-xs font-bold text-rose-300">
              ⚡ 긴장되는 케미
            </p>
            <p className="text-sm font-bold text-white">
              {persona.worstMatch.code} · {persona.worstMatch.title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
              {persona.worstMatch.reason}
            </p>
          </div>
        </section>

        <ShareButtons />
      </div>
    </div>
  );
}
