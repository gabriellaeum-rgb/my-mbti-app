"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <Link
        href="/quiz"
        className="flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-bold text-slate-200 shadow-xl transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-white/[0.08] active:scale-95"
      >
        테스트 다시 하기
      </Link>
      <button
        type="button"
        onClick={handleCopyLink}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/40 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 active:scale-95"
      >
        {copied ? "링크가 복사되었어요! ✅" : "결과 링크 복사하기"}
      </button>
    </div>
  );
}
